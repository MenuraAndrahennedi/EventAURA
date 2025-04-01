<!DOCTYPE html>
<html>
<head>
    <title>Ticket Selling Report - {{ $event->name }}</title>
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
        Ticket Selling Report - {{ $event->name }} ({{ $event->date }})
    </div>
    
    <p><strong>Event Name:</strong> {{ $event->name }}</p>
    <p><strong>Venue:</strong> {{ $event->venue }}</p>
    <p><strong>Total Golden Tickets Sold:</strong> {{ $golden_sold }}/{{ $event->total_golden_ticket_count }}</p>
    <p><strong>Total Silver Tickets Sold:</strong> {{ $silver_sold }}/{{ $event->total_silver_ticket_count }}</p>
    <p><strong>Total Bronze Tickets Sold:</strong> {{ $bronze_sold }}/{{ $event->total_bronze_ticket_count }}</p>

    <h3>Overall Ticket Sell Percentage: {{ $sell_percentage }}%</h3>
</body>
</html>
