<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $term = $request->validate(['query' => 'string']);

        $result = Product::where('name', 'like', '%' . $term['query'] . '%')->orWhere('description', 'like', '%' . $term['query'] . '%')->latest()->get();

        return Inertia::render('Products', ['products' => $result, 'title' => 'Search Results']);
    }
}
