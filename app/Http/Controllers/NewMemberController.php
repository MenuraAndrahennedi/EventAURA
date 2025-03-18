<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

class NewMemberController extends Controller
{
    public function index(){
        return inertia('Developer-pages/AddNewMember');
    }

    public function store(Request $request)
    {
        // Validate input data
        $validatedData = $request->validate([
            'role' => 'required|in:1,2,3',
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'telephone' => 'required|string|max:15',
            'password' => ['required', 'confirmed', Password::min(8)],
        ]);

        // Create a new user
        $user = User::create([
            'role_id' => $validatedData['role'],
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'telephone' => $validatedData['telephone'],
            'password' => Hash::make($validatedData['password']),
        ]);

        return redirect()->route('add.new.memeber')->with('success', 'User registered successfully!');
    }


}
