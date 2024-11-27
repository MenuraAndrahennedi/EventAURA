import React from "react";
import SubFooter from "./../../Components/Footer/SubFooter";
import EHHeader from "./../../Components/Header/EHHeader";
import "../../../css/CreateEvent.scss";
import { Link } from "@inertiajs/react";

const CreateEvent = () => {
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

                <form className="event-form">
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
                                placeholder="Enter event title"
                            />
                        </div>

                        <div className="input-group">
                            <div className="date-input">
                                <label htmlFor="eventDate">Date*</label>
                                <input
                                    type="date"
                                    name="eventDate"
                                    id="eventDate"
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
                                    />
                                </div>
                                <div className="end-time">
                                    <label htmlFor="endTime">End Time*</label>
                                    <input
                                        type="time"
                                        name="endTime"
                                        id="endTime"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="input-group">
                            <div className="city-input">
                                <label htmlFor="city">City*</label>
                                <input type="text" name="city" id="city" />
                            </div>

                            <div className="venue-input">
                                <label htmlFor="venue">Venue*</label>
                                <input type="text" name="venue" id="venue" />
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Location*</label>
                            <input type="text" placeholder="Enter location" />
                        </div>

                        <div className="input-group">
                            <div className="agenda-section">
                                <label>Agenda*</label>
                                <div className="file-upload">
                                    <input type="file" accept=".pdf" />
                                    <button className="upload-btn">
                                        Upload
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Event Banner*</label>
                            <div className="file-upload">
                                <input type="file" accept="image/*" />
                                <button className="upload-btn">Upload</button>
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Event Video</label>
                            <div className="file-upload">
                                <input type="file" accept="video/*" />
                                <button className="upload-btn">Upload</button>
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Event Description*</label>
                            <textarea placeholder="Enter event description"></textarea>
                        </div>

                        <div className="input-group">
                            <label>Event Organizer*</label>
                            <input
                                type="text"
                                placeholder="Enter organizer's name"
                            />
                        </div>

                        <div className="input-group">
                            <label>Artists*</label>
                            <div className="artist-section">
                                <input
                                    type="text"
                                    placeholder="Enter artists"
                                />
                                <button className="add-artist">
                                    Add Artist
                                </button>
                                <button className="remove-artist">
                                    Remove Artist
                                </button>
                            </div>
                        </div>
                    </section>

                    <section className="ticket-categories">
                        <div className="header-container">
                            <h3>
                                <b>2. Tickets Categories</b>
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
                                        min="0"
                                        placeholder="Count"
                                    />
                                    <input type="text" placeholder="Price" />
                                </div>
                            </div>

                            <div>
                                <label>Silver Tickets</label>
                                <div className="ticket-inputs">
                                    <input
                                        type="number"
                                        min="0"
                                        placeholder="Count"
                                    />
                                    <input type="text" placeholder="Price" />
                                </div>
                            </div>

                            <div>
                                <label>Bronze Tickets</label>
                                <div className="ticket-inputs">
                                    <input
                                        type="number"
                                        min="0"
                                        placeholder="Count"
                                    />
                                    <input type="text" placeholder="Price" />
                                </div>
                            </div>
                        </div>
                        <div className="center-content">
                            <button type="button">Add Tickets</button>
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
