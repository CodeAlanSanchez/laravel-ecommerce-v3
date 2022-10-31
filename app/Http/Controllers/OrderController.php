<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderStoreRequest;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        return Inertia::render('Orders', ['orders' => Auth::user()->orders()]);
    }

    public function store(OrderStoreRequest $request)
    {
        $data = $request->validated();

        $products = Cart::first($data['cart_id'])->cartProducts()->get();

        $order = Auth::user()->orders()->create();

        foreach ($products as $product) {
            $order->orderItems->save($product->id);
            $order->save();
        }

        return response()->json($products);
    }
}
