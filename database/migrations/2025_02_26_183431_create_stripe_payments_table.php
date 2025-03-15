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
        Schema::create('stripe_payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')->nullable()->constrained('users')->onDelete('cascade'); // For logged-in users
            $table->uuid('guest_id')->nullable(); // For guest users
            $table->string('guest_name')->nullable();
            $table->string('guest_phone')->nullable();
            $table->string('guest_email')->nullable();
            $table->text('guest_address')->nullable();
            $table->integer('amount'); // Stored in cents (LKR)
            $table->string('currency')->default('LKR');
            $table->enum('status', ['Pending', 'Completed', 'Failed'])->default('Pending'); // Payment status: pending, success, failed
            $table->string('stripe_session_id')->nullable(); // Store Stripe session ID
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stripe_payments');
    }
};
