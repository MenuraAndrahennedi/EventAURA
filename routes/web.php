<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\EventHostController;
use App\Http\Controllers\ManagerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProgrammerController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Home/Home');
});

Route::get('/browse', function () {
    return Inertia::render('BrowseEvent/BrowseEvent');
})->name('browse');
Route::get('/eventdetails', function () {
    return Inertia::render('EventDetails/TBEventDetails');
})->name('eventdetails');
Route::get('/buytickets', function () {
    return Inertia::render('BuyTickets/BuyTickets');
})->name('buytickets');
Route::get('/buyticketscart', function () {
    return Inertia::render('Cart/TBCart/TBCart');
})->name('buyticketscart');

Route::get('/about', function () {
    return Inertia::render('AboutUs/AboutUS');
})->name('about');

Route::get('/help', function () {
    return Inertia::render('HelpCentre/HelpCentre');
})->name('help');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Manager
Route::get('/manager', function () {
    return Inertia::render('Manager/ManagerDashboard');
})->name('manager');

Route::get('/managerCreateRequest', function () {
    return Inertia::render('Manager/PendingRequests/CreateRequest');
})->name('managerCreateRequest');

Route::get('/managerUpdateRequest', function () {
    return Inertia::render('Manager/PendingRequests/UpdateRequest');
})->name('managerUpdateRequest');

Route::get('/managerDeleteRequest', function () {
    return Inertia::render('Manager/PendingRequests/DeleteRequest');
})->name('managerDeleteRequest');

//Route::get('/login', [AuthenticatedSessionController::class, 'create'])->name('login');

Route::get('/tb-login', [AuthenticatedSessionController::class, 'create'])->name('tb.login');
Route::get('/eh-login', [AuthenticatedSessionController::class, 'create'])->name('eh.login');
Route::get('/other-login', [AuthenticatedSessionController::class, 'create'])->name('oth.login');

Route::get('/eh-register', [RegisteredUserController::class, 'create'])->name('eh.register');
Route::get('/tb-register', [RegisteredUserController::class, 'create'])->name('tb.register');
Route::get('/register', [RegisteredUserController::class, 'create'])->name('register');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('programmer/dashboard', function () {
    return Inertia::render('Programmer/ProgrammerDashboard');
})->name('programmer.dashboard');

Route::get('programmer/dashboard', [ProgrammerController::class, 'index'])->name('programmer.dashboard')->middleware(['auth', 'programmer']);
Route::get('manager/dashboard', [ManagerController::class, 'index'])->name('manager.dashboard')->middleware(['auth', 'manager']);
Route::get('admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard')->middleware(['auth', 'admin']);
Route::get('eventhost/dashboard', [EventHostController::class, 'index'])->name('eventhost.dashboard')->middleware(['auth', 'eventhost']);
Route::get('customer/dashboard', [CustomerController::class, 'index'])->name('customer.dashboard')->middleware(['auth', 'customer']);
Route::get('other/dashborad', [AdminController::class, 'dashboard'])->name('other.dashboard');

Route::get('event/create', [EventController::class, 'create'])->name('event.create')->middleware(['auth', 'eventCreation']);
Route::post('event/store', [EventController::class, 'store'])->name('event.store');

Route::get('event/create', [EventController::class, 'create'])->name('event.create');
Route::post('event/store', [EventController::class, 'store'])->name('event.store');

Route::get('/api/events', [EventController::class, 'getApprovedEvents']);

Route::get('/hosteventcart', function () {
    return Inertia::render('Cart/EHCart/EHCart');
})->name('hosteventcart');


Route::get('/event/{id}', [EventController::class, 'show'])->name('event.show');
Route::get('/event/{id}/buytickets', [EventController::class, 'buyTickets'])->name('event.buyTickets');
 
Route::get('/api/events', [EventController::class, 'getApprovedEvents']);
 Route::get('/events/search', [EventController::class, 'search'])->name('events.search');
 Route::get('/events/details', [EventController::class, 'searchDetails'])->name('events.details');
 Route::get('/events/results', [EventController::class, 'searchResults'])->name('events.results');

 Route::get('/event-host/home', [EventHostController::class, 'index'])->name('eventhost.home');
 Route::get('/api/events/ongoing', [EventController::class, 'ongoingEvents'])->name('event.ongoingEvents');
 Route::get('/events/{id}', [EventController::class, 'show'])->name('view.event');
 Route::get('/events/{id}/update', [EventController::class, 'edit'])->name('update.event');
 Route::delete('/events/{id}/deleteEvent', [EventController::class, 'destroy'])->name('delete.eventDelete');
 Route::get('event/profiles', [EventController::class, 'profiles'])->name('event.profiles');
 Route::get('/events/{id}/delete', [EventController::class, 'delete'])->name('delete.event');

 Route::middleware(['auth'])->group(function () {
    Route::get('/event-host/profile', [EventHostController::class, 'profile'])->name('eventhost.profile');
    Route::get('/event-host/history', [EventHostController::class, 'ehOngoing'])->name('eventhost.history');
    Route::get('/event-host/changePW', [EventHostController::class, 'changePW'])->name('eventhost.changePW');
    Route::get('/event-host/signOut', [EventHostController::class, 'signOut'])->name('eventhost.signOut');
    
});


Route::get('/EHOngoing', [EventHostController::class, 'ehOngoing'])->name('eh.ongoing');
Route::get('/EHPendingPayments', [EventHostController::class, 'ehPendingPayments'])->name('eh.pendingPayments');
Route::get('/EHPendingRequests', [EventHostController::class, 'ehPendingRequests'])->name('eh.pendingRequests');
Route::get('/EHRejected', [EventHostController::class, 'ehRejected'])->name('eh.rejected');
Route::get('/EHHistory', [EventHostController::class, 'ehHistory'])->name('eh.history');

Route::post('/logout', function (Request $request) {
    Auth::logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return Inertia::location(route('home')); 
})->name('logout');

Route::middleware(['auth'])->group(function () {
    Route::post('/eventhost/update-profile', [EventHostController::class, 'updateProfile'])->name('eventhost.updateProfile');
    Route::post('/eventhost/update-password', [EventHostController::class, 'updatePassword'])->name('eventhost.updatePassword');
    Route::post('/event/update/{eventId}', [EventController::class, 'updateEvent'])->name('event.update');
});

Route::get('other/profile', [AdminController::class, 'profile'])->name('admin.profile');
Route::post('other/updateProfile', [AdminController::class, 'updateProfile'])->name('admin.updateProfile');
Route::get('other/changePW', [AdminController::class, 'changePW'])->name('admin.changePW');
Route::post('other/update-password', [AdminController::class, 'updatePassword'])->name('admin.updatePassword');
Route::get('other/signOut', [AdminController::class, 'signOut'])->name('admin.signOut');

Route::get('other/ongoing', [AdminController::class, 'ongoingEvents'])->name('admin.ongoingEvents');
Route::get('other/userDetails', [AdminController::class, 'userDetails'])->name('admin.userDetails');
Route::get('/admindashboard', [AdminController::class, 'adminDashboard'])->name('admindashboard');
Route::get('/admindashboard', [AdminController::class, 'adminDashboard'])->name('admindashboard');
Route::get('/admindashboard', [AdminController::class, 'adminDashboard'])->name('admindashboard');

Route::get('/events/view/{id}', [AdminController::class, 'show'])->name('admin.viewEvent');

Route::get('/addMember', [ProgrammerController::class, 'addMember'])->name('add.member');


require __DIR__ . '/auth.php';
