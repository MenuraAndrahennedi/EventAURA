import React from 'react'
import { Link } from '@inertiajs/react';
import './ViewEvent.scss';
import MainFooter from './../../../Components/Footer/MainFooter';
import EHHeader from './../../../Components/Header/EHHeader';

const EHViewEvent = ({ event }) => {
  return (
    <>

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
          <Link href={route('delete.event', { id: event.id })} className="delete-btnn">Delete Event</Link>
        </div>
      </section>

        <footer>
          <MainFooter />
        </footer>
    </>
  )
}

export default EHViewEvent