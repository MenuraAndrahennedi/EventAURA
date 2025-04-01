<!DOCTYPE html>
<html>
<head>
    <title>Event Report</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        h1 {
            text-align: center;
            color: #333;
        }
        .table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        .table, .table th, .table td {
            border: 1px solid black;
        }
        .table th, .table td {
            padding: 10px;
            text-align: left;
        }
    </style>
</head>
<body>
    <h1>Event Report</h1>
    <table class="table">
        <tr>
            <th>Event Name</th>
            <td>{{ $event->name }}</td>
        </tr>
        <tr>
            <th>Organizer</th>
            <td>{{ $event->organizer }}</td>
        </tr>
        <tr>
            <th>Date</th>
            <td>{{ $event->date }}</td>
        </tr>
        <tr>
            <th>Time</th>
            <td>{{ $event->startTime }} - {{ $event->endTime }}</td>
        </tr>
        <tr>
            <th>Venue</th>
            <td>{{ $event->venue }}</td>
        </tr>
        <tr>
            <th>Status</th>
            <td>{{ ucfirst($event->event_status) }}</td>
        </tr>
        <tr>
    <th>Banner</th>
    <td>
        @if($event->image)
        <a href="{{ asset('storage/' . $event->image) }}" target="_blank">View Event Banner</a>
        @else
            No image available
        @endif
    </td>
</tr>

<tr>
            <th>Video Link:</th>
            <td>
            @if($event->event_video)
                    <a href="{{  asset('storage/' . $event->event_video) }}" target="_blank">Watch Video</a>
                @else
                    No video available
                @endif
            </td>
        </tr>
        <tr>
    </table>
</body>
</html>
