<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class EventUpdateRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_id',
        'event_host_id',
        'update_data',
        'status',
    ];

    protected $casts = [
        'update_data' => 'array', // Automatically decode JSON data into an array
    ];

    /**
     * Relationship: An update request belongs to an event.
     */
    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    /**
     * Relationship: An update request is created by an event host (user).
     */
    public function eventHost()
    {
        return $this->belongsTo(User::class, 'event_host_id');
    }
}
