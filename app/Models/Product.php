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
        'image_url',
        'featured'
    ];

    public function trending()
    {
        return $this->hasOne(ProductAnalytics::class)->where('views', '>', '0');
    }

    public function getFavoriteAttribute()
    {
        return $this->userFavorite()->get();
    }

    public function getViewsAttribute()
    {
        return $this->productAnalytics->views;
    }

    public function cartProducts()
    {
        return $this->hasMany(CartProduct::class);
    }

    public function productAnalytics()
    {
        return $this->hasOne(ProductAnalytics::class);
    }

    public function userFavorite()
    {
        return $this->belongsToMany(User::class, 'user_favorites');
    }
}
