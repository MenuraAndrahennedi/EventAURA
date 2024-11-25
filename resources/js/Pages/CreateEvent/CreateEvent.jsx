import React ,{useState} from 'react'
import SubFooter from './../../Components/Footer/SubFooter';
import EHHeader from './../../Components/Header/EHHeader';
import '../../../css/CreateEvent.scss';
import { Link } from '@inertiajs/react';
import axios from 'axios';


 
const CreateEvent = () => {

  const [formData, setFormData] = useState(new FormData());

  const handleChange = (e) => {
      const { name, value, files } = e.target;
     // const updatedFormData = new FormData(formData);

      if (files && files.length >0) {
          formData.set(name, files[0]);
      } else {
          formData.set(name, value);
      }
      setFormData(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('/event/store', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('Event created successfully!');
    } catch (error) {
        console.error(error.response.data);
        alert('Error creating event.');
    }
};

  return (
    <>
         <header>
            <EHHeader />
        </header>
       
       {/*form */}
        <main className="create-event">

          <h1><b>Create Event</b></h1>

          <form onSubmit={handleSubmit} className="event-form">
            <section className="event-details">

              <div className="header-container">
                <h2><b>1. Event Details</b></h2>
              </div>
              <hr />
              <div className="input-group">
                <label>Event Title*</label>
                <input type="text" name="name" placeholder="Enter event title"  onChange={handleChange}/>
              </div>
              
              <div className="input-group">
                <div className="date-input">
                  <label htmlFor="eventDate">Date*</label>
                  <input type="date" name="date" id="eventDate"  onChange={handleChange}/>
                </div>
                <div className="time-inputs">
                  <div className="start-time">
                    <label htmlFor="startTime">Start Time*</label>
                    <input type="time" name="startTime" id="startTime" onChange={handleChange}  step ="60"/>
                  </div>
                  <div className="end-time">
                    <label htmlFor="endTime">End Time*</label>
                    <input type="time" name="endTime" id="endTime" onChange={handleChange} step="60" />
                  </div>
                </div>
              </div>

              <div className="input-group">
                <div className="city-input">
                  <label htmlFor="city">City*</label>
                  <input type="text" name="city" id="city" onChange={handleChange} />
                </div>
           
                <div className="venue-input">
                  <label htmlFor="venue">Venue*</label>
                  <input type="text" name="venue" id="venue" onChange={handleChange} />
                </div>
              </div>
              
              <div className="input-group">
                  <label>Location*</label>
                  <input type="text" name="location" placeholder="Enter location" onChange={handleChange} />
              </div>
              
              <div className="input-group">
                <div className="agenda-section">
                  <label>Agenda*</label>
                      <div className="file-upload">
                          <input type="file" name="agenda_pdf" accept=".pdf" onChange={handleChange} />
                          <button className="upload-btn">Upload</button>
                      </div>
                  </div>
                </div>
              
              <div className="input-group">
                  <label>Event Banner*</label>
                  <div className="file-upload">
                    <input type="file" name="image" accept="image/*" onChange={handleChange} />
                    <button className="upload-btn">Upload</button>
                  </div>
              </div>
              
              <div className="input-group">
                  <label>Event Video</label>
                  <div className="file-upload">
                      <input type="file"  name="event_video" accept="video/*" onChange={handleChange}/>
                      <button className="upload-btn">Upload</button>
                  </div>
              </div>
             
              <div className="input-group">
                  <label>Event Description*</label>
                  <textarea name="description" placeholder="Enter event description" onChange={handleChange}></textarea>
              </div>
              
              <div className="input-group">
                  <label>Event Organizer*</label>
                  <input type="text" name="organizer" placeholder="Enter organizer's name" onChange={handleChange}/>
              </div>
             
              <div className="input-group">
                <label>Artists*</label>
                <div className="artist-section">
                  <input type="text" name= "artists" placeholder="Enter artists" onChange={handleChange} />
                  <button className="add-artist">Add Artist</button>
                  <button className="remove-artist">Remove Artist</button>
                </div>
              </div>

            </section>

            <section className="ticket-categories">

              <div className="header-container">
                <h3><b>2. Tickets Categories</b></h3>
              </div>
              <hr />

              <p>Fill ticket count:</p>
              <div className="ticket-types">
                <div>
                  <label>Golden Tickets</label>
                  <div className="ticket-inputs">
                    <input type="number" name="golden_ticket_count" min="0" placeholder="Count" onChange={handleChange} />
                    <input type="text" name="golden_ticket_price" placeholder='Price' onChange={handleChange}/>
                  </div>
                </div>
                
                <div>
                  <label>Silver Tickets</label>
                  <div className="ticket-inputs">
                    <input type="number" name="silver_ticket_count" min="0" placeholder="Count" onChange={handleChange}/>
                    <input type="text" name="silver_ticket_price" placeholder="Price" onChange={handleChange}/>
                  </div>
                </div>
                
                <div>
                  <label>Bronze Tickets</label>
                  <div className="ticket-inputs">
                    <input type="number" name="bronze_ticket_count" min="0" placeholder="Count" onChange={handleChange}/>
                    <input type="text" name="bronze_ticket_price" placeholder="Price" onChange={handleChange} />
                  </div>
                </div>
              </div>
              <div className="center-content">
                <button type="button">Add Tickets</button>
              </div>

            </section>
            <div className="center-content">
              <h4>Submit event creation request</h4>
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
      </main>


        <footer>
            <SubFooter />
        </footer>
    </>

  )
}

export default CreateEvent
