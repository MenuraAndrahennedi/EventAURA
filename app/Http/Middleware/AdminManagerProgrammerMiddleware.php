<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class AdminManagerProgrammerMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
       
        $allowedRoles = [1, 2, 3]; // Admin, Manager, Programmer

    if (!in_array(Auth::user()->role_id, $allowedRoles)) {
        return redirect('/');
    }

       
        return $next($request);
    }
}
