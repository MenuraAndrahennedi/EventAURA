<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Checkout\Session as StripeSession;
use App\Models\EventHostPayment;
use Inertia\Inertia;
use App\Models\Event;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\EventCompleted;
use Illuminate\Support\Facades\Auth;


class EventHostPaymentController extends Controller
{
    public function checkout() {

        $user = Auth::user();
        return Inertia::render('EventHost/EventHistory/EHPaymentGate',[
            'user' =>$user,
        ]);
    }

    public function processPayment(Request $request) {
        
        try{
        $request->validate([
            'amount' => 'required|numeric|min:1',
            'event_host_id' => 'required|exists:users,id',
        ]);

        $stripeSecret = config('services.stripe.secret');

        if (blank($stripeSecret)) {
            throw new \RuntimeException('Stripe secret key is not configured. Set STRIPE_SECRET in .env and clear the Laravel config cache.');
        }

        Stripe::setApiKey($stripeSecret);

        $session = StripeSession::create([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price_data' => [
                    'currency' => 'LKR',
                    'product_data' => ['name' => 'Event Hosting Fee'],
                    'unit_amount' => $request->amount * 100, // Convert to cents
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => route('eventhost.payment.success'),
            'cancel_url' => route('eventhost.payment.cancel'),
        ]);

        // Store payment record
        EventHostPayment::create([
            'event_host_id' => $request->event_host_id,
            'amount' => $request->amount,
            'payment_status' => 'pending',
            'transaction_id' => $session->id,
        ]);

        return response()->json(['id' => $session->id]);
    }catch(\Exception $e){
        \Log::error("Stripe Payment Error: " . $e->getMessage());
        return response()->json(['error' => 'Payment failed'], 500);
    }
    }

    public function success(Request $request) {

          // Retrieve the event host's latest payment record
          $payment = EventHostPayment::where('event_host_id', auth()->id())->latest()->first();
          $payment->update(['payment_status' => 'completed']);

          if ($payment) {
              // Find the related event
              $event = Event::where('event_host_id', $payment->event_host_id)->where('event_status', 'approved')->first();
  
              if ($event) {
                  // Update event status to "completed"
                  $event->update(['event_status' => 'completed']);
  
                  // Send an email notification to the event host
                  Mail::to(auth()->user()->email)->send(new EventCompleted($event));
              }
          }
  
        return Inertia::render('EventHost/EventHistory/EHPaymentSuccess');
    }

    public function cancel() {
        return Inertia::render('EventHost/EventHistory/EHPaymentCancel');
    }
}
