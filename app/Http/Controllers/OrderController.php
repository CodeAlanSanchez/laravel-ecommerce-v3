<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderStoreRequest;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Auth::user()->orders()->get();

        return Inertia::render('Orders', ['orders' => $orders]);
    }

    public function store(OrderStoreRequest $request)
    {
        $data = $request->validated();

        $products = Cart::first('id', $data['cart_id'])->cartProducts()->get();

        $order = Auth::user()->orders()->create();

        $price = 0;

        foreach ($products as $product) {
            $order_item = OrderItem::create(['product_id' => $product->id, 'order_id' => $order->id]);

            $price = $price + $product->product->price;

            $order->orderItems()->save($order_item);
        }

        $order->price = $price;
        $order->save();

        return response()->json($products);
    }

    public function show(Order $order)
    {
        return Inertia::render('Order', ['order' => $order->with('orderItems')]);
    }
}
