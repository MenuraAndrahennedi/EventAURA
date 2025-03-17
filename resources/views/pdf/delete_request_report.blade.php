<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Deletion Request Report</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            width: 100%;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
        }
        h1 {
            text-align: center;
            color: #333;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        .status {
            font-weight: bold;
            color: white;
            padding: 5px;
            border-radius: 5px;
        }
        .approved {
            background-color: green;
        }
        .rejected {
            background-color: red;
        }
        .pending {
            background-color: orange;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Event Deletion Request Report</h1>
        <table>
            <tr>
                <th>Event Name</th>
                <td>{{ $deleteRequest->event->name }}</td>
            </tr>
            <tr>
                <th>Event Host</th>
                <td>{{ $deleteRequest->eventHost->name }}</td>
            </tr>
            <tr>
                <th>Event Date</th>
                <td>{{ $deleteRequest->event->date }}</td>
            </tr>
            <tr>
                <th>Start Time</th>
                <td>{{ $deleteRequest->event->startTime }}</td>
            </tr>
            <tr>
                <th>Venue</th>
                <td>{{ $deleteRequest->event->venue }}</td>
            </tr>
            <tr>
                <th>Reason for Deletion</th>
                <td>{{ $deleteRequest->reason }}</td>
            </tr>
            <tr>
                <th>Request Status</th>
                <td class="status {{ $deleteRequest->status }}">{{ ucfirst($deleteRequest->status) }}</td>
            </tr>
        </table>
    </div>
</body>
</html>
