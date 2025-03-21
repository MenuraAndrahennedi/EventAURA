import React, { useState } from 'react';
import '../Reviews/ReplyToReviewModal.scss';

const ReplyToInquiryModal = ({ isOpen, onClose, onConfirm, inquiry }) => {
    const [reply, setReply] = useState('');

    if (!isOpen) return null;

    const handleConfirm = () => {
        onConfirm(reply);
        setReply('');
    };

    
    const handleCancel = () => {
        setReply('');
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Reply to Inquiry</h2>
                <p><strong>From:</strong> {inquiry?.name} ({inquiry?.email})</p>
                <p><strong>Subject:</strong> {inquiry?.subject}</p>
                <p><strong>Message:</strong> {inquiry?.message}</p>
                <label htmlFor="reply">Your Reply</label>
                <textarea 
                    id="reply" 
                    value={reply} 
                    onChange={(e) => setReply(e.target.value)}
                    placeholder="Enter reply here..."
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

export default ReplyToInquiryModal;
