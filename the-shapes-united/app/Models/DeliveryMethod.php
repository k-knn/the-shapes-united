<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeliveryMethod extends Model
{
    protected $primaryKey = 'delivery_method_id';

    protected $fillable = [
        'name',
        'description',
        'cost',
        'is_pickup_available',
    ];

    public function orders()
    {
        return $this->hasMany(Order::class, 'delivery_method_id', 'delivery_method_id');
    }

    public function schemeOrders()
    {
        return $this->hasMany(SchemeOrder::class, 'delivery_method_id', 'delivery_method_id');
    }
}
