<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GiftCard extends Model
{
    protected $primaryKey = 'gift_card_id';

    protected $fillable = [
        'code',
        'amount',
        'expiry_date',
        'is_active',
    ];
}
