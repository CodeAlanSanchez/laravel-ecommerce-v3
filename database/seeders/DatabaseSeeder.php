<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Product::factory()->count(25)->create()->each(function ($product) {
            $product->productAnalytics()->create([
                'product' => $product->id,
                'views' => 0,
                'favorites' => 0,
                'cart_adds' => 0
            ]);
        });

        $user = User::create([
            "name" => "guest",
            "email" => "guest@guest.com",
            "password" => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'remember_token' => Str::random(10),
        ]);

        $user->cart()->create([
            'user_id' => $user->id,
        ]);
    }
}
