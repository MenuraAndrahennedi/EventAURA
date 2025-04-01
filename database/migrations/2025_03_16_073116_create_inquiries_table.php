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
        Schema::create('inquiries', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Name of the user
            $table->string('email'); // Email of the user
            $table->string('subject'); // Subject of inquiry
            $table->text('message'); // Inquiry message
            $table->text('reply')->nullable(); // Manager's reply (optional)
            $table->boolean('is_resolved')->default(false); // Status of inquiry
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inquiries');
    }
};
