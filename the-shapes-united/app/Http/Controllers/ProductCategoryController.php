<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductCategory;
use App\Models\Product;
class ProductCategoryController extends Controller
{
    /**
     * Display a listing of the product categories.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $categories = ProductCategory::withCount('products')->get(); // using relations to get count of products in each category
            return response()->json([
                'status' => true,
                'status_code' => 200,
                'message' => 'Product categories retrieved successfully',
                'data' => $categories, 
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'status_code' => 500,
                'message' => 'Unable to retrieve product categories',
            ], 500);
        }
    }

    /**
     * Store a newly created product category in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|string',
            'product_id' => 'nullable|exists:product,id', // Check it exists in product_table or not
        ]);

        $category = ProductCategory::create([
            'name' => $request->name,
            'image' => $request->image,
            'product_id' => $request->product_id,
        ]);

        return response()->json(['message' => 'Product category created successfully', 'category' => $category]);
    }

    /**
     * Display the specified product category.
     *
     * @param  \App\Models\ProductCategory  $productCategory
     * @return \Illuminate\Http\Response
     */
    public function show(ProductCategory $productCategory)
    {
        return response()->json(['category' => $productCategory]);
    }

    /**
     * Update the specified product category in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProductCategory  $productCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProductCategory $productCategory)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|string',
            'product_id' => 'nullable|exists:product,id',
        ]);

        $productCategory->update([
            'name' => $request->name,
            'image' => $request->image,
            'product_id' => $request->product_id,
        ]);

        return response()->json(['message' => 'Product category updated successfully', 'category' => $productCategory]);
    }

    /**
     * Remove the specified product category from storage.
     *
     * @param  \App\Models\ProductCategory  $productCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductCategory $productCategory)
    {
        $productCategory->delete();
        return response()->json(['message' => 'Product category deleted successfully']);
    }
}
