<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\UserController;
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
use App\Http\Controllers\InquiryController;
use App\Http\Controllers\NewMemberController;
use App\Http\Controllers\DeleteRequestController;
use App\Http\Controllers\EventUpdateRequestController;
use App\Http\Controllers\EventHostPaymentController;
use App\Http\Controllers\PaymentReportController;




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
})->name('home');



Route::get('/contact', function () {
    return Inertia::render('ContactUs/ContactUs');
})->name('contact');

Route::get('/help', function () {
    return Inertia::render('HelpCentre/HelpCentre');
})->name('help');





Route::get('/reviews', function () {
    return Inertia::render('ReviewPg/ReviewPg');
})->name('reviews');

// Route::get('/buytickets', function () {
//     return Inertia::render('BuyTickets/BuyTickets');
// })->name('buytickets');
// Route::get('/buyticketscart', function () {
//     return Inertia::render('Cart/TBCart/TBCart');
// })->name('buyticketscart');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Manager
Route::get('/manager', function () {
    return Inertia::render('Manager/ManagerDashboard');
})->name('manager.dashboard')->middleware(['auth', 'manager']);

// Route::get('/managerCreateRequest', function () {
//     return Inertia::render('Manager/PendingRequests/CreateRequest');
// })->name('managerCreateRequest');

// Route::get('/managerUpdateRequest', function () {
//     return Inertia::render('Manager/PendingRequests/UpdateRequest');
// })->name('managerUpdateRequest');



Route::get('/about', function () {return Inertia::render('AboutUs/AboutUS');})->name('about');
Route::get('/browse-guest', function () {return Inertia::render('BrowseEvent/BrowseEvent');})->name('browse.guest');
Route::get('/buytickets', function () {return Inertia::render('BuyTickets/BuyTickets');})->name('buytickets');
Route::get('/browse', [EventController::class, 'showBrowseEvents'])->name('browse');

//-----------------------------------------------------------------------------------------------------------------------------------------------------







Route::get('/eventDeleteRequest',[ManagerController::class,'showDeleteRequests'])->name('eventDeleteRequest');
Route::post('/delete-requests/update', [DeleteRequestController::class, 'update'])->name('delete-request.update');
Route::get('/delete-request/report/{id}', [DeleteRequestController::class, 'generateReport'])->name('delete-request.report');


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

// Route::get('programmer/dashboard', function () {
//     return Inertia::render('Programmer/ProgrammerDashboard');
// })->name('programmer.dashboard');

Route::get('programmer/dashboard', [ProgrammerController::class, 'index'])->name('programmer.dashboard')->middleware(['auth', 'programmer']);

Route::get('admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard')->middleware(['auth', 'admin']);

Route::get('eventhost/dashboard', [EventHostController::class, 'index'])->name('eventhost.dashboard');


Route::get('eventhost/ongoing', [EventHostController::class, 'ehOngoing'])->name('eventhost.ongoingEvents')->middleware(['auth', 'eventhost']);
Route::get('eventhost/ongoing-history', [EventHostController::class, 'ehOngoingHistory'])->name('eventhost.ongoingEvents.history')->middleware(['auth', 'eventhost']);


Route::get('eventhost/view-event/{event}', [EventHostController::class, 'showEventHostViewEvent'])->name('eventhost.view-event')->middleware(['auth', 'eventhost']);

Route::get('eventhost/profile', [EventHostController::class, 'profile'])->name('eventhost.profiles')->middleware(['auth', 'eventhost']);



Route::get('event/create', [EventController::class, 'create'])->name('event.create')->middleware(['auth', 'eventhost']);
Route::post('event/store', [EventController::class, 'store'])->name('event.store');

Route::get('/api/events', [EventController::class, 'getCompletedEvents']);

Route::get('/api/get-event/{event}', [EventController::class, 'getEvent']);

Route::middleware(['auth','eventhost'])->group(function () {
    Route::get('/event-host/profile', [EventHostController::class, 'profile'])->name('eventhost.profile');
    Route::get('/event-host/history', [EventHostController::class, 'ehOngoing'])->name('eventhost.history');
    Route::get('/event-host/changePW', [EventHostController::class, 'changePW'])->name('eventhost.changePW');
    Route::get('/event-host/signOut', [EventHostController::class, 'signOut'])->name('eventhost.signOut');
    
});


Route::get('/EHOngoing', [EventHostController::class, 'ehOngoing'])->name('eh.ongoing')->middleware(['auth', 'eventhost']);
Route::get('/EHPendingPayments', [EventHostController::class, 'ehPendingPayments'])->name('eh.pendingPayments')->middleware(['auth', 'eventhost']);
Route::get('/EHPendingRequests', [EventHostController::class, 'ehPendingRequests'])->name('eh.pendingRequests')->middleware(['auth', 'eventhost']);
Route::get('/EHRejected', [EventHostController::class, 'ehRejected'])->name('eh.rejected')->middleware(['auth', 'eventhost']);
Route::get('/EHHistory', [EventHostController::class, 'ehHistory'])->name('eh.history')->middleware(['auth', 'eventhost']);

// Get attendee count
Route::get('/api/event/{id}/attendees', [EventController::class, 'getAttendees']);
// Generate PDF
Route::get('/api/event/{id}/attendees/pdf', [EventController::class, 'generateAttendeesPdf'])->name('api.events.attendees.pdf');

//Route::get('/events/{id}/update', [EventController::class, 'edit'])->name('update.event');//////

Route::get('/hosteventcart', function () {
    return Inertia::render('Cart/EHCart/EHCart');
})->name('hosteventcart');


Route::get('/artists/search', [ArtistController::class, 'search']);
Route::post('/artists', [ArtistController::class, 'store']);

Route::get('/eventdetails/{id}', [EventController::class, 'show'])->name('event.details');
Route::get('/buytickets/{id}', [EventController::class, 'showBuyTickets'])->name('buytickets');

Route::get('/event/create-requests', [EventController::class, 'getPendingEvents'])->name('event.create.requests')->middleware(['auth', 'adminManagerProgrammer']);

Route::post('/manager/approve-event/{id}', [EventController::class, 'approveEvent'])->name('manager.approve.event')->middleware(['auth', 'adminManagerProgrammer']);

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

Route::get('ongoing',[ManagerController::class,'showManagerOngoingEvents'])->name('ongoing')->middleware(['auth', 'adminManagerProgrammer']);

Route::get('view-event/{event}',[ManagerController::class,'showManagerViewEvent'])->name('viewevent');

Route::get('ended-event-history', [EventController::class, 'getEndedEvents'])->name('ended.event.history')->middleware(['auth', 'adminManagerProgrammer']);

Route::get('pending-payment-history', [EventController::class, 'getPendingPaymentEvents'])->name('pending.payments.history');

Route::get('/pending/event-report/{id}', [EventController::class, 'generateEventReport'])
    ->name('pending.event.report');

Route::get('/rejectedEventHistory', [EventController::class, 'getRejectedEvents'])->name('rejected.events.history');

Route::get('/ended-event/{id}/report', [EventController::class, 'generateEndedEventReport'])->name('ended.event.report');

Route::get('/rejected-event/{id}/report', [EventController::class, 'generateRejectedEventReport'])->name('rejected.event.report');

Route::middleware(['auth','adminManagerProgrammer'])->group(function () {
Route::get('/other/profile-show', [ManagerController::class, 'showManagerProfile'])->name('manager.profile');
});

Route::get('/other/change-password', [ManagerController::class, 'showManagerChangePW'])->name('manager.changepw');

Route::get('/other/logout', [ManagerController::class, 'showManagerSignOut'])->name('manager.signout');

Route::get('/manager/sidebar', [ManagerController::class, 'showManagerSideBar'])->name('manager.sidebar');

Route::get('other/profile/edit', [ManagerController::class, 'editProfile'])->name('other.profile.edit');

Route::post('/manager/profile/update', [ManagerController::class, 'updateProfile'])->name('manager.profile.update');

Route::post('/manager/change-password', [ManagerController::class, 'updateManagerPassword'])->name('manager.updatePassword');

//Route::get('/manager/inquiries', [ManagerController::class, 'showInquiriesPage'])->name('manager.inquiries');

//Route::get('/manager/reviews', [ManagerController::class, 'showReviewsPage'])->name('manager.reviews');

Route::post('/reviews', [WebSiteReviewController::class, 'store'])->name('reviews.store');

Route::get('/reviewPg', [WebSiteReviewController::class, 'showReviewPage'])->name('reviews.show');

Route::get('/show-reviews', [WebSiteReviewController::class, 'index'])->middleware('auth')->name('reviews.index')->middleware(['auth', 'adminManagerProgrammer']);

Route::post('/reviews/{id}/approve', [WebSiteReviewController::class, 'approve'])->middleware('auth')->middleware(['auth', 'adminManagerProgrammer']);

Route::post('/reviews/{id}/reply', [WebSiteReviewController::class, 'reply'])->middleware('auth')->middleware(['auth', 'adminManagerProgrammer']);

Route::delete('/reviews/{id}', [WebSiteReviewController::class, 'destroy'])->middleware('auth')->middleware(['auth', 'adminManagerProgrammer']);




    Route::get('/inquiries', [InquiryController::class, 'index'])->name('inquiries.index')->middleware(['auth', 'adminManagerProgrammer']);
    Route::post('/inquiries/{id}/reply', [InquiryController::class, 'reply'])->name('inquiries.reply')->middleware(['auth', 'adminManagerProgrammer']);
    Route::delete('/inquiries/{id}', [InquiryController::class, 'destroy'])->name('inquiries.destroy')->middleware(['auth', 'adminManagerProgrammer']);

// Public inquiry submission route
Route::post('/inquiries', [InquiryController::class, 'store'])->name('inquiries.store');

Route::get('/connect-with-us', function () {
    return Inertia::render('ConnectWithUs/ConnectWithUs');
})->name('connect-with-us');

Route::get('/manager/stats', [ManagerController::class, 'getStats'])->middleware(['auth', 'manager']);

Route::get('/add-new-member', [NewMemberController::class, 'index'])->name('add.new.memeber')->middleware(['auth', 'adminManagerProgrammer']);

Route::post('/register-new-member', [NewMemberController::class, 'store']);

Route::post('/event/delete-request', [EventController::class, 'storeDeleteRequest']);

Route::middleware(['auth','customer'])->group(function () {
    Route::get('/tb-profile', function () {
        return Inertia::render('UserProfile/TB-Profiles/TBProfile', [ 
            'user' => auth()->user()
        ]);
    })->name('tb-profile');

    Route::get('/TBPurchaseHistory', [UserController::class,'purchaseHistory'])->name('TBPurchaseHistory');

    Route::get('/TBSignOut', function () {
        return Inertia::render('UserProfile/TB-Profiles/TBSignOut', [
            'user' => auth()->user()
        ]);  
    
    })->name('TBSignOut');

    Route::get('/TBChangePW', function () {
        return Inertia::render('UserProfile/TB-Profiles/TBChangePW', [
            'user' => auth()->user(),
        ]);
    })->name('user.change-password');


});

Route::post('/SignOut', [AuthenticatedSessionController::class, 'destroy'])->name('SignOut');
Route::post('/profile/update', [UserController::class, 'update'])->name('profile.update');
Route::get('/tb/purchase-history', [UserController::class, 'purchaseHistory'])->name('purchase.history');
Route::get('/change-password', [UserController::class, 'showChangePasswordForm'])->name('user.change-password.form');
Route::post('/change-password', [UserController::class, 'updatePassword'])->name('user.change-password');


Route::get('other/profile', [AdminController::class, 'profile'])->name('admin.profile')->middleware(['auth', 'adminManagerProgrammer']);
Route::post('other/updateProfile', [AdminController::class, 'updateProfile'])->name('admin.updateProfile')->middleware(['auth', 'adminManagerProgrammer']);
Route::get('other/changePW', [AdminController::class, 'changePW'])->name('admin.changePW');
Route::post('other/update-password', [AdminController::class, 'updatePassword'])->name('admin.updatePassword')->middleware(['auth', 'adminManagerProgrammer']);
Route::get('other/signOut', [AdminController::class, 'signOut'])->name('admin.signOut')->middleware(['auth', 'adminManagerProgrammer']);

Route::get('other/ongoing', [AdminController::class, 'ongoingEvents'])->name('admin.ongoingEvents')->middleware(['auth', 'adminManagerProgrammer']);
Route::get('other/userDetails', [AdminController::class, 'userDetails'])->name('admin.userDetails')->middleware(['auth', 'adminManagerProgrammer']);

Route::get('/events/view/{id}', [AdminController::class, 'show'])->name('admin.viewEvent');

Route::get('/addMember', [ProgrammerController::class, 'addMember'])->name('add.member')->middleware(['auth', 'adminManagerProgrammer']);

Route::get('/events/search', [EventController::class, 'search'])->name('events.search');
 //Route::get('/events/details', [EventController::class, 'searchDetails'])->name('events.details');
 Route::post('/events/results', [EventController::class, 'searchResults'])->name('events.results');
Route::post('/event/exists', [EventController::class, 'eventExists']);


 Route::get('/event-host/home', [EventHostController::class, 'index'])->name('eventhost.home');
 Route::get('/api/events/ongoing', [EventController::class, 'ongoingEvents'])->name('event.ongoingEvents');
 Route::get('/events/{id}', [EventController::class, 'showEvent'])->name('view.event');
 //Route::get('/events/{id}/update', [EventController::class, 'edit'])->name('update.event');
 Route::get('event/profiles', [EventController::class, 'profiles'])->name('event.profiles');

 Route::get('/events/{id}/delete', [EventController::class, 'delete'])->name('delete.event');

 Route::get('other/tbUserDetails', [AdminController::class, 'tbUserDetails'])->name('tb.userDetails')->middleware(['auth', 'adminProgrammer']);

 Route::get('other/ehUserDetails', [AdminController::class, 'ehUserDetails'])->name('eh.userDetails')->middleware(['auth', 'adminProgrammer']);

 Route::post('delete/users/{id}', [AdminController::class, 'destroy'])->name('users.destroy')->middleware(['auth', 'adminProgrammer']);

 Route::get('/users/{id}/download', [AdminController::class, 'ticketBuyerHistory'])->name('users.download')->middleware(['auth', 'adminProgrammer']);

 Route::get('/users/{id}/download1', [AdminController::class, 'eventHostHistory'])->name('users.download1')->middleware(['auth', 'adminProgrammer']);

Route::get('/event/update/{event_id}', [EventUpdateRequestController::class, 'edit'])->name('event.update');

Route::post('/event/update/{event_id}', [EventUpdateRequestController::class, 'store'])->name('event.update.store');

Route::get('/event/update-requests', [EventUpdateRequestController::class, 'index'])->name('event.update.requests')->middleware(['auth', 'adminManagerProgrammer']);

Route::post('/event/update/approve/{event_update_request_id}', [EventUpdateRequestController::class, 'approve'])->name('event.update.approve')->middleware(['auth', 'adminManagerProgrammer']);

Route::get('/event/selling-ticket-report/{id}', [EventHostController::class, 'generateTicketReport'])->middleware(['auth', 'eventhost']);

Route::get('/event/event-attendees-list/{id}', [EventHostController::class, 'generateAttendeesList'])->middleware(['auth', 'eventhost']);

Route::post('/event/cancel/{id}', [EventHostController::class, 'cancelEvent'])->middleware(['auth', 'eventhost']);

Route::get('/event/rejection-pdf/{id}', [EventHostController::class, 'generateRejectionPDF'])->name('event.rejection-pdf')->middleware(['auth', 'eventhost']);


Route::get('/ended-event/report/{id}', [EventHostController::class, 'downloadEventReport'])
    ->name('event.report.download')->middleware(['auth', 'eventhost']);

    Route::prefix('eventhost/payment')->group(function () {
        Route::get('/checkout', [EventHostPaymentController::class, 'checkout'])->name('eventhost.payment.checkout');
        Route::post('/process', [EventHostPaymentController::class, 'processPayment'])->name('eventhost.payment.process');
        Route::get('/success', [EventHostPaymentController::class, 'success'])->name('eventhost.payment.success');
        Route::get('/cancel', [EventHostPaymentController::class, 'cancel'])->name('eventhost.payment.cancel');
    })->middleware(['auth', 'eventhost']);


    Route::get('eventhost/profile/edit', [EventHostController::class, 'editProfile'])->name('eventhost.profile.edit')->middleware(['auth', 'eventhost']);

    Route::post('/eventhost/profile/update', [EventHostController::class, 'updateProfile'])->name('eventhost.profile.update')->middleware(['auth', 'eventhost']);

    Route::post('/eventhost/profile/update-password', [EventHostController::class, 'updateEventHostPassword'])->name('eventhost.profile.update-password')->middleware(['auth', 'eventhost']);



Route::get('/admin/monthly-user-registrations-by-role', [AdminController::class, 'getMonthlyUserRegistrationsByRole'])->middleware(['auth', 'admin']);

    Route::get('/host-contact/{id}', [EventController::class, 'showPage'])->name('host.contact.page');
    Route::post('/host-contact', [EventController::class, 'send'])->name('host.contact');

Route::get('/admin/monthly-user-registrations-by-role', [AdminController::class, 'getMonthlyUserRegistrationsByRole'])->middleware(['auth', 'admin']);

Route::get('/paymenthistory', [PaymentReportController::class, 'index'])->name('payment.details')->middleware(['auth', 'manager']);



Route::get('/payment-details/pdf', [PaymentReportController::class, 'exportPdf'])->name('payment.details.pdf')->middleware(['auth', 'manager']);

Route::get('/customer/edit-profile', [UserController::class, 'editProfile'])->name('customer.editProfile')->middleware(['auth', 'customer']);

Route::post('/customer/updateCustomerProfile',[UserController::class,'updateProfile'])->name('customer.updateProfile')->middleware(['auth', 'customer']);



require __DIR__ . '/auth.php';
