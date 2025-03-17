<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Click;

class ClickController extends Controller
{
    public function incrementClick($id)
    {
        $click = Click::where('event_id', $id)->first();

        if ($click) {
            $click->increment('number_of_clicks');
        }

        return response()->json(['success' => true, 'message' => 'Click recorded']);
    } 
}
