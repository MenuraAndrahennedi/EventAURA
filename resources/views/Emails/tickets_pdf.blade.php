<!DOCTYPE html>
<html>
<head>
    <title>Tickets - {{ $event->name }}</title>
    <style>
        .ticket {
            page-break-inside: avoid;
            border: 2px solid #000;
            padding: 20px;
            margin-bottom: 20px;
        }
        .qr-code {
            width: 150px;
            height: 150px;
        }

        .attendee-info {
        margin-bottom: 30px;
        padding: 15px;
        background: #f5f5f5;
        border-radius: 5px;
    }
    .attendee-info h2 {
        margin-top: 0;
        color: #333;
    }
    </style>
</head>
<body>
    <h1>{{ $event->name }} Tickets</h1>

    <!-- Add attendee name section -->
    <div class="attendee-info">
        <h2>Attendee Information</h2>
        <p>Name: {{ $attendeeName }}</p>
        <p>Email: {{ $payment->customer?->email ?? $payment->guest_email }}</p>
    </div>
    
    @foreach($tickets as $ticket)
    <div class="ticket">
        <h2>{{ ucfirst($ticket->ticket_type) }} Ticket</h2>
        <p>Ticket Owner: {{ $attendeeName }}</p>
        <p>Ticket Number: {{ $ticket->ticket_number }}</p>
        <p>Event Date: {{ \Carbon\Carbon::parse($event->date)->format('M d, Y')  }}</p>
        <p>Venue: {{ $event->venue }}</p>
        @if($ticket->qr_code) <!-- Add QR code generation later -->
            <img src="{{ $ticket->qr_code }}" class="qr-code" alt="QR Code">
        @endif
    </div>
    @endforeach
</body>
</html>
