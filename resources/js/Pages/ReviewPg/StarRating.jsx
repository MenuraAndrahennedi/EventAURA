import React from "react";
import './StarRating.scss';

const StarRating = ({ value, onChange }) => {
    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onClick={() => onChange(star)}
                    style={{ cursor: "pointer", color: star <= value ? "gold" : "gray" }}
                >
                     ★  
                </span>
            ))}
        </div>
    );
};

export default StarRating;
