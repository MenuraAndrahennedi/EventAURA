import React, { useEffect, useState } from "react";
import TBHeader from "../../../Components/Header/TBHeader";

import SubFooter from "../../../Components/Footer/SubFooter";

import "../../../../css/TBCart.scss";
import { Link } from "@inertiajs/react";

const TBCart = () => {
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
                        <p>Golden Ticket</p>
                        <div className="ticket-details">
                            <span>Rs 15 000.00</span>
                            <span>x 2</span>
                            <span>Rs 30 000.00</span>
                        </div>
                    </div>

                    <div className="ticket-item">
                        <p>Silver Ticket</p>
                        <div className="ticket-details">
                            <span>Rs 10 000.00</span>
                            <span>x 3</span>
                            <span>Rs 30 000.00</span>
                        </div>
                    </div>

                    <div className="ticket-item">
                        <p>Bronze Ticket</p>
                        <div className="ticket-details">
                            <span>Rs 5 000.00</span>
                            <span>x 4</span>
                            <span>Rs 20 000.00</span>
                        </div>
                    </div>

                    <hr />

                    <div className="summary-totals">
                        <div className="summary-item">
                            <span>Subtotal (9 items)</span>
                            <span>Rs 80 000.00</span>
                        </div>
                        <div className="summary-item">
                            <span>Shipping fee</span>
                            <span>Rs 0.00</span>
                        </div>
                        <div className="summary-item">
                            <span>Discount</span>
                            <span>Rs 0.00</span>
                        </div>
                        <div className="summary-item">
                            <span>Tax (Calculated at checkout)</span>
                            <span>Rs 0.00</span>
                        </div>
                    </div>

                    <hr />

                    <div className="total-balance">
                        <span>Balance (Total amount to pay)</span>
                        <span>Rs 80 000.00</span>
                    </div>
                </div>

                <div className="cart-buttons">
                    <Link to="/TBEventDetails" className="back-button">
                        Back to event details
                    </Link>
                    <Link to="/BuyTickets" className="update-button">
                        Update Cart
                    </Link>
                </div>

                <div className="checkout-button-container">
                    <Link to="/PaymentGate" className="checkoutButtons">
                        Checkout
                    </Link>
                </div>
            </div>
            <footer>
                <SubFooter />
            </footer>
        </>
    );
};

export default TBCart;
