<!DOCTYPE html>
<html>
<head>
    <title>Event Approved</title>
</head>
<body>
    <h2>Dear {{ $event->eventHost->name }},</h2>

    <p>We are pleased to inform you that your event "<strong>{{ $event->name }}</strong>" has been approved!</p>

    <p>To host this event on our platform, please complete the payment of Rs.1000.</p>

    <p>You can pay the fee by visiting your <a href="{{ url('/event-host/pending-payments') }}">Pending Payments</a> page.</p>

    <p>Thank you for choosing our platform!</p>

    <p>Best Regards,<br>EventAura Team</p>
</body>
</html>
