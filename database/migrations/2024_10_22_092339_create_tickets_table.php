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
        Schema::create('ticket', function (Blueprint $table) {
            $table->id('ticket_id');
            $table->enum('ticket_type', ['VIP', 'PREMIUM', 'GOLD', 'SILVER']);
            $table->float('ticket_price');
            $table->enum('ticket_status', ['AVAILABLE', 'SOLD']);
            $table->unsignedBigInteger('event_id'); // Explicit foreign key reference
            $table->unsignedBigInteger('customer_id');
            $table->foreign('event_id')->references('event_id')->on('event')->onDelete('cascade');
            $table->foreign('customer_id')->references('customer_id')->on('customer')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
