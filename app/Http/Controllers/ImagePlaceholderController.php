<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Redirect;

class ImagePlaceholderController extends Controller
{
    public function __invoke(Request $request, $name)
    {
        if ($image = $request->file('image')) {
            $fileName = "";
            match ($name) {
                'placeholder' => $fileName = 'placeholder',
                'men' => $fileName = 'men',
                'women' => $fileName = 'women',
            };

            $image->storeAs('image', $fileName . ".png", 'public');
        }

        return Redirect::back();
    }
}
