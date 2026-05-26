<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AdminUserSeeder extends Seeder
{
    /**
     * Create the first admin account for a fresh installation.
     */
    public function run(): void
    {
        $existingAdmin = User::where('role_id', 3)->first();

        if ($existingAdmin) {
            $this->command?->info('Admin user already exists. Skipping admin account creation.');
            return;
        }

        if (! $this->command) {
            throw new \RuntimeException(
                'Admin user creation requires an interactive artisan command. Run "php artisan migrate --seed" or "php artisan db:seed".'
            );
        }

        $email = $this->promptForEmail();
        $password = $this->promptForPassword();

        User::create([
            'name' => 'Platform Admin',
            'email' => $email,
            'telephone' => null,
            'password' => Hash::make($password),
            'role_id' => 3,
            'user_status' => 'active',
            'email_verified_at' => now(),
        ]);

        $this->command->info('Admin account created successfully.');
    }

    private function promptForEmail(): string
    {
        while (true) {
            $email = trim((string) $this->command->ask('Enter the email address for the initial admin account'));

            $validator = Validator::make(
                ['email' => $email],
                ['email' => ['required', 'email', 'max:255', 'unique:users,email']]
            );

            if (! $validator->fails()) {
                return $email;
            }

            $this->command->error($validator->errors()->first('email'));
        }
    }

    private function promptForPassword(): string
    {
        while (true) {
            $password = (string) $this->command->secret('Enter the password for the initial admin account');
            $confirmation = (string) $this->command->secret('Confirm the admin password');

            try {
                Validator::make(
                    [
                        'password' => $password,
                        'password_confirmation' => $confirmation,
                    ],
                    [
                        'password' => ['required', 'string', 'min:8', 'confirmed'],
                    ]
                )->validate();

                return $password;
            } catch (ValidationException $exception) {
                $this->command->error($exception->validator->errors()->first('password'));
            }
        }
    }
}
