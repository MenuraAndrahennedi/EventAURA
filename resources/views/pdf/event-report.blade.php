<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Report</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .header { text-align: center; font-size: 22px; font-weight: bold; }
        .table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        .table, .table th, .table td { border: 1px solid black; padding: 10px; text-align: left; }
        .bold { font-weight: bold; }
    </style>
</head>
<body>
    <div class="header">Event Report</div>
    <p><b>Event Name:</b> {{ $event->name }}</p>
    <p><b>Host:</b> {{ $event->eventHost->name }}</p>
    <p><b>Date:</b> {{ $event->date }}</p>
    <p><b>Venue:</b> {{ $event->venue }}, {{ $event->city }}</p>
    <p><b>Organizer:</b> {{ $event->organizer }}</p>
    <p><b>Total Completed Payments:</b> {{ $completedPayments }}</p>

    <h3>Ticket Sales</h3>
    <table class="table">
        <thead>
            <tr>
                <th>Ticket Type</th>
                <th>Sold</th>
                <th>Price (LKR)</th>
                <th>Revenue (LKR)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Bronze</td>
                <td>{{ $bronzeSold }}</td>
                <td>{{ number_format($event->bronze_ticket_price, 2) }}</td>
                <td>{{ number_format($bronzeRevenue, 2) }}</td>
            </tr>
            <tr>
                <td>Silver</td>
                <td>{{ $silverSold }}</td>
                <td>{{ number_format($event->silver_ticket_price, 2) }}</td>
                <td>{{ number_format($silverRevenue, 2) }}</td>
            </tr>
            <tr>
                <td>Golden</td>
                <td>{{ $goldenSold }}</td>
                <td>{{ number_format($event->golden_ticket_price, 2) }}</td>
                <td>{{ number_format($goldenRevenue, 2) }}</td>
            </tr>
            <tr>
                <td class="bold">Total Revenue</td>
                <td colspan="2"></td>
                <td class="bold">{{ number_format($totalRevenue, 2) }}</td>
            </tr>
        </tbody>
    </table>

    <p><b>Generated on:</b> {{ $date }}</p>
</body>
</html>
