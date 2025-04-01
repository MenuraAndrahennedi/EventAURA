<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Event;
use App\Models\EventUpdateRequest;

class EventUpdateRequestController extends Controller
{
     // Show the event update form to Event Host
     public function edit($event_id)
     {
        $event = Event::with('artists')->findOrFail($event_id);
         return Inertia::render('EventHost/OngoingEvents/UpdateEvent', [
             'event' => $event
         ]);
     }

     public function store(Request $request,$event_id)
{
    $event = Event::findOrFail($event_id);
    $validated = $request->validate([
        'name' => 'required|string|max:225',
        'date' => 'required|date',
        'startTime' => 'required|date_format:H:i',
        'endTime' => 'required|date_format:H:i|after:startTime',
        'description' => 'required|string',
        'location' => 'required|string',
        'city' => 'required|string',
        'venue' => 'required|string',
        'organizer' => 'required|string',
        'bronze_ticket_count' => 'integer|min:0',
        'golden_ticket_count' => 'integer|min:0',
        'silver_ticket_count' => 'integer|min:0',
        'bronze_ticket_price' => 'required|numeric|min:0',
        'golden_ticket_price' => 'required|numeric|min:0',
        'silver_ticket_price' => 'required|numeric|min:0',
        'return_policies' => 'nullable|string',
        //'event_status' => 'required|in:approved,pending,rejected,completed,cancelled,postponed,rescheduled',
        'artists' => 'required|array',
        'artists.*' => 'exists:artists,id',
        'image' => 'nullable|image|max:2048', // New image validation
        'agenda_pdf' => 'nullable|file|mimes:pdf|max:5120', // PDF validation
        'event_video' => 'nullable|file|mimes:mp4,avi,mkv|max:10240', // Video validation
    ]);

    $updateData = $request->only([
        'name', 'date', 'startTime', 'endTime', 'description', 'location', 
        'city', 'venue', 'organizer', 'bronze_ticket_count', 'golden_ticket_count', 
        'silver_ticket_count', 'bronze_ticket_price', 'golden_ticket_price', 
        'silver_ticket_price', 'return_policies', 'event_status', 'artists'
    ]);

    // Handle optional file uploads
    if ($request->hasFile('image')) {
        $updateData['image'] = $request->file('image')->store('images', 'public');
    }
    if ($request->hasFile('agenda_pdf')) {
        $updateData['agenda_pdf'] = $request->file('agenda_pdf')->store('pdfs', 'public');
    }
    if ($request->hasFile('event_video')) {
        $updateData['event_video'] = $request->file('event_video')->store('videos', 'public');
    }

    EventUpdateRequest::create([
        'event_id' => $event->id,
        'event_host_id' => auth()->id(),
        'update_data' => json_encode($updateData),
        'status' => 'pending',
    ]);

    return redirect()->route('eventhost.view-event',['event' => $event->id])->with('success', 'Update request sent to Manager!');
}

 // Manager reviews pending requests
 public function index()
 {
     return Inertia::render('Manager/PendingRequests/UpdateRequest', [
         'requests' => EventUpdateRequest::where('status', 'pending')->with(['event','eventHost'])->get()
     ]);
 }

public function approve(Request $request, $event_update_request_id)
{
    $eventUpdateRequest = EventUpdateRequest::findOrFail($event_update_request_id);
    $event = $eventUpdateRequest->event;
    $updateData = json_decode($eventUpdateRequest->update_data, true);

    // Update all event details
    $event->update([
        'name' => $updateData['name'],
        'date' => $updateData['date'],
        'startTime' => $updateData['startTime'],
        'endTime' => $updateData['endTime'],
        'description' => $updateData['description'],
        'location' => $updateData['location'],
        'city' => $updateData['city'],
        'venue' => $updateData['venue'],
        'organizer' => $updateData['organizer'],
        'bronze_ticket_count' => $updateData['bronze_ticket_count'],
        'golden_ticket_count' => $updateData['golden_ticket_count'],
        'silver_ticket_count' => $updateData['silver_ticket_count'],
        'bronze_ticket_price' => $updateData['bronze_ticket_price'],
        'golden_ticket_price' => $updateData['golden_ticket_price'],
        'silver_ticket_price' => $updateData['silver_ticket_price'],
        //'return_policies' => $updateData['return_policies'],
        // 'event_status' => $updateData['event_status'],
    ]);

    // Update Artists
    if (!empty($updateData['artists'])) {
        $event->artists()->sync($updateData['artists']); // Replace old artists with new ones
    }

    // Update Image, PDF, and Video if new files exist
    if (!empty($updateData['image'])) {
        $event->update(['image' => $updateData['image']]);
    }
    if (!empty($updateData['agenda_pdf'])) {
        $event->update(['agenda_pdf' => $updateData['agenda_pdf']]);
    }
    if (!empty($updateData['event_video'])) {
        $event->update(['event_video' => $updateData['event_video']]);
    }

    // Mark the request as approved
    $eventUpdateRequest->update(['status' => 'approved']);

    return redirect()->route('event.update.requests')->with('success', 'Event update approved!');
}

public function reject(Request $request, $event_update_request_id){
    $eventUpdateRequest = EventUpdateRequest::findOrFail($event_update_request_id);
    $eventUpdateRequest->update(['status' => 'rejected','rejection_reason' => $request->input('rejection_reason', 'No reason provided')]);

    return redirect()->route('event.update.requests')->with('success', 'Event update rejected!');

}

}
