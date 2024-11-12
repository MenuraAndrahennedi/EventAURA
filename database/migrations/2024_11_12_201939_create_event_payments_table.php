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
        Schema::create('event_payments', function (Blueprint $table) {
            $table->id('payment_id'); 
            $table->float('event_pay_amount');
            $table->date('event_pay_date');
            $table->enum('event_pay_status', ['APPROVED', 'REJECTED']);
            $table->unsignedBigInteger('host_id');
            $table->foreign('host_id')->references('host_id')->on('host')->onDelete('cascade');
            $table->unsignedBigInteger('event_id');
            $table->foreign('event_id')->references('event_id')->on('event')->onDelete('cascade');
            $table->timestamps();
        
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event_payments');
    }
};
