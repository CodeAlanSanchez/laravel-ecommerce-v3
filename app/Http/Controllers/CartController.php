<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartProduct;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CartController extends Controller
{
    public function addToCart(Request $request)
    {
        $user = Auth::user();

        $cart = Cart::where('user_id', $user->id)->first();

        $validated = $request->validate([
            'product_id' => 'required|numeric',
            'amount' => 'required|numeric',
        ]);

        $product = Product::find($validated['product_id']);

        $cartProduct = CartProduct::create($validated);

        $cart->cartProducts()->save($cartProduct);

        $product->cartProducts()->save($cartProduct);

        return Redirect::route('cart');
    }

    public function index()
    {
        $user = Auth::user();

        $cart = Cart::where('user_id', $user->id)->first();

        $cartItems = CartProduct::where('cart_id', $cart->id)->with('product')->get();

        return Inertia::render('Cart', ['cart_items' => $cartItems]);
    }
}
