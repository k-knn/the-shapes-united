<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderFundingSource extends Model
{
    //
    protected $primaryKey = 'funding_source_id';

    protected $fillable = [
        'order_id',
        'funding_type', // e.g., 'NDIS', 'HCP', 'DVA', 'TAC', 'Health Insurance', 'Credit Card', etc.
        'details',      // JSON or TEXT for storing additional funding info if needed
    ];

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id', 'order_id');
    }
}
