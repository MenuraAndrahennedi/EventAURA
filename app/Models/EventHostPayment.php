<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class EventHostPayment extends Model
{
    use HasFactory;

    protected $fillable = ['event_host_id', 'amount', 'payment_status', 'transaction_id'];

    public function eventHost() {
        return $this->belongsTo(User::class, 'event_host_id');
    }
}
