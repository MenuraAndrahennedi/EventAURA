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

Route::get('event/create', [EventController::class, 'create'])->name('event.create');
Route::post('event/store', [EventController::class, 'store'])->name('event.store');

Route::get('/api/events', [EventController::class, 'getApprovedEvents']);

require __DIR__ . '/auth.php';
