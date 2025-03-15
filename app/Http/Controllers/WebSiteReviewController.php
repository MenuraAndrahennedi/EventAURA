<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WebSiteReview;
use Inertia\Inertia;

class WebSiteReviewController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'required|string|max:1000',
        ]);

        WebSiteReview::create([
            'user_id' => auth()->id(),
            'guest_name' => auth()->check() ? null : $request->name,
            'guest_email' => auth()->check() ? null : $request->email,
            'rating' => $request->rating,
            'comment' => $request->comment,
        ]);

        return back()->with('success', 'Review submitted successfully.');
    }

    // Get all reviews (for manager)
    public function index()
    {
        $reviews = WebSiteReview::with('user')->get(); // Load the user relationship

    return inertia('Manager/Reviews/Review', [
        'reviews' => $reviews
    ]);  
    }

    // Approve a review
    public function approve($id)
    {
        $review = WebSiteReview::findOrFail($id);
        $review->update(['is_approved' => true]);
        return back()->with('success', 'Review approved.');
    }

    // Reply to a review
    public function reply(Request $request, $id)
    {
        $review = WebSiteReview::findOrFail($id);
        // Debugging step
    //dd($request->all()); 
        $request->validate(['reply' => 'required|string|max:1000']);
        $review->update(['reply' => $request->reply]);
        return back()->with('success', 'Reply added.');
    }

    // Delete a review
    public function destroy($id)
    {
        $review = WebSiteReview::findOrFail($id);
        $review->delete();
        return back()->with('success', 'Review deleted.');
    }
}
