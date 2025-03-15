<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class SocialLoginController extends Controller
{

    public function redirectToProvider($provider)
    {

         // Save the current route in the session
         session(['login_route' => url()->previous()]);
        return Socialite::driver($provider)->redirect();
    }

    public function handleProviderCallback($provider)
{

try{
    $socialUser = Socialite::driver($provider)->user();

   
   
     // Retrieve the saved route from the session
     $previousRoute = session('login_route');
     //\Log::info('Previous route:', ['route' => $previousRoute]);

      // Check the saved route and determine role
      if (str_contains($previousRoute, 'tb-login')) {
        $roleId = 5; // Ticket Buyer
    } elseif (str_contains($previousRoute, 'eh-login')) {
        $roleId = 4; // Event Host
    } else {
        return redirect('/')->with('error', 'Invalid login route');
    }

    

    $user = User::where('provider', $provider)
    ->where('provider_id', $socialUser->getId())
    ->first();

    if(!$user){
        $user = User::create([
            'name'=>$socialUser->getName(),
            'email'=>$socialUser->getEmail(),
            'provider'=>$provider,
            'provider_id'=>$socialUser->getId(),
            'password'=>bcrypt(Str::random(12)),
            'avatar'=>$socialUser->getAvatar(),
            'role_id'=>$roleId,
        ]);
    }

    Auth::login($user);

    if($user->role_id == 5){
        return redirect()->route('browse');
    }else if($user->role_id == 4){
        return redirect()->route('event.create');
    }

    return redirect()->route('home');


}catch (\Exception $e){
    return redirect('/login')->with('error', 'Unable to login using ' . ucfirst($provider) . '. Please try again.');
}
}
}
