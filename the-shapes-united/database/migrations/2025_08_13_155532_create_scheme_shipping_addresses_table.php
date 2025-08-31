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
       Schema::create('scheme_shipping_addresses', function (Blueprint $table) {
            $table->id('scheme_shipping_address_id');
            $table->foreignId('scheme_order_id')->constrained('scheme_orders', 'scheme_order_id')->onDelete('cascade');
            $table->string('street_address');
            $table->string('suburb');
            $table->string('state');
            $table->string('postcode');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('scheme_shipping_addresses');
    }
};
