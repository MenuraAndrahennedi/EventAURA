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
            $table->unsignedBigInteger('host_id'); // Ensure data type matches `event_hosts.host_id`
            $table->foreign('host_id')->references('host_id')->on('host')->onDelete('cascade'); // Explicitly define foreign key
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
