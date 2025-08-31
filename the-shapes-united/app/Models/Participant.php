<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Participant extends Model
{
    protected $primaryKey = 'participant_id';

    protected $fillable = [
        'name',
        'dob',
        'ndis_number',
        'email',
        'funding_type',
    ];

    public function schemeOrders()
    {
        return $this->hasMany(SchemeOrder::class, 'participant_id', 'participant_id');
    }
}
