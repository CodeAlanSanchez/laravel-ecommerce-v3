<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'discount_price',
        'gender',
        'image_url'
    ];

    public function cartProducts()
    {
        return $this->hasMany(CartProduct::class);
    }

    public function productAnalytics()
    {
        return $this->hasOne(productAnalytics::class);
    }
}
