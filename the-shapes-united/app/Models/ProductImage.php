<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Product;
use App\Traits\Uuids;
class ProductImage extends Model
{
      // Helper function to automatically create the uuid when creating a new model instance
    use Uuids; 
    use HasFactory;
    protected $table = 'product_image';
     protected $fillable = [
        'product_id',
        'image_url',
        'alt_text',
    ];

    protected $primaryKey = 'image_id';

    // protected $casts = [
    //     'image_urls' => 'json'  // Cast the image_urls attribute to JSON
    // ];

    
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id', 'product_id');
    }

}
