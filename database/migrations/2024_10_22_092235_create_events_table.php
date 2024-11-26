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
        Schema::create('event', function (Blueprint $table) {
            $table->id('event_id');
            $table->string('name');
            $table->date('date');
            $table->time('startTime');
            $table->time('endTime');
            $table->text('description');
            $table->string('location');
            $table->string('image');
            $table->integer('bronze_ticket_count')->default(0);
            $table->integer('golden_ticket_count')->default(0);
            $table->integer('silver_ticket_count')->default(0);
            $table->enum('event_status', ['approved', 'pending', 'rejected', 'completed', 'cancelled', 'postponed', 'rescheduled'])->default('pending');
            $table->string('city');
            $table->string('venue');
            $table->string('organizer');
            $table->string('artists');
            $table->string('agenda_pdf')->nullable();
            $table->string('event_video')->nullable();
            $table->decimal('bronze_ticket_price');
            $table->decimal('golden_ticket_price');
            $table->decimal('silver_ticket_price');
            $table->string('return_policies')->nullable();
            $table->foreignId('event_host_id')->constrained('users')->onDelete('cascade');
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
