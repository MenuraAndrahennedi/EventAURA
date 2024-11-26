<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class EventCreationMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        if (!Auth::check() || Auth::user()->role_id != 4) {
            // Redirect unauthorized users to the home page with an error message
            return redirect('/')
                ->with('error', 'Access Denied: Only Event Hosts can access this page.');
        }

        // Allow access for Event Hosts
        return $next($request);
        
    }
}
