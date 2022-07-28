<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class CartProduct extends Model
{
    use HasFactory;

    // protected $table = 'cart_products';

    protected $fillable = [
        'amount',
        'cart_id',
        'product_id',
    ];

    public $incrementing = true;

    public function cart()
    {
        return $this->belongsTo(Cart::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
