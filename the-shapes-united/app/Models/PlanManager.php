<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlanManager extends Model
{
    protected $primaryKey = 'plan_manager_id';

    protected $fillable = [
        'name',
        'phone_number',
        'email',
    ];

    public function schemeOrders()
    {
        return $this->hasMany(SchemeOrder::class, 'plan_manager_id', 'plan_manager_id');
    }
}
