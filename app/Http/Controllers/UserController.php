<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Ticket;



use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('UserProfile/TB-Profiles/TBProfile');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }


    /**
     * Update the specified resource in storage.
     */

    public function update(Request $request)
    {
        // $request->validate([
        //     'email' => 'required|email',
        //     'telephone' => 'nullable|string',
        //     'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        // ]);

        // $user = auth()->user();

        // // 
        // if ($request->hasFile('avatar')) {
        //     $path = $request->file('avatar')->store('avatars', 'public');
        //     $validated['avatar'] = $path;
        // } else {
        //     // Keep the existing avatar if no new file is uploaded
        //     $validated['avatar'] = $user->avatar;
        // }
    

    
        // $user->update([
        //     'email' => $request->email,
        //     'telephone' => $request->telephone,
        // ]);

        // return back()->with('success', 'Profile updated successfully!');
        $user = auth()->user();

    $validated = $request->validate([
        //'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users,email,' . $user->id,
        'telephone' => 'nullable|string|max:15',
        'avatar' => 'nullable|image|mimes:jpg,png,jpeg|max:2048',
    ]);

    if ($request->hasFile('avatar')) {
        $path = $request->file('avatar')->store('avatars', 'public');
        $validated['avatar'] = $path;
    } else {
        // Keep the existing avatar if no new file is uploaded
        $validated['avatar'] = $user->avatar;
    }

    $user->update($validated);

    return back()->with('success', 'Profile updated successfully!');

    }

    public function store(string $id)
    {
       //
    }
    
    /**
     * Display the specified resource.
     */
    public function showProfile(string $id)
    {
        dd(Auth::user()); 

        return Inertia::render('UserProfile/TB-Profiles/TBProfile', [
            'user' => Auth::user(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function showChangePasswordForm()
    {
        return Inertia::render('UserProfile/TB-Profiles/TBChangePW', [
            'user' => Auth::user(),
        ]);    
    }

    public function purchaseHistory()
    {
        $user = auth()->user();

         // Get all tickets with event and payment data
    $tickets = Ticket::with(['event', 'payment'])
    ->where('customer_id', $user->id)
    ->get();

// Group tickets by event and payment
$grouped = $tickets->groupBy(function ($ticket) {
    return $ticket->event_id . '-' . $ticket->payment_id;
});

// Format data for frontend
$purchases = $grouped->map(function ($group) {
    $first = $group->first(); // all in group have same event/payment

    return [
        'event_name' => optional($first->event)->name ?? 'N/A',
        'golden_tickets' => $group->where('ticket_type', 'golden')->count(),
        'silver_tickets' => $group->where('ticket_type', 'silver')->count(),
        'bronze_tickets' => $group->where('ticket_type', 'bronze')->count(),
        'amount' => optional($first->payment)->amount ?? 0,
        'currency' => optional($first->payment)->currency ?? 'LKR',
    ];
})->values(); // reset keys

        return inertia('UserProfile/TB-Profiles/TBPurchaseHistory' ,[
            'user' => $user,
            'purchases' => $purchases,
        ]);
    }


    public function updatePassword(Request $request)
    {
        $request->validate([
            'old_password' => 'required',
            'new_password' => 'required|min:8|confirmed', // Ensure the password is confirmed
        ]);    

        $user = Auth::user();      

        // Check if the old password is correct
        if (!Hash::check($request->old_password, $user->password)) {
            return back()->withErrors(['old_password' => 'The provided password does not match our records.']);
        }      

        // Update the user's password
        $user->password = Hash::make($request->new_password);
        $user->save();     

        // After updating, redirect with a success message
        return Inertia::render('UserProfile/TB-Profiles/TBChangePW', [
            'user' => $user,
            'success' => 'Your password has been changed successfully.',
        ]);
    }

}
