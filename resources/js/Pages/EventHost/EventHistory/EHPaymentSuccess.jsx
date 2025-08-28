import React from "react";
import { usePage } from "@inertiajs/react";
import "../../../../css/PaymentSuccess.scss";
import { Link } from "@inertiajs/react";

const PaymentSuccess = () => {
    const { success } = usePage().props;
    return (
        <div className="payment-success-container">
            <h1>Payment Successful!</h1>
            <p>
                Your event will show on our website soon. Thank you for choosing
                us!
            </p>
            {success && <p>{success}</p>}

            <div className="button-group">
                <Link
                    href={route("eventhost.dashboard")}
                    className="browse-btn"
                >
                    Back to Dashboard
                </Link>
            </div>
        </div>
    );
};

export default PaymentSuccess;
