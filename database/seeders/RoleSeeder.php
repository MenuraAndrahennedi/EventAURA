<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Seed the application's role definitions.
     */
    public function run(): void
    {
        $timestamp = now();

        DB::table('roles')->upsert([
            [
                'id' => 1,
                'role_name' => 'Programmer',
                'role_description' => 'Internal platform programmer role.',
                'role_status' => 'ACTIVE',
                'created_at' => $timestamp,
                'updated_at' => $timestamp,
            ],
            [
                'id' => 2,
                'role_name' => 'Manager',
                'role_description' => 'Platform manager role.',
                'role_status' => 'ACTIVE',
                'created_at' => $timestamp,
                'updated_at' => $timestamp,
            ],
            [
                'id' => 3,
                'role_name' => 'Admin',
                'role_description' => 'Platform administrator role.',
                'role_status' => 'ACTIVE',
                'created_at' => $timestamp,
                'updated_at' => $timestamp,
            ],
            [
                'id' => 4,
                'role_name' => 'Event Host',
                'role_description' => 'Event organizer account role.',
                'role_status' => 'ACTIVE',
                'created_at' => $timestamp,
                'updated_at' => $timestamp,
            ],
            [
                'id' => 5,
                'role_name' => 'Ticket Buyer',
                'role_description' => 'Customer account role.',
                'role_status' => 'ACTIVE',
                'created_at' => $timestamp,
                'updated_at' => $timestamp,
            ],
        ], ['id'], ['role_name', 'role_description', 'role_status', 'updated_at']);
    }
}
