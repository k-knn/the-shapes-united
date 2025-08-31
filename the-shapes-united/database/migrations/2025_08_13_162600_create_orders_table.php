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
       Schema::create('orders', function (Blueprint $table) {
            $table->id('order_id');
            $table->foreignId('user_id')->constrained('users', 'user_id')->onDelete('cascade');
            $table->foreignId('shipping_address_id')->constrained('addresses', 'address_id')->onDelete('cascade');
            $table->foreignId('billing_address_id')->constrained('addresses', 'address_id')->onDelete('cascade');
            $table->foreignId('delivery_method_id')->constrained('delivery_methods', 'delivery_method_id')->onDelete('cascade');
            $table->foreignId('discount_code_id')->nullable()->constrained('discount_codes', 'discount_code_id')->onDelete('cascade');
            $table->foreignId('gift_card_id')->nullable()->constrained('gift_cards', 'gift_card_id')->onDelete('cascade');
            $table->decimal('total_amount', 10, 2);
            $table->enum('status', ['pending', 'confirmed', 'shipped', 'cancelled'])->default('pending');
            $table->foreignId('staff_id')->nullable()->constrained('staff', 'staff_id')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
