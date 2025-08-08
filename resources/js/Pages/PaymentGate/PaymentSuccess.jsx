import React from 'react';
import { usePage } from "@inertiajs/react";
import "../../../css/PaymentSuccess.scss";
import { Link } from "@inertiajs/react";

const PaymentSuccess = () => {

  // Destructure the success message passed from the backend via Inertia props
  const { success } = usePage().props;
  return (
    
    // Main container for payment success message and actions
    <div className="payment-success-container">
      
      {/* successful payment */}
      <h1>Payment Successful!</h1>
      <p>Your tickets will recieve to you through your email as soon. Thank you for your purchase!</p>
      
      {/* Conditionally render any additional success message if available */}
      {success && <p>{success}</p>}


    {/* Navigation buttons for browsing more events or going back home */}
      <div className="button-group">
          <Link href={route('browse')}  className="browse-btn">Browse More Events</Link>
          <Link href={route('home')} className="home-btn" >Back to Home</Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
