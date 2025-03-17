<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inquiry;
use Inertia\Inertia;
use App\Mail\InquiryReplyMail;
use Illuminate\Support\Facades\Mail;

class InquiryController extends Controller
{
     // Fetch all inquiries for the manager
     public function index()
     {
        $inquiries = Inquiry::latest()->get(); // Or hardcoded test data
         return Inertia::render('Manager/Inquiries/Inquiries', [
          'inquiries' => $inquiries
        ]);
    
     
     }

     // Store a new inquiry (for users submitting inquiries)
    public function store(Request $request)
    {
        \Log::info('Received  inquiry data:', $request->all()); // Debugging log
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        Inquiry::create($request->all());

        return back()->with('success', 'Inquiry submitted successfully.');
    }

    // Reply to an inquiry
    public function reply(Request $request, $id)
    {
        $inquiry = Inquiry::findOrFail($id);
        $request->validate(['reply' => 'required|string|max:1000']);
        $inquiry->update([
            'reply' => $request->reply,
            'is_resolved' => true
        ]);

         // Send reply email
    Mail::to($inquiry->email)->send(new InquiryReplyMail($inquiry));

        return back()->with('success', 'Reply sent successfully and emailed to the user.');
    }

    // Delete an inquiry
    public function destroy($id)
    {
        $inquiry = Inquiry::findOrFail($id);
        $inquiry->delete();
        return back()->with('success', 'Inquiry deleted successfully.');
    }

}
