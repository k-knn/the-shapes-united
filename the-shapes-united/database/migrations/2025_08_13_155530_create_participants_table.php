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
         Schema::create('participants', function (Blueprint $table) {
            $table->id('participant_id');
            $table->string('name');
            $table->date('dob');
            $table->string('ndis_number')->unique();
            $table->string('email')->nullable();
            $table->enum('funding_type', ['Plan-Managed', 'Self-Managed']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('participants');
    }
};
