<?php

use Illuminate\Support\Facades\Route;

// This route handles the main React app
Route::get('/', function () {
    return view('app');
})->name('app');

// Catch-all route for React Router - this handles /dashboard, /register, etc.
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');

