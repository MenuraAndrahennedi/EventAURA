import React, { useState} from 'react'
import './UpdateEvent.scss';
import '../../../../css/CreateEvent.scss';
import { useForm ,usePage} from '@inertiajs/react';

import EHHeader from '../../../Components/Header/EHHeader';
import SubFooter from '../../../Components/Footer/SubFooter';

const UpdateEvent = () => {

  const { event } = usePage().props; 
  
  const { data, setData, post, processing, reset, errors } = useForm({
        date : event.date || '',
        startTime : event.startTime ||'',
        endTime : event.endTime ||'',
        city : event.city || '',
        venue : event.venue || '',
        location : event.location || '',
        artist : event.artist || '',
        golden_ticket_count : event.golden_ticket_count || '',
        silver_ticket_count : event.silver_ticket_count || '',
        bronze_ticket_count : event.bronze_ticket_count || '',
        golden_ticket_price : event.golden_ticket_price || '',
        silver_ticket_price : event.silver_ticket_price || '',
        bronze_ticket_price : event.bronze_ticket_price || '',
      });
    
      const [showUpdateForm, setShowUpdateForm] = useState(false);
    
      const handleChange = (e) => {
        setData(e.target.name, e.target.value);
      };
  
      const handleSaveChanges = () => {
        post(route('event.update', event.id), {
          onSuccess: () => {
            alert("Event updated successfully!"); 
            setShowUpdateForm(false); 
          },
          onError: (errors) => {
            console.error(errors); 
            alert('Error updating event.');
          }
        });
      };
    
      const handleCancel = () => {
        reset();
        setShowUpdateForm(false);
      };

  return (
    <>
        <header>
            <EHHeader />
        </header>

        <main className="create-event">

          <h1><b>Update Event</b></h1>

          {showUpdateForm ? (
            <section className="event-details">

              
              <div className="input-group">
                <div className="date-input">
                  
                  {/*<label htmlFor="eventDate">New Date</label>*/}
                  <div className="input-with-button">
                    <label htmlFor="eventDate">New Date</label>
                     <button type="button" className="do-not-update-btn"onClick={handleCancel}>Do not update</button>
                     {/*<input type="date" name="eventDate" id="eventDate" />*/}
                  </div>
                  <input type="date" name="date" id="date"onChange={handleChange}/>
                  
                </div>
                <div className="time-inputs">
                  <div className="start-time">
                    <label htmlFor="startTime">New Start Time</label>
                    <input type="time" name="startTime" id="startTime"onChange={handleChange}/>
                  </div>
                  <div className="end-time">
                    <label htmlFor="endTime">New End Time</label>
                    <input type="time" name="endTime" id="endTime" onChange={handleChange}/>
                  </div>
                </div>
              </div>

              <div className="input-group">
                <div className="city-input">
                  <label htmlFor="city">New City</label>
                  <input type="text" name="city" id="city" onChange={handleChange}/>
                </div>
           
                <div className="venue-input">
                  <label htmlFor="venue">New Venue</label>
                  <input type="text" name="venue" id="venue"onChange={handleChange}/>
                </div>
              </div>
              
              <div className="input-group">
                  <label>New Location</label>
                  <input type="text" name="location"placeholder="Enter location"  onChange={handleChange}/>
              </div>
              
              <div className="input-group">
                <div className="agenda-section">
                  <label>New Agenda</label>
                      <div className="file-upload">
                          <input type="file" accept=".pdf"onChange={handleChange}/>
                          <button className="upload-btn">Upload</button>
                      </div>
                  </div>
                </div>
              
             
              <div className="input-group">
                <label>Artists*</label>
                <div className="artist-section">
                  <input type="text" placeholder="Enter artists" name="artist"onChange={handleChange}/>
                  <button className="add-artist">Add Artist</button>
                  <button className="remove-artist">Remove Artist</button>
                </div>
              </div>

            

            <section className="ticket-categories">

              <div className="header-container">
                <h3><b>2Update Ticket Details</b></h3>
              </div>
              <hr />

              <p>Fill ticket count:</p>
              <div className="ticket-types">
                <div>
                  <label>Golden Tickets</label>
                  <div className="ticket-inputs">
                    <input type="number"  min="0" placeholder="Count" name="golden_ticket_count" onChange={handleChange}/>
                    <input type="text"  placeholder='Price' name="golden_ticket_price" onChange={handleChange}/>
                  </div>
                </div>
                
                <div>
                  <label>Silver Tickets</label>
                  <div className="ticket-inputs">
                    <input type="number"  min="0" placeholder="Count" name="silver_ticket_count" onChange={handleChange}/>
                    <input type="text" placeholder="Price" name="silver_ticket_price" onChange={handleChange}/>
                  </div>
                </div>
                
                <div>
                  <label>Bronze Tickets</label>
                  <div className="ticket-inputs">
                    <input type="number"  min="0" placeholder="Count" name="bronze_ticket_count" onChange={handleChange}/>
                    <input type="text" placeholder="Price" name="bronze_ticket_price" onChange={handleChange}/>
                  </div>
                </div>
              </div>
              <div className="center-content">
                <button type="button">Update Tickets</button>
              </div>

            </section>
            
            <div className="center-content">
              <h4>Submit event Update request</h4>
              <button type="submit" className="submit-btn"onClick={handleSaveChanges}>Submit</button>
            </div>
            </section>
            
          ):(
            <button type="submit" className="submit-btn"onClick={ setShowUpdateForm(true)}>Show update form</button>
          )}
        
      </main>

        <footer>
            <SubFooter />
        </footer>
    </>
        
  );
  
};

export default UpdateEvent
