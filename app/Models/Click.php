<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Click extends Model
{
    use HasFactory;

    protected $fillable = ['event_id', 'number_of_clicks'];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
