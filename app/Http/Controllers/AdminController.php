<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use PDF;
use App\Models\Ticket;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Admin/AdminDashboard');
    }

    public function dashboard()
    {
        return inertia('Admin/AdminDashboard');
    }

    /**
     * Show the form for creating a new resource.
     */

    public function ongoingEvents()
    {
        return inertia('Admin/AdminOngoing');
    }


    public function userDetails()
    {
        return inertia('Admin/UserDetails/UserDetails');
    }

    public function tbUserDetails()
    { 
        $ticketBuyers = User::where('role_id', 5)
                        ->get()
                        ->map(function ($user) {
                            
                            $user->full_name = $user->name; 
                            return $user;
                        })
                        ->toArray(); 

        return Inertia::render('Admin/UserDetails/TBUserDetails', [
            'ticketBuyers' => $ticketBuyers
        ]);
    }

    public function ehUserDetails()
    {
        $eventHosts = User::where('role_id', 4)
                        ->get()
                        ->map(function ($user) {
                            
                            $user->full_name = $user->name; 
                            return $user;
                        })
                        ->toArray(); 

        return Inertia::render('Admin/UserDetails/EHUserDetails', [
            'eventHosts' => $eventHosts
        ]);
    }
     
    public function ticketBuyerHistory($id)
    {
        $user = User::findOrFail($id);
    
    // Retrieve all tickets bought by the user
    $tickets = Ticket::where('customer_id', $id)->get();

    $pdf = PDF::loadView('pdf.ticket_buyer_history', compact('user', 'tickets'));

    return $pdf->download('ticket_buyer_' . $user->id . '.pdf');
    }

    public function eventHostHistory($id)
    {
        $user = User::findOrFail($id);
    
    // Retrieve all events hosted by this user
    $events = Event::where('event_host_id', $id)->get();

    $pdf = PDF::loadView('pdf.event_host_history', compact('user', 'events'));

    return $pdf->download('event_host_' . $user->id . '.pdf');
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
            'avatar' => 'nullable|image|mimes:jpg,png,jpeg|max:2048',
        ]);

        $admin = auth()->user();
        $admin->name = $request->fullName;
        $admin->email = $request->email;
        $admin->telephone = $request->telephone;

        if ($request->hasFile('avatar')) {
            if ($admin->avatar) {
                Storage::disk('public')->delete($admin->avatar);
            }
    
            $path = $request->file('avatar')->store('avatars', 'public');
            $admin->avatar = $path;
        }
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
        return inertia('Admin/ViewEvent', ['event' => $event]);
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
        $user = User::findOrFail($id);
        $user->delete();

        return Redirect::back()->with('success', 'User deleted successfully.');
    }
}
