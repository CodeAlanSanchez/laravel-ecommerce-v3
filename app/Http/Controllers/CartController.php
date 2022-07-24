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
            'product_id' => 'required|numeric',
            'cart_id' => 'required|numeric',
            'amount' => 'required|numeric',
        ]);

        $cart = Cart::findOrFail($validated['cart_id']);

        $cart->cartProduct()->create([
            'cart_id' => $validated['cart_id'],
            'product_id' => $validated['product_id'],
            'amount' => $validated['amount'],
        ]);

        return Inertia::render('Cart', ['cart' => $cart]);
    }
}
