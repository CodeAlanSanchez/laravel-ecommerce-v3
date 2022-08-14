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

        if ($cartItem = CartProduct::where('cart_id', $cart->id)->first()) {
            $cartItem->amount = $cartItem->amount + 1;

            $cartItem->save();

            return Redirect::route('cart');
        }

        $product = Product::find($validated['product_id']);

        $cartProduct = CartProduct::create($validated);

        $cart->cartProducts()->save($cartProduct);

        $product->cartProducts()->save($cartProduct);

        return Redirect::route('cart');
    }

    public function removeFromCart($id)
    {
        $user = Auth::user();

        $cartItem = CartProduct::where('user_id', $user->id)->where('id', $id)->first();

        if ($cartItem) {
            $cartItem->delete();

            return Redirect::route('cart');
        }

        return Redirect::route('cart');
    }

    public function index()
    {
        $user = Auth::user();

        $cart = Cart::where('user_id', $user->id)->first();

        $cartItems = CartProduct::where('cart_id', $cart->id)->with('product')->orderBy('id')->get();

        return Inertia::render('Cart', ['cart_items' => $cartItems]);
    }

    public function changeAmount(Request $request, $id)
    {
        $cartProduct = CartProduct::where(['id' => $id])->first();

        $validate = $request->validate([
            'amount' => 'required|numeric',
        ]);

        $cartProduct->amount = $validate['amount'];

        $cartProduct->save();

        return Redirect::route('cart');
    }
}
