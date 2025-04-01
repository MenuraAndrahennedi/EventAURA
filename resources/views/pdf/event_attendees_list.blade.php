<!DOCTYPE html>
<html>
<head>
    <title>Attendees List - {{ $event->name }}</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .header { text-align: center; font-size: 20px; font-weight: bold; margin-bottom: 20px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid black; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <div class="header">
        Attendees List - {{ $event->name }} ({{ $event->date }})
    </div>

    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Ticket Number</th>
                <th>Type</th>
                <th>Owner Email</th>
            </tr>
        </thead>
        <tbody>
            @foreach($attendees as $index => $attendee)
                <tr>
                    <td>{{ $index + 1 }}</td>
                    <td>{{ $attendee->ticket_number }}</td>
                    <td>{{ ucfirst($attendee->ticket_type) }}</td>
                    <td>{{ $attendee->owner_email }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
