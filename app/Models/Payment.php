<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = ['customer_id', 'guest_id', 'payment_id', 'amount', 'currency', 'status', 'response'];

    public function customer() {
        return $this->belongsTo(User::class, 'customer_id');
    }
}
