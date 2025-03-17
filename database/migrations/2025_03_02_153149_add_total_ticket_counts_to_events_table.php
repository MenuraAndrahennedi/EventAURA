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
        Schema::table('events', function (Blueprint $table) {
            $table->integer('total_golden_ticket_count')->default(0)->after('golden_ticket_count');
            $table->integer('total_silver_ticket_count')->default(0)->after('silver_ticket_count');
            $table->integer('total_bronze_ticket_count')->default(0)->after('bronze_ticket_count');
        }); 
      
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('events', function (Blueprint $table) {
            $table->dropColumn(['total_golden_ticket_count', 'total_silver_ticket_count', 'total_bronze_ticket_count']);
        });
       
    }
};
