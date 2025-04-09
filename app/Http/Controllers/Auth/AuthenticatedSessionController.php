<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia; 
use Inertia\Response;
use Illuminate\Support\Facades\Log;
use App\Models\UserLogin; // Import the UserLogin model

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(Request $request): Response
    {

        $routeName=$request->route()->getName();
        //$loginPage= $routeName ==='tb.login'? 'TB/TBLogin':'EventHost/EHLogin';
       $loginPage = 'Home/Home';
       if($routeName ==='tb.login'){
        $loginPage='TB/TBLogin';

       }else if($routeName === 'eh.login'){
        $loginPage = 'EventHost/EHLogin';

       }else if ($routeName === 'oth.login'){
        $loginPage ='OtherLogin/OtherLogin';
       }

       
       
       return Inertia::render($loginPage, [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate(); 

         // Log the login event
    UserLogin::create([
        'user_id' => $request->user()->id,
        'login_time' => now(),
        'ip_address' => $request->ip(),
    ]);


        $request->session()->regenerate();

        if($request->user()->role_id=== 1){
            return redirect('programmer/dashboard');
        }

        if($request->user()->role_id=== 2){
            return redirect('/manager');
        }

        if($request->user()->role_id=== 3){
            return redirect('admin/dashboard');
        }

        if($request->user()->role_id=== 4){
            return redirect('event/create');
        }

        if($request->user()->role_id=== 5){
            return redirect('browse');
        }

        return redirect()->intended(route('dashboard', absolute: false));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
       // Find the latest login record for the current user
    $userLogin = UserLogin::where('user_id', Auth::id())
    ->whereNull('logout_time') // Ensure it's the active session
    ->latest()
    ->first();

// Update the logout time
if ($userLogin) {
$userLogin->update([
'logout_time' => now(),
]);
}
       
       
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
