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

        $request->session()->regenerate();

        if($request->user()->role_id=== 1){
            return redirect('programmer/dashboard');
        }

        if($request->user()->role_id=== 2){
            return redirect('manager/dashboard');
        }

        if($request->user()->role_id=== 3){
            return redirect('admin/dashboard');
        }

        if($request->user()->role_id=== 4){
            return redirect('eventhost/dashboard');
        }

        if($request->user()->role_id=== 5){
            return redirect('customer/dashboard');
        }






        return redirect()->intended(route('dashboard', absolute: false));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
