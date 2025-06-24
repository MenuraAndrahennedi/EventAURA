<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use App\Models\ChMessage;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        // return [
        //     ...parent::share($request),
        //     'auth' => [
        //         'user' => $request->user() ? [
        //             'id' => $request->user()->id,
        //             'name' => $request->user()->name,
        //             'email' => $request->user()->email,
        //             'phone' => $request->user()->telephone,
        //         ]: null,
        //     ],
        // ];
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user() ? [
                    'id' => $request->user()->id,
                    'name' => $request->user()->name,
                    'email' => $request->user()->email,
                    'phone' => $request->user()->telephone,
                    'role_id' => $request->user()->role_id,
                    'avatar' =>$request->user()->avatar,
                    
                ] : null,
            ],
             // Share flash messages with Inertia
             'flash' => [
                'success' => session('success'),
                'error' => session('error'),
            ],

            'hasUnreadMessages' => fn () => auth()->check()
            ? ChMessage::where('to_id', auth()->id())
                ->where('seen', 0)
                ->exists()
            : false,

        ]);
    }
}
