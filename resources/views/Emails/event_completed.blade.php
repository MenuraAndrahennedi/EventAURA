<!DOCTYPE html>
<html>
<head>
    <title>Your Event is Now Live!</title>
</head>
<body>
    <h2>Congratulations!</h2>
    <p>Your event, <strong>{{ $eventName }}</strong>, is now live on our platform.</p>
    <p>Event Date: {{ $eventDate }}</p>
    <p>You can view your event here: <a href="{{ $eventUrl }}">{{ $eventUrl }}</a></p>
    <p>Thank you for hosting with us!</p>
</body>
</html>
