<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PriceTags extends Model
{
     // Helper function to automatically create the uuid when creating a new model instance
    use Uuids; 
    use HasFactory;
    protected $table = 'price_tags';
    protected $fillable = ['name', 'price', 'product_id'];

    public function products()
    {
        // related to class
        // related foreign table or pivot table
        // related foreign key of pivot table that goes from this table PriceTags
        // related foreign key of pivot table that comes from other table Product
        return $this->belongsToMany(Product::class, 'product_pivot_pricetags', 'price_tag_id', 'product_id');
    }

}
