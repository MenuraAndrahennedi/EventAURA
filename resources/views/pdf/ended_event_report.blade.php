<!DOCTYPE html>
<html>
<head>
    <title>Event Report</title>
    <style>
        body { font-family: Arial, sans-serif; }
        h2 { text-align: center; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        table, th, td { border: 1px solid black; padding: 10px; text-align: left; }
        .total { font-weight: bold; }
    </style>
</head>
<body>

    <h2>Event Report: {{ $event_name }}</h2>
    <p><strong>Date:</strong> {{ $event_date }} ({{ $start_time }} - {{ $end_time }})</p>
    <p><strong>Venue:</strong> {{ $venue }}, {{ $city }}</p>
    <p><strong>Organizer:</strong> {{ $organizer }}</p>

    <h3>Event Description</h3>
    <p>{{ $description }}</p>

    <h3>Ticket Sales</h3>
    <table>
        <thead>
            <tr>
                <th>Ticket Type</th>
                <th>Sold</th>
                <th>Price</th>
                <th>Total Revenue</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Bronze</td>
                <td>{{$total_bronze_ticket_count - $bronze_ticket_count }}</td>
                <td>Rs. {{ $bronze_ticket_price }}</td>
                <td>Rs.{{ ($total_bronze_ticket_count-$bronze_ticket_count) * $bronze_ticket_price }}</td>
            </tr>
            <tr>
                <td>Silver</td>
                <td>{{ $total_silver_ticket_count - $silver_ticket_count }}</td>
                <td>Rs. {{ $silver_ticket_price }}</td>
                <td>Rs.{{ ($total_silver_ticket_count-$silver_ticket_count) * $silver_ticket_price }}</td>
            </tr>
            <tr>
                <td>Golden</td>
                <td>{{ $total_golden_ticket_count - $golden_ticket_count }}</td>
                <td>Rs. {{ $golden_ticket_price }}</td>
                <td>Rs. {{($total_golden_ticket_count-$golden_ticket_count) * $golden_ticket_price }}</td>
            </tr>
        </tbody>
    </table>

    <p class="total">Total Revenue: Rs. {{ $total_revenue }}</p>

    <!-- <h3>Additional Information</h3>
    @if($agenda_pdf)
        <p><strong>Agenda PDF:</strong> Available</p>
    @endif
    @if($event_video)
        <p><strong>Event Video:</strong> Available</p>
    @endif
    @if($return_policies)
        <p><strong>Return Policies:</strong> {{ $return_policies }}</p>
    @endif -->
    <h3>Additional Information</h3>

<p><strong>Agenda PDF:</strong> {{ $agenda_pdf ? 'Available' : 'Unavailable' }}</p>
<p><strong>Event Video:</strong> {{ $event_video ? 'Available' : 'Unavailable' }}</p>
<p><strong>Return Policies:</strong> {{ $return_policies ? $return_policies : 'Unavailable' }}</p>


</body>
</html>
