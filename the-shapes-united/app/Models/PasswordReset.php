<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PasswordReset extends Model
{
    //
    protected $primaryKey = 'reset_id';

    protected $fillable = [
        'email',
        'token',
        'created_at',
    ];

    public $timestamps = false;
}
