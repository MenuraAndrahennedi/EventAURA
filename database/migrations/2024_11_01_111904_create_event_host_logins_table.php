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
<<<<<<< Updated upstream:database/migrations/2024_11_01_111904_create_event_host_logins_table.php
        Schema::create('event_host_logins', function (Blueprint $table) {
            $table->id();
=======
        Schema::create('host_log', function (Blueprint $table) {
            $table->id();
            $table->string('host_username');
            $table->string('host_password');
            $table->foreignId('host_id')->constrained('host')->onDelete('cascade');
>>>>>>> Stashed changes:database/migrations/2024_10_24_094428_create_event_host_logins_table.php
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event_host_logins');
    }
};
