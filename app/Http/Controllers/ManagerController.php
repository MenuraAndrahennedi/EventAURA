<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Event;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class ManagerController extends Controller
{
    use AuthorizesRequests;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia("Manager/ManagerDashboard");
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

    public function showManagerOngoingEvents(){
        return inertia("Manager/OngoingEvents/ManagerOngoingEvents");
    }

    public function showManagerViewEvent(Event $event){
        // Authorization check (if using policies)
    //$this->authorize('view', $event);

    return inertia('Manager/OngoingEvents/ManagerViewEvent', [
        'event' => $event->loadCount(['stripePayments as attendees_count' => function($query) {
            $query->where('status', 'Completed');
        }]),
        'attendees_pdf_url' => route('api.events.attendees.pdf', $event)
    ]);
    }

    public function showManagerProfile(Request $request){

        $user = Auth::user(); // Get the currently logged-in user

        return Inertia::render('Manager/YourProfile/ManagerProfile', [
            'user' => [
                'name' => $user->name,
                'email' => $user->email,
                'telephone' => $user->telephone,
                'avatar' => $user->avatar ? asset('storage/' . $user->avatar) : null, // Send `null` if no avatar
            ],
        ]);
    }

    public function editProfile()
{
    $user = auth()->user();
    return inertia("Manager/YourProfile/ManagerEditProfile", ['user' => $user]);
}

public function updateProfile(Request $request)
{
    $user = auth()->user();

    $validated = $request->validate([
        'name' => 'required|string|max:255',
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
    
    return redirect()->route('manager.profile')->with('success', 'Profile updated successfully.');
}


    public function showManagerChangePW(){

        $user = auth()->user();
        return inertia("Manager/YourProfile/ManagerChangePW", ['user' => $user,
        'flash' => ['success' => session('success')],

    ]);
    }

    public function updateManagerPassword(Request $request)
{
    $request->validate([
        'current_password' => ['required', 'current_password'],
        'new_password' => ['required', 'string', 'min:8', 'confirmed'],
    ]);

    $user = auth()->user(); // Get the currently logged-in manager
    $user->update([
        'password' => Hash::make($request->new_password),
    ]);

    return redirect()->back()->with('success', 'Password updated successfully.');
}

    public function showManagerSignOut(){
        $user = auth()->user();
        return inertia("Manager/YourProfile/ManagerSignOut",[
            'user'=>$user,
        ]);
    }

    public function showManagerSideBar(){
        return inertia("Manager/YourProfile/ManagerSideBar");
    }

    public function showInquiriesPage(){
        return inertia("Manager/Inquiries/Inquiries");
    }

    // public function showReviewsPage(){
    //     return inertia("Manager/Reviews/Review");
    // }
}
