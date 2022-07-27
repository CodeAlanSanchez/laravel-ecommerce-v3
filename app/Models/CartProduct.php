<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class CartProduct extends Pivot
{
    use HasFactory;

    protected $table = 'cart_products';

    protected $fillable = [
        'amount'
    ];

    public $incrementing = true;

    public function cart()
    {
        return $this->hasOne(Cart::class);
    }

    public function product()
    {
        return $this->hasOne(Product::class);
    }
}
