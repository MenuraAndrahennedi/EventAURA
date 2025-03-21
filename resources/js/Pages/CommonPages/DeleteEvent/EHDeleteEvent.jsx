import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import '../../../../css/DeleteEvent.scss';
import SubFooter from './../../../Components/Footer/SubFooter';
import EHHeader from './../../../Components/Header/EHHeader';

const EHDeleteEvenet = ({event}) => {
  
  const [showModal, setShowModal] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [reason, setReason] = useState("");

  const { delete: destroy, processing } = useForm({ reason });

  const handleDeleteRequest = () => {
    setShowConfirmation(true);
    setShowModal(false);
  };

  const handleConfirmDelete = () => {
    destroy(route('delete.eventDelete', { id: event.id }), {
      onSuccess: () => {
        alert("Event deleted successfully!");
        setShowConfirmation(false);
      },
      onError: (errors) => {
        console.error(errors);
        alert('Error deleting event.');
        setShowConfirmation(false);
      }
    });
  };

  return (
    <>
      {/* White overlay and message box */}
      {showModal && (
        <div className="white-overlay">
          <div className="message-box">
            <h2>Are you sure you want to delete this event?</h2>
            <textarea 
              placeholder="Explain the reason" 
              value={reason} 
              onChange={(e) => setReason(e.target.value)}
            ></textarea>
            <div className="btn-group">
              <button className="delete-btn" onClick={handleDeleteRequest} disabled={processing}>Send Delete Request</button>
              <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      
      <header>
        <EHHeader />
      </header>

      {/* Main Event Details Section */}
      <section className="event-details">
        {/* Banner Section */}
        <div className="banner">
          <h1 className="banner-title"><b>{event.name}</b></h1>
        </div>

        {/* Event Information Section */}
        <div className="info-section">
          <div className="info-grid">
            <div><b>Date:</b> <span>{event.date}</span></div>
            <div><b>Time:</b> <span>{event.startTime}</span></div>
            <div><b>Location:</b> <span>{event.location}</span></div>
            <div><b>Event Status:</b> <span>{event.event_status}</span></div>
          </div>
        </div>

        {/* Attendee Count Section */}
        <div className="attendee-section">
          <b>Attendee Count:</b> <span>55</span>
          <a href="/path/to/list.pdf" download className="download-btnn">Download Attendee List</a> 
        </div>

        {/* Ticket Availability Section */}
        <div className="ticket-section">
          <b>Available Ticket Count</b>
          <div className="ticket-grid">
            <div>Golden <span className="ticket-count">{event.golden_ticket_count}</span></div>
            <div>Silver <span className="ticket-count">{event.silver_ticket_count}</span></div>
            <div>Bronze <span className="ticket-count">{event.bronze_ticket_count}</span></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <Link href={route('update.event', { id: event.id })} className="update-btnn">Update Event</Link>
          <button className="delete-btnn" onClick={() => setShowModal(true)}>Delete Event</button>
        </div>
      </section>

      {/* Delete Confirmation Modal */}
      {showConfirmation &&(
          <div className="delete-modal">
            <p>Are you sure you want to delete this event?</p>
            <button className="confirm-delete" onClick={handleConfirmDelete}>Confirm</button>
            <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        )}

      <footer>
        <SubFooter />
      </footer>
    </>
  )
}

export default EHDeleteEvenet