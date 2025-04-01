<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Review</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
        }
        h2 {
            text-align: center;
            color: red;
        }
        .details {
            margin-top: 20px;
        }
        .details p {
            margin: 5px 0;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Admin Review</h2>
        <hr>
        <div class="details">
            <p><strong>Event Name:</strong> {{ $event->name }}</p>
            <p><strong>Event Date:</strong> {{ \Carbon\Carbon::parse($event->date)->format('Y-m-d') }}</p>
            <p><strong>Organizer:</strong> {{ $event->organizer }}</p>
            <p><strong>Location:</strong> {{ $event->venue }}, {{ $event->city }}</p>
            <p><strong>Rejection Reason:</strong> {{ $event->rejection_reason }}</p>
            <p><strong>Rejected On:</strong> {{ \Carbon\Carbon::parse($event->rejected_at)->format('Y-m-d H:i A') }}</p>
        </div>
        <hr>
        <div class="footer">
            <p>&copy; {{ now()->year }} EventAura | All Rights Reserved.</p>
        </div>
    </div>
</body>
</html>
