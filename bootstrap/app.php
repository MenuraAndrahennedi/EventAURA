<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);

        $middleware->alias ([
         'programmer'=> \App\Http\Middleware\Programmer::class,
         'manager'=> \App\Http\Middleware\Manager::class,
         'admin'=> \App\Http\Middleware\Admin::class,
         'eventhost'=> \App\Http\Middleware\Eventhost::class,
         'customer'=> \App\Http\Middleware\Customer::class,
         'eventCreation' => \App\Http\Middleware\EventCreationMiddleware::class,
         'adminProgrammer' => \App\Http\Middleware\AdminProgrammerMiddleware::class,
         'adminManager' => \App\Http\Middleware\AdminManagerMiddleware::class,
         'adminManagerProgrammer' => \App\Http\Middleware\AdminManagerProgrammerMiddleware::class,
         
         
        ]);

        
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
