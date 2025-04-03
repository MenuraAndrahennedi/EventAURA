import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import StarRating from "./StarRating";// Import Star Rating Component
import '../../../css/ReviewPg.scss'; 

const ReviewPg = () => {
    const { data, setData, post, processing, reset } = useForm({
        name: "",
        email: "",
        rating: 0,
        comment: "",
    });

    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("reviews.store"), {
              onSuccess: () => {
                setSuccessMessage("Thank you! Your review has been submitted successfully.");
                reset();
              },
        });
    };

    return (
        <div className="review-form">
            <h2>Leave Us a Review</h2>

           {/* Success Message */}
           {successMessage && (
                <div className="success-message">
                    <span>{successMessage}</span>
                    <button onClick={() => setSuccessMessage("")} className="close-btn">✖</button>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    required
                />

                <textarea
                    placeholder="Your Comment"
                    value={data.comment}
                    onChange={(e) => setData("comment", e.target.value)}
                    required
                />
                <h3>Give us a Rating:</h3> 
                 <StarRating value={data.rating} onChange={(value) => setData("rating", value)} />

                <button type="submit" disabled={processing}>
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default ReviewPg;
