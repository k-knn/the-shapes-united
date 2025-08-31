<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductImage;
use App\Models\Product;
use Illuminate\Support\Facades\Storage; // For file upload
use Illuminate\Support\Facades\Validator;

class ProductImageController extends Controller
{
     public function store(Request $request, $productId)
    {
        $request->validate([
            'image_urls' => 'required|array',
            'image_urls.*' => 'required|url',
        ]);

        $product = Product::findOrFail($productId);
        
        if (!Storage::exists('public/product_images')) {
            Storage::makeDirectory('public/product_images');
        }

        // php artisan storage:link run this command for storing images in the public folder
        if (!empty($request->hasFile('image_urls'))) {
            $image = $request->file('image_urls');
            $filename = time() . '.' . $image->getClientOriginalExtension();
            Storage::makeDirectory('public/product_images');
            $path = $image->storeAs('public/product_images/productImgs', $filename);
            // Check if $user exists and is not null
            if ($product) {
                $product->image = $filename;
            }
        }

        // Create or update product images
        $product->images()->updateOrCreate([], [
            'image_urls' => $request->image_urls,
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Product images saved successfully', 
            'data' => $product->images,
        
        ]);
    }

    public function show($productId)
    {
        $product = Product::findOrFail($productId);
        $images = $product->images;

        return response()->json(['images' => $images]);
    }

    public function destroy($productId)
    {
        $product = Product::findOrFail($productId);
        $product->images()->delete();

        return response()->json(['message' => 'Product images deleted successfully']);
    }
}
