<!DOCTYPE html>
<html>
<head>
    <title>Attendees List - {{ $event->name }}</title>
    <style>
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #ddd; padding: 8px; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h1>{{ $event->name }} - Attendees List</h1>
    <p>Event Date: {{ $event->date }}</p>
    
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Amount (LKR)</th>
            </tr>
        </thead>
        <tbody>
            @foreach($attendees as $attendee)
            <tr>
                <td>{{ $attendee['name'] }}</td>
                <td>{{ $attendee['email'] }}</td>
                <td>{{ $attendee['phone'] }}</td>
                <td>{{ $attendee['amount'] }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>