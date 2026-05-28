<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EventDeletionRequest;
use App\Models\Event;

use Barryvdh\DomPDF\Facade\Pdf;

class DeleteRequestController extends Controller
{
    // Update request status
    public function update(Request $request)
    {
       
        $request->validate([
            'id' => 'required|exists:event_deletion_requests,id',
            'status' => 'required|in:approved,rejected',
        ]);

        $deleteRequest = EventDeletionRequest::findOrFail($request->id);
        $deleteRequest->status = $request->status;
        $deleteRequest->save();

        // return response()->json(['message' => 'Status updated successfully']);
// If request is approved -> mark event as cancelled
    if ($request->status === 'approved') {
        $event = Event::find($deleteRequest->event_id); 
        if ($event) {
            $event->event_status = 'cancelled';
            $event->save();
        }
    }

        return redirect()->back()->with('success', 'Status updated successfully!');
    }

    public function generateReport($id)
    {
        // Fetch the delete request with related event and event host
        $deleteRequest = EventDeletionRequest::with('event', 'eventHost')->findOrFail($id);

        // Load the PDF view and pass data
        $pdf = Pdf::loadView('pdf.delete_request_report', compact('deleteRequest'));

        // Return PDF as a download
        return $pdf->download('delete_request_report_' . $deleteRequest->id . '.pdf');
    }

}
