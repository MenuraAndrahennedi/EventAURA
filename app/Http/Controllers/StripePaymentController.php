<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Models\StripePayment;
use App\Models\Event;
use Stripe\Stripe;
use Stripe\Checkout\Session;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use App\Models\Ticket;
use Illuminate\Support\Facades\Mail;
use App\Mail\TicketEmail;






class StripePaymentController extends Controller
{
    public function createSession(Request $request)
{
    try{
    // Log incoming request for debugging
    \Log::info('Payment request data:', $request->all());
    
    \Stripe\Stripe::setApiKey(config('services.stripe.secret'));

   
      // Ensure the guest identifier is retrieved in the same way as in getCart
      if (auth()->check()) {
        $guestId = null; // Authenticated users don't need a guest ID
    } else {
        // $guestId = "guest_" . Session::get('guest_identifier', Str::uuid()->toString());
        // Session::put('guest_identifier', str_replace("guest_", "", $guestId)); // Ensure consistency
        $guestId = \Illuminate\Support\Facades\Session::get('guest_identifier', (string) Str::uuid());
\Illuminate\Support\Facades\Session::put('guest_identifier', $guestId);

    }
    $customerId = auth()->check() ? auth()->id() : null;
    $eventId = $request->event_id; // Get event_id from the request

    \Log::info("Guest ID in createSession: " . $guestId);


     // **Store cart details in session before redirecting to Stripe**
     \Session::put('cart', $request->cart);
     \Log::info('Cart stored in session:', ['cart' => \Session::get('cart')]);
    
     $user = auth()->user();

       // For registered users
       if ($user) {
        $customerData = [
            'name' => $user->name,
            'email' => $user->email,
            'phone' => $user->telephone,
            
        ];
    } 
    // For guests
    else {
        $customerData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|string|max:20',
            
        ]);
    }
    // Store Payment in Database
    $payment = StripePayment::create([
        'customer_id'   => $user ? $user->id : null,
        'guest_id'      => $guestId,
        'guest_name'    => $customerData['name'],
        'guest_phone'   => $customerData['phone'],
        'guest_email'   => $customerData['email'],
        
        'amount'        => $request->amount, 
        'currency'      => 'LKR',
        'status'        => 'Pending',
        'event_id'      => $eventId, // Store the event_id in the payment record
    ]);

    // Create Stripe Checkout Session
    $session = \Stripe\Checkout\Session::create([
        'payment_method_types' => ['card'],
        'line_items' => [[
            'price_data' => [
                'currency' => 'LKR',
                'product_data' => [
                    'name' => 'Event Tickets',
                ],
                'unit_amount' => $request->amount*100,
            ],
            'quantity' => 1,
        ]],
        'mode' => 'payment',
        'success_url' => route('payment.success') . '?session_id={CHECKOUT_SESSION_ID}',
        'cancel_url' => route('payment.cancel'),
        'metadata' => [
            'payment_id' => $payment->id,
            'guest_id'   => $guestId,
            'event_id'   => $eventId,
        ]
    ]);

    $payment->update(['stripe_session_id' => $session->id]);

    //   //Store stripeSessionId in session
    //   session(['stripe_session_id' => $session->id]);
    //   session()->save(); // Force save session

    //   \Log::info('Stored stripe_session_id:', ['stripe_session_id' => session('stripe_session_id')]);

    return response()->json(['id' => $session->id]);
}catch (\Exception $e) {
    \Log::error("Stripe Payment Error: " . $e->getMessage());
    return response()->json(['error' => $e->getMessage()], 500);
}
}

public function success(Request $request)
{
    $sessionId = $request->query('session_id');

    \Log::info("Session ID: " . $sessionId);
    if (!$sessionId) {
        return Inertia::render('PaymentGate/PaymentGate', [
            'error' => 'Invalid payment session.'
        ]);
    }

    $payment = StripePayment::with('customer')
    ->where('stripe_session_id', $sessionId)->first();

   
    if (!$payment) {
        return Inertia::render('PaymentGate/PaymentGate', [
            'error' => 'Payment record not found.'
        ]);
    }

    

    \Log::info("Payment Record Found: ", [$payment]);
    \Log::info("Updating payment status to 'Completed' for Payment ID: " . $payment->id);
    // Update payment status
     $payment->update(['status' => 'Completed']);

       // Determine the correct identifier for cache
    if ($payment->customer_id) {
        $identifier = "user_{$payment->customer_id}";
    } else {
        $identifier = "guest_{$payment->guest_id}";
    }

     // Retrieve locked tickets from cache
     $lockKey = "ticket_lock_{$identifier}_{$payment->event_id}";
     $lockedTickets = Cache::get($lockKey, []);
   

    if (!$lockedTickets) {
        \Log::error("No locked tickets found for user:{$identifier} , event: {$payment->event_id}");
        return Inertia::render('PaymentGate/PaymentGate', [
            'error' => 'Your ticket reservation expired before payment.'
        ]);
    }

    \Log::debug('Payment event_id type:', ['type' => gettype($payment->event_id)]);
    \Log::debug('Locked tickets structure:', $lockedTickets);

     // Find the event
    $event = Event::find($payment->event_id);
    if ($event) {
        $event->decrement('golden_ticket_count', $lockedTickets['golden'] ?? 0);
        $event->decrement('silver_ticket_count', $lockedTickets['silver'] ?? 0);
        $event->decrement('bronze_ticket_count', $lockedTickets['bronze'] ?? 0);
    }

      // **Retrieve the cart before clearing (for debugging)**
    $cart = \Session::get('cart', []);
    \Log::info("Cart before clearing:", $cart);

    // foreach ($lockedTickets as $ticketType => $quantity) {
    //     for ($i = 0; $i < $quantity; $i++) {
    //         $tickets[] = Ticket::create([
    //             'customer_id' => $payment->customer_id,
    //             'guest_id' => $payment->guest_id,
    //             'event_id' => (int)$payment->event_id,
    //             'payment_id' => (int)$payment->id,
    //             'ticket_type' => $ticketType,
    //             'owner_email' => $payment->guest_email
    //         ]);
    //     }
    // }

    // Send email with tickets
    // Generate tickets
$ticketList = [];
foreach (['golden', 'silver', 'bronze'] as $type) {
    if (!isset($lockedTickets[$type])) continue;
    
    $quantity = (int)$lockedTickets[$type];
    \Log::debug("Processing $type tickets", ['quantity' => $quantity]);

    for ($i = 0; $i < $quantity; $i++) {
        try {
            $ticket = Ticket::create([
                'payment_id' => (int)$payment->id,
                'event_id' => (int)$payment->event_id,
                'ticket_type' => $type,
                'owner_email' => $payment->customer_id 
                ? $payment->customer->email
                : $payment->guest_email,
                'customer_id' => $payment->customer_id,
                'guest_id' => $payment->guest_id
            ]);
            $ticketList[] = $ticket;
        } catch (\Exception $e) {
            \Log::error("Ticket creation failed: " . $e->getMessage());
        }
    }
}
    try {
        // Mail::to($payment->guest_email)->send(new TicketEmail($tickets, $payment));
        $recipient = $payment->customer_id 
        ? $payment->customer->email 
        : $payment->guest_email;
        
    Mail::to($recipient)
        ->send(new TicketEmail($ticketList, $payment));
    } catch (\Exception $e) {
        \Log::error("Ticket email failed: " . $e->getMessage());
    } 


    // **Clear the cart session and locked tickets*
    \Session::forget('cart');
    //Cache::forget("locked_tickets_event_{$payment->event_id}");
    Cache::forget($lockKey); // Remove the lock entry


   

    // Redirect to the success page with success message
    return Inertia::render('PaymentGate/PaymentSuccess', [
        'success' => 'Payment completed successfully.'
    ]);
    
}

public function cancel()
{
    return redirect()->route('checkout')->with('error', 'Payment was canceled.');
}


public function updateCancelSession(Request $request)
{
    // Store event_id and cart in session
    session(['event_id' => $request->event_id]);
    session(['cart' => $request->cart]);

    return redirect()->route('payment.cancel');
}


public function showCancelPage(Request $request)
    {
        // Check if event_id is not already in the session
    if (!session()->has('event_id') && $request->has('event_id')) {
        session(['event_id' => $request->event_id]);
    }

        $eventId = session('event_id');
        $event = DB::table('events')->where('id', $eventId)->first();
        $cart = session('cart', []);
        


        return Inertia::render('PaymentGate/PaymentCancel', [
            'event' => $event,
            'cart' => $cart,
            'message' => session('message', 'Your payment has been cancelled.')
        ]);
    }


public function checkout()
    {
        // Retrieve the total value from the query string
        $total = request()->query('total');

        // Retrieve event_id from the query string or request (adjust as needed)
        $eventId = request()->query('event_id');  

        // Fetch the event details from the database
        $event = Event::find($eventId); 

        // Retrieve cart data from session (or database if stored)
        $cart = session()->get('cart', []); 

        // Pass the total to the Inertia view
        return Inertia::render('PaymentGate/PaymentGate', [
            'total' => $total, // Pass the total amount as a prop to the view
            'event' => $event, // Pass the event data
            'cart' => $cart,   // Pass the cart data
        ]);
    }


}
