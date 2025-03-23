<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;



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
        $request->validate([
            'email' => 'required|email',
            'telephone' => 'nullable|string',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $user = auth()->user();

        if ($request->hasFile('avatar')) {
            $imagePath = $request->file('avatar')->store('avatar', 'public');

        if ($user->avatar) {
            Storage::disk('public')->delete($user->avatar);
        }
        $user->avatar = $imagePath;

    }
        $user->update([
            'email' => $request->email,
            'telephone' => $request->telephone,
        ]);

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

//        // Fetch user's purchase history
//        $purchases = DB::table('stripe_payments')
//            ->join('events', 'stripe_payments.event_id', '=', 'events.id')
//            ->where(function ($query) use ($user) {
//                $query->where('stripe_payments.customer_id', $user->id)
//                      ->orWhere('stripe_payments.customer_id', session('guest_id'));
//            })
//            ->select('events.name', 'stripe_payments.amount', 'stripe_payments.status', 'stripe_payments.created_at')
//            ->get();//

        return inertia('TBPurchaseHistory', ['purchases' => $purchases]);
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
