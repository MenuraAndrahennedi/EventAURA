<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    protected $fillable = ['name', 'role', 'bio', 'image'];

    public function events()
    {
        return $this->belongsToMany(Event::class);
    }
}
