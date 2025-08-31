<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserSession extends Model
{
    //
    protected $primaryKey = 'session_id';

    protected $fillable = [
        'user_id',
        'ip_address',
        'user_agent',
        'last_active_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }
}
