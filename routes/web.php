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

Route::get('/profile', function () {
    return Inertia::render('Profile');
});

Route::get('/cart', function () {
    $user = Auth::user();

    $cart = Cart::where('user_id', $user->id);

    return Inertia::render('Cart', ['cart' => $cart]);
})->middleware(['auth'])->name('cart');

Route::post('/cart', function (Request $request) {
    $user = Auth::user();

    $cart = Cart::where('user_id', $user->id);

    $validated = $request->validate([
        'product_id' => 'required|numeric',
        'amount' => 'required|numeric',
    ]);

    $cart->cartProducts()->create($validated);

    return Redirect::route('cart');
})->middleware(['auth']);

require __DIR__ . '/auth.php';
