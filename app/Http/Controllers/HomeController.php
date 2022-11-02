<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke(Request $request)
    {
        $trending = Product::whereHas('trending')->limit(4)->get();

        $trending->append(['views', 'favorite']);

        return Inertia::render('Welcome', ['products' => Product::all(), 'trending' => $trending]);
    }
}
