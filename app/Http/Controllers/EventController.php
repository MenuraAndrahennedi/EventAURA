<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
<<<<<<< Updated upstream
       $events = Event::where('event_status','approved')->get();
       return view('events.index',compact('events'));
=======
        $filter = Event::query();

        if ($request->has('filter') && $request->filter !== 'All'){
            switch ($request->filter){
                case 'Upcoming':
                    $filter->where('event_date', '>', now());
                    break;
                case 'Past':
                    $filter->where('event_date', '<', now());
                    break;
                case 'Popular':
                    $filter->where('is_popular', true);
                    break;
            }
        }

        $events = $filter->get();
>>>>>>> Stashed changes
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
    public function store(StoreEventRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEventRequest $request, Event $event)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        //
    }

    public function search(Request $request)
    {
        $search = $request->search;

        $data = DB::table('events')->where('name', 'Like', '%.$search'.'%')->get();
    
    }
}
