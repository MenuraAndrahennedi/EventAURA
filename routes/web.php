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


//-------------------------------------------------------------------------------------------------------------------------------------




//Route::get('/', function () {return Inertia::render('');})->name('');

//AboutUs
Route::get('/about', function () {return Inertia::render('AboutUs/AboutUS');})->name('about');

//AddNewMember
Route::get('/addnewmember', function () {return Inertia::render('AddNewMember/AddNewMember');})->name('add_new_member');
Route::get('/verification01', function () {return Inertia::render('AddNewMember/Verification01');})->name('verification01');
Route::get('/verification02', function () {return Inertia::render('AddNewMember/Verification02');})->name('verification02');

//cart
Route::get('/ehcart', function () {return Inertia::render('Cart/EHCart');})->name('eh_cart');
Route::get('/tbcart', function () {return Inertia::render('Cart/TBCart');})->name('tb_cart');

//Create Account
Route::get('/ehcreateaccount', function () {return Inertia::render('CreateAccount/EHCreateAcc');})->name('eh_create_acc');
Route::get('/tbcreateaccount', function () {return Inertia::render('CreateAccount/TBCreateAcc');})->name('tb_create_acc');

//Dashboard
Route::get('/userdashboard', function () {return Inertia::render('Dashboard/UserDashboard');})->name('user_dashboard');
Route::get('/ehdashboard', function () {return Inertia::render('Dashboard/EHDashboard');})->name('eh_dashboard');

//Delete
Route::get('/admindelete', function () {return Inertia::render('Delete/AdminDelete');})->name('admin_delete');
Route::get('/ehdelete', function () {return Inertia::render('Delete/EHDelete');})->name('eh_delete');

//Events
Route::get('/browse', function () {return Inertia::render('Events/BrowseEvent');})->name('browse');
//Route::get('/buytickets', function () {return Inertia::render('Events/BuyTickets');})->middleware(['auth'])->name('buytickets');
Route::get('/buytickets', function () {return Inertia::render('Events/BuyTickets');})->name('buytickets');
Route::get('/tbeventdetails', function () {return Inertia::render('Events/TBEventDetails');})->name('tb_event_details');
Route::get('/createevent', function () {return Inertia::render('Events/CreateEvent');})->name('create_event');

//Help Centre
Route::get('/help', function () {return Inertia::render('HelpCentre/HelpCentre');})->name('help');

//Home
Route::get('/', function () {return Inertia::render('Home/Home');})->name('home');

//Login
Route::get('/userlogin', function () {return Inertia::render('Login/UserLogin');})->name('user_login');
Route::get('/ehlogin', function () {return Inertia::render('Login/EHLogin');})->name('eh_login');
Route::get('/tblogin', function () {return Inertia::render('Login/TBLogin');})->name('tb_login');

//Ongoing Events
Route::get('/ehongoing', function () {return Inertia::render('OngoingEvents/EHOngoing');})->name('eh_ongoing');
Route::get('/userongoing', function () {return Inertia::render('OngoingEvents/UserOngoing');})->name('user_ongoing');

//paymentGate
Route::get('/ehpaymentgate', function () {return Inertia::render('PaymentGate/EHPaymentGate');})->name('eh_paymentgate');
Route::get('/tbpaymentgate', function () {return Inertia::render('PaymentGate/TBPaymentGate');})->name('tb_paymentgate');

//Review
Route::get('/review', function () {return Inertia::render('ReviewPg/ReviewPg');})->name('review');

//Update Event
Route::get('/ehupdate', function () {return Inertia::render('UpdateEvent/EHUpdateEvent');})->name('eh_update');
Route::get('/userupdate', function () {return Inertia::render('UpdateEvent/UserUpdateEvent');})->name('user_update');

//User Details
Route::get('/userdetails', function () {return Inertia::render('UserDetails/UserDetails');})->name('user_details');
Route::get('/ehdetails', function () {return Inertia::render('UserDetails/EHDetails');})->name('eh_details');
Route::get('/tbdetails', function () {return Inertia::render('UserDetails/TBDetails');})->name('tb_details');

//ViewEvent
Route::get('/ehviewevent', function () {return Inertia::render('ViewEvent/EHViewEvent');})->name('eh_view_event');
Route::get('/managerviewevent', function () {return Inertia::render('ViewEvent/ManagerViewEvent');})->name('manager_view_event');
Route::get('/userviewevent', function () {return Inertia::render('ViewEvent/UserViewEvent');})->name('user_view_vvent');




//-----------------------------------------------------------------------------------------------------------------------------------------------------









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
