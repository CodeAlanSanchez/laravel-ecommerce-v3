<?php

use App\Models\Cart;
use App\Models\CartProduct;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Authentication

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Welcome

Route::get('/', function () {
    $trending = Product::whereHas('productAnalytics', function ($q) {
        return $q->where('views', '>', 0);
    })->get();

    return Inertia::render('Welcome', ['products' => Product::all(), 'trending' => $trending]);
})->middleware(['auth', 'verified'])->name('welcome');

// Dashboard

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Profile Routes

Route::get('/profile', function () {
    return Inertia::render('Profile');
});

// Product Routes

Route::resource('/products', \App\Http\Controllers\ProductController::class)->middleware(['auth', 'verified']);
Route::get('/products/gender/{gender?}', [\App\Http\Controllers\ProductController::class, 'index'])->middleware('auth');
Route::put('/products/{id}/favorite', [\App\Http\Controllers\ProductController::class, 'favorite'])->middleware('auth');

// Cart Routes

Route::get('/cart', [\App\Http\Controllers\CartController::class, 'index'])->middleware(['auth'])->name('cart');

Route::delete('/cart/{id}', [\App\Http\Controllers\CartController::class, 'removeFromCart'])->middleware(['auth']);

Route::post('/cart', [\App\Http\Controllers\CartController::class, 'addToCart'])->middleware(['auth']);

Route::put('/cart/{id}/amount', [\App\Http\Controllers\CartController::class, 'changeAmount'])->middleware(['auth']);

// Checkout

Route::get('/checkout', function () {
    $user = Auth::user();

    $cart = Cart::where('user_id', $user->id)->first();

    $cartItems = CartProduct::where('cart_id', $cart->id)->with('product')->orderBy('id')->get();

    return Inertia::render('Checkout', ['cart_items' => $cartItems]);
});

require __DIR__ . '/auth.php';
