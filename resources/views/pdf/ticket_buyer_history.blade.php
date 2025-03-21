<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ticket Buyer Details</title>
    <style>
        body { font-family: Arial, sans-serif; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h2>Ticket Buyer Details</h2>
    <table>
        <tr>
            <th>Name</th>
            <td>{{ $user->name }}</td>
        </tr>
        <tr>
            <th>Email</th>
            <td>{{ $user->email }}</td>
        </tr>
        <tr>
            <th>Telephone</th>
            <td>{{ $user->telephone }}</td>
        </tr>
    </table>

    <h2>Purchased Tickets</h2>
    <table>
        <thead>
            <tr>
                <th>Ticket Number</th>
                <th>Event ID</th>
                <th>Type</th>
                <th>Payment ID</th>
            </tr>
        </thead>
        <tbody>
            @foreach($tickets as $ticket)
            <tr>
                <td>{{ $ticket->ticket_number }}</td>
                <td>{{ $ticket->event_id }}</td>
                <td>{{ $ticket->ticket_type }}</td>
                <td>{{ $ticket->payment_id }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
