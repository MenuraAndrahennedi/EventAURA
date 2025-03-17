<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use App\Models\Ticket;
use App\Models\StripePayment;
use PDF;
use App\Models\Event;

class TicketEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $tickets;
    public $payment;

    /**
     * Create a new message instance.
     */
    public function __construct($tickets, StripePayment $payment)
    {
        $this->tickets = $tickets;
        $this->payment = $payment;
    }

    public function build()
    {
        $event = Event::findOrFail($this->payment->event_id);

          // Get attendee name
    $attendeeName = $this->payment->customer_id 
    ? $this->payment->customer->name  // For registered users
    : $this->payment->guest_name;     // For guests
    
    // Generate PDF
    $pdf = PDF::loadView('emails.tickets_pdf', [
        'tickets' => $this->tickets,
        'event' => $event,
        'payment' => $this->payment,
        'attendeeName' => $attendeeName
    ]);
        
    return $this->subject('Your Tickets for '. $event->title)
    ->view('emails.tickets',[
        'tickets' => $this->tickets, // Explicitly pass to view
        'payment' => $this->payment,
        'event' => $event,
        'attendeeName' => $attendeeName
    ])
    ->attachData($pdf->output(), 'tickets-'.$this->payment->id.'.pdf', [
        'mime' => 'application/pdf',
    ]);   
    
    }

    /**
     * Get the message envelope.
     */
    // public function envelope(): Envelope
    // {
    //     return new Envelope(
    //         subject: 'Ticket Email',
    //     );
    // }

    // /**
    //  * Get the message content definition.
    //  */
    // public function content(): Content
    // {
    //     return new Content(
    //         view: 'view.name',
    //     );
    // }

    // /**
    //  * Get the attachments for the message.
    //  *
    //  * @return array<int, \Illuminate\Mail\Mailables\Attachment>
    //  */
    // public function attachments(): array
    // {
    //     return [];
    // }
}
