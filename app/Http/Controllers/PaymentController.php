<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Payment;
use App\Models\StripePayment;
use App\Models\Event;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;


class PaymentController extends Controller
{
    public function storePayment(Request $request) {
        // Check if user is authenticated
        if (Auth::check()) {
            $customerId = Auth::id(); // Get logged-in user ID
            $guestId = null;
        } else {
            // Generate a temporary guest ID if not stored already
            if (!Session::has('guest_id')) {
                Session::put('guest_id', uniqid('guest_'));
            }
            $customerId = null;
            $guestId = Session::get('guest_id');
        }

        // Store payment details
        $payment = Payment::create([
            'customer_id' => $customerId, 
            'guest_id' => $guestId,
            'payment_id' => $request->payment_id, // PayHere payment ID
            'amount' => $request->amount,
            'currency' => $request->currency ?? 'LKR',
            'status' => 'Pending', // Default status
            'response' => json_encode($request->all()), // Store full response
        ]);

        return response()->json(['message' => 'Payment recorded successfully!', 'payment' => $payment]);
    }

    // Prepare payment data to send to PayHere
    public function preparePayHerePayment(Request $request) {
        $user = Auth::user() ?? (object) [
            'name' => $request->first_name ?? 'Guest',
            'email' => $request->email ?? 'guest@example.com'
        ];

         // Fetch merchant ID from config instead of env
    $merchantId = config('services.payhere.merchant_id');
    \Log::info("PayHere Merchant ID: " . $merchantId); // Debugging log
    

        $payment = Payment::create([
            'customer_id' => Auth::id(),
            'guest_id' => Session::get('guest_id'),
            'amount' => $request->amount,
            'currency' => 'LKR',
            'status' => 'Pending',
            'response' => null,
        ]);

        $payhere_data = [
            //'merchant_id' => env('PAYHERE_MERCHANT_ID'),
            'merchant_id' => config('services.payhere.merchant_id'),
            'return_url' => route('payment.success'),
            'cancel_url' => route('payment.cancel'),
            'notify_url' => route('payment.notify'),
            'order_id' => $payment->id,
            'items' => 'Event Tickets',
            'amount' => $request->amount,
            'currency' => 'LKR',
            'first_name' => $user->name,
            'email' => $user->email,
            'phone' => $request->phone,
            'address' => $request->address,
            'city' => 'Colombo'
        ];
        \Log::info("PayHere Data Sent: ", $payhere_data);
        return response()->json($payhere_data);
    }

    // PayHere Notification Callback (Handles Success & Failure)
    public function paymentNotify(Request $request) {
        $payment = Payment::where('id', $request->order_id)->first();

        if (!$payment) {
            return response()->json(['error' => 'Payment not found'], 404);
        }

        if ($request->status == '2') { // PayHere success status
            $payment->update([
                'payment_id' => $request->payment_id,
                'status' => 'Completed',
                'response' => json_encode($request->all())
            ]);
        } else {
            $payment->update([
                'status' => 'Failed',
                'response' => json_encode($request->all())
            ]);
        }

        return response()->json(['message' => 'Payment updated successfully']);
    }

    public function purchaseHistory()
    {
        $user = Auth::user();   
    
        $purchases = StripePayment::where('customer_id', $user->id)
        ->with(['event']) 
        ->get();    
    
        return Inertia::render('UserProfile/TB-Profiles/TBPurchaseHistory', [
            'user' => $user,
            'purchases' => $purchases
        ]);
    }
}


