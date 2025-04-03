import React, { useState } from 'react';
import '../../../../css/ReplyToReviewModal.scss'; // SCSS file for styling

const ReplyToReviewModal = ({ isOpen, onClose, onConfirm, review }) => {
    const [reply, setReply] = useState('');

    if (!isOpen) return null; // If modal is closed, don't render anything

    const handleConfirm = () => {
        onConfirm(reply); // Pass the reply to the parent component
        setReply('');
    };

    const handleCancel = () => {
        setReply('');
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Reply to Review</h2>
                <p><strong>Review:</strong> {review.comment}</p>
                <label htmlFor="reply">Your Reply</label>
                <textarea
                    id="reply"
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    placeholder="Enter your reply here..."
                />

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
