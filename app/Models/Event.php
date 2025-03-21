<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    /** @use HasFactory<\Database\Factories\EventFactory> */
    use HasFactory;

    protected $fillable = [
        'name', 'date', 'startTime', 'endTime', 'description', 'location', 'image', 'city', 'venue',
        'agenda_pdf', 'organizer', 'event_video', 'bronze_ticket_count',
        'golden_ticket_count', 'silver_ticket_count', 'event_status',
        'bronze_ticket_price', 'golden_ticket_price', 'silver_ticket_price','total_golden_ticket_count', 'total_silver_ticket_count', 'total_bronze_ticket_count','rejected_at','rejection_reason',
        'event_host_id',
    ];

    public function artists()
    {
        return $this->belongsToMany(Artist::class);
    }

    public function tickets()
{
    return $this->hasMany(Ticket::class);
}

 // app/Models/Event.php
public function stripePayments()
{
    return $this->hasMany(StripePayment::class);
}

public function eventHost()
    {
        return $this->belongsTo(User::class, 'event_host_id');
    }
}
