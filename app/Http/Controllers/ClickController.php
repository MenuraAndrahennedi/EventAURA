<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Click;

class ClickController extends Controller
{
    public function incrementClick($id)
    {
        // Find the record for this event or create a new one if it doesn't exist
    $click = Click::firstOrCreate(
        ['event_id' => $id], // Search criteria
        ['number_of_clicks' => 0] // Default values if not found
    );
        // Increment the click count
    $click->increment('number_of_clicks');
       
        return response()->json(['success' => true, 'message' => 'Click recorded']);
    } 
}
