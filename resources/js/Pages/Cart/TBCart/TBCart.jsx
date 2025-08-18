import React, { useEffect, useState,useContext  } from "react";
import TBHeader from "../../../Components/Header/TBHeader";
import SubFooter from "../../../Components/Footer/SubFooter";
import "../../../../css/TBCart.scss";
import { Link } from "@inertiajs/react";
import { CartContext } from "../../../../js/contexts/CartContext";

const TBCart = ({ event }) => {
    // Access cart state from CartContext
    const { cart } = useContext(CartContext);

    // Get ticket quantities for the current event (fallback to 0 if no data)
    const eventCart = cart[event.id] || { golden: 0, silver: 0, bronze: 0 };

    // Calculate subtotal for all ticket types
    const calculateTotal = () => {
        const goldenTotal = eventCart.golden * event.golden_ticket_price;
        const silverTotal = eventCart.silver * event.silver_ticket_price;
        const bronzeTotal = eventCart.bronze * event.bronze_ticket_price;
        return goldenTotal + silverTotal + bronzeTotal;
    };

    // Calculate total number of tickets in the cart
    const totalItems = eventCart.golden + eventCart.silver + eventCart.bronze;

    // Store subtotal value
    const subtotal = calculateTotal();

    return (
        <>
            <header>
                <TBHeader />
            </header>

            {/* Summary section */}
            <div className="cart-container">
                <h1>Your Cart</h1>
                <div className="cart-summary">
                    <h2>Summary</h2>

                    {/* Show Golden Ticket details only if quantity > 0 */}
                    {eventCart.golden > 0 && (
                        <div className="ticket-item">
                            <p>Golden Ticket</p>
                            <div className="ticket-details">
                                <span>{event.golden_ticket_price} LKR</span>
                                <span>x {eventCart.golden} </span>
                                <span>{eventCart.golden * event.golden_ticket_price} LKR</span>
                            </div>
                        </div>
                    )}

                    {/* Show Silver Ticket details only if quantity > 0 */}
                    {eventCart.silver > 0 && (
                        <div className="ticket-item">
                            <p>Silver Ticket</p>
                            <div className="ticket-details">
                                <span>{event.silver_ticket_price} LKR</span>
                                <span>x {eventCart.silver}</span>
                                <span>{eventCart.silver * event.silver_ticket_price} LKR</span>
                            </div>
                        </div>
                    )}

                    {/* Show Bronze Ticket details only if quantity > 0 */}
                    {eventCart.bronze > 0 && (
                        <div className="ticket-item">
                            <p>Bronze Ticket</p>
                            <div className="ticket-details">
                                <span>{event.bronze_ticket_price} LKR</span>
                                <span>x {eventCart.bronze}</span>
                                <span>{eventCart.bronze * event.bronze_ticket_price} LKR</span>
                            </div>
                        </div>
                    )}

                    <hr />

                    {/* Summary totals section */}
                    <div className="summary-totals">
                        <div className="summary-item">
                            <span>Subtotal ({totalItems} items)</span>
                            <span>Rs.{subtotal}.00</span>
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

                    {/* Total balance section */}
                    <div className="total-balance">
                        <span>Balance (Total amount to pay)</span>
                        <span>{calculateTotal()} LKR</span>
                    </div>
                </div>

                 {/* Cart action buttons */}
                <div className="cart-buttons">
                    <Link href={route('event.details', { id: event.id })}className="back-button">
                        Back to event details
                    </Link>
                    <Link href={route('buytickets',{ id: event.id })} className="update-button">
                        Update Cart
                    </Link>
                </div>

                {/* Checkout button */}
                <div className="checkout-button-container">
                    <Link href={route('checkout', { total: calculateTotal(), event_id: event.id })} className="checkoutButtons"> Checkout</Link>
                </div>

            </div>
            
            <footer>
                <SubFooter />
            </footer>
        </>
    );
};

export default TBCart;
