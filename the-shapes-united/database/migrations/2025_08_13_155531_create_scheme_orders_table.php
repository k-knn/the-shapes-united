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
         Schema::create('scheme_orders', function (Blueprint $table) {
            $table->id('scheme_order_id');
            $table->foreignId('user_id')->constrained('users', 'user_id')->onDelete('cascade');
            $table->foreignId('plan_manager_id')->nullable()->constrained('plan_managers', 'plan_manager_id');
            $table->foreignId('carer_id')->nullable()->constrained('carers', 'carer_id');
            $table->foreignId('delivery_method_id')->constrained('delivery_methods', 'delivery_method_id');
            $table->text('order_notes')->nullable();
            $table->foreignId('staff_id')->nullable()->constrained('staff', 'staff_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('scheme_orders');
    }
};
