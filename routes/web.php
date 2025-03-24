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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Manager
Route::get('/manager', function () {
    return Inertia::render('Manager/ManagerDashboard');
})->name('manager.dashboard')->middleware(['auth', 'manager']);

// Route::get('/managerCreateRequest', function () {
//     return Inertia::render('Manager/PendingRequests/CreateRequest');
// })->name('managerCreateRequest');

Route::get('/managerUpdateRequest', function () {
    return Inertia::render('Manager/PendingRequests/UpdateRequest');
})->name('managerUpdateRequest');



Route::get('/about', function () {return Inertia::render('AboutUs/AboutUS');})->name('about');
Route::get('/browse', function () {return Inertia::render('BrowseEvent/BrowseEvent');})->name('browse');
Route::get('/buytickets', function () {return Inertia::render('BuyTickets/BuyTickets');})->name('buytickets');
/*
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


*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------







Route::get('/managerDeleteRequest',[ManagerController::class,'showDeleteRequests'])->name('managerDeleteRequest');
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
//Route::get('manager/dashboard', [ManagerController::class, 'index'])->name('manager.dashboard')->middleware(['auth', 'manager']);
Route::get('admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard')->middleware(['auth', 'admin']);
Route::get('eventhost/dashboard', [EventHostController::class, 'index'])->name('eventhost.dashboard')->middleware(['auth', 'eventhost']);
//Route::get('customer/dashboard', [CustomerController::class, 'index'])->name('customer.dashboard')->middleware(['auth', 'customer']);

Route::get('eventhost/ongoing', [EventHostController::class, 'ehOngoing'])->name('eventhost.ongoingEvents')->middleware(['auth', 'eventhost']);
Route::get('eventhost/ongoing-history', [EventHostController::class, 'ehOngoingHistory'])->name('eventhost.ongoingEvents.history')->middleware(['auth', 'eventhost']);


Route::get('eventhost/view-event/{event}', [EventHostController::class, 'showEventHostViewEvent'])->name('eventhost.view-event')->middleware(['auth', 'eventhost']);

Route::get('eventhost/profile', [EventHostController::class, 'profile'])->name('eventhost.profiles')->middleware(['auth', 'eventhost']);



Route::get('event/create', [EventController::class, 'create'])->name('event.create')->middleware(['auth', 'eventCreation']);
Route::post('event/store', [EventController::class, 'store'])->name('event.store');

Route::get('/api/events', [EventController::class, 'getApprovedEvents']);

Route::get('/api/get-event/{event}', [EventController::class, 'getEvent']);

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

// Get attendee count
Route::get('/api/event/{id}/attendees', [EventController::class, 'getAttendees']);
// Generate PDF
Route::get('/api/event/{id}/attendees/pdf', [EventController::class, 'generateAttendeesPdf'])->name('api.events.attendees.pdf');

Route::get('/events/{id}/update', [EventController::class, 'edit'])->name('update.event');

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

//Route::get('/manager/inquiries', [ManagerController::class, 'showInquiriesPage'])->name('manager.inquiries');

//Route::get('/manager/reviews', [ManagerController::class, 'showReviewsPage'])->name('manager.reviews');

Route::post('/reviews', [WebSiteReviewController::class, 'store'])->name('reviews.store');

Route::get('/manager/reviews', [WebSiteReviewController::class, 'index'])->middleware('auth')->name('reviews.index');

Route::post('/reviews/{id}/approve', [WebSiteReviewController::class, 'approve'])->middleware('auth');

Route::post('/reviews/{id}/reply', [WebSiteReviewController::class, 'reply'])->middleware('auth');

Route::delete('/reviews/{id}', [WebSiteReviewController::class, 'destroy'])->middleware('auth');




    Route::get('/inquiries', [InquiryController::class, 'index'])->name('inquiries.index');
    Route::post('/inquiries/{id}/reply', [InquiryController::class, 'reply'])->name('inquiries.reply');
    Route::delete('/inquiries/{id}', [InquiryController::class, 'destroy'])->name('inquiries.destroy');

// Public inquiry submission route
Route::post('/inquiries', [InquiryController::class, 'store'])->name('inquiries.store');

Route::get('/connect-with-us', function () {
    return Inertia::render('ConnectWithUs/ConnectWithUs');
});

Route::get('/manager/stats', [ManagerController::class, 'getStats']);

Route::get('/add-new-member', [NewMemberController::class, 'index'])->name('add.new.memeber');

Route::post('/register-new-member', [NewMemberController::class, 'store']);

Route::post('/event/delete-request', [EventController::class, 'storeDeleteRequest']);

Route::middleware(['auth'])->group(function () {
    Route::get('/tb-profile', function () {
        return Inertia::render('UserProfile/TB-Profiles/TBProfile', [ 
            'user' => auth()->user()
        ]);
    })->name('tb-profile');

    Route::get('/TBPurchaseHistory', function () {
        return Inertia::render('UserProfile/TB-Profiles/TBPurchaseHistory', [
            'user' => auth()->user()
        ]);  
    
    })->name('TBPurchaseHistory');

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


Route::get('other/profile', [AdminController::class, 'profile'])->name('admin.profile');
Route::post('other/updateProfile', [AdminController::class, 'updateProfile'])->name('admin.updateProfile');
Route::get('other/changePW', [AdminController::class, 'changePW'])->name('admin.changePW');
Route::post('other/update-password', [AdminController::class, 'updatePassword'])->name('admin.updatePassword');
Route::get('other/signOut', [AdminController::class, 'signOut'])->name('admin.signOut');

Route::get('other/ongoing', [AdminController::class, 'ongoingEvents'])->name('admin.ongoingEvents');
Route::get('other/userDetails', [AdminController::class, 'userDetails'])->name('admin.userDetails');

Route::get('/events/view/{id}', [AdminController::class, 'show'])->name('admin.viewEvent');

Route::get('/addMember', [ProgrammerController::class, 'addMember'])->name('add.member');

Route::get('/events/search', [EventController::class, 'search'])->name('events.search');
 //Route::get('/events/details', [EventController::class, 'searchDetails'])->name('events.details');
 Route::post('/events/results', [EventController::class, 'searchResults'])->name('events.results');

 Route::get('/event-host/home', [EventHostController::class, 'index'])->name('eventhost.home');
 Route::get('/api/events/ongoing', [EventController::class, 'ongoingEvents'])->name('event.ongoingEvents');
 Route::get('/events/{id}', [EventController::class, 'showEvent'])->name('view.event');
 Route::get('/events/{id}/update', [EventController::class, 'edit'])->name('update.event');
 Route::get('event/profiles', [EventController::class, 'profiles'])->name('event.profiles');

 Route::get('/events/{id}/delete', [EventController::class, 'delete'])->name('delete.event');

 Route::get('other/tbUserDetails', [AdminController::class, 'tbUserDetails'])->name('tb.userDetails');

 Route::get('other/ehUserDetails', [AdminController::class, 'ehUserDetails'])->name('eh.userDetails');

 Route::delete('/users/{id}', [AdminController::class, 'destroy'])->name('users.destroy');

 Route::get('/users/{id}/download', [AdminController::class, 'ticketBuyerHistory'])->name('users.download');

 Route::get('/users/{id}/download1', [AdminController::class, 'eventHostHistory'])->name('users.download1');











require __DIR__ . '/auth.php';
