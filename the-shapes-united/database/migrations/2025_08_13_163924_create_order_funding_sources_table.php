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
      Schema::create('order_funding_sources', function (Blueprint $table) {
            $table->id('funding_id');
            $table->foreignId('order_id')->constrained('orders', 'order_id')->onDelete('cascade');
            $table->enum('funding_type', ['NDIS', 'TAC', 'DVA', 'HCP', 'Health Insurance']);
            $table->string('country');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('company')->nullable();
            $table->string('address_line1');
            $table->string('address_line2')->nullable();
            $table->string('city');
            $table->string('state');
            $table->string('postcode');
            $table->string('phone')->nullable();
            $table->foreignId('confirmed_by_staff_id')->nullable()->constrained('staff', 'staff_id')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_funding_sources');
    }
};
