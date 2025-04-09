<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Artist;
use App\Models\Click;
use App\Models\StripePayment;
use PDF;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use App\Models\EventDeletionRequest;
use App\Mail\EventApprovedMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Session;






class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        if(!Auth::check()){
           return redirect()->route('eh.login');
         }

         $user = Auth::user();
         if($user->role_id == 4){
            return Inertia::render('CreateEvent/CreateEvent');
         }else{
            return redirect()->route('home');
         }
    }

    public function showBrowseEvents(){
        if (!Auth::check()) {
            return redirect()->route('tb.login');
        }
    
        $user = Auth::user();
    
        if ($user->role_id == 5) {
            return Inertia::render('BrowseEvent/BrowseEvent');
        }
    
        return redirect()->route('tb.login');  
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      
        $validated = $request->validate([
            'name' => 'required|string|max:225',
            'date' => 'required|date',
            'description' => 'required|string',
            'location' => 'required|url',
            'image' => 'required|image',
            'city' => 'required|string',
            'venue' => 'required|string',
            'artists' => 'required|array',
            'artists.*' => 'exists:artists,id',
            'agenda_pdf' => 'nullable|file|mimes:pdf',
            'event_video' => 'nullable|file|mimes:mp4,avi,mkv',
            'organizer' => 'required|string',
            'bronze_ticket_count' => 'integer|min:0',
            'golden_ticket_count' => 'integer|min:0',
            'silver_ticket_count' => 'integer|min:0',
            'bronze_ticket_price' => 'required|numeric|min:0',
            'golden_ticket_price' => 'required|numeric|min:0',
            'silver_ticket_price' => 'required|numeric|min:0',
            'return_policies' => 'required|string',
            'startTime' => 'required|date_format:H:i',
            'endTime' => 'required|date_format:H:i|after:startTime',
        ]);

         // Handle file uploads
        $validated['image'] = $request->file('image')->store('images', 'public');
        $validated['agenda_pdf'] = $request->file('agenda_pdf')?->store('pdfs', 'public');
        $validated['event_video'] = $request->file('event_video')?->store('videos', 'public');

        $validated['event_host_id'] = auth()->id();


    // Set total ticket counts to the initial ticket counts
    $validated['total_golden_ticket_count'] = $validated['golden_ticket_count'];
    $validated['total_silver_ticket_count'] = $validated['silver_ticket_count'];
    $validated['total_bronze_ticket_count'] = $validated['bronze_ticket_count'];

       
        // Create the event
       $event = Event::create($validated);

        // Attach artists
        if (!empty($validated['artists'])) {
            $event->artists()->sync($validated['artists']);
        }
        return redirect()->route('eventhost.dashboard')->with('success', 'Event Created Successfully and is pending approval');
    }

    public function getCompletedEvents()
    {
        $completedEvents = Event::where('event_status', 'completed')
        ->whereDate('date', '>', Carbon::today())
            ->get()
            ->map(function ($event) {
                $event->image = asset('storage/' . $event->image);
                return $event;
            });
        return response()->json($completedEvents);
    } 

    public function search(Request $request)
    {
        $searchTerm = $request->input('search');
        $filter = $request->input('filter', 'All');

        $query = Event::query()
        ->leftJoin('clicks', 'events.id', '=', 'clicks.event_id')
        ->select('events.*', \DB::raw('COALESCE(clicks.number_of_clicks, 0) as click_count'))
        ->where('event_status', 'completed');

        if (!empty($searchTerm)) {
           $query->where('name', 'LIKE', "%{$searchTerm}%")
           ;
        }
    
        if ($filter === 'Upcoming') {
            $query->where('date', '>', now());
        } elseif ($filter === 'Past') {
            $query->where('date', '<', now());
        }elseif ($filter === 'Popular') {
            $maxClicks = \DB::table('clicks')->max('number_of_clicks');
            $query->where('clicks.number_of_clicks', '=', $maxClicks);
        }

        $events = $query->get()->map(function ($event) {
            return [
                'id' => $event->id,
                'name' => $event->name,
                'date' => $event->date,
                'startTime' => $event->startTime,
                'location' => $event->location,
                'bronze_ticket_price' => $event->bronze_ticket_price,
                'image' => asset('storage/' . $event->image), 
            ];
        });

        return response()->json($events);

    }

    public function searchResults(Request $request)
    {
        $searchTerm = $request->input('search', '');
        $filter = $request->input('filter', 'All');

        $query = Event::query();

        if (!empty($searchTerm)) {
            $query->where('name', 'LIKE', "%{$searchTerm}%");
        }

        if ($filter === 'Upcoming') {
            $query->where('date', '>', now());
        } elseif ($filter === 'Past') {
            $query->where('date', '<', now());
        } 

        $events = $query->get()->map(function ($event) {
            return [
                'id' => $event->id,
                'name' => $event->name,
                'date' => $event->date,
                'startTime' => $event->startTime,
                'location' => $event->location,
                'bronze_ticket_price' => $event->bronze_ticket_price,
                'image' => asset('storage/' . $event->image), 
            ];
        });

    return Inertia::render('SearchResult/SearchResult', [
        'events' => $events,
        'searchTerm' => $searchTerm,
        'filter' => $filter,
    ]);
    }

    public function ongoingEvents()
    {
        $user = Auth::user();

        if ($user->role_id == 4) {
            $ongoingevents = Event::where('event_host_id', $user->id)
                            ->where('event_status', 'approved')  
                            ->get()
                            ->map (function ($event) {
                                $event->image = asset('storage/' . $event->image);
                                return $event;
                            })
                            ->toArray(); 
                            
        }               
        
        return Inertia::render('EventHost/OngoingEvents', [
            'events' => $ongoingevents
        ]);
       
    }
    
    // public function updateEvent(Request $request, $eventId)
    // {
    // //     $request->validate([
    // //         'date' => 'nullable|date',
    // //         'startTime' => 'nullable|date_format:H:i',
    // //         'endTime' => 'nullable|date_format:H:i|after:startTime',
    // //         'city' => 'nullable|string',
    // //         'venue' => 'nullable|string',
    // //         'location' => 'nullable|string',
    // //         'artist' => 'nullable|string',
    // //         'bronze_ticket_count' => 'integer|min:0',
    // //         'golden_ticket_count' => 'integer|min:0',
    // //         'silver_ticket_count' => 'integer|min:0',
    // //         'bronze_ticket_price' => 'nullable|numeric|min:0',
    // //         'golden_ticket_price' => 'nullable|numeric|min:0',
    // //         'silver_ticket_price' => 'nullable|numeric|min:0',
    // //     ]);

    // //     $event = Event::findOrFail($eventId);

    // //     $event->update([
    // //         'date' => $request->date,
    // //         'startTime' => $request->startTime,
    // //         'endTime' => $request->endTime,
    // //         'city' => $request->city,
    // //         'venue' => $request->venue,
    // //         'location' => $request->location,
    // //         'artist' => $request->artist,
    // //         'bronze_ticket_count' => $request->bronze_ticket_count,
    // //         'golden_ticket_count' => $request->golden_ticket_count,
    // //         'silver_ticket_count' => $request->silver_ticket_count,
    // //         'bronze_ticket_price' => $request->bronze_ticket_price,
    // //         'golden_ticket_price' => $request->golden_ticket_price,
    // //         'silver_ticket_price' => $request->silver_ticket_price,
    // //     ]);

    // // return redirect()->back()->with('success', 'Event updated successfully.');
    // $validated = $request->validate([
    //     'date' => 'required|date',
    //     'startTime' => 'required',
    //     'endTime' => 'required',
    //     'city' => 'required|string',
    //     'venue' => 'required|string',
    //     'location' => 'required|string',
    //     'golden_ticket_count' => 'required|integer',
    //     'silver_ticket_count' => 'required|integer',
    //     'bronze_ticket_count' => 'required|integer',
    //     'golden_ticket_price' => 'required|numeric',
    //     'silver_ticket_price' => 'required|numeric',
    //     'bronze_ticket_price' => 'required|numeric',
    //     'artists' => 'array',
    //     'agenda_pdf' => 'nullable|file|mimes:pdf',
    //     'image' => 'nullable|image',
    //     'event_video' => 'nullable|file',
    // ]);

    // // Handle file uploads
    // if ($request->hasFile('agenda_pdf')) {
    //     $validated['agenda_pdf'] = $request->file('agenda_pdf')->store('agendas');
    // }
    
    // if ($request->hasFile('image')) {
    //     $validated['image'] = $request->file('image')->store('event-images');
    // }
    
    // if ($request->hasFile('event_video')) {
    //     $validated['event_video'] = $request->file('event_video')->store('event-videos');
    // }

    // $event->update($validated);

    // // Sync artists
    // if ($request->has('artists')) {
    //     $event->artists()->sync($request->artists);
    // }

    // return redirect()->back()->with('success', 'Event updated successfully');

    // }

    
    public function showEvent(string $id)
    {
        $event = Event::findOrFail($id);
        return inertia('Admin/EHViewEvent', ['event' => $event]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $event = Event::with('artists')->findOrFail($id); // Fetch the event by ID
       
        return inertia('EventDetails/TBEventDetails', ['event' => $event]); // Pass data to Inertia 
    }

    public function delete(string $id)
    {
        $event = Event::findOrFail($id);
        return inertia('Admin/DeleteEvent', ['event' => $event]);
    }

    public function showBuyTickets($id)
    {
        $event = Event::with('artists')->findOrFail($id); // Fetch the event by ID
       
        return inertia('BuyTickets/BuyTickets', ['event' => $event]); // Pass data to Inertia 
    }

    public function getPendingEvents()
{
    $pendingEvents = Event::where('event_status', 'pending')->get();
    return inertia('Manager/PendingRequests/CreateRequest', [
        'events' => $pendingEvents,
        'flash' =>[
            'success'=>session('success'),
            'error'=>session('error'),
        ],

]);
}

public function approveEvent($id)
{
    $event = Event::findOrFail($id);
    $event->update(['event_status' => 'approved']);

     // Add event to the clicks table with default clicks
     \App\Models\Click::create([
        'event_id' => $event->id,
        'number_of_clicks' => 0, // Initially set to 0
    ]);

     // Send email notification to the event host
     Mail::to($event->eventHost->email)->send(new EventApprovedMail($event));

     // Flash message for Inertia
    // Session::flash('success', 'Event approved successfully.');

    return redirect()->back()
    ->with('success', 'Event approved successfully.');
}

public function deleteEvent(Request $request, $id)
{
    $event = Event::findOrFail($id);
    $event->update([
    'event_status' => 'rejected',
    'rejected_at' => now(),  // Store the rejection date
    'rejection_reason' => $request->input('rejection_reason', 'No reason provided') // Store reason
]);
    return redirect()->route('manager.create.requests')->with('success', 'Event rejected.');
}

public function showTBCart($id)
{
    $event = Event::find($id);

    if (!$event) {
        return redirect()->route('browse')->with('error', 'Event not found.');
    }

    return Inertia::render('Cart/TBCart/TBCart', [
        'event' => $event
    ]);
}

public function getEvent(Event $event)
{
   // $event = Event::findOrFail($id);
    $event->image = asset('storage/' . $event->image);
    return response()->json($event);
}

public function getAttendees($eventId)
{
    $attendees = StripePayment::where('event_id', $eventId)
        ->where('status', 'Completed')
        ->with(['customer:id,name,email,telephone'])
        ->get()
        ->map(function ($payment) {
            return $payment->customer_id ? [
                'name' => $payment->customer->name,
                'email' => $payment->customer->email,
                'phone' => $payment->customer->telephone,
                'amount' => number_format($payment->amount / 100, 2)
            ] : [
                'name' => $payment->guest_name,
                'email' => $payment->guest_email,
                'phone' => $payment->guest_phone,
                'amount' => number_format($payment->amount / 100, 2)
            ];
        });

    return response()->json([
        'count' => $attendees->count(),
        'attendees' => $attendees
    ]);
}

public function generateAttendeesPdf($eventId)
{
    $attendees = StripePayment::where('event_id', $eventId)
        ->where('status', 'Completed')
        ->with(['customer:id,name,email,telephone'])
        ->get()
        ->map(function ($payment) {
            return $payment->customer_id ? [
                'name' => $payment->customer->name,
                'email' => $payment->customer->email,
                'phone' => $payment->customer->telephone,
                'amount' => number_format($payment->amount)
            ] : [
                'name' => $payment->guest_name,
                'email' => $payment->guest_email,
                'phone' => $payment->guest_phone,
                'amount' => number_format($payment->amount)
            ];
        });

    $pdf = PDF::loadView('pdf.attendees', [
        'attendees' => $attendees,
        'event' => Event::findOrFail($eventId)
    ]);

    return $pdf->download("attendees-list-{$eventId}.pdf");
}

public function getEndedEvents()
{
//     $endedEvents = Event::where('date', '<', now()->toDateString())
//                         ->where('event_status', 'completed')
//                         ->orderBy('date', 'desc')
//                         ->get();
//     return inertia('Manager/History/EndedEventHistory', [
//         'endedEvents' => $endedEvents
//     ]);
// }
$today = Carbon::today(); // Get today's date

$endedEvents = Event::whereDate('date', '<', $today)
                    ->orWhere(function ($query) use ($today) {
                        $query->whereDate('date', '=', $today)
                              ->whereTime('endTime', '<', Carbon::now()->format('H:i:s'));
                    })
                    ->where('event_status', 'completed')
                    ->orderBy('date', 'desc')
                    ->get();

if ($endedEvents->isEmpty()) {
    return inertia('Manager/History/EndedEventHistory', ['endedEvents' => []]);
}
\Log::info("Ended Events Query: ", ['query' => $endedEvents->toArray()]);


return inertia('Manager/History/EndedEventHistory', ['endedEvents' => $endedEvents]);
}

public function generateEndedEventReport($id)
{
    $event = Event::findOrFail($id);

    $data = [
        'event_name' => $event->name,
        'event_date' => $event->date,
        'start_time' => $event->startTime,
        'end_time' => $event->endTime,
        'venue' => $event->venue,
        'city' => $event->city,
        'organizer' => $event->organizer,
        'description' => $event->description,
        'bronze_ticket_count' => $event->bronze_ticket_count,
        'silver_ticket_count' => $event->silver_ticket_count,
        'golden_ticket_count' => $event->golden_ticket_count,
        'total_bronze_ticket_count' => $event->total_bronze_ticket_count,
        'total_silver_ticket_count' => $event->total_silver_ticket_count,
        'total_golden_ticket_count' => $event->total_golden_ticket_count,
        'bronze_ticket_price' => $event->bronze_ticket_price,
        'silver_ticket_price' => $event->silver_ticket_price,
        'golden_ticket_price' => $event->golden_ticket_price,
        'total_revenue' => ((($event->total_bronze_ticket_count)-($event->bronze_ticket_count) )* ($event->bronze_ticket_price)) +
                           ((($event->total_silver_ticket_count)- ($event->silver_ticket_count))* ($event->silver_ticket_price)) +
                           ((($event->total_golden_ticket_count)-($event->golden_ticket_count)) * ($event->golden_ticket_price)),
        'agenda_pdf' => $event->agenda_pdf,
        'event_video' => $event->event_video,
        'return_policies' => $event->return_policies,
    ];

    $pdf = Pdf::loadView('pdf.ended_event_report', $data);

    return $pdf->download('Event_Report_'.$event->name.'.pdf');
}

public function getPendingPaymentEvents()
{
    $pendingPaymentEvents = Event::where('event_status', 'approved')->get();
    return inertia('Manager/History/PendingPaymentsHistory',[
        'pendingPaymentEvents' => $pendingPaymentEvents
    ]
);
}

public function generateEventReport($eventId){

    $event = Event::findOrFail($eventId);

    $pdf = Pdf::loadView('pdf.event_report', ['event' => $event]);

    return $pdf->download('event_report_'.$event->name.'.pdf');

}

public function getRejectedEvents()
{
    
        $rejectedEvents = Event::where('event_status', 'rejected')
            ->get()
            ->map(function ($event) {
                $event->image = asset('storage/' . $event->image);
                return $event;
            });
        // return response()->json($approvedEvents);
        if($rejectedEvents->isEmpty()){
            return inertia('Manager/History/RejectedEventHistory',['rejectedEvents'=>[]]); 
        }
    
    return inertia('Manager/History/RejectedEventHistory',['rejectedEvents'=>$rejectedEvents]);
}

public function generateRejectedEventReport($id)
{
    $event = Event::findOrFail($id);

    $data = [
        'event_name' => $event->name,
        'event_date' => $event->date,
        'start_time' => $event->startTime,
        'end_time' => $event->endTime,
        'venue' => $event->venue,
        'city' => $event->city,
        'organizer' => $event->organizer,
        'description' => $event->description,
        // 'bronze_ticket_count' => $event->bronze_ticket_count,
        // 'silver_ticket_count' => $event->silver_ticket_count,
        // 'golden_ticket_count' => $event->golden_ticket_count,
        'total_bronze_ticket_count' => $event->total_bronze_ticket_count,
        'total_silver_ticket_count' => $event->total_silver_ticket_count,
        'total_golden_ticket_count' => $event->total_golden_ticket_count,
        'bronze_ticket_price' => $event->bronze_ticket_price,
        'silver_ticket_price' => $event->silver_ticket_price,
        'golden_ticket_price' => $event->golden_ticket_price,
        'rejected_at' => $event->rejected_at,
        'rejection_reason' => $event->rejection_reason,
        // 'total_revenue' => ((($event->total_bronze_ticket_count)-($event->bronze_ticket_count) )* ($event->bronze_ticket_price)) +
        //                    ((($event->total_silver_ticket_count)- ($event->silver_ticket_count))* ($event->silver_ticket_price)) +
        //                    ((($event->total_golden_ticket_count)-($event->golden_ticket_count)) * ($event->golden_ticket_price)),
        'agenda_pdf' => $event->agenda_pdf,
        'event_video' => $event->event_video,
        'return_policies' => $event->return_policies,
    ];

    $pdf = Pdf::loadView('pdf.rejected_event_report', $data);

    return $pdf->download('Rejected_Event_Report_'.$event->name.'.pdf');
}


    /**
     * Show the form for editing the specified resource.
     */
    // public function edit(string $id)
    // {
    //     $event = Event::findOrFail($id);
    //     return inertia('EventHost/OngoingEvents/UpdateEvent', ['event' => $event]);
    // }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    // public function destroy(Request $request, $id)
    // {
    //     $event = Event::findOrFail($id);
    //     $event->delete();
    //     return Redirect::route('eventhost.home')->with('success', 'Event deleted successfully!');
        
    // }

    // public function delete(string $id)
    // {
    //     $event = Event::findOrFail($id);
    //     return inertia('CommonPages/DeleteEvent/EHDeleteEvent', ['event' => $event]);
    // }

    public function storeDeleteRequest(Request $request)
{
    $request->validate([
        'event_id' => 'required|exists:events,id',
        'reason' => 'required|string|max:500',
    ]);

    // Check if request already exists
    $existingRequest = EventDeletionRequest::where('event_id', $request->event_id)
        ->where('status', 'pending')
        ->first();

    if ($existingRequest) {
        return response()->json(['message' => 'A delete request is already pending for this event.'], 400);
    }

    EventDeletionRequest::create([
        'event_id' => $request->event_id,
        'event_host_id' => auth()->id(),
        'reason' => $request->reason,
        'status' => 'pending'
    ]);

    return response()->json(['message' => 'Delete request submitted successfully.'], 200);
}
}
