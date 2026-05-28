<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RoleSeeder::class,
            AdminUserSeeder::class,
        ]);

        if (! $this->command) {
            return;
        }

        if (! $this->command->confirm('Do you want to add events automatically?', false)) {
            $this->command->info('Skipping demo event host and event seeding.');
            return;
        }

        $this->call([
            DemoEventHostSeeder::class,
            DemoConcertEventSeeder::class,
        ]);
    }
}
