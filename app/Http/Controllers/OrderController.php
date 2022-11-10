<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderStoreRequest;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
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

        $products = Cart::first('id', $data['cart_id'])->cartProducts()->get();

        $order = Auth::user()->orders()->create();

        foreach ($products as $product) {
            $order_item = OrderItem::create(['product_id' => $product->id, 'order_id' => $order->id]);

            $order->orderItems()->save($order_item);
        }

        return response()->json($products);
    }
}
