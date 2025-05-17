<!DOCTYPE html>
<html>
<head>
    <title>New Event Submission</title>
</head>
<body>
    <h2>New Event Submission Notification</h2>
    <p><strong>Event Name:</strong> {{ $event->name }}</p>
    <p><strong>Submitted by:</strong> {{ $event->eventHost->name }} ({{ $event->eventHost->email }})</p>
    <p><strong>Date:</strong> {{ $event->date }}</p>
    <p><strong>Location:</strong> {{ $event->location }}</p>
    <p><strong>Description:</strong> {{ $event->description }}</p>

    <p>Please review this event request in the manager dashboard.</p>
</body>
</html>
