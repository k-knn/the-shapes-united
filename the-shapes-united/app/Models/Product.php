<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;
use App\Models\ProductCategory;
use App\Models\ProductImage;
use App\Models\PriceTags;
use App\Traits\Uuids;


class Product extends Model
{
     // Helper function to automatically create the uuid when creating a new model instance
    use Uuids; 
    use HasFactory;
    protected $table = 'products'; // the name of the table to access from this model. 
    public $incrementing = true;
    
    // Note: When using the Elqouent Model like Product::all() or any other Elqouent methods
    // Use protected Fillables


    protected $primaryKey = 'product_id';

    protected $fillable = [
        'name',
        'description',
        'price',
        'category_id',
        'image_url',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'category_id');
    }

    public function inventory()
    {
        return $this->hasOne(Inventory::class, 'product_id', 'product_id');
    }

    public function variants()
    {
        return $this->hasMany(ProductVariant::class, 'product_id', 'product_id');
    }

    

    public function reviews()
    {
        return $this->hasMany(Review::class, 'product_id', 'product_id');
    }
    
    public function categories()
    {
        // One product belongs to many product categories 
        // Similarly, one product category belongs to many products
        // For many to many relationships we use pivot_table as first arguments in belongsToMany method
        return $this->belongsToMany(ProductCategory::class, 'product_pivot_productcategory', 'product_id', 'category_id');
    }

    // public function images()
    // {
    //     return $this->hasMany(ProductImage::class, 'product_id', 'id');
    // }
    
    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    
    public function colors()
    {
        return $this->belongsToMany(Color::class, 'product_color', 'product_id', 'color_id');
    }

    public function sizes()
    {
        return $this->belongsToMany(Size::class);
    }



    public function priceTags()
    {
        return $this->belongsToMany(PriceTags::class, "product_pivot_pricetags", "product_id", "price_tag_ids")->withPivot('price_tag_ids');
    }

    public function priceTagss()
    {
        // return $this->hasMany(PriceTags::class, "product_pivot_pricetags", "product_id", "price_tag_ids" );
        return $this->belongsToMany(ProductPivotPriceTags::class);
    }


}
