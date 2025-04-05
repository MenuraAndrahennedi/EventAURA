import React from 'react';
import { Link ,usePage  } from "@inertiajs/react";
import MainHeader from '../../Components/Header/MainHeader';
import MainFooter from '../../Components/Footer/MainFooter';
import '../../../css/PaymentCancel.scss';  // SCSS file for styling

const PaymentCancel = () => {
  const { event, cart, message } = usePage().props;
  return (
    <>
      {/* <header>
        <MainHeader />
      </header> */}

      <main className="payment-cancel-container">
        <h1> Payment Cancelled</h1>
         <p>Your payment was cancelled.</p>{/*</p> <p>{message}</p>  */}
        <p>You can return to your cart to try again or go back to home.</p>

        <div className="button-group">
          <Link href={route('buyticketscart', { id: event?.id })}
           data={{ cart: cart }} 
          className="cart-btn">Go Back to Cart</Link>
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
