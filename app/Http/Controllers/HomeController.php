<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductAnalytics;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        $trending = ProductAnalytics::where('views', '>', '0')->with('product')->orderBy('views', 'asc')->limit(4)->get()->map(function ($t) {
            $t->product->append(['views', 'favorite']);
            return $t;
        });

        return Inertia::render('Welcome', ['products' => Product::all()->append(['favorite']), 'trending' => $trending]);
    }
}
