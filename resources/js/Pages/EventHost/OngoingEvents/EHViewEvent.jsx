import React, {useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import axios from 'axios';
import '../../../../css/ViewEvent.scss';
import MainFooter from './../../../Components/Footer/MainFooter';
import EHHeader from './../../../Components/Header/EHHeader';
import EventDeletionReason from './EventDeletionReason'; 

const EHViewEvent = ({ event }) => {

   const [attendees, setAttendees] = useState({ count: 0 });
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [successMessage, setSuccessMessage] = useState('');

   useEffect(() => {
    const fetchAttendees = async () => {
      try {
        const attendeesResponse = await axios.get(`/api/event/${event.id}/attendees`);
        setAttendees({
          count: attendeesResponse.data.count,
          pdfUrl: `/api/event/${event.id}/attendees/pdf`
        });
      } catch (error) {
        console.error('Error fetching attendees:', error);
      }
    };
  
    if (event?.id) {
      fetchAttendees();
    }
  
  
  }, [event?.id]);
  
    if (!event) {
        return <div>Loading...</div>;
    }

    // Open Modal Function
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Close Modal Function
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle Delete Request Submission
  const handleConfirmDelete = async (reason) => {
    try {
      await axios.post('/event/delete-request', {
        event_id: event.id,
        reason: reason
      });

      setSuccessMessage('Delete request submitted successfully!');
      setIsModalOpen(false); // Close modal after submission
       // Automatically hide success message after 3 seconds
       setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error submitting delete request:', error);
      alert('Failed to submit delete request.');
    }
  }; 
  
  return (
    <>

        <header>
          <EHHeader />
        </header>

   {/* Success Message Section */}
   {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}

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
            <div><b>Location:</b> <span>{event.venue}</span></div>
            <div><b>Event Status:</b> <span>{event.event_status}</span></div>
          </div>
        </div>

        {/* Attendee Count Section */}
        <div className="gap-2 attendee-section d-flex flex-column flex-md-row align-items-start align-items-md-center">
          <b>Attendee Count:</b> <span>{attendees.count}</span>
          <a href= {attendees.pdfUrl} download className="download-btnn">Download Attendee List</a> 
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
          <Link href={route('event.update',{id:event.id})}
         className="update-btnn">Update Event</Link>
         <button onClick={handleOpenModal} className="delete-btnn">Delete Event</button>
        </div>
      </section>

      
      {/* Render Modal */}
      <EventDeletionReason 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onConfirm={handleConfirmDelete} 
      />

        <footer>
          <MainFooter />
        </footer>

        {/* Success Message Styles */}
      <style>
        {`
          .success-message {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #28a745;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 16px;
            font-weight: bold;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            transition: opacity 0.5s ease-in-out;
          }
        `}
      </style> 
    </>
  )
}

export default EHViewEvent