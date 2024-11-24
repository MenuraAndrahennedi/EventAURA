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
        Schema::create('host', function (Blueprint $table) {
            $table->id();
            $table->string('host_first_name');
            $table->string('host_last_name');
            $table->string('host_email')->unique();
            $table->string('host_contact_no');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event_hosts');
    }
};
