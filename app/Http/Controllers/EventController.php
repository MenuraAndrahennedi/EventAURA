<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
}
