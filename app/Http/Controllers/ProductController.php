<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductAnalytics;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules\Exists;
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
        $trending = ProductAnalytics::where('views', '>', '0')->with('product')->orderBy('views', 'asc')->limit(6)->get()->map(function ($t) {
            $t->product->append(['views', 'favorite']);
            return $t;
        });

        if ($gender) {
            $trending = ProductAnalytics::whereHas('product', function ($q) use ($gender) {
                return $q->where('gender', $gender);
            })->where('views', '>', '0')->with('product')->orderBy('views', 'asc')->limit(6)->get()->map(function ($t) {
                $t->product->append(['views', 'favorite']);
                return $t;
            });

            return Inertia::render(
                'Products',
                [
                    'title' => ucfirst($gender) . ' Products',
                    'products' => Product::where('gender', $gender)->orderBy('created_at', 'desc')->get()->append(['favorite', 'views']),
                    'gender' => $gender, 'trending' => $trending
                ]
            );
        }

        return Inertia::render('Products', [
            'title' => 'Products',
            'products' => Product::orderBy('created_at', 'asc')->get()->append(['favorite', 'views']),
            'trending' => $trending
        ]);
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
        $product = Product::with('productAnalytics')->find($id);

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

    public function favorite(Request $request, $id)
    {
        $user = Auth::user();

        $validated = $request->validate([
            'favorite' => 'required|numeric',
        ]);

        $product = Product::find($id);

        $product->productAnalytics()->increment('favorites', $validated['favorite']);

        // Check if product is favorited by user
        if ($product->whereHas('userFavorite', function ($q) use ($user, $product) {
            return $q->where("user_id", $user->id)->where('product_id', $product->id);
        })->get()->isNotEmpty()) {
            // favorited
            $user->favorite()->detach($product->id);
            return response()->json([
                'favorite' => false
            ]);
        } else {
            // not favorited
            $user->favorite()->attach($product->id);
            return response()->json([
                'favorite' => true
            ]);
        }
    }

    public function new()
    {
        $trending = ProductAnalytics::where('views', '>', '0')->with('product')->orderBy('views', 'asc')->limit(6)->get()->map(function ($t) {
            $t->product->append(['views', 'favorite']);
            return $t;
        });

        return Inertia::render('Products', ['title' => 'Newest Arrivals', 'products' => Product::orderBy('created_at', 'asc')->limit(20)->get()->append(['favorite']), 'trending' => $trending]);
    }

    public function featured()
    {
        $trending = ProductAnalytics::where('views', '>', '0')->with('product')->orderBy('views', 'asc')->limit(6)->get()->map(function ($t) {
            $t->product->append(['views', 'favorite']);
            return $t;
        });

        return Inertia::render('Products', ['title' => 'Featured', 'products' => Product::where('featured')->limit(20)->get()->append(['favorite']), 'trending' => $trending]);
    }
}
