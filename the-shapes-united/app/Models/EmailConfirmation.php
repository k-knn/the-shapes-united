<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmailConfirmation extends Model
{
    protected $primaryKey = 'confirmation_id';

    protected $fillable = [
        'user_id',
        'token',
        'confirmed_at',
        'expires_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }
}
