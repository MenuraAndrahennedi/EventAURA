<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    /** @use HasFactory<\Database\Factories\EventFactory> */
    use HasFactory;

    protected $fillable = [
        'name', 'date', 'startTime', 'endTime', 'description', 'location', 'image', 'city', 'venue', 'artists',
        'agenda_pdf', 'organizer', 'event_video', 'bronze_ticket_count',
        'golden_ticket_count', 'silver_ticket_count', 'event_status',
        'bronze_ticket_price', 'golden_ticket_price', 'silver_ticket_price',
        'event_host_id',
    ];
}
