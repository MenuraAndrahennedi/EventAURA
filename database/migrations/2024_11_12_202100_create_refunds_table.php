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
        Schema::create('refunds', function (Blueprint $table) {
            $table->id();
            // $table->decimal('refund_amount');
            // $table->date('refund_date');
            // $table->enum('refund_status', ['APPROVED', 'REJECTED']);
            // $table->unsignedBigInteger('payment_id');
            // $table->foreign('payment_id')->references('payment_id')->on('ticket_payments')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('refunds');
    }
};
