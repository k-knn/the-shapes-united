<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Carer extends Model
{
    protected $primaryKey = 'carer_id';

    protected $fillable = [
        'name',
        'phone_number',
        'email',
    ];

    public function schemeOrders()
    {
        return $this->hasMany(SchemeOrder::class, 'carer_id', 'carer_id');
    }
}
