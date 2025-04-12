<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str; 

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'guest_id', 
        'event_id',
        'payment_id',
        'ticket_type',
        'owner_email',
        'ticket_number'
    ];

    public function generateTicketNumber()
    {
        return 'TICKET-' . strtoupper(Str::random(10));
    }
    
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($ticket) {
            $ticket->ticket_number = $ticket->generateTicketNumber();
        });
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'customer_id');
    }

    public function event()
{
    return $this->belongsTo(Event::class, 'event_id');
}

public function payment()
{
    return $this->belongsTo(StripePayment::class, 'payment_id');
}
}
