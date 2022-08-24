<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $gender = fake()->randomElement(['male', 'female']);

        return [
            'name' => fake()->colorName(),
            'description' => fake()->realTextBetween(),
            'image_url' => "image/placeholder.png",
            'price' => fake()->numberBetween(0, 99999),
            'gender' => $gender
        ];
    }
}
