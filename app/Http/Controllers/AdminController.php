<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('CommonPages/UserHome/UserHome');
    }

    public function dashboard()
    {
        return inertia('CommonPages/UserHome/UserHome');
    }

    /**
     * Show the form for creating a new resource.
     */

    public function ongoingEvents()
    {
        return inertia('CommonPages/AdminOngoing');
    }


    public function userDetails()
    {
        return inertia('CommonPages/UserDetails/UserDetails');
    }
     
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function profile()
    {    
        $user = Auth::user();

        return Inertia::render('UserProfile/Other-User-Profiles/OtherProfile', [
            'user' => $user,
        ]);
        
    }

    public function updateProfile(Request $request)
    {
        $request->validate([
            'fullName' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . auth()->id(),
            'telephone' => 'nullable|string|max:15',
        ]);

        $admin = auth()->user();
        $admin->name = $request->fullName;
        $admin->email = $request->email;
        $admin->telephone = $request->telephone;
        $admin->save();

        return redirect()->back()->with('success', 'Profile updated successfully.');
    }

    public function updatePassword(Request $request)
    {
        $request->validate([
            'password' => 'required|min:8|confirmed',
        ]);

        $admin = auth()->user();
        $admin->password = Hash::make($request->password);
        $admin->save();

        return redirect()->back()->with('success', 'Password updated successfully.');
    }

    public function changePW(Request $request)
    {
           
        $user = Auth::user();

        return Inertia::render('UserProfile/Other-User-Profiles/OtherChangePW', [
            'user' => $user,
        ]);

    }

    public function signOut()
    {
        $user = Auth::user();

        return Inertia::render('UserProfile/Other-User-Profiles/OtherSignOut', [
            'user' => $user,
        ]);
    }

    public function getApprovedEvents() {
        $approvedEvents = Event:: where ('event_status', 'approved')
        ->get()
        ->map (function ($event) {
            $event->image = asset('storage/' . $event->image);
            return $event;
        });
        return response()->json($approvedEvents);
    }

    public function show(string $id)
    {
        $event = Event::findOrFail($id);
        return inertia('CommonPages/ViewEvent/ViewEvent', ['event' => $event]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
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
}
