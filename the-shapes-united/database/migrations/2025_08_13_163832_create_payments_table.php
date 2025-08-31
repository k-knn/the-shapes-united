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
         Schema::create('payments', function (Blueprint $table) {
            $table->increments('payment_id'); // PK
            $table->unsignedBigInteger('order_id'); // FK → Orders(order_id)
            $table->unsignedBigInteger('payment_method_id'); // FK → PaymentMethods(payment_method_id)
            $table->decimal('amount_paid', 10, 2); // Amount paid
            $table->string('payment_status'); // Paid, Pending, Refunded
            $table->dateTime('payment_date')->nullable(); // Date of transaction
            $table->timestamps();

            // Foreign keys
            $table->foreign('order_id')->references('order_id')->on('orders')->onDelete('cascade');
            $table->foreign('payment_method_id')->references('payment_method_id')->on('payment_methods')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
