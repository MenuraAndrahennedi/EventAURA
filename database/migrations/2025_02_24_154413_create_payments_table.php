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
            $table->id();
            $table->unsignedBigInteger('customer_id')->nullable(); // Nullable for guests
            $table->string('guest_id')->nullable(); // Store guest session ID
            $table->string('payment_id')->unique()->nullable(); // PayHere Payment ID
            $table->decimal('amount', 10, 2);
            $table->string('currency')->default('LKR');
            $table->enum('status', ['Pending', 'Completed', 'Failed'])->default('Pending');
            $table->text('response')->nullable(); // Store PayHere response
            $table->timestamps();

            // Foreign key for registered users only
            $table->foreign('customer_id')->references('id')->on('users')->onDelete('cascade');
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
