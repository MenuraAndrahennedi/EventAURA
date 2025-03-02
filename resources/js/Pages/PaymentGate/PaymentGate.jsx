import React from 'react'
import MainHeader from '../../Components/Header/MainHeader'
import MainFooter from '../../Components/Footer/MainFooter';
import './PaymentGate.scss'
import { Link } from 'react-router-dom';

const PaymentGate = () => {
  return (
    <>

      <header>
        <MainHeader />
      </header>

      <main className="payment-container">
        <form className="payment-form">
          <h2>Payment Details</h2>
          <hr />
          <p className="required-note">*Required fields</p>
          <div className="input-group">
            <label>Card Type*</label>
            <div className="card-type-options">
              <label>
                <input type="radio" name="cardType" value="Visa" required />
                Visa
              </label>
              <label>
                <input type="radio" name="cardType" value="Mastercard" required />
                Mastercard
              </label>
            </div>
          </div>
          <div className="input-group">
            <label>Card Number*</label>
            <input type="text" placeholder="Card Number" required />
          </div>
          <div className="input-row">
            <div className="input-group">
              <label>Expiration Month*</label>
              <input type="text" placeholder="Month" required />
            </div>
            <div className="input-group">
              <label>Expiration Year*</label>
              <input type="text" placeholder="Year" required />
            </div>
          </div>
          <div className="input-group">
            <label>CVN*</label>
            <p className="cvn-info">This code is a three or four digit number printed on the back or front of credit cards.</p>
            <input type="text" placeholder="CVN" required />
          </div>
          <div className="button-group">
            <button type="button" className="cancel-btn">Cancel</button>
            <button type="submit" className="pay-btn">Pay</button>
          </div>
        </form>
        <aside className="total-amount-box">
          <h3>Total amount*</h3>
        </aside>
      </main>

      <footer>
        <MainFooter />
      </footer>
    </>
  )
}

export default PaymentGate
