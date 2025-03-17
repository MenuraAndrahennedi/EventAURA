<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;

class StripePayment extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'guest_id',
        'guest_name',
        'guest_phone',
        'guest_email',
        'amount',
        'currency',
        'status',
        'stripe_session_id',
        'event_id',
    ];

    /**
     * Automatically generate a UUID for guest_id if not provided.
     */
    // protected static function boot()
    // {
    //     parent::boot();

    //     static::creating(function ($payment) {
    //         if (!$payment->guest_id) {
    //             $payment->guest_id = Str::uuid()->toString();
    //         }
    //     });
    // }

    /**
     * Relationship: A payment belongs to a customer (user).
     */
    public function customer()
    {
        return $this->belongsTo(User::class, 'customer_id');
    }

    /**
     * Relationship: A payment belongs to an event.
     */
    public function event()
    {
        return $this->belongsTo(Event::class, 'event_id');
    }

    /**
     * Convert amount from cents to LKR.
     */
    public function getFormattedAmountAttribute()
    {
        return number_format($this->amount / 100, 2) . ' LKR';
    } 

    public function tickets()
{
    return $this->hasMany(Ticket::class);
}

}
