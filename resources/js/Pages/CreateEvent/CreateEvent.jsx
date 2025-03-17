import React, { useState } from "react";
import SubFooter from "./../../Components/Footer/SubFooter";
import EHHeader from "./../../Components/Header/EHHeader";
import ArtistInput from "./ArtistInput";
import "../../../css/CreateEvent.scss";
import { Link } from "@inertiajs/react";
import axios from "axios";

const CreateEvent = () => {
    const [formData, setFormData] = useState(new FormData());
    const [selectedArtists, setSelectedArtists] = useState([]);
    const [location, setLocation] = useState("");

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        

        if (files && files.length > 0) {
            formData.set(name, files[0]);
        } else {
            formData.set(name, value);
        }
        setFormData(formData);
    };

    const handleLocationClick = () => {
        // Open Google Maps to let the user pick a location
        const mapUrl = "https://www.google.com/maps/search/?api=1&query=40.748817,-73.985428"; // Placeholder location
        window.open(mapUrl, "_blank", "width=800,height=600");
    };

    // const handleLocationSelection = (newLocation) => {
    //     // Populate the location input with the selected location
    //     setLocation(newLocation);
    //     formData.set("location", newLocation);
    //     setFormData(formData);
    // };

    // const handleArtistsChange = (artists) => {
    //     setSelectedArtists(artists);
    
    //     const newFormData = new FormData();
    //     artists.forEach((artist) => {
    //     newFormData.append("artists[]", artist.id);
    // });

    //     setFormData(newFormData); 
    // };  

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
       
    //      // Create new formData including selected artists
    // const newFormData = new FormData();
    // selectedArtists.forEach((artist) => {
    //     newFormData.append("artists[]", artist.id);
    // });

    //     // Optional: Debugging formData content
    // for (let [key, value] of formData.entries()) {
    //     console.log(`${key}: ${value}`);}

    //     try {
    //         await axios.post("/event/store", formData, {
    //             headers: { "Content-Type": "multipart/form-data" },
    //         });
    //         alert("Event created successfully!");
    //     } catch (error) {

    //         console.error(error.response.data);
    //         alert("Error creating event.");
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Create new formData including selected artists
        const newFormData = new FormData();
        selectedArtists.forEach((artist) => {
            newFormData.append("artists[]", artist.id);
        });
    
        // Add other fields to the formData as needed
        for (let [key, value] of formData.entries()) {
            newFormData.append(key, value); // Ensure previously set fields are included
        }
    
        try {
            // Debugging formData content
            for (let [key, value] of newFormData.entries()) {
                console.log(`${key}: ${value}`);
            }
    
            await axios.post("/event/store", newFormData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
    
            alert("Event created successfully!");

             // Reset form state
            setFormData(new FormData());
            setSelectedArtists([]);
            setLocation("");

            // Reset the form element visually
        document.querySelector("form").reset();
        
        } catch (error) {
            console.error(error.response.data);
            alert("Error creating event.");
        }
    };
    

    return (
        <>
            <header>
                <EHHeader />
            </header>

            {/*form */}
            <main className="create-event">
                <h1>
                    <b>Create Event</b>
                </h1>

                <form onSubmit={handleSubmit}  method="POST" action="/event/store" className="event-form">
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
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="venue-input">
                                <label htmlFor="venue">Venue*</label>
                                <input
                                    type="text"
                                    name="venue"
                                    id="venue"
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
                                    <input
                                        type="file"
                                        name="agenda_pdf"
                                        accept=".pdf"
                                        onChange={handleChange}
                                    />
                                
                                </div>
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Event Banner*</label>
                            <div className="file-upload">
                                <input
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleChange}
                                />
                               
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Event Video</label>
                            <div className="file-upload">
                                <input
                                    type="file"
                                    name="event_video"
                                    accept="video/*"
                                    onChange={handleChange}
                                />
                            
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Event Description*</label>
                            <textarea
                                name="description"
                                placeholder="Enter event description"
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="input-group">
                            <label>Event Organizer*</label>
                            <input
                                type="text"
                                name="organizer"
                                placeholder="Enter organizer's name"
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
                        <ArtistInput
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
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="golden_ticket_price"
                                        placeholder="Price"
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
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="silver_ticket_price"
                                        placeholder="Price"
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
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="bronze_ticket_price"
                                        placeholder="Price"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        
                    </section>
                    <div className="center-content">
                        <h4>Submit event creation request</h4>
                        <button type="submit" className="submit-btn">
                            Submit
                        </button>
                    </div>
                </form>
            </main>

            <footer>
                <SubFooter />
            </footer>
        </>
    );
};


export default CreateEvent;
