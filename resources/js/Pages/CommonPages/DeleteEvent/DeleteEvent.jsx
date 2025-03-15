import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DeleteEvent.scss';
import UserHeader from './../../../Components/Header/UserHeader';
import AdminFooter from './../../../Components/Footer/AdminFooter';

const DeleteEvent = () => {

  const [showModal, setShowModal] = useState(true);
  const [reason, setReason] = useState("");

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
              <button className="delete-btn">Send Delete Request</button>
              <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <header>
          <UserHeader />
        </header>


          {/* Main Event Details Section */}
      <section className="event-details">
        {/* Banner Section */}
        <div className="banner">
          <h1 className="banner-title"><b>SKY HEROES</b></h1>
        </div>

        {/* Event Information Section */}
        <div className="info-section">
          <div className="info-grid">
            <div><b>Date:</b> <span>2025-04-01</span></div>
            <div><b>Time:</b> <span>6:30 PM</span></div>
            <div><b>Location:</b> <span>National Youth Council Auditorium</span></div>
            <div><b>Event Status:</b> <span>Active</span></div>
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
            <div>Golden <span className="ticket-count">05</span></div>
            <div>Silver <span className="ticket-count">10</span></div>
            <div>Bronze <span className="ticket-count">35</span></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <Link to="/UpdateEvent" className="update-btnn">Update Event</Link>
          <Link to="/DeleteEvent" className="delete-btnn">Delete Event</Link>
        </div>
      </section>


      {/* Delete Confirmation Modal */}
      {showModal && (
          <div className="delete-modal">
            <p>Are you sure you want to delete this event?</p>
            <button className="confirm-delete" onClick={() => setShowModal(false)}>Confirm</button>
            <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        )}
        
        <footer>
          <AdminFooter />
        </footer>
    
   </>
  )
}

export default DeleteEvent