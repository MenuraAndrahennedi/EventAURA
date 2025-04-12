<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserLogin extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'login_time',
        'logout_time',
        'ip_address',
    ];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    protected $casts = [
        'login_time' => 'datetime',
        'logout_time' => 'datetime',
    ];
    
}
