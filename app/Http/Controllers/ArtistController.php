<?php

namespace App\Http\Controllers;
use App\Models\Event;
use App\Models\Artist;

use Illuminate\Http\Request;

class ArtistController extends Controller
{
   // Search for artists
//    public function search(Request $request)
//    {
//        $query = $request->input('query', '');
//        $artists = Artist::where('name', 'like', '%' . $query . '%')
//            ->orWhere('role', 'like', '%' . $query . '%')
//            ->get();

//        return response()->json($artists);
//    }
public function search(Request $request)
{
    $query = $request->input('query', '');

    // Validate the query
    $request->validate([
        'query' => 'nullable|string|max:50',
    ]);

    if (empty($query)) {
        return response()->json([]); // Return empty array if query is empty
    }

    // Search for artists
    $artists = Artist::where('name', 'like', '%' . $query . '%')
        ->orWhere('role', 'like', '%' . $query . '%')
        
        ->limit(10) // Limit the number of results
        ->get();

    return response()->json($artists);
}



   // Add a new artist
   public function store(Request $request)
   {
       $validated = $request->validate([
           'name' => 'required|string|max:255',
           'role' => 'required|string|max:255',
           'bio' => 'nullable|string',
           
       ]);

       // Handle file upload
    //    $imagePath = null;
    //    if ($request->hasFile('image')) {
    //        $imagePath = $request->file('image')->store('artists', 'public');
    //    }

       // Create the artist
       $artist = Artist::create([
           'name' => $validated['name'],
           'role' => $validated['role'],
           'bio' => $validated['bio'] ?? null,
           
       ]);

       return response()->json($artist, 201);
   }

}
