<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('scheme_order_items', function (Blueprint $table) {
            $table->id('scheme_order_item_id');
            $table->foreignId('scheme_order_id')->constrained('scheme_orders', 'scheme_order_id')->onDelete('cascade');
            $table->text('item_description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('scheme_order_items');
    }
};
