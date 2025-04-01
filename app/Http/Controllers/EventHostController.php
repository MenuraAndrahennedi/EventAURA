<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\EventHost;
use App\Models\User;
use App\Models\Event;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Validation\Rule;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Response;
use Carbon\Carbon;

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

    public function editProfile()
    {
        $user = auth()->user();
        return inertia("UserProfile/EH-Profiles/EHEditProfile", ['user' => $user]);
    }

    public function updateProfile(Request $request)
{
    $user = auth()->user();
   // dd($request->all(), $request->file('avatar'));

    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users,email,' . $user->id,
        'telephone' => 'nullable|string|max:15',
        'avatar' => 'nullable|image|mimes:jpg,png,jpeg|max:2048',
    ]);

    if ($request->hasFile('avatar')) {
        
        $filename = time() . '_' . $request->file('avatar')->getClientOriginalName();
        $path = $request->file('avatar')->storeAs('avatars', $filename, 'public');
      
        $validated['avatar'] = $path;
    } else {
        // Keep the existing avatar if no new file is uploaded
        $validated['avatar'] = $user->avatar;
    }

    $user->update($validated);
    
    return redirect()->route('eventhost.profile')->with('success', 'Profile updated successfully.');
}

    public function ehOngoing()
    {
        $user = Auth::user();

        if ($user->role_id == 4) {
            $ongoingevents = Event::where('event_host_id', $user->id)
                                ->where('event_status', 'completed')  
                                ->get()
                                ->toArray(); 
        }

        return Inertia::render('EventHost/OngoingEvents/OngoingEvents', [
            'user' => $user,
            'ongoingevents' => $ongoingevents,
        ]);
    }

    public function ehOngoingHistory()
    {
        $user = Auth::user();

        if ($user->role_id == 4) {
            $ongoingevents = Event::where('event_host_id', $user->id)
                                ->where('event_status', 'completed')
                                ->with(['tickets']) // Load ticket data  
                                ->get()
                                ->map(function ($event) {
                                    // Calculate total tickets (Initially available)
                                    $totalTickets = $event->total_golden_ticket_count + 
                                                    $event->total_silver_ticket_count + 
                                                    $event->total_bronze_ticket_count;
                                
                                    // Calculate sold tickets
                                    $soldTickets = ($event->total_golden_ticket_count - $event->golden_ticket_count) +
                                                   ($event->total_silver_ticket_count - $event->silver_ticket_count) +
                                                   ($event->total_bronze_ticket_count - $event->bronze_ticket_count);
                                
                                    // Calculate ticket selling percentage
                                    $sellPercentage = ($totalTickets > 0) ? round(($soldTickets / $totalTickets) * 100, 2) : 0;
                                
                                    return [
                                        'id' => $event->id,
                                        'name' => $event->name,
                                        'total_tickets' => $totalTickets,
                                        'sold_tickets' => $soldTickets,
                                        'sell_percentage' => $sellPercentage,
                                    ];
                                });
        }

        return Inertia::render('EventHost/EventHistory/EHOngoingHistory', [
            'user' => $user,
            'ongoingevents' => $ongoingevents,
        ]);
    }

    public function generateTicketReport($eventId)
    {
        $event = Event::findOrFail($eventId);
    
        // Count sold tickets per type
        $golden_sold = Ticket::where('event_id', $eventId)->where('ticket_type', 'golden')->count();
        $silver_sold = Ticket::where('event_id', $eventId)->where('ticket_type', 'silver')->count();
        $bronze_sold = Ticket::where('event_id', $eventId)->where('ticket_type', 'bronze')->count();
    
        // Calculate total ticket sell percentage
        $totalTickets = $event->total_golden_ticket_count + $event->total_silver_ticket_count + $event->total_bronze_ticket_count;
        $totalSold = $golden_sold + $silver_sold + $bronze_sold;
        $sell_percentage = ($totalTickets > 0) ? round(($totalSold / $totalTickets) * 100, 2) : 0;
    
        // Generate PDF
        $pdf = Pdf::loadView('pdf.ticket_selling_report', compact('event', 'golden_sold', 'silver_sold', 'bronze_sold', 'sell_percentage'));
    
        // Return PDF as a download response
        return $pdf->download("ticket_selling_report_event_{$event->name}.pdf");
    }

    public function generateAttendeesList($eventId)
{
    $event = Event::findOrFail($eventId);
    $attendees = Ticket::where('event_id', $eventId)->get();

    // Generate PDF
    $pdf = Pdf::loadView('pdf.event_attendees_list', compact('event', 'attendees'));

    // Return PDF as a download response
    return $pdf->download("attendees_list_event_{$event->name}.pdf");
}


    public function showEventHostViewEvent(Event $event){
        // Authorization check (if using policies)
    //$this->authorize('view', $event);

    return inertia('EventHost/OngoingEvents/EHViewEvent', [
        'event' => $event->loadCount(['stripePayments as attendees_count' => function($query) {
            $query->where('status', 'Completed');
        }]),
        'attendees_pdf_url' => route('api.events.attendees.pdf', $event)
    ]);
    }

    public function ehPendingPayments()
    {
        $user = Auth::user(); 

        if ($user->role_id == 4) {
            $pendingPaymentevents = Event::where('event_host_id', $user->id)
                                ->where('event_status', 'approved')  
                                ->get()
                                ->toArray(); 
        }


        return Inertia::render('UserProfile/EH-Profiles/EH-EventHistory/EHPendingPaymentsHistory', [
            'user' => $user,
            'pendingPaymentevents'=>$pendingPaymentevents

        ]);
    }

    public function ehPendingRequests()
    {
        $user = Auth::user();
        if ($user->role_id == 4) {
            $pendingevents = Event::where('event_host_id', $user->id)
                                ->whereIn('event_status', ['pending','cancelled'])  
                                ->get()
                                ->toArray(); 
        }

        return Inertia::render('UserProfile/EH-Profiles/EH-EventHistory/EHPendingRequests', [
            'user' => $user,
            'pendingevents' => $pendingevents,
        ]);
    }

    public function cancelEvent($id){
        $event = Event::findOrFail($id);

        $event->update(['event_status'=>'cancelled']);
        
        return redirect()->back()->with('success', 'Event cancelled successfully.');
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

    public function generateRejectionPDF($id)
    {
        $event = Event::findOrFail($id);
    
        $pdf = Pdf::loadView('pdf.admin_review_rejection', compact('event'));
    
        return $pdf->download('Admin_Review.pdf');
    } 

    public function ehHistory()
    {
        $user = Auth::user();
        if ($user->role_id == 4) {
            $endedevents = Event::where('event_host_id', $user->id)
                                ->whereDate('date', '<', Carbon::today()) 
                                ->get()
                                ->map(function ($event) {
                                    // Calculate total tickets (Initially available)
                                    $totalTickets = $event->total_golden_ticket_count + 
                                                    $event->total_silver_ticket_count + 
                                                    $event->total_bronze_ticket_count;
                                
                                    // Calculate sold tickets
                                    $soldTickets = ($event->total_golden_ticket_count - $event->golden_ticket_count) +
                                                   ($event->total_silver_ticket_count - $event->silver_ticket_count) +
                                                   ($event->total_bronze_ticket_count - $event->bronze_ticket_count);
                                
                                    // Calculate ticket selling percentage
                                    $sellPercentage = ($totalTickets > 0) ? round(($soldTickets / $totalTickets) * 100, 2) : 0;
                                
                                    return [
                                        'id' => $event->id,
                                        'name' => $event->name,
                                        'total_tickets' => $totalTickets,
                                        'sold_tickets' => $soldTickets,
                                        'sell_percentage' => $sellPercentage,
                                    ];
                                });
        }
        return Inertia::render('UserProfile/EH-Profiles/EH-EventHistory/EHHistory', [
            'user' => $user,
            'endedevents' => $endedevents,
        ]);
    }

    public function downloadEventReport($id)
    {
        $event = Event::with(['tickets', 'eventHost'])->findOrFail($id);

        // Ticket Sales Count
        $bronzeSold = $event->tickets->where('ticket_type', 'bronze')->count();
        $silverSold = $event->tickets->where('ticket_type', 'silver')->count();
        $goldenSold = $event->tickets->where('ticket_type', 'golden')->count();

        // Total Revenue Calculation
        $bronzeRevenue = $bronzeSold * $event->bronze_ticket_price;
        $silverRevenue = $silverSold * $event->silver_ticket_price;
        $goldenRevenue = $goldenSold * $event->golden_ticket_price;
        $totalRevenue = $bronzeRevenue + $silverRevenue + $goldenRevenue;

        // Payment Details
        $completedPayments = $event->tickets->pluck('payment_id')->unique()->count();

        // Prepare Data for PDF
        $data = [
            'event' => $event,
            'bronzeSold' => $bronzeSold,
            'silverSold' => $silverSold,
            'goldenSold' => $goldenSold,
            'bronzeRevenue' => $bronzeRevenue,
            'silverRevenue' => $silverRevenue,
            'goldenRevenue' => $goldenRevenue,
            'totalRevenue' => $totalRevenue,
            'completedPayments' => $completedPayments,
            'date' => now()->format('d-m-Y'),
        ];

        // Load View & Generate PDF
        $pdf = Pdf::loadView('pdf.event-report', $data);
        
        return $pdf->download("Event_Report_{$event->id}.pdf");
    }


    public function changePW(Request $request)
    {
           
        $user = Auth::user();

        return Inertia::render('UserProfile/EH-Profiles/EHChangePW', [
            'user' => $user,
            'flash' => ['success' => session('success')],
        ]);

    }

    
    public function updateEventHostPassword(Request $request)
{
    $request->validate([
        'current_password' => ['required', 'current_password'],
        'new_password' => ['required', 'string', 'min:8', 'confirmed'],
    ]);

    $user = auth()->user(); // Get the currently logged-in EH
    $user->update([
        'password' => Hash::make($request->new_password),
    ]);

    return redirect()->back()->with('success', 'Password updated successfully.');
}
    // public function updateProfile(Request $request)
    // {
    //     $request->validate([
    //         'fullName' => 'required|string|max:255',
    //         'email' => 'required|email|unique:event_hosts,email,' . auth()->id(),
    //         'telephone' => 'nullable|string|max:15',
    //     ]);

    //     $eventHost = auth()->user();
    //     $eventHost->name = $request->fullName;
    //     $eventHost->email = $request->email;
    //     $eventHost->telephone = $request->telephone;
    //     $eventHost->save();

    //     return redirect()->back()->with('success', 'Profile updated successfully.');
    // }


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
