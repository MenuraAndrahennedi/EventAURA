import React, { useState } from 'react';
import '../../../../css/RejectEventConfirmation.scss';

const DeleteUserConfirmation = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Are you sure you want to delete this user?"
}) => {
  const [reason, setReason] = useState('');

  if (!isOpen) return null; // If modal is closed, don't render anything

  const handleConfirm = () => {
    onConfirm(reason);
    setReason(''); 
  };

  const handleCancel = () => {
    setReason('');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <label htmlFor="reason">Explain the reason</label>
        <textarea
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Enter reason here..."
        />

        <div className="modal-buttons">
          <button onClick={handleConfirm} className="delete-button">
            Delete User
          </button>
          <button onClick={handleCancel} className="cancel-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default  DeleteUserConfirmation;
