<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartProduct;
use Auth;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function __invoke()
    {
        $user = Auth::user();

        $cart = Cart::where('user_id', $user->id)->first();

        $cartItems = CartProduct::where('cart_id', $cart->id)->with('product')->orderBy('id')->get();

        return Inertia::render('Checkout', ['cart_items' => $cartItems, 'cart_id' => $cart->id]);
    }
}
