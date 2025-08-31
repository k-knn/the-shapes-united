<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DiscountCode extends Model
{
    protected $primaryKey = 'discount_code_id';

    protected $fillable = [
        'code',
        'description',
        'discount_percentage',
        'valid_from',
        'valid_to',
        'is_active',
    ];

}
