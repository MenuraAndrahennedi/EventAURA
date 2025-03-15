<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;

class TicketController extends Controller
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

    public function updateTicketCount(Request $request)
    {
        $request->validate([
            'event_id' => 'required|exists:events,id',
            'golden_count' => 'nullable|integer|min:0',
            'silver_count' => 'nullable|integer|min:0',
            'bronze_count' => 'nullable|integer|min:0',
        ]);

        $event = Event::find($request->event_id);

        // Update ticket counts
        $event->golden_ticket_count -= $request->golden_count;
        $event->silver_ticket_count -= $request->silver_count;
        $event->bronze_ticket_count -= $request->bronze_count;

        $event->save();

        return response()->json(['message' => 'Ticket counts updated successfully']);
    }
}
