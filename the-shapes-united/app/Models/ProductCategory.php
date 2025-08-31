<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Traits\Uuids;
use App\Models\Product;

class ProductCategory extends Model
{
    // Helper function to automatically create the uuid when creating a new model instance
    use Uuids;   
    use HasFactory;
    protected $table = 'product_category';
    protected $fillable = ['name', 'image', 'product_id'];
    
    public function products()
    {
        return $this->belongsToMany(Product::class, "product_pivot_productcategory", 'category_id', 'product_id');
    }
}
