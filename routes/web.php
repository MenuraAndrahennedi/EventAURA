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
use App\Http\Controllers\SocialLoginController;
use App\Http\Controllers\ArtistController;
use App\Http\Controllers\ClickController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\StripePaymentController;
use App\Http\Controllers\WebSiteReviewController;


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

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
})->name('home');

Route::get('/about', function () {
    return Inertia::render('AboutUs/AboutUS');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('ContactUs/ContactUs');
})->name('contact');

Route::get('/help', function () {
    return Inertia::render('HelpCentre/HelpCentre');
})->name('help');



Route::get('/browse', function () {
    return Inertia::render('BrowseEvent/BrowseEvent');
})->name('browse');

Route::get('/reviews', function () {
    return Inertia::render('ReviewPg/ReviewPg');
})->name('reviews');

// Route::get('/buytickets', function () {
//     return Inertia::render('BuyTickets/BuyTickets');
// })->name('buytickets');
// Route::get('/buyticketscart', function () {
//     return Inertia::render('Cart/TBCart/TBCart');
// })->name('buyticketscart');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Manager
Route::get('/manager', function () {
    return Inertia::render('Manager/ManagerDashboard');
})->name('manager')->middleware(['auth', 'manager']);

// Route::get('/managerCreateRequest', function () {
//     return Inertia::render('Manager/PendingRequests/CreateRequest');
// })->name('managerCreateRequest');

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

//social login routes
Route::get('/login/{provider}', [SocialLoginController::class, 'redirectToProvider'])->name('social.login');
Route::get('/auth/{provider}/call-back', [SocialLoginController::class, 'handleProviderCallback']);

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
//Route::get('manager/dashboard', [ManagerController::class, 'index'])->name('manager.dashboard')->middleware(['auth', 'manager']);
Route::get('admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard')->middleware(['auth', 'admin']);
Route::get('eventhost/dashboard', [EventHostController::class, 'index'])->name('eventhost.dashboard')->middleware(['auth', 'eventhost']);
//Route::get('customer/dashboard', [CustomerController::class, 'index'])->name('customer.dashboard')->middleware(['auth', 'customer']);



Route::get('event/create', [EventController::class, 'create'])->name('event.create')->middleware(['auth', 'eventCreation']);
Route::post('event/store', [EventController::class, 'store'])->name('event.store');

Route::get('/api/events', [EventController::class, 'getApprovedEvents']);

Route::get('/api/get-event/{event}', [EventController::class, 'getEvent']);

// Get attendee count
Route::get('/api/event/{id}/attendees', [EventController::class, 'getAttendees']);
// Generate PDF
Route::get('/api/event/{id}/attendees/pdf', [EventController::class, 'generateAttendeesPdf'])->name('api.events.attendees.pdf');

Route::get('/hosteventcart', function () {
    return Inertia::render('Cart/EHCart/EHCart');
})->name('hosteventcart');


Route::get('/artists/search', [ArtistController::class, 'search']);
Route::post('/artists', [ArtistController::class, 'store']);

Route::get('/eventdetails/{id}', [EventController::class, 'show'])->name('event.details');
Route::get('/buytickets/{id}', [EventController::class, 'showBuyTickets'])->name('buytickets');

Route::get('/manager/create-requests', [EventController::class, 'getPendingEvents'])->name('manager.create.requests');

Route::get('/manager/approve-event/{id}', [EventController::class, 'approveEvent'])->name('manager.approve.event');

Route::get('/manager/delete-event/{id}', [EventController::class, 'deleteEvent'])->name('manager.delete.event');

Route::post('/event/click/{id}', [ClickController::class, 'incrementClick'])->name('event.click');

Route::post('/update-ticket-count', [TicketController::class, 'updateTicketCount']);

Route::get('/cart-get', [CartController::class, 'getCart']);

Route::post('/cart-update', [CartController::class, 'updateCart']);

Route::get('/buyticketscart/{id}', [EventController::class, 'showTBCart'])->name('buyticketscart');

// Route::get('/checkout', function () {
//        return Inertia::render('PaymentGate/PaymentGate');
//      })->name('checkout');

    

// Route::post('/payment/store', [PaymentController::class, 'storePayment'])->name('payment.store');

// Route::post('/payment/prepare', [PaymentController::class, 'preparePayHerePayment'])->name('payment.prepare');

// Route::post('/payment/notify', [PaymentController::class, 'paymentNotify'])->name('payment.notify');

// Route::get('/payment/success', function () {
//     return Inertia::render('PaymentGate/PaymentSuccess');
//   })->name('payment.success');

//   Route::get('/payment/cancel', function () {
//     return Inertia::render('PaymentGate/PaymentCancel');
//   })->name('payment.cancel');

Route::get('/checkout', [StripePaymentController::class, 'checkout'])->name('checkout'); 


Route::post('/payment/stripe', [StripePaymentController::class, 'createSession'])->name('payment.createSession');


Route::get('/payment/success', [StripePaymentController::class, 'success'])->name('payment.success');

//  Route for handling payment cancellation (updates DB)
Route::post('/payment/cancel/update', [StripePaymentController::class, 'updateCancelSession'])
    ->name('payment.cancel.update');

//  Route to show the payment cancel page
Route::get('/payment/cancel', [StripePaymentController::class, 'showCancelPage'])
    ->name('payment.cancel');

Route::get('manager/ongoing',[ManagerController::class,'showManagerOngoingEvents'])->name('manager.ongoing');

Route::get('manager/view-event/{event}',[ManagerController::class,'showManagerViewEvent'])->name('manager.viewevent');

Route::get('/manager/endedEventHistory', [EventController::class, 'getEndedEvents'])->name('manager.ended.events');

Route::get('/manager/pendingPaymentHistory', [EventController::class, 'getPendingPaymentEvents'])->name('manager.pending.payments.events');

Route::get('/manager/rejectedEventHistory', [EventController::class, 'getRejectedEvents'])->name('manager.rejected.events');

Route::get('/ended-event/{id}/report', [EventController::class, 'generateEndedEventReport'])->name('ended.event.report');

Route::get('/rejected-event/{id}/report', [EventController::class, 'generateRejectedEventReport'])->name('rejected.event.report');

Route::middleware(['auth'])->group(function () {
Route::get('/manager/profile', [ManagerController::class, 'showManagerProfile'])->name('manager.profile');
});

Route::get('/manager/changePW', [ManagerController::class, 'showManagerChangePW'])->name('manager.changepw');

Route::get('/manager/signout', [ManagerController::class, 'showManagerSignOut'])->name('manager.signout');

Route::get('/manager/sidebar', [ManagerController::class, 'showManagerSideBar'])->name('manager.sidebar');

Route::get('/manager/profile/edit', [ManagerController::class, 'editProfile'])->name('manager.profile.edit');

Route::post('/manager/profile/update', [ManagerController::class, 'updateProfile'])->name('manager.profile.update');

Route::post('/manager/change-password', [ManagerController::class, 'updateManagerPassword'])->name('manager.updatePassword');

Route::get('/manager/inquiries', [ManagerController::class, 'showInquiriesPage'])->name('manager.inquiries');

//Route::get('/manager/reviews', [ManagerController::class, 'showReviewsPage'])->name('manager.reviews');

Route::post('/reviews', [WebSiteReviewController::class, 'store'])->name('reviews.store');

Route::get('/manager/reviews', [WebSiteReviewController::class, 'index'])->middleware('auth')->name('reviews.index');

Route::post('/reviews/{id}/approve', [WebSiteReviewController::class, 'approve'])->middleware('auth');

Route::post('/reviews/{id}/reply', [WebSiteReviewController::class, 'reply'])->middleware('auth');

Route::delete('/reviews/{id}', [WebSiteReviewController::class, 'destroy'])->middleware('auth');




















require __DIR__ . '/auth.php';
