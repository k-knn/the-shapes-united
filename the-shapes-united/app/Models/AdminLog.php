<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdminLog extends Model
{
    protected $primaryKey = 'log_id';

    protected $fillable = [
        'staff_id',
        'action',
        'details',
        'created_at',
    ];

    public function staff()
    {
        return $this->belongsTo(Staff::class, 'staff_id', 'staff_id');
    }
}
