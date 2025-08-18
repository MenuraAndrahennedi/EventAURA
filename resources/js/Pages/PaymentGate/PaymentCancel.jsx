import React from 'react';
import { Link ,usePage  } from "@inertiajs/react";
import MainHeader from '../../Components/Header/MainHeader';
import MainFooter from '../../Components/Footer/MainFooter';
import '../../../css/PaymentCancel.scss';  // SCSS file for styling

const PaymentCancel = () => {
  
  // Destructure event, cart, and message-
  // props passed from the backend/page context
  const { event, cart, message } = usePage().props;
  
  return (
    <>
      {/* <header>
        <MainHeader />
      </header> */}

      {/* Main content container for payment cancellation */}
      <main className="payment-cancel-container">
          
          {/* Payment cancellation */}
          <h1> Payment Cancelled</h1>
          <p>Your payment was cancelled.</p>{/*</p> <p>{message}</p>  */}
          <p>You can return to your cart to try again or go back to home.</p>

          {/* Button group with navigation links */}
          <div className="button-group">
                
                {/* Link back to the user's cart for retrying payment
                Passes cart data as route parameter and uses event id for route */}
                <Link href={route('buyticketscart', { id: event?.id })}
                      data={{ cart: cart }} 
                      className="cart-btn">Go Back to Cart</Link>
                
                {/* Link back to the home page */}
                <Link href={route('home')} className="home-btn">Back to Home</Link>
          </div>
      </main>

      {/* <footer>
        <MainFooter />
      </footer> */}
    </>
  );
};

export default PaymentCancel;
