<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductAnalytics;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($gender = null)
    {
        if ($gender) {
            $trending = Product::whereHas('productAnalytics', function ($q) {
                return $q->where('views', '>', 0);
            })->where('gender', $gender)->get();

            return Inertia::render(
                'Products',
                [
                    'products' => Product::where('gender', $gender)->get(),
                    'gender' => $gender, 'trending' => $trending
                ]
            );
        }

        $trending = Product::whereHas('productAnalytics', function ($q) {
            return $q->where('views', '>', 0);
        })->get();

        return Inertia::render('Products', ['products' => Product::all(), 'trending' => $trending]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Products/ProductForm');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'discount' => 'numeric',
            'image' => 'required|max:12000',
            'gender' => 'alpha',
        ]);

        $image_path = $request->file('image')->store('image', 'public');

        unset($validated['image']);

        $product = Product::create(array_merge($validated, ['image_url' => $image_path]));

        $product->productAnalytics()->create([
            'product_id' => $product->id,
            'views' => 0,
            'favorites' => 0,
            'cart_adds' => 0
        ]);

        return Redirect::route('welcome');
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::find($id);

        $product->productAnalytics->views = $product->productAnalytics->views + 1;

        $product->productAnalytics->save();

        return Inertia::render('Product', ['product' => $product]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $product = Product::first('id', $id);

        $validated = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'image' => 'max:12000',
            'discount' => 'numeric',
            'gender' => 'alpha|nullable',
        ]);

        unset($validated['image']);

        if ($file = $request->file('image')) {
            $image_path = $file->store('image', 'public');

            $validated['image_url'] = $image_path;
        }

        $product->update(array_merge($validated));

        return Redirect::route('products.show', ['product' => $product]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
