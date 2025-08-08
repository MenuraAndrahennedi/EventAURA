import React, { useState } from 'react';
// Import React and useState hook for managing component state

import '../../../../css/ReplyToReview.scss'; 


// ReplyToReviewModal component for replying to a review
// Props:
// - isOpen: boolean to control modal visibility
// - onClose: function to close the modal
// - onConfirm: function to handle sending the reply
// - review: the review object being replied to
const ReplyToReviewModal = ({ isOpen, onClose, onConfirm, review }) => {
    // State to hold the reply text input by the user
    const [reply, setReply] = useState('');

    // If the modal is not open, do not render anything (returns null)
    if (!isOpen) return null; // If modal is closed, don't render anything

    // Handle the confirm button click - send reply and reset input
    const handleConfirm = () => {
        onConfirm(reply); // Pass the reply to the parent component
        setReply(''); // Clear the reply input after sending
    };

    // Handle the cancel button click - reset input and close modal
    const handleCancel = () => {
        setReply(''); // Clear the reply input without sending
        onClose();// Close the modal
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Reply to Review</h2>
                
                {/* Display the review comment being replied to */}
                <p><strong>Review:</strong> {review.comment}</p>
                
                <label htmlFor="reply">Your Reply</label>{/* for user reply */}
                <textarea
                    id="reply"
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    placeholder="Enter your reply here..."
                />

                {/* Buttons for confirming or cancelling the reply */}
                <div className="modal-buttons">
                    <button onClick={handleConfirm} className="reply-button">
                        Send Reply
                    </button>
                    <button onClick={handleCancel} className="cancel-button">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReplyToReviewModal;
