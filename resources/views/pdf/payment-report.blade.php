<!DOCTYPE html>
<html>
<head>
    <title>Payment Report</title>
    <style>
        body { font-family: sans-serif; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 20px;}
        th, td { border: 1px solid #000; padding: 5px; text-align: left;}
        h2 { margin-top: 30px; }
    </style>
</head>
<body>
    <h1>Payment Report ({{ ucfirst($filter) }})</h1>

    <p><strong>Total Revenue from Customers:</strong> LKR {{ number_format($totalRevenueCustomer) }}</p>
    <p><strong>Total Revenue from Event Hosting:</strong> LKR {{ number_format($totalRevenueHost) }}</p>

    <h2>Customer Payments</h2>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Event</th>
                <th>Amount (LKR)</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            @foreach($customerPayments as $i => $p)
            <tr>
                <td>{{ $i + 1 }}</td>
                <td>{{ $p->customer->name ?? $p->guest_name }}</td>
                <td>{{ $p->event->name ?? 'N/A' }}</td>
                <td>{{ $p->amount }}</td>
                <td>{{ \Carbon\Carbon::parse($p->created_at)->format('Y-m-d') }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <h2>Event Host Payments</h2>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Host</th>
                <th>Amount (LKR)</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            @foreach($hostPayments as $i => $p)
            <tr>
                <td>{{ $i + 1 }}</td>
                <td>{{ $p->eventHost->name ?? 'N/A' }}</td>
                <td>{{ $p->amount }}</td>
                <td>{{ \Carbon\Carbon::parse($p->created_at)->format('Y-m-d') }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
