<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\EventHost;
use App\Models\User;
use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Validation\Rule;

class EventHostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia ('EventHost/EHHome');
    }

    public function profile()
    {    
        $user = Auth::user();

        return Inertia::render('UserProfile/EH-Profiles/EHProfile', [
            'user' => $user,
        ]);
        
    }

    public function ehOngoing()
    {
        $user = Auth::user();

        if ($user->role_id == 4) {
            $ongoingevents = Event::where('event_host_id', $user->id)
                                ->where('event_status', 'approved')  
                                ->get()
                                ->toArray(); 
        }

        return Inertia::render('UserProfile/EH-Profiles/EH-EventHistory/EHOngoingHistory', [
            'user' => $user,
            'ongoingevents' => $ongoingevents,
        ]);
    }

    public function ehPendingPayments()
    {
        $user = Auth::user();

        return Inertia::render('UserProfile/EH-Profiles/EH-EventHistory/EHPendingPaymentsHistory', [
            'user' => $user,
        ]);
    }

    public function ehPendingRequests()
    {
        $user = Auth::user();
        if ($user->role_id == 4) {
            $pendingevents = Event::where('event_host_id', $user->id)
                                ->where('event_status', 'pending')  
                                ->get()
                                ->toArray(); 
        }

        return Inertia::render('UserProfile/EH-Profiles/EH-EventHistory/EHPendingRequests', [
            'user' => $user,
            'pendingevents' => $pendingevents,
        ]);
    }
    
    public function ehRejected()
    {
        $user = Auth::user();

        if ($user->role_id == 4) {
            $rejectedevents = Event::where('event_host_id', $user->id)
                                ->where('event_status', 'rejected')  
                                ->get()
                                ->toArray(); 
        }

        return Inertia::render('UserProfile/EH-Profiles/EH-EventHistory/EHRejectedHistory', [
            'user' => $user,
            'rejectedevents' => $rejectedevents,
        ]);
    }

    public function ehHistory()
    {
        $user = Auth::user();

        return Inertia::render('UserProfile/EH-Profiles/EH-EventHistory/EHHistory', [
            'user' => $user,
        ]);
    }


    public function changePW(Request $request)
    {
           
        $user = Auth::user();

        return Inertia::render('UserProfile/EH-Profiles/EHChangePW', [
            'user' => $user,
        ]);

    }
    public function updateProfile(Request $request)
    {
        $request->validate([
            'fullName' => 'required|string|max:255',
            'email' => 'required|email|unique:event_hosts,email,' . auth()->id(),
            'telephone' => 'nullable|string|max:15',
        ]);

        $eventHost = auth()->user();
        $eventHost->name = $request->fullName;
        $eventHost->email = $request->email;
        $eventHost->telephone = $request->telephone;
        $eventHost->save();

        return redirect()->back()->with('success', 'Profile updated successfully.');
    }


    public function updatePassword(Request $request)
    {
        $request->validate([
            'password' => 'required|min:8|confirmed',
        ]);

        $eventHost = auth()->user();
        $eventHost->password = Hash::make($request->password);
        $eventHost->save();

        return redirect()->back()->with('success', 'Password updated successfully.');
    }

    public function signOut()
    {
        $user = Auth::user();

        return Inertia::render('UserProfile/EH-Profiles/EHSignOut', [
            'user' => $user,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
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
    public function show(string $id)
    {
        //
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
    public function update(Request $request, $id)
    {
    
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
