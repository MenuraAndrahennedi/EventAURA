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

//EHProfile
Route::get('/ehchangepw', function () {return Inertia::render('EHProfile/EHChangePw');})->name('eh_change_pw');
Route::get('/ehprofiledetails', function () {return Inertia::render('EHProfile/EHProfileDetails');})->name('eh_profile_details');
Route::get('/ehsignout', function () {return Inertia::render('EHProfile/EHSignout');})->name('eh_signout');
//EH-EventHistory
Route::get('/ehhistory', function () {return Inertia::render('EHProfile/EH-EventHistory/EHHistory');})->name('eh_history');
Route::get('/ehongoinghistory', function () {return Inertia::render('EHProfile/EH-EventHistory/EHOngoingHistory');})->name('eh_ongoing_history');
Route::get('/ehpendingpayments', function () {return Inertia::render('EHProfile/EH-EventHistory/EHPendingPayments');})->name('eh_pending_payments');
Route::get('/ehpendingrequests', function () {return Inertia::render('EHProfile/EH-EventHistory/EHPendingRequests');})->name('eh_pending_requests');
Route::get('/ehrejectedhistory', function () {return Inertia::render('EHProfile/EH-EventHistory/EHRejectedHistory');})->name('eh_rejected_history');

//EventHistory
Route::get('/endedevents', function () {return Inertia::render('EventHistory/EndedEventHistory');})->name('ended_events');
Route::get('/pendinghistory', function () {return Inertia::render('EventHistory/PendingPaymentsHistory');})->name('pending_history');
Route::get('/rejectedhistory', function () {return Inertia::render('EventHistory/RejectedEventHistory');})->name('rejected_history');

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

//Inquiries
Route::get('/inquiries', function () {return Inertia::render('Inquiries/Inquiries');})->name('inquiries');

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

//PendingRequests
Route::get('/createrequest', function () {return Inertia::render('PendingRequests/CreateRequest');})->name('create_request');
Route::get('/deleterequest', function () {return Inertia::render('PendingRequests/DeleteRequest');})->name('delete_request');
Route::get('/updaterequest', function () {return Inertia::render('PendingRequests/UpdateRequest');})->name('update_request');

//ResetPW
//EHResetPW
Route::get('/ehforgotpw', function () {return Inertia::render('ResetPW/EHResetPW/EHForgotPW');})->name('eh_forgot_pw');
Route::get('/ehverifypw', function () {return Inertia::render('ResetPW/EHResetPW/EHVerificationPW');})->name('eh_verification_pw');
Route::get('/ehnewpw', function () {return Inertia::render('ResetPW/EHResetPW/EHNewPW');})->name('eh_new_pw');
//TBResetPW
Route::get('/tbforgotpw', function () {return Inertia::render('ResetPW/TBResetPW/TBForgotPW');})->name('tb_forgot_pw');
Route::get('/tbverifypw', function () {return Inertia::render('ResetPW/TBResetPW/TBVerificationPW');})->name('tb_verification_pw');
Route::get('/tbnewpw', function () {return Inertia::render('ResetPW/TBResetPW/TBNewPW');})->name('tb_new_pw');

//Review
Route::get('/review', function () {return Inertia::render('Review/Review');})->name('review');

//TBProfile
Route::get('/tbchangepw', function () {return Inertia::render('TBProfile/TBChangePW');})->name('tb_changepw');
Route::get('/tbprofile', function () {return Inertia::render('TBProfile/TBProfile');})->name('tb_profile');
Route::get('/tbpurchasehistory', function () {return Inertia::render('TBProfile/TBPurchaseHistory');})->name('tb_purchase_history');
Route::get('/tbsignout', function () {return Inertia::render('TBProfile/TBSignOut');})->name('tb_signout');

//Update Event
Route::get('/ehupdate', function () {return Inertia::render('UpdateEvent/EHUpdateEvent');})->name('eh_update');
Route::get('/userupdate', function () {return Inertia::render('UpdateEvent/UserUpdateEvent');})->name('user_update');

//User Details
Route::get('/userdetails', function () {return Inertia::render('UserDetails/UserDetails');})->name('user_details');
Route::get('/ehuserdetails', function () {return Inertia::render('UserDetails/EHUserDetails');})->name('eh_user_details');
Route::get('/tbuserdetails', function () {return Inertia::render('UserDetails/TBUserDetails');})->name('tb_user_details');

//UserProfile
Route::get('/userchangepw', function () {return Inertia::render('UserProfile/UserChangePW');})->name('user_changepw');
Route::get('/userprofile', function () {return Inertia::render('UserProfile/UserProfile');})->name('user_profile');
Route::get('/usersignout', function () {return Inertia::render('UserProfile/UserSignOut');})->name('user_signout');

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
