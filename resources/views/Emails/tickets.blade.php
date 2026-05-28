<!DOCTYPE html>
<html>
<head>
    <title>Your Tickets</title>
</head>
<body>
    <h1>Thank you for your purchase!</h1>
    <p>Event: {{ $payment->event->name }}</p>
    <p>Order Date: {{ $payment->created_at->format('M d, Y H:i') }}</p>
    
    <h2>Your Tickets:</h2>
    @foreach($tickets as $ticket)
        <div style="margin-bottom: 20px; padding: 15px; border: 1px solid #ddd;">
            <h3>{{ ucfirst($ticket->ticket_type) }} Ticket</h3>
            <p>Ticket Number: {{ $ticket->ticket_number }}</p>
            <p>Type: {{ $ticket->ticket_type }}</p>
        </div>
    @endforeach

    <p>Present this email at the venue for entry.</p>
</body>
</html>
