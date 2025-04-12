<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Host Details</title>
    <style>
        body { font-family: Arial, sans-serif; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h2>Event Host Details</h2>
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
            <td>{{ $user->created_at->format('d-m-Y H:i:s') }}</td>
        </tr>
        <tr>
            <th>User Status:</th>
            <td> {{ $user->user_status }}</td>
        </tr>
    </table>

    <h2>Hosted Events</h2>
    <table>
        <thead>
            <tr>
                <th>Event Name</th>
                <th>Date</th>
                <th>Venue</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            @foreach($events as $event)
            <tr>
                <td>{{ $event->name }}</td>
                <td>{{ $event->date }}</td>
                <td>{{ $event->venue }}</td>
                <td>{{ $event->event_status }}</td>
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
