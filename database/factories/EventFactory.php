<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->sentences(),
            'description' => fake()->realText(),
            'due_date' => fake()->dateTimeBetween('now','+1 year'),
            'status' => fake()->randomElement(['Approved','Pending','Rejected']),
            'user_id'=> 1,
            'admin_id'=> 1,
        ];
    }
}
