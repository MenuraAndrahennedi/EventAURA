import React, { useState } from 'react';
import { usePage, router } from '@inertiajs/react';
import UserHeader from '@/Components/Header/UserHeader';
import AdminFooter from '@/Components/Footer/AdminFooter';

export default function PaymentDetails() {
  const { customerPayments, hostPayments, totalRevenueCustomer, totalRevenueHost, filter } = usePage().props;
  const [selectedFilter, setSelectedFilter] = useState(filter || 'all');

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    router.get(route('payment.details'), { filter: value }, { preserveState: true });
  };

  return (
    <>
      <UserHeader />

      <main className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-8">
          <h1 className="text-4xl font-bold text-center text-gray-800">Payment Report</h1>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <label className="text-gray-700 font-medium">Filter:</label>
              <select
                value={selectedFilter}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              >
                <option value="all">All Time</option>
                <option value="week">Last 7 Days</option>
                <option value="month">Last 30 Days</option>
              </select>
            </div>

            <a
              href={route('payment.details.pdf', { filter: selectedFilter })}
              target="_blank"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Download Payment Report
            </a>
          </div>

          <div className="text-lg font-semibold text-green-700 border border-green-200 bg-green-50 p-3 rounded">
            Total Revenue from Customers: LKR {totalRevenueCustomer.toLocaleString()}
          </div>

          <section className="overflow-x-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Customer Payments</h2>
            <table className="w-full text-left border border-gray-200">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-3 border">#</th>
                  <th className="p-3 border">Customer</th>
                  <th className="p-3 border">Event</th>
                  <th className="p-3 border">Amount</th>
                  <th className="p-3 border">Date</th>
                </tr>
              </thead>
              <tbody>
                {customerPayments.map((p, i) => (
                  <tr key={p.id} className="hover:bg-gray-50">
                    <td className="p-3 border">{i + 1}</td>
                    <td className="p-3 border">{p.customer?.name || p.guest_name}</td>
                    <td className="p-3 border">{p.event?.name}</td>
                    <td className="p-3 border">LKR {p.amount}</td>
                    <td className="p-3 border">{new Date(p.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <div className="text-lg font-semibold text-indigo-700 border border-indigo-200 bg-indigo-50 p-3 rounded">
            Total Revenue from Event Hosting: LKR {totalRevenueHost.toLocaleString()}
          </div>

          <section className="overflow-x-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Event Host Payments</h2>
            <table className="w-full text-left border border-gray-200">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-3 border">#</th>
                  <th className="p-3 border">Event Host</th>
                  <th className="p-3 border">Amount</th>
                  <th className="p-3 border">Date</th>
                </tr>
              </thead>
              <tbody>
                {hostPayments.map((p, i) => (
                  <tr key={p.id || i} className="hover:bg-gray-50">
                    <td className="p-3 border">{i + 1}</td>
                    <td className="p-3 border">{p.event_host?.name}</td>
                    <td className="p-3 border">LKR {p.amount}</td>
                    <td className="p-3 border">{new Date(p.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </main>

      <AdminFooter />
    </>
  );
}
