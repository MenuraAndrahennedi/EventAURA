<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(Request $request): Response
    {

        $routeName=$request->route()->getName();
        $registerPage= $routeName ==='tb.register'? 'TB/TBCreateAccount':'EventHost/EHCreateAccount';
        return Inertia::render($registerPage);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'telephone' => 'required|string|max:15',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'role_id' =>'required|integer',
           
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'telephone' =>$request->telephone,
            'password' => Hash::make($request->password),
            'role_id' => $request->role_id,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
