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
        <tr>
            <th>Account Created At:</th>
            <td> {{ $user->created_at->format('d-m-Y H:i:s') }}</td>
        </tr>
        <tr>
            <th>User Status:</th>
            <td> {{ $user->user_status }}</td>
        </tr>
    </table>

    <h2>Purchased Tickets</h2>
    <table>
        <thead>
            <tr>
                <th>Ticket Number</th>
                <th>Event Name</th>
                <th>Type</th>
                <th>Payment ID</th>
                <th>Purchased At</th>
            </tr>
        </thead>
        <tbody>
            @foreach($tickets as $ticket)
            <tr>
                <td>{{ $ticket->ticket_number }}</td>
                <td>{{ $ticket->event->name ?? 'N/A'}}</td>
                <td>{{ $ticket->ticket_type }}</td>
                <td>{{ $ticket->payment_id }}</td>
                <td>{{ $ticket->created_at->format('d-m-Y ') }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
    <h2>Login History</h2>
    <table>
        <thead>
            <tr>
                <th>Login Time</th>
                <th>Logout Time</th>
                <th>IP Address</th>
            </tr>
        </thead>
        <tbody>
            @foreach($logins as $login)
                <tr>
                    <td>{{ $login->login_time ? $login->login_time->format('Y-m-d H:i:s') : 'N/A' }}</td>
                    <td>{{ $login->logout_time ? $login->logout_time->format('Y-m-d H:i:s') : 'N/A' }}</td>
                    <td>{{ $login->ip_address }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

</body>
</html>
