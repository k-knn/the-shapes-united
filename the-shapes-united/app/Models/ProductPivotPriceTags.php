<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Product;
use App\Models\PriceTags;

class ProductPivotPriceTags extends Model
{
    use HasFactory;
    protected $table = 'product_pivot_pricetags';

    protected $fillable = ['product_id', 'price_tag_ids'];

    // Ensure the price_tag_ids attribute is cast to an array
    protected $casts = [
        'price_tag_ids' => 'array',
    ];

    public function priceTagss()
    {
        // return $this->hasMany(PriceTags::class, "product_pivot_pricetags", "product_id", "price_tag_ids" );
        return $this->belongsToMany(PriceTags::class, "product_pivot_pricetags", "product_id", "price_tag_ids");
    }

    public function productss()
    {
        return $this->belongsToMany(Product::class, "product_pivot_pricetags", 'product_id', 'price_tag_ids');
    }
}
