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

    <p><strong>Rejected Date:</strong> {{ $rejected_at }}</p>
    <p><strong>Rejected Reason:</strong> {{ $rejection_reason }}</p>

   
    <h3>Additional Information</h3>

<p><strong>Agenda PDF:</strong> {{ $agenda_pdf ? 'Available' : 'Unavailable' }}</p>
<p><strong>Event Video:</strong> {{ $event_video ? 'Available' : 'Unavailable' }}</p>
<p><strong>Return Policies:</strong> {{ $return_policies ? $return_policies : 'Unavailable' }}</p>


</body>
</html>
