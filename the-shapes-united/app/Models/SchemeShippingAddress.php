<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SchemeShippingAddress extends Model
{
    protected $primaryKey = 'scheme_shipping_address_id';

    protected $fillable = [
        'scheme_order_id',
        'street_address',
        'suburb',
        'state',
        'postcode',
    ];

    public function schemeOrder()
    {
        return $this->belongsTo(SchemeOrder::class, 'scheme_order_id', 'scheme_order_id');
    }
}
