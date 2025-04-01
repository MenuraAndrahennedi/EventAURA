 import React, { useState } from "react";
import SubFooter from "../../../Components/Footer/SubFooter";
import EHHeader from "../../../Components/Header/EHHeader";
import ArtistInput from "../../CreateEvent/ArtistInput";
import "../../../../css/CreateEvent.scss";
import { Link,usePage,router } from "@inertiajs/react";
import axios from "axios";
import UpdateArtists from "./UpdateArtists";

const UpdateEvent = () => {
  const { event } = usePage().props;
  const [formData, setFormData] = useState({
    name: event.name,
    date: event.date,
    startTime: event.startTime,
    endTime: event.endTime,
    city: event.city,
    venue: event.venue,
    location: event.location,
    description: event.description,
    organizer: event.organizer,
    golden_ticket_count: event.golden_ticket_count,
    silver_ticket_count: event.silver_ticket_count,
    bronze_ticket_count: event.bronze_ticket_count,
    golden_ticket_price: event.golden_ticket_price,
    silver_ticket_price: event.silver_ticket_price,
    bronze_ticket_price: event.bronze_ticket_price,
  });
  
  const [selectedArtists, setSelectedArtists] = useState(event.artists);
  const [imageFile, setImageFile] = useState(null);
  const [agendaFile, setAgendaFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [removeImage, setRemoveImage] = useState(false);
  const [successMessage,setSuccessMessage] = useState ("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = new FormData();
    
    // Append basic fields
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    
    // // Append artists as IDs
    // data.append('artists', JSON.stringify(selectedArtists.map(artist => artist.id)));
    // Append artists as an array correctly
selectedArtists.forEach((artist, index) => {
  data.append(`artists[${index}]`, artist.id);
});

    const formatTime = (time) => time.slice(0, 5);
    data.append('startTime', formatTime(formData.startTime));
    data.append('endTime', formatTime(formData.endTime));
    
    // Append files
    if (imageFile) data.append('image', imageFile);
    if (agendaFile) data.append('agenda_pdf', agendaFile);
    if (videoFile) data.append('event_video', videoFile);

    console.log("Submitting data:", Object.fromEntries(data));
    
    router.post(`/event/update/${event.id}`, data, {
      forceFormData: true,
      onSuccess: (response) => {
        console.log("Success:", response);
       
        setSuccessMessage("Event update request send successfully!");
    },
    onError: (error) => {
        console.error("Error:", error);
        alert("Something went wrong. Please check the console for details.");
    }
    });
  };


  const handleLocationClick = () => {
    // Open Google Maps to let the user pick a location
    const mapUrl = "https://www.google.com/maps/search/?api=1&query=40.748817,-73.985428"; // Placeholder location
    window.open(mapUrl, "_blank", "width=800,height=600");
};


    return (
        <>
            <header>
                <EHHeader />
            </header>

            {/*form */}
            <main className="create-event">
                <h1>
                    <b>Update Event</b>
                </h1>

                 {/* Success Message Section */}
   {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}


                <form className="event-form" onSubmit={handleSubmit}>
                    <section className="event-details">
                        <div className="header-container">
                            <h2>
                                <b>1. Event Details</b>
                            </h2>
                        </div>
                        <hr />
                        <div className="input-group">
                            <label>Event Title*</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter event title"
                                value={formData.name}
                                onChange={handleChange}
                                
                            />
                        </div>

                        <div className="input-group">
                            <div className="date-input">
                                <label htmlFor="eventDate">Date*</label>
                                <input
                                    type="date"
                                    name="date"
                                    id="eventDate"
                                    value={formData.date}
                                    onChange={handleChange}
                                    
                                />
                            </div>
                            <div className="time-inputs">
                                <div className="start-time">
                                    <label htmlFor="startTime">
                                        Start Time*
                                    </label>
                                    <input
                                        type="time"
                                        name="startTime"
                                        id="startTime"
                                        value={formData.startTime}
                                        onChange={handleChange}
                                        step="60"
                                    />
                                </div>
                                <div className="end-time">
                                    <label htmlFor="endTime">End Time*</label>
                                    <input
                                        type="time"
                                        name="endTime"
                                        id="endTime"
                                        value={formData.endTime}
                                        onChange={handleChange}
                                        step="60"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="input-group">
                            <div className="city-input">
                                <label htmlFor="city">City*</label>
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="venue-input">
                                <label htmlFor="venue">Venue*</label>
                                <input
                                    type="text"
                                    name="venue"
                                    id="venue"
                                    value={formData.venue}
                                    onChange={handleChange}
                                  
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Location*</label>
                            <input
                                type="url"
                                name="location"
                                placeholder="Enter location or select from Google Maps"
                                //value={location}
                                value={formData.location}
                                onChange={handleChange}
                               
                            />
                             <button type="button" onClick={handleLocationClick}>
                        Pick from Google Maps
                    </button>
                        </div>

                        <div className="input-group">
                            <div className="agenda-section">
                                <label>Agenda*</label>
                                <div className="file-upload">
                                    {/* <input
                                        type="file"
                                        name="agenda_pdf"
                                        accept=".pdf"
                                        onChange={(e) => setAgendaFile(e.target.files[0])}
                                    />
                                    {/* {event.agenda_pdf && !agendaFile && (
                                     <span>Current: {event.agenda_pdf}</span>
                                     )}  */} 
                                                  <div className="file-input-wrapper">
      {/* Hidden actual file input */}
      <input
        type="file"
        name="agenda_pdf"
        accept=".pdf"
        onChange={(e) => setAgendaFile(e.target.files[0])}
        id="fileInput"
        style={{ display: 'none' }}
      />
      
      {/* Custom styled file input */}
      <div className="file-display">
        <button 
          type="button"
          className="file-button"
          onClick={() => document.getElementById('fileInput').click()}
        >
          Choose File
        </button>
        
        {(event.agenda_pdf || agendaFile) && (
          <div className="file-info">
            <span className="file-name">
              {agendaFile ? agendaFile.name : event.agenda_pdf.split('/').pop()}
            </span>
           
          </div>
        )}
      </div>
    </div>
                                
                                </div>
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Event Banner*</label>
                            <div className="file-upload">
                                {/* {event.image && !imageFile && (<input
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    onChange={(e) => setImageFile(e.target.files[0])}
                                   // {event.image}
                                    // {event.image && !imageFile && (
                                    //   {event.image}
                                    //    )}
                                /> )} */}
                               <div className="file-input-wrapper">
      {/* Hidden actual file input */}
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
        id="fileInput"
        style={{ display: 'none' }}
      />
      
      {/* Custom styled file input */}
      <div className="file-display">
        <button 
          type="button"
          className="file-button"
          onClick={() => document.getElementById('fileInput').click()}
        >
          Choose File
        </button>
        
        {(event.image || imageFile) && (
          <div className="file-info">
            <span className="file-name">
              {imageFile ? imageFile.name : event.image.split('/').pop()}
            </span>
           
          </div>
        )}
      </div>
    </div>
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Event Video</label>
                            <div className="file-upload">
                                {/* <input
                                    type="file"
                                    name="event_video"
                                    accept="video/*"
                                    onChange={(e) => setVideoFile(e.target.files[0])}
                                    
                                />
                             {event.event_video && !videoFile && (
    <span>Current: {event.event_video}</span>
  )} */}
                  <div className="file-input-wrapper">
      {/* Hidden actual file input */}
      <input
        type="file"
        name="event_video"
        accept="video/*"
        onChange={(e) => setVideoFile(e.target.files[0])}
        id="fileInput"
        style={{ display: 'none' }}
      />
      
      {/* Custom styled file input */}
      <div className="file-display">
        <button 
          type="button"
          className="file-button"
          onClick={() => document.getElementById('fileInput').click()}
        >
          Choose File
        </button>
        
        {(event.event_video || videoFile) && (
          <div className="file-info">
            <span className="file-name">
              {videoFile ? videoFile.name : event.event_video.split('/').pop()}
            </span>
           
          </div>
        )}:{(
          <div className="file-info">
            <span className="file-name">No file selected</span>
          </div>
        )}
      </div>
    </div>
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Event Description*</label>
                            <textarea
                                name="description"
                                placeholder="Enter event description"
                                value={formData.description}
                                onChange={handleChange}
                               
                            ></textarea>
                        </div>

                        <div className="input-group">
                            <label>Event Organizer*</label>
                            <input
                                type="text"
                                name="organizer"
                                placeholder="Enter organizer's name"
                                value={formData.organizer}
                                onChange={handleChange}
                            />
                        </div>

                    
                    </section>
                    <section className="artists">
                        <div className="header-container">
                            <h3>
                                <b>2. Artists</b>
                            </h3>
                        </div>
                        <hr />
                        <div className="artist-input-container">
                        <UpdateArtists
                             selectedArtists={selectedArtists}

                            setSelectedArtists={setSelectedArtists}
                        />
                        </div>
                    </section>

                    <section className="ticket-categories">
                        <div className="header-container">
                            <h3>
                                <b>3. Tickets Categories</b>
                            </h3>
                        </div>
                        <hr />

                        <p>Fill ticket count:</p>
                        <div className="ticket-types">
                            <div>
                                <label>Golden Tickets</label>
                                <div className="ticket-inputs">
                                    <input
                                        type="number"
                                        name="golden_ticket_count"
                                        min="0"
                                        placeholder="Count"
                                        value={formData.golden_ticket_count || ""}
      onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="golden_ticket_price"
                                        placeholder="Price"
                                        value={formData.golden_ticket_price || ""}
      onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label>Silver Tickets</label>
                                <div className="ticket-inputs">
                                    <input
                                        type="number"
                                        name="silver_ticket_count"
                                        min="0"
                                        placeholder="Count"
                                        value={formData.silver_ticket_count || ""}
      onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="silver_ticket_price"
                                        placeholder="Price"
                                        value={formData.silver_ticket_price || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label>Bronze Tickets</label>
                                <div className="ticket-inputs">
                                    <input
                                        type="number"
                                        name="bronze_ticket_count"
                                        min="0"
                                        placeholder="Count"
                                        value={formData.bronze_ticket_count || ""}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="bronze_ticket_price"
                                        placeholder="Price"
                                        value={formData.bronze_ticket_price || ""}
      onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        
                    </section>
                    <div className="center-content">
                        <h4>Submit event update request</h4>
                        <button type="submit" className="submit-btn">
                            Submit
                        </button>
                    </div>
                </form>
            </main>

            <footer>
                <SubFooter />
            </footer>

            
              {/* Success Message Styles */}
      <style>
        {`
          .success-message {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color:rgb(137, 225, 157);
            color:rgb(3, 65, 17) ;
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
    );
};


export default UpdateEvent;
