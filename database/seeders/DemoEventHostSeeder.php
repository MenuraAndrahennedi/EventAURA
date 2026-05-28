<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DemoEventHostSeeder extends Seeder
{
    /**
     * Ensure the demo event host account exists for automated event seeding.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'eventhost1@example.com'],
            [
                'name' => 'Event Host',
                'telephone' => '0770000000',
                'password' => Hash::make('11111111'),
                'role_id' => 4,
                'user_status' => 'active',
                'email_verified_at' => now(),
            ]
        );

        $this->command?->info('Demo event host account is ready: eventhost1@example.com');
    }
}
