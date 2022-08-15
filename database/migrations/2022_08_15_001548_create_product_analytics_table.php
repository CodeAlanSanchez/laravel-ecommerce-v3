<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_analytics', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('views');
            $table->unsignedBigInteger('cart_adds');
            $table->unsignedBigInteger('favorites');

            $table->foreignId('product')->nullable()->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_analytics');
    }
};
