<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SchemeOrder extends Model
{
    protected $primaryKey = 'scheme_order_id';

    protected $fillable = [
        'user_id',
        'participant_id',
        'plan_manager_id',
        'carer_id',
        'delivery_method_id',
        'order_notes',
        'staff_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }

    public function participant()
    {
        return $this->belongsTo(Participant::class, 'participant_id', 'participant_id');
    }

    public function planManager()
    {
        return $this->belongsTo(PlanManager::class, 'plan_manager_id', 'plan_manager_id');
    }

    public function carer()
    {
        return $this->belongsTo(Carer::class, 'carer_id', 'carer_id');
    }

    public function deliveryMethod()
    {
        return $this->belongsTo(DeliveryMethod::class, 'delivery_method_id', 'delivery_method_id');
    }

    public function staff()
    {
        return $this->belongsTo(Staff::class, 'staff_id', 'staff_id');
    }

    public function items()
    {
        return $this->hasMany(SchemeOrderItem::class, 'scheme_order_id', 'scheme_order_id');
    }

    public function shippingAddress()
    {
        return $this->hasOne(SchemeShippingAddress::class, 'scheme_order_id', 'scheme_order_id');
    }

    public function payments()
    {
        return $this->hasMany(SchemePayment::class, 'scheme_order_id', 'scheme_order_id');
    }
}
