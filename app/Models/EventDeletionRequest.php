<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class EventDeletionRequest extends Model
{
    use HasFactory;

    protected $fillable = ['event_id', 'event_host_id', 'reason', 'status'];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function eventHost()
    {
        return $this->belongsTo(User::class, 'event_host_id');
    }
}
