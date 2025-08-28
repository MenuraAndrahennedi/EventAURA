import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import MainHeader from "../../Components/Header/MainHeader";
import TBHeader from "../../Components/Header/TBHeader";
import EHHeader from "../../Components/Header/EHHeader";
import MainFooter from "../../Components/Footer/MainFooter";

// Import Inertia.js helpers for accessing page props and navigation
import { usePage, router } from "@inertiajs/react"; // Get Laravel props from Inertia.js
import "../../../css/PaymentGate.scss";

// Initialize Stripe with your publishable test key
const stripePromise = loadStripe(
    "pk_test_51QwdwpPxzbr1WYso8H9OFdQvYi78pwIi5w1qExB1MO4edWNeO22QesA0ClJI7p5Z8tiscBdMXPrzM2KOC9xe3pLk00kg3VIPUz"
);

// PaymentGate component handles displaying the payment form and Stripe payment processing
const PaymentGate = () => {
    // Get server-side props from Laravel via Inertia
    const { event, cart, success, error, total } = usePage().props; // Get event and cart data from Inertia
    const { auth } = usePage().props; // Get auth status
    const user = auth.user; // Registered user data

    // State for form inputs, initialize with user info if available
    const [name, setName] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email || "");
    const [phone, setPhone] = useState(user?.phone || "");

    // Loading state during payment processing
    const [loading, setLoading] = useState(false);

    // Message state to show success/error feedback
    const [message, setMessage] = useState("");

    // Fetch payment status from backend on component mount
    useEffect(() => {
        // Get success/error from Laravel
        axios
            .get("/payment/success")
            .then((response) => {
                if (response.data.success) {
                    setMessage({
                        type: "success",
                        text: response.data.success,
                    });
                } else if (response.data.error) {
                    setMessage({ type: "error", text: response.data.error });
                }
            })
            .catch((error) => console.error("Failed to fetch status", error));
    }, []);

    console.log(total);
    // Debugging total amount in console
    // Should print the total amount

    // Handle payment form submission
    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Send payment initiation request to backend with payment details
            const response = await axios.post("/payment/stripe", {
                amount: total,
                name,
                phone,
                email,
                cart: cart,
                event_id: event.id,
            });

            // Retrieve Stripe session ID from response
            const { id } = response.data; // Stripe session ID

            // Redirect user to Stripe Checkout page
            const stripe = await stripePromise;
            const result = await stripe.redirectToCheckout({ sessionId: id });

            // Handle any errors returned by Stripe.js
            if (result.error) {
                console.error(result.error);
            } else {
                // Redirect to success page after payment
                window.location.href = "/payment/success";
            }
        } catch (error) {
            console.error("Payment Error:", error);
            setMessage({
                type: "error",
                text: "Payment failed! Please try again.",
            });
        }

        setLoading(false);
    };

    function HeaderByRole() {
        const { auth } = usePage().props || {};
        const role = auth?.user?.role_id;

        if (role === 4) return <EHHeader />; // Event Host
        if (role === 5) return <TBHeader />; // Ticket Buyer
        if (role === 2) return <UserHeader />; // Manager (adjust to your header)
        // add more roles as needed…
        return <MainHeader />; // Guest / fallback
    }

    return (
        <>
            <header>
                <HeaderByRole />
            </header>

            <main className="payment-container">
                {/* Success/Error Message Alert */}
                {message && (
                    <div className={`alert-box ${message.type}`}>
                        <span>{message.text}</span>
                        <button onClick={() => setMessage(null)}>❌</button>
                    </div>
                )}

                {/* Payment details form */}
                <form className="payment-form" onSubmit={handlePayment}>
                    <h2>Payment Details</h2>
                    <hr />
                    <p className="required-note">*Required fields</p>

                    {/* Name input: readonly if user is authenticated */}
                    <div className="input-group">
                        <label>Name*</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => !user && setName(e.target.value)}
                            required
                            readOnly={!!user}
                        />
                    </div>

                    {/* Email input: readonly if user is authenticated */}
                    <div className="input-group">
                        <label>Email*</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => !user && setEmail(e.target.value)}
                            required
                            readOnly={!!user}
                        />
                    </div>

                    {/* Phone number input: readonly if user is authenticated */}
                    <div className="input-group">
                        <label>Phone Number*</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => !user && setPhone(e.target.value)}
                            required
                            readOnly={!!user}
                        />
                    </div>

                    {/* Action buttons: cancel and pay */}
                    <div className="button-group">
                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={() =>
                                router.post(route("payment.cancel.update"), {
                                    event_id: event.id,
                                    cart,
                                })
                            }
                        >
                            Cancel
                        </button>

                        {/* Pay button disables while loading */}
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

                {/* Sidebar showing total amount */}
                <aside className="total-amount-box">
                    <h3>
                        Total amount*
                        {total} LKR
                    </h3>
                </aside>
            </main>

            <footer>
                <MainFooter />
            </footer>
        </>
    );
};

export default PaymentGate;
