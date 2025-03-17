import React from 'react'
{/**used TBCart.scss -same className */}
import { Link } from 'react-router-dom';
import TBHeader from './../../Components/Header/TBHeader';
import SubFooter from './../../Components/Footer/SubFooter';

const EHCart = () => {
  return (
    <>
      <header>
        <TBHeader />
      </header>

      <div className="cart-container">
          <h1>Your Cart</h1>
          <div className="cart-summary">
            <h2>Summary</h2>
            
            <div className="ticket-item">
              <div className="ticket-details">
                <span>Rs 20 000.00</span>
                <span>x 1</span>
                <span>Rs 20 000.00</span>
              </div>
            </div>

            <hr />

            <div className="summary-totals">
              <div className="summary-item">
                <span>Subtotal (1 item)</span>
                <span>Rs 20 000.00</span>
              </div>
              <div className="summary-item">
                <span>Discount</span>
                <span>Rs 0.00</span>
              </div>
              <div className="summary-item">
                <span>Tax(calculated at checkout)</span>
                <span>Rs 0.00</span>
              </div>
            </div>

          <hr />

          <div className="total-balance">
            <span>Balance (Total amount to pay)</span>
            <span>Rs 20 000.00</span>
          </div>
      </div>

      <div className="cart-buttons">
        <Link to="/create" className="back-button">Back to event details</Link>
        <Link to="/create" className="update-button">Update Cart</Link>
      </div>

      <div className="checkout-button-container">
        <Link to="/PaymentGate" className="checkoutButtons">Checkout</Link>
      </div>
      
    </div>
      <footer>
        <SubFooter />
      </footer>
    </>
  )
}

export default EHCart
