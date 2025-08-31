<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SchemePayment extends Model
{
    protected $primaryKey = 'scheme_payment_id';

    protected $fillable = [
        'scheme_order_id',
        'amount_paid',
        'payment_method',
        'payment_status',
        'payment_date',
    ];

    public function schemeOrder()
    {
        return $this->belongsTo(SchemeOrder::class, 'scheme_order_id', 'scheme_order_id');
    }
}
