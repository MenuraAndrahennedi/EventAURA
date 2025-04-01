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
        Schema::create('event_host_payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('event_host_id'); // Reference to user table (event host)
            $table->decimal('amount', 10, 2);
            $table->string('payment_status')->default('pending'); // success, failed, pending
            $table->string('transaction_id')->nullable();
            $table->timestamps();

            $table->foreign('event_host_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event_host_payments');
    }
};
