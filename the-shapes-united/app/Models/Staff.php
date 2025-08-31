<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    protected $primaryKey = 'staff_id';

    protected $fillable = [
        'user_id',
        'position',
        'is_active',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }

    public function processedOrders()
    {
        return $this->hasMany(Order::class, 'staff_id', 'staff_id');
    }

    public function processedSchemeOrders()
    {
        return $this->hasMany(SchemeOrder::class, 'staff_id', 'staff_id');
    }
}
