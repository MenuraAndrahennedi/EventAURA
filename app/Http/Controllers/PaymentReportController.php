<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StripePayment;
use App\Models\EventHostPayment;

use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Barryvdh\DomPDF\Facade\Pdf;

class PaymentReportController extends Controller
{
    public function index(Request $request ){
        $filter = $request->input('filter', 'all');

        $customerQuery = StripePayment::with('event')
         ->where('status','completed');

        $hostQuery = EventHostPayment::with('eventHost') // make sure you define this relationship
            ->where('payment_status', 'completed');

         if($filter === 'week'){
            $customerQuery->where('created_at', '>=', now()->subWeek());
             $hostQuery->where('created_at', '>=', now()->subWeek());
         } elseif ($filter === 'month') {
            $customerQuery->where('created_at', '>=', now()->subMonth());
            $hostQuery->where('created_at', '>=', now()->subMonth());
        }

        $customerPayments = $customerQuery->latest()->get();
        $hostPayments = $hostQuery->latest()->get();

        $totalRevenueCustomer = $customerPayments->sum('amount');
        $totalRevenueHost = $hostPayments->sum('amount');

        return Inertia::render('Manager/PaymentDetails/PaymentDetails',[
            'customerPayments' => $customerPayments,
            'hostPayments' =>$hostPayments,
            'totalRevenueCustomer'=>$totalRevenueCustomer,
            'totalRevenueHost'=>$totalRevenueHost,
            'filter'=>$filter,
        ]);
    }

   // use Barryvdh\DomPDF\Facade\Pdf;

public function exportPdf(Request $request)
{
    $filter = $request->input('filter', 'all');

    $customerQuery = StripePayment::with('event', 'customer')->where('status', 'Completed');
    $hostQuery = EventHostPayment::with('eventHost')->where('payment_status', 'completed');

    if ($filter === 'week') {
        $customerQuery->where('created_at', '>=', now()->subWeek());
        $hostQuery->where('created_at', '>=', now()->subWeek());
    } elseif ($filter === 'month') {
        $customerQuery->where('created_at', '>=', now()->subMonth());
        $hostQuery->where('created_at', '>=', now()->subMonth());
    }

    $customerPayments = $customerQuery->latest()->get();
    $hostPayments = $hostQuery->latest()->get();

    $totalRevenueCustomer = $customerPayments->sum('amount');
    $totalRevenueHost = $hostPayments->sum('amount');

    $pdf = Pdf::loadView('pdf.payment-report', [
        'customerPayments' => $customerPayments,
        'hostPayments' => $hostPayments,
        'totalRevenueCustomer' => $totalRevenueCustomer,
        'totalRevenueHost' => $totalRevenueHost,
        'filter' => $filter
    ]);

    return $pdf->download('payment-report.pdf');
}

}
