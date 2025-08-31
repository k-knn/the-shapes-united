<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SchemeOrderItem extends Model
{
    protected $primaryKey = 'scheme_order_item_id';

    protected $fillable = [
        'scheme_order_id',
        'item_description',
    ];

    public function schemeOrder()
    {
        return $this->belongsTo(SchemeOrder::class, 'scheme_order_id', 'scheme_order_id');
    }
}
