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
<<<<<<< Updated upstream:database/migrations/2024_10_22_154714_create_events_table.php
        Schema::create('events', function (Blueprint $table) {
=======
        Schema::create('event', function (Blueprint $table) {
>>>>>>> Stashed changes:database/migrations/2024_10_22_092235_create_events_table.php
            $table->id();
            $table->string('name');
            $table->dateTime('date');
            $table->text('description');
            $table->string('location');
            $table->string('image');
            $table->integer('premium_ticket_count')->default(0);
            $table->integer('golden_ticket_count')->default(0);
            $table->integer('silver_ticket_count')->default(0);
            $table->enum('event_status', ['approved', 'pending', 'rejected', 'completed', 'cancelled', 'postponed', 'rescheduled']);
            $table->string('city');
            $table->string('venue');
            $table->string('artists');
            $table->string('agenda_pdf')->nullable();
            $table->string('event_video')->nullable();
            $table->decimal('premium_ticket_price');
            $table->decimal('golden_ticket_price');
            $table->decimal('silver_ticket_price');
            $table->string('return_policies')->nullable();
<<<<<<< Updated upstream:database/migrations/2024_10_22_154714_create_events_table.php
            $table->foreignId('event_host_id')->constrained('event_hosts')->onDelete('cascade');
=======
            $table->foreignId('event_host_id')->constrained('host')->onDelete('cascade'); // Explicitly define foreign key
>>>>>>> Stashed changes:database/migrations/2024_10_22_092235_create_events_table.php
            $table->timestamps();
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
