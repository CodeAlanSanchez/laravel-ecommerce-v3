<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartProduct;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    public function addProduct($request)
    {

        $validated = $request->validate([
            'product_id' => 'numeric',
            'cart_id' => 'numeric',
            'amount' => 'numeric',
        ]);

        $cart = Cart::findOrFail($validated['cart_id']);

        $cartProduct = $cart->cartProduct()->create([
            'cart_id' => $validated['cart_id'],
            'product_id' => $validated['product_id'],
            'amount' => $validated['amount'],
        ]);

        return Inertia::render('Cart', ['cart' => $cart]);
    }
}
