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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/', function () {
    $products = Product::all();

    return Inertia::render('Welcome', ['products' => $products]);
})->middleware(['auth', 'verified'])->name('welcome');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('/products', \App\Http\Controllers\ProductController::class)->middleware(['auth', 'verified']);
Route::get('/products/gender/{gender?}', [\App\Http\Controllers\ProductController::class, 'index'])->middleware('auth');

Route::get('/profile', function () {
    return Inertia::render('Profile');
});

Route::get('/cart', [\App\Http\Controllers\CartController::class, 'index'])->middleware(['auth'])->name('cart');

Route::post('/cart', [\App\Http\Controllers\CartController::class, 'addToCart'])->middleware(['auth']);

Route::put('/cart/{id}/amount', [\App\Http\Controllers\CartController::class, 'changeAmount'])->middleware(['auth']);

require __DIR__ . '/auth.php';
