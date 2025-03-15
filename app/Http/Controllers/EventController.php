<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Event;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $events = Event::all(); // Fetch all events from the database

        return Inertia::render('Events', [
            'events' => $events,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('CreateEvent/CreateEvent');
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
            'location' => 'required|string',
            'image' => 'required|image',
            'city' => 'required|string',
            'venue' => 'required|string',
            'artists' => 'required|string',
            'agenda_pdf' => 'nullable|file|mimes:pdf',
            'event_video' => 'nullable|file|mimes:mp4,avi,mkv',
            'organizer' => 'required|string',
            'bronze_ticket_count' => 'integer|min:0',
            'golden_ticket_count' => 'integer|min:0',
            'silver_ticket_count' => 'integer|min:0',
            'bronze_ticket_price' => 'required|numeric|min:0',
            'golden_ticket_price' => 'required|numeric|min:0',
            'silver_ticket_price' => 'required|numeric|min:0',
            'return_policies' => 'nullable|string',
            'startTime' => 'required|date_format:H:i',
            'endTime' => 'required|date_format:H:i|after:startTime',
        ]);

        $validated['image'] = $request->file('image')->store('images', 'public');
        $validated['agenda_pdf'] = $request->file('agenda_pdf')?->store('pdfs', 'public');
        $validated['event_video'] = $request->file('event_video')?->store('videos', 'public');

        $validated['event_host_id'] = auth()->id();
  
        Event::create($validated);

        return redirect()->route('eventhost.dashboard')->with('success', 'Event Created Successfully and is pending approval');
    }

    public function getApprovedEvents()
    {
        $approvedEvents = Event::where('event_status', 'approved')
            ->get()
            ->map(function ($event) {
                $event->image = asset('storage/' . $event->image);
                return $event;
            });
        return response()->json($approvedEvents);
    }

    public function search(Request $request)
    {
        $searchTerm = $request->input('search');
        $filter = $request->input('filter', 'All');

        $query = Event::query();

        if (!empty($searchTerm)) {
           $query->where('name', 'LIKE', "%{$searchTerm}%")
           ;
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

        return response()->json($events);

    }

    public function searchDetails(Request $request)
    {
        return Inertia::render('EventDetails/TBEventDetails');
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
    
    public function updateEvent(Request $request, $eventId)
    {
        $request->validate([
            'date' => 'nullable|date',
            'startTime' => 'nullable|date_format:H:i',
            'endTime' => 'nullable|date_format:H:i|after:startTime',
            'city' => 'nullable|string',
            'venue' => 'nullable|string',
            'location' => 'nullable|string',
            'artist' => 'nullable|string',
            'bronze_ticket_count' => 'integer|min:0',
            'golden_ticket_count' => 'integer|min:0',
            'silver_ticket_count' => 'integer|min:0',
            'bronze_ticket_price' => 'nullable|numeric|min:0',
            'golden_ticket_price' => 'nullable|numeric|min:0',
            'silver_ticket_price' => 'nullable|numeric|min:0',
        ]);

        $event = Event::findOrFail($eventId);

        $event->update([
            'date' => $request->date,
            'startTime' => $request->startTime,
            'endTime' => $request->endTime,
            'city' => $request->city,
            'venue' => $request->venue,
            'location' => $request->location,
            'artist' => $request->artist,
            'bronze_ticket_count' => $request->bronze_ticket_count,
            'golden_ticket_count' => $request->golden_ticket_count,
            'silver_ticket_count' => $request->silver_ticket_count,
            'bronze_ticket_price' => $request->bronze_ticket_price,
            'golden_ticket_price' => $request->golden_ticket_price,
            'silver_ticket_price' => $request->silver_ticket_price,
        ]);

    return redirect()->back()->with('success', 'Event updated successfully.');
    }

    public function profiles()
    {
        $user = Auth::user();

        return Inertia::render('UserProfile/EH-Profiles/EHProfile', [
            'user' => $user,
        ]);
    }
    
    /**
     * Display the specified resource.
     */
    public function show( $id)
    {      
        $event = Event::findOrFail($id);
        $event->image = asset('storage/' . $event->image); // Ensure the image URL is accessible

        return Inertia::render('EventDetails/TBEventDetails', [
        'event' => $event,
        ]);
    }
        
        public function buyTickets($id)
    {
        $event = Event::findOrFail($id);
        $event->image = asset('storage/' . $event->image); // Ensure the image URL is accessible

        return Inertia::render('BuyTickets/BuyTickets', [
            'event' => $event,
        ]);

        $event = Event::findOrFail($id);
        return inertia('CommonPages/ViewEvent/EHViewEvent', ['event' => $event]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $event = Event::findOrFail($id);
        return inertia('EventHost/UpdateEvent', ['event' => $event]);
    }

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
    public function destroy(Request $request, $id)
    {
        $event = Event::findOrFail($id);
        $event->delete();
        return Redirect::route('eventhost.home')->with('success', 'Event deleted successfully!');
        
    }

    public function delete(string $id)
    {
        $event = Event::findOrFail($id);
        return inertia('CommonPages/DeleteEvent/EHDeleteEvent', ['event' => $event]);
    }
}
