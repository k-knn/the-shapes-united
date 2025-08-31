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
      Schema::create('scheme_payments', function (Blueprint $table) {
            $table->id('scheme_payment_id');
            $table->foreignId('scheme_order_id')->constrained('scheme_orders', 'scheme_order_id')->onDelete('cascade');
            $table->decimal('amount_paid', 12, 2);
            $table->enum('payment_method', ['credit_card', 'paypal', 'after_pay', 'bank_deposit', 'ndis', 'hcp', 'dva', 'tac', 'health_insurance']);
            $table->enum('payment_status', ['pending', 'paid', 'failed', 'refunded'])->default('pending');
            $table->timestamp('payment_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('scheme_payments');
    }
};
