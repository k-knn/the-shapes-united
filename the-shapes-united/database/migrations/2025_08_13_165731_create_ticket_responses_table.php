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
       Schema::create('ticket_responses', function (Blueprint $table) {
            $table->id('response_id');
            $table->unsignedBigInteger('ticket_id');
            $table->unsignedBigInteger('responder_id');
            $table->enum('responder_type', ['user', 'staff']);
            $table->text('message');
            $table->timestamp('created_at')->useCurrent();

            // Foreign Key: ticket_id → support_tickets(ticket_id)
            $table->foreign('ticket_id')->references('ticket_id')->on('support_tickets')->onDelete('cascade');

            // Note: responder_id is polymorphic (can reference users or staff),
            // so we do NOT add a foreign key constraint for it.
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ticket_responses');
    }
};
