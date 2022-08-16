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
        if ($gender)
            return Inertia::render('Products', ['products' => Product::where('gender', $gender)->get(), 'gender' => $gender]);

        return Inertia::render('Products', ['products' => Product::all()]);
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

        Product::create(array_merge($validated, ['image_url' => $image_path]));

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
