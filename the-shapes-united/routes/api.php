<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PriceTagController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProductPivotProductCategoryController;
use App\Http\Controllers\ProductPivotPriceTagController;
use App\Events\MessageSent;

Route::post ('/register', [AuthController::class, 'register']);
Route::post ('/login', [AuthController::class, 'login']);

 Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
});


Route::apiResource('categories', CategoryController::class);

Route::prefix('products')->group(function () {
    Route::get('/', [ProductController::class, 'index']);                  // List all products
    Route::get('/details', [ProductController::class, 'indexWithDetails']); // List all products with details
    Route::get('/{id}', [ProductController::class, 'show']);              // Show single product
    Route::get('/alldetails', [ProductController::class, 'displayProductDetails']);
    Route::post('/', [ProductController::class, 'store']);                // Create product
    Route::post('/storeDetails', [ProductController::class, 'storeProductDetails']);
    Route::put('/{id}', [ProductController::class, 'update']);            // Update product
    Route::delete('/delete/{id}', [ProductController::class, 'destroy']);        // Delete product
});
