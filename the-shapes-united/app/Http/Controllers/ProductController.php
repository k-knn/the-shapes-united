<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductPivotPriceTags;
use App\Models\PriceTags;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    // Show all products
    public function index()
    {
        $products = Product::all();
        return response()->json(['products' => $products]);
    }

    // Show all products with related categories, images, and variants
    public function indexWithDetails()
    {
        $products = Product::with(['category', 'images', 'variants'])->get();

        return response()->json([
            'meta' => [
                'page' => 1,
                'pageSize' => $products->count(),
                'total' => Product::count(),
            ],
            'data' => $products,
        ]);
    }

    // Display the contents in the home page dashboard
   public function displayProductDetails(Request $request)
    {
    $query = Product::with(['category', 'images', 'variants', 'reviews', 'colors', 'sizes' ]);

    // Filter by category name (if using pivot many-to-many)
    if ($request->has('category')) {
        $query->whereHas('categories', function ($q) use ($request) {
            $q->where('name', $request->category);
        });
    }

    // Filter by price range
    if ($request->has(['min_price', 'max_price'])) {
        $query->whereBetween('price', [$request->min_price, $request->max_price]);
    }

    // Filter by color using many-to-many relationship
    if ($request->has('color')) {
        $query->whereHas('colors', function ($q) use ($request) {
            $q->where('name', $request->color);
        });
    }

    // Filter by size
    if ($request->has('size')) {
        $query->whereHas('sizes', function ($q) use ($request) {
            $q->where('name', $request->size);
        });
    }

    // // Filter by style
    // if ($request->has('style')) {
    //     $query->whereHas('variants', function ($q) use ($request) {
    //         $q->where('style', $request->style);
    //     });
    // }

    // Sorting
    if ($request->has('sort')) {
        switch ($request->sort) {
            case 'price_low_high':
                $query->orderBy('price', 'asc');
                break;
            case 'price_high_low':
                $query->orderBy('price', 'desc');
                break;
            case 'latest':
                $query->latest();
                break;
            case 'rating':
                $query->withAvg('reviews', 'rating')->orderBy('reviews_avg_rating', 'desc');
                break;
            default:
                $query->latest();
        }
    }

    // Paginate and transform
    $products = $query->paginate(10);

    $data = $products->through(function ($product) {
        return [
            'id' => $product->product_id,
            'name' => $product->name,
            'price' => $product->price,
            'description' => $product->description,
            'category' => $product->category->name ?? null,
            'image_url' => $product->image_url,
            'available_colors' => $product->colors->pluck('name')->unique()->values(),
            'available_sizes' => $product->sizes->pluck('name')->unique()->values(),
            'rating' => round($product->reviews->avg('rating'), 1),
            'images' => $product->images->pluck('url'),
        ];
    });

    return response()->json($data);
    }



    // Show a single product by ID with relations
    public function show($productId)
    {
        $product = Product::with(['category', 'images', 'variants'])->findOrFail($productId);

        return response()->json(['product' => $product]);
    }

    // Store a new product
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'category_id' => 'required|integer|exists:categories,category_id',
            'status' => 'nullable|string|in:Available,Out of Stock',
        ]);

        $product = Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'category_id' => $request->category_id,
            'status' => $request->status ?? 'Available',
        ]);

        return response()->json(['message' => 'Product created successfully', 'product' => $product], 201);
    }

   // Store a new product with related details
    public function storeProductDetails(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'category_id' => 'required|exists:categories,category_id',
            'images' => 'nullable|array',
            'images.*' => 'string',
            'colors' => 'nullable|array',
            'colors.*' => 'string',
            'sizes' => 'nullable|array',
            'sizes.*' => 'string',
            'rating' => 'nullable|numeric|min:0|max:5',
        ]);

        DB::beginTransaction();

        try {
            $product = Product::create([
                'name' => $validated['name'],
                'description' => $validated['description'] ?? null,
                'price' => $validated['price'],
                'category_id' => $validated['category_id'],
            ]);

            if (!empty($validated['images'])) {
                foreach ($validated['images'] as $url) {
                    $product->images()->create(['image_url' => $url]);
                }
            }

            if (!empty($validated['colors'])) {
                $colorIds = [];
                foreach ($validated['colors'] as $colorName) {
                    $color = Color::firstOrCreate(['name' => $colorName]);
                    $colorIds[] = $color->id;
                }
                $product->colors()->attach($colorIds);
            }

            if (!empty($validated['sizes'])) {
                $sizeIds = [];
                foreach ($validated['sizes'] as $sizeName) {
                    $size = Size::firstOrCreate(['name' => $sizeName]);
                    $sizeIds[] = $size->id;
                }
                $product->sizes()->attach($sizeIds);
            }

            if (!empty($validated['rating'])) {
                $product->reviews()->create([
                    'rating' => $validated['rating'],
                    'review_text' => 'Initial rating entry.',
                    'user_id' => auth()->id() ?? null,
                ]);
            }

            DB::commit();

            return response()->json([
                'message' => 'Product created successfully.',
                'product' => $product->load(['images', 'colors', 'sizes', 'reviews']),
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            \Log::error('Error creating product: ' . $e->getMessage());
            return response()->json(['error' => 'Product creation failed.'], 500);
        }
    }

    // Update existing product
    public function update(Request $request, $productId)
    {
        $product = Product::findOrFail($productId);

        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'sometimes|required|numeric|min:0',
            'category_id' => 'sometimes|required|integer|exists:categories,category_id',
            'status' => 'nullable|string|in:Available,Out of Stock',
        ]);

        $product->update($request->only(['name', 'description', 'price', 'category_id', 'status']));

        return response()->json(['message' => 'Product updated successfully', 'product' => $product]);
    }

    // Delete a product
    public function destroy($productId)
    {
        $product = Product::findOrFail($productId);
        $product->delete();

        return response()->json(['message' => 'Product deleted successfully']);
    }
}
