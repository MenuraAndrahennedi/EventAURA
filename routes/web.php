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
use GuzzleHttp\Middleware;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {return Inertia::render('Home/Home');})->name('home');
Route::get('/about', function () {return Inertia::render('AboutUs/AboutUS');})->name('about');
Route::get('/help', function () {return Inertia::render('HelpCentre/HelpCentre');})->name('help');

//Events
Route::get('/browse', function () {return Inertia::render('Events/BrowseEvent');})->name('browse');
//Route::get('/buytickets', function () {return Inertia::render('Events/BuyTickets');})->middleware(['auth'])->name('buytickets');
Route::get('/buytickets', function () {return Inertia::render('Events/BuyTickets');})->name('buytickets');
//Route::get('/buyticketscart', function () {return Inertia::render('Cart/TBCart/TBCart');})->name('buyticketscart');
//Route::get('/dashboard', function () {return Inertia::render('Dashboard');})->middleware(['auth', 'verified'])->name('dashboard');
//Route::get('/eventdetails', function () {return Inertia::render('EventDetails/TBEventDetails');})->name('eventdetails');


//cart
Route::get('/EHCart', function () {return Inertia::render('Cart/EHCart');})->name('EHCart');
Route::get('/TBCart', function () {return Inertia::render('Cart/TBCart');})->name('TBCart');

// Manager
//Route::get('/manager', function () {return Inertia::render('Manager/ManagerDashboard');})->name('manager');
//Route::get('/managerCreateRequest', function () {return Inertia::render('Manager/PendingRequests/CreateRequest');})->name('managerCreateRequest');
//Route::get('/managerUpdateRequest', function () {return Inertia::render('Manager/PendingRequests/UpdateRequest');})->name('managerUpdateRequest');
//Route::get('/managerDeleteRequest', function () {return Inertia::render('Manager/PendingRequests/DeleteRequest');})->name('managerDeleteRequest');

// Dashboard
//Route::get('programmer/dashboard', function () {return Inertia::render('Programmer/ProgrammerDashboard');})->name('programmer.dashboard');

//EH
//Route::get('/hosteventcart', function () {return Inertia::render('Cart/EHCart/EHCart');})->name('hosteventcart');









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

//Route::get('programmer/dashboard', function () {return Inertia::render('Programmer/ProgrammerDashboard');})->name('programmer.dashboard');

Route::get('programmer/dashboard', [ProgrammerController::class, 'index'])->name('programmer.dashboard')->middleware(['auth', 'programmer']);
Route::get('manager/dashboard', [ManagerController::class, 'index'])->name('manager.dashboard')->middleware(['auth', 'manager']);
Route::get('admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard')->middleware(['auth', 'admin']);
Route::get('eventhost/dashboard', [EventHostController::class, 'index'])->name('eventhost.dashboard')->middleware(['auth', 'eventhost']);
Route::get('customer/dashboard', [CustomerController::class, 'index'])->name('customer.dashboard')->middleware(['auth', 'customer']);

Route::get('event/create', [EventController::class, 'create'])->name('event.create')->middleware(['auth', 'eventCreation']);
Route::post('event/store', [EventController::class, 'store'])->name('event.store');

Route::get('event/create', [EventController::class, 'create'])->name('event.create');
Route::post('event/store', [EventController::class, 'store'])->name('event.store');

Route::get('/api/events', [EventController::class, 'getApprovedEvents']);

//Route::get('/hosteventcart', function () {return Inertia::render('Cart/EHCart/EHCart');})->name('hosteventcart');
Route::get('/event/{id}', [EventController::class, 'show'])->name('event.show');
Route::get('/event/{id}/buytickets', [EventController::class, 'buyTickets'])->name('event.buyTickets');

require __DIR__ . '/auth.php';
