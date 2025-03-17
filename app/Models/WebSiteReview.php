<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class WebSiteReview extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'guest_name', 'guest_email', 'rating', 'comment', 'reply', 'is_approved'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
