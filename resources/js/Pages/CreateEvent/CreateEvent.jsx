import React, { useState } from "react";
import SubFooter from "./../../Components/Footer/SubFooter";
import EHHeader from "./../../Components/Header/EHHeader";
import ArtistInput from "./ArtistInput";
import "../../../css/CreateEvent.scss";
import { Link } from "@inertiajs/react";
import axios from "axios";

const CreateEvent = () => {
    // State to store all form data in FormData object
    const [formData, setFormData] = useState(new FormData());

    // List of selected artists for the event
    const [selectedArtists, setSelectedArtists] = useState([]);

    // State for storing event location (optional for additional handling)
    const [location, setLocation] = useState("");

    // State for showing a success message after form submission
    const [successMessage, setSuccessMessage] = useState("");

    // Handle input changes for text, file, and other inputs
    const handleChange = (e) => {
        const { name, value, files } = e.target;

        // If file input, store the first file in FormData
        if (files && files.length > 0) {
            formData.set(name, files[0]);
        } else {
            // Otherwise store regular text or number values
            formData.set(name, value);
        }
        setFormData(formData);
    };

    const handleLocationClick = () => {
        // Open Google Maps to let the user pick a location
        const mapUrl =
            "https://www.google.com/maps/search/?api=1&query=40.748817,-73.985428"; // Placeholder location
        window.open(mapUrl, "_blank", "width=800,height=600");
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a fresh FormData to combine artists and other fields
        const newFormData = new FormData();
        // Append artist IDs to form data
        selectedArtists.forEach((artist) => {
            newFormData.append("artists[]", artist.id);
        });

        // Append all other form fields
        for (let [key, value] of formData.entries()) {
            newFormData.append(key, value); // Ensure previously set fields are included
        }

        try {
            /// Debug log of formData content
            for (let [key, value] of newFormData.entries()) {
                console.log(`${key}: ${value}`);
            }

            // Send form data to the backend
            await axios.post("/event/store", newFormData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            // alert("Event created successfully!");
            setSuccessMessage("Event creation request send successfully!");

            // Scroll to the top to show the message
            window.scrollTo({ top: 0, behavior: "smooth" });

            // Reset form state (you already do this)
            setFormData(new FormData());
            setSelectedArtists([]);
            setLocation("");
            document.querySelector("form").reset();

            // Auto-hide success message after 4 seconds
            setTimeout(() => {
                setSuccessMessage("");
            }, 10000);

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
            <main className="px-3 py-4 container-fluid create-event">
                <h1 className="mb-4 text-center">
                    <b>Create Event</b>
                </h1>

                {/* Information about event hosting fees */}
                <p className="event-fee-info text-muted">
                    Hosting an event incurs a fee of Rs. 1000. You can pay this
                    fee after the manager's approval. Once approved, you can
                    view pending payments for your hosted events on your
                    profile's "Pending Payments" page. We will send you an email
                    after approval. Thank you for choosing us!
                </p>

                {successMessage && (
                    <div className="mt-3 alert alert-success">
                        {successMessage}
                    </div>
                )}

                {/* Event creation form */}
                <form
                    onSubmit={handleSubmit}
                    method="POST"
                    action="/event/store"
                    className="event-form"
                >
                    {/* Event details section */}
                    <section className="mb-5 event-details">
                        <h2 className="mb-3">
                            <b>1. Event Details</b>
                        </h2>
                        <hr />

                        <div className="mb-3">
                            <label>Event Title*</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter event title"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3 row">
                            <div className="mb-3 col-md-6">
                                <label>Date*</label>
                                <input
                                    type="date"
                                    name="date"
                                    className="form-control"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3 col-md-3">
                                <label>Start Time*</label>
                                <input
                                    type="time"
                                    name="startTime"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3 col-md-3">
                                <label>End Time*</label>
                                <input
                                    type="time"
                                    name="endTime"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* City and Venue */}
                        <div className="mb-3 row">
                            <div className="mb-3 col-md-6">
                                <label>City*</label>
                                <input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label>Venue*</label>
                                <input
                                    type="text"
                                    name="venue"
                                    className="form-control"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Google Maps location */}
                        <div className="mb-3">
                            <label>Location (Google Maps Link)*</label>
                            <input
                                type="url"
                                name="location"
                                className="form-control"
                                placeholder="Paste your Google Maps URL"
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                onClick={handleLocationClick}
                                className="mt-2 btn btn-outline-primary"
                            >
                                Pick from Google Maps
                            </button>
                        </div>

                        {/* Agenda PDF */}
                        <div className="mb-3">
                            <label>Agenda (PDF)*</label>
                            <input
                                type="file"
                                name="agenda_pdf"
                                accept=".pdf"
                                className="form-control"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Event Banner Image */}
                        <div className="mb-3">
                            <label>Event Banner*</label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                className="form-control"
                                onChange={handleChange}
                            />
                        </div>

                        {/* Optional Event Video */}
                        <div className="mb-3">
                            <label>Event Video</label>
                            <input
                                type="file"
                                name="event_video"
                                accept="video/*"
                                className="form-control"
                                onChange={handleChange}
                            />
                        </div>

                        {/* Event Description */}
                        <div className="mb-3">
                            <label>Event Description*</label>
                            <textarea
                                name="description"
                                className="form-control"
                                placeholder="Enter event description"
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        {/* Return policies and organizer */}
                        <div className="mb-3">
                            <div className="input-group">
                                <label>Return Policies*</label>
                                <textarea
                                    name="return_policies"
                                    placeholder="Enter return policies"
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <div className="input-group">
                                <label>Event Organizer*</label>
                                <input
                                    type="text"
                                    name="organizer"
                                    className="form-control"
                                    placeholder="Enter organizer's name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </section>

                    {/* Artists section */}
                    <section className="mb-5 artists">
                        <h3 className="mb-3">
                            <b>2. Artists</b>
                        </h3>
                        <hr />
                        <div className="artist-input-container">
                            <ArtistInput
                                selectedArtists={selectedArtists}
                                setSelectedArtists={setSelectedArtists}
                            />
                        </div>
                    </section>

                    {/* Tickets section */}
                    <section className="px-3 py-4 ticket-categories">
                        <div className="mb-3 header-container">
                            <h3>
                                <b>3. Tickets Categories</b>
                            </h3>
                        </div>
                        <hr className="mb-4" />

                        <p className="mb-3">Fill ticket count:</p>

                        <div className="ticket-types w-100">
                            {/* Golden Tickets */}
                            <div className="mb-4">
                                <label className="form-label fw-medium">
                                    Golden Tickets
                                </label>
                                <div className="row g-3 ">
                                    <div className="col-12 col-sm-6">
                                        <input
                                            type="number"
                                            name="golden_ticket_count"
                                            min="0"
                                            placeholder="Count"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input
                                            type="text"
                                            name="golden_ticket_price"
                                            placeholder="Price"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Silver Tickets */}
                            <div className="mb-4">
                                <label className="form-label fw-medium">
                                    Silver Tickets
                                </label>
                                <div className="row g-3 ">
                                    <div className="col-12 col-sm-6">
                                        <input
                                            type="number"
                                            name="silver_ticket_count"
                                            min="0"
                                            placeholder="Count"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input
                                            type="text"
                                            name="silver_ticket_price"
                                            placeholder="Price"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Bronze Tickets */}
                            <div className="mb-4">
                                <label className="form-label fw-medium">
                                    Bronze Tickets
                                </label>
                                <div className="row g-3 ">
                                    <div className="col-12 col-sm-6">
                                        <input
                                            type="number"
                                            name="bronze_ticket_count"
                                            min="0"
                                            placeholder="Count"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input
                                            type="text"
                                            name="bronze_ticket_price"
                                            placeholder="Price"
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Submit Button */}
                    <div className="text-center">
                        <h4 className="mb-3">Submit event creation request</h4>
                        <button
                            type="submit"
                            className="px-4 py-2 btn btn-primary"
                        >
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

export default CreateEvent;
