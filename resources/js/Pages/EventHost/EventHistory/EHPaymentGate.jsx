import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import MainHeader from "../../../Components/Header/EHHeader";
import MainFooter from "../../../Components/Footer/MainFooter";
import { usePage, router } from "@inertiajs/react"; // Get Laravel props from Inertia.js

import "../../../../css/PaymentGate.scss";

const stripePromise = loadStripe(
    "pk_test_51QwdwpPxzbr1WYso8H9OFdQvYi78pwIi5w1qExB1MO4edWNeO22QesA0ClJI7p5Z8tiscBdMXPrzM2KOC9xe3pLk00kg3VIPUz"
);

const EHPaymentGate = () => {
    const { user } = usePage().props; // Get event host details from Laravel
    const [name, setName] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email || "");
    const [phone, setPhone] = useState(user?.telephone || "");
    const [loading, setLoading] = useState(false);
    const totalAmount = 1000; // Fixed price for event host payment

    const handlePayment = async (event) => {
        event.preventDefault(); // Prevent page refresh
        setLoading(true);
        try {
            console.log("Sending payment request...");
            const response = await axios.post("/eventhost/payment/process", {
                amount: totalAmount, // Event host fixed payment
                event_host_id: user.id,
            });

            console.log("Response received:", response.data);
            const { id } = response.data;
            const stripe = await stripePromise;
            const result = await stripe.redirectToCheckout({ sessionId: id });

            if (result.error) {
                console.error("Stripe Error:", result.error);
            } else {
                window.location.href = "/eventhost/payment/success";
            }
        } catch (error) {
            console.error(
                "Payment Error:",
                error.response ? error.response.data : error.message
            );
            //setMessage("Payment failed! Please try again.");
        }
        setLoading(false);
    };

    return (
        <>
            <header>
                <MainHeader />
            </header>

            <main className="payment-container">
                <form className="payment-form" onSubmit={handlePayment}>
                    <h2>Event Hosting Payment</h2>
                    <hr />
                    <p className="required-note">*Required fields</p>

                    <div className="input-group">
                        <label>Event Host Name*</label>
                        <input type="text" value={name} readOnly required />
                    </div>

                    <div className="input-group">
                        <label>Event Host Email*</label>
                        <input type="email" value={email} readOnly required />
                    </div>

                    <div className="input-group">
                        <label>Event Host Phone Number*</label>

                        <input type="text" value={phone} readOnly required />
                    </div>

                    <div className="button-group">
                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={() =>
                                router.visit("/eventhost/payment/cancel")
                            }
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="pay-btn"
                            disabled={loading}
                        >
                            {" "}
                            {loading ? "Processing..." : "Pay with Stripe"}
                        </button>
                    </div>
                </form>

                <aside className="total-amount-box">
                    <h3>
                        Total amount*
                        {totalAmount}LKR
                    </h3>
                </aside>
            </main>

            <footer>
                <MainFooter />
            </footer>
        </>
    );
};

export default EHPaymentGate;
