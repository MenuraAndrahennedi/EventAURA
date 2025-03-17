import React from 'react';
import { usePage } from "@inertiajs/react";
import "./PaymentSuccess.scss";
import { Link } from "@inertiajs/react";

const PaymentSuccess = () => {

  const { success } = usePage().props;
  return (
    <div className="payment-success-container">
      <h1>Payment Successful!</h1>
      <p>Your tickets will recieve to you through your email as soon. Thank you for your purchase!</p>
      {success && <p>{success}</p>}

      <div className="button-group">
       <Link href={route('browse')}  className="browse-btn">Browse More Events</Link>
      <Link href={route('home')} className="home-btn" >Back to Home</Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
