<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use App\Models\Event;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;




class CartController extends Controller
{
    public function getCart() {

    $user = auth()->user();

    // Identify user or guest
    if ($user) {
        $identifier = "user_{$user->id}";
    } else {
        // Generate and store guest identifier if not set
        if (!Session::has('guest_identifier')) {
            Session::put('guest_identifier', Str::uuid()->toString());
        }
        $identifier = "guest_" . Session::get('guest_identifier');
    }
    
        $cart = Session::get('cart', ['golden' => 0, 'silver' => 0, 'bronze' => 0]);

        // Store event_id in session (assuming cart belongs to a single event at a time)
    if (Session::has('event_id')) {
        $eventId = Session::get('event_id');
    } else {
        $eventId = null; // Default value
    }

     // Retrieve locked tickets
     $lockedTickets = $eventId ? Cache::get("ticket_lock_{$identifier}_{$eventId}", []) : [];

        return response()->json([
            'cart' => $cart,
            'guest_id' => $identifier, // Return guest ID to use in other functions
            'locked_tickets' => $lockedTickets
        ]);
    }


//     public function updateCart(Request $request)
//     {
//         $cart = $request->only(['golden', 'silver', 'bronze']);
//         Session::put('cart', $cart);
//         return response()->json(['message' => 'Cart updated successfully']);
//     }
// }
public function updateCart(Request $request)
{

    Log::info('Cart Update Request Received:', $request->all());
    $user = auth()->user();

    //  // Identify user or guest
    //  if ($user) {
    //     $identifier = "user_{$user->id}";
    // } else {
    //     // Use a session-based identifier for guests
    //     if (!Session::has('guest_identifier')) {
    //         Session::put('guest_identifier', Str::uuid()->toString());
    //     }
    //     $identifier = "guest_" . Session::get('guest_identifier');
    // }
   // Retrieve the identifier from session
   if ($user) {
    $identifier = "user_{$user->id}";
} else {
    $identifier = "guest_" . Session::get('guest_identifier', Str::uuid()->toString());
    Session::put('guest_identifier', str_replace("guest_", "", $identifier)); // Ensure it persists
} 
   
    $event = Event::findOrFail($request->event_id);
    
    // Generate a unique lock key for the event
  //  $lockKey = "ticket_lock_event_{$event->id}";
    // Lock Key: Ensure consistency
    $lockKey = "ticket_lock_{$identifier}_{$event->id}";
    
    // Acquire lock for 10 seconds to prevent race conditions
    $lock = Cache::lock($lockKey, 10);
  
    
    if ($lock->get()) {
        try {

    // Retrieve all ticket data from the request
$ticketData = $request->only(['golden', 'silver', 'bronze']);
$eventId = $request->input('event_id');
        
             // Get the current cart from session
    $existingCart = Session::get('cart', []);

    if (!isset($existingCart[$event->id])) {
        $existingCart[$event->id] = [
            'golden' => 0,
            'silver' => 0,
            'bronze' => 0,
        ];
    }

    $existingCart[$eventId] = array_merge($existingCart[$eventId], $ticketData);

    $golden = (int)$existingCart[$event->id]['golden'];
    $silver = (int)$existingCart[$event->id]['silver'];
    $bronze = (int)$existingCart[$event->id]['bronze'];


    //  // Retrieve requested ticket quantities
    //  $golden = $request->golden ?? 0;
    //  $silver = $request->silver ?? 0;
    //  $bronze = $request->bronze ?? 0;
      // Validate quantities
    //   $golden = (int)$existingCart[$event->id]['golden'];
    //   $silver = (int)$existingCart[$event->id]['silver'];
    //   $bronze = (int)$existingCart[$event->id]['bronze'];

     // Check available tickets
     if ($golden > $event->golden_ticket_count) {
         return response()->json(['error' => 'Not enough Golden tickets available'], 400);
     }
     if ($silver > $event->silver_ticket_count) {
         return response()->json(['error' => 'Not enough Silver tickets available'], 400);
     }
     if ($bronze > $event->bronze_ticket_count) {
         return response()->json(['error' => 'Not enough Bronze tickets available'], 400);
     }


    
    // Merge existing cart with new data instead of overwriting
  
    
    // Ensure the cart for this event is properly updated
    

    //  // Update the cart for this event with new values
    //  $existingCart[$event->id]['golden'] = $golden;
    //  $existingCart[$event->id]['silver'] = $silver;
    //  $existingCart[$event->id]['bronze'] = $bronze;
    // Update the cart with the new values from the request

    Session::put('cart', $existingCart);
    Log::info('Cart data after update: ', ['cart' => $existingCart]);

    

     // Store the lock information in cache (simulating locked tickets)
     Cache::put($lockKey, [
        'golden' => $golden,
        'silver' => $silver,
        'bronze' => $bronze,
        'expires_at' => now()->addMinutes(10)
    ], now()->addMinutes(10));

    return response()->json([
        'message' => 'Cart updated successfully',
        'cart' => $existingCart,
        'guest_id' => $identifier,
        'event_id' =>$event->id // Return guest ID for reference
]);

}finally {
    // Release the lock
    $lock->release();
}
}
return response()->json(['error' => 'Another user is currently updating the cart. Try again.'], 423);

}


public function clearCart()
{
    Session::forget('cart');
    return response()->json(['message' => 'Cart cleared successfully']);
}

}
