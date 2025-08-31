<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\PriceTags;
use App\Models\ProductPivotPriceTags;
class ProductPivotPriceTagController extends Controller
{
  public function associatePriceTags(Request $request, $productId)
    {

        try {

            $productId = $request->input('product_id');
            $product = Product::find($productId);

            if (!$product) {
                return response()->json([
                    'message' => 'Product not found',
                ], 404);
            }

            $priceTagIds = $request->input('price_tag_id', []);
            
            $priceTagModels = [];
            foreach ($priceTagIds as $priceTagId) {
                $priceTag = PriceTags::find($priceTagId);
                if (!$priceTag) {
                    return response()->json([
                        'message' => 'Price tag not found',
                    ], 404);
                }
                
            }
    
            // Create a new ProductPivotPriceTags instance and set the product_id and price_tag_ids
            $storeData = new ProductPivotPriceTags();
            $storeData->product_id = $productId;
            $storeData->price_tag_ids = $priceTagIds;
            $storeData->save();
            
            return response()->json([
                        'message' => 'Price tags associated with the product successfully',
                        'product' => $product,
                        'store_data' => $storeData // Include the stored data in the response
            ], 200);
            } catch (\Exception $e) {
                return response()->json([
                    'message' => 'Error associating price tags with the product',
                    'error' => $e->getMessage(),
                ], 500);
            
            }
        }  
}
