import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import EHHeader from './../../Components/Header/EHHeader';
import SubFooter from './../../Components/Footer/SubFooter';
import '../../../css/UpdateEvent.scss';

const EHUpdateEvent = () => {
  return (
    <>
        <header>
            <EHHeader />
        </header>

        {/*form */}
        <main className="create-event">

          <h1><b>Update Event</b></h1>

          <form className="event-form">
            <section className="event-details">
             <div className="input-group">
                <div className="date-input">
                  <div className="input-with-button">
                    <label htmlFor="eventDate">New Date</label>
                     <button type="button" className="do-not-update-btn">Do not update</button>
                  </div>
                  <input type="date" name="eventDate" id="eventDate" />
                </div>
                <div className="time-inputs">
                  <div className="start-time">
                    <label htmlFor="startTime">New Start Time</label>
                    <input type="time" name="startTime" id="startTime" />
                  </div>
                  <div className="end-time">
                    <label htmlFor="endTime">New End Time</label>
                    <input type="time" name="endTime" id="endTime" />
                  </div>
                </div>
              </div>

              <div className="input-group">
                <div className="city-input">
                  <label htmlFor="city">New City</label>
                  <input type="text" name="city" id="city" />
                </div>
           
                <div className="venue-input">
                  <label htmlFor="venue">New Venue</label>
                  <input type="text" name="venue" id="venue" />
                </div>
              </div>
              
              <div className="input-group">
                  <label>New Location</label>
                  <input type="text" placeholder="Enter location" />
              </div>
              
              <div className="input-group">
                <div className="agenda-section">
                  <label>New Agenda</label>
                      <div className="file-upload">
                          <input type="file" accept=".pdf" />
                          <button className="upload-btn">Upload</button>
                      </div>
                  </div>
                </div>
              
             
              <div className="input-group">
                <label>Artists*</label>
                <div className="artist-section">
                  <input type="text" placeholder="Enter artists" />
                  <button className="add-artist">Add Artist</button>
                  <button className="remove-artist">Remove Artist</button>
                </div>
              </div>

            </section>

            <section className="ticket-categories">

              <div className="header-container">
                <h3><b>Update Ticket Details</b></h3>
              </div>
              <hr />

              <p>Fill ticket count:</p>
              <div className="ticket-types">
                <div>
                  <label>Golden Tickets</label>
                  <div className="ticket-inputs">
                    <input type="number"  min="0" placeholder="Count" />
                    <input type="text"  placeholder='Price' />
                  </div>
                </div>
                
                <div>
                  <label>Silver Tickets</label>
                  <div className="ticket-inputs">
                    <input type="number"  min="0" placeholder="Count" />
                    <input type="text" placeholder="Price" />
                  </div>
                </div>
                
                <div>
                  <label>Bronze Tickets</label>
                  <div className="ticket-inputs">
                    <input type="number"  min="0" placeholder="Count" />
                    <input type="text" placeholder="Price" />
                  </div>
                </div>
              </div>
              <div className="center-content">
                <button type="button">Update Tickets</button>
              </div>

            </section>
            <div className="center-content">
              <h4>Submit event Update request</h4>
              <Link href={route('eh_cart')} className="submit-btn">Submit</Link>
            </div>
          </form>
      </main>

        <footer>
            <SubFooter />
        </footer>
    </>
  )
}

export default EHUpdateEvent

