import React, { useEffect, useState } from "react";
import TBHeader from "../../Components/Header/TBHeader";
import MainFooter from "../../Components/Footer/MainFooter";
import SubFooter from "../../Components/Footer/SubFooter";
import "../../../css/TBEventDetails.scss";
import { Link } from "@inertiajs/react";
import axios from "axios";

import SearchBar from "../../Components/SearchBar";
import BannerImage from "../../assets/Images/banner.png";
import HostImage from "../../assets/Logos/HostLogo.png";

const TBEventDetails = ({ event }) => {
    console.log("Event data:", event);
    
    // State to control visibility of return policy modal
    const [showReturnPolicy, setShowReturnPolicy] = useState(false);
    // Open return policy modal
    const openReturnPolicy = () => setShowReturnPolicy(true);
    // Close return policy modal
    const closeReturnPolicy = () => setShowReturnPolicy(false);
    
    return (
        <>
            <header>
                <TBHeader />
            </header>

            {/* Event Details Section */}
            <section className="event-details">
                <div className="banner">
                    <h1 className="banner-title">
                        <b>{event.name}</b>
                    </h1>
                </div>

                <div className="event-info">
                    <div className="event-poster">
                        <img src={`/storage/${event.image}`}  alt={event.name} />
                    </div>

                    {/* Event description and meta */}
                    <div className="event-description">
                        <p>{event.description}</p>
                        <div className="event-meta">
                           <p><strong>Date:</strong> {event.date}</p>
                           <p><strong>Venue:</strong> {event.venue}</p>
                           <p><strong>Organizer:</strong> {event.organizer}</p>

                            <div className="button-row">
                                
                                {/* Location link */}
                                <a
                                    href={event.location}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button-link"
                                >
                                    Location
                                </a>


                                {/* Download PDF */}
                                <a
                                    href={`/storage/${event.agenda_pdf}`}
                                    target="_blank" // Open in a new window
                                    rel="noopener noreferrer" // Ensure secure behavior
                                    className="button-link"
                                >
                                    Agenda.pdf
                                </a>{" "}
                                
                            </div>
                        </div>
                        <div className="event-buttons">
                            {/* Show Sold Out button if no tickets available */}
                            {(event.golden_ticket_count === 0 &&
                              event.silver_ticket_count === 0 &&
                              event.bronze_ticket_count === 0) ? (
                                <button className="btn btn-danger" disabled>
                                    Sold Out
                                </button>
                            ) : (
                                // Otherwise, show Buy Tickets link
                                <Link
                                    href={route("buytickets", { id: event.id })}
                                    className="buy-tickets"
                                >
                                    Buy Tickets
                                </Link>
                            )}
                            {/* Return Policies button */}
                            <button className="return-policies" onClick={openReturnPolicy}>
                                Return Policies
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Artists Section */}
            <section className="artists">
                <h2>
                    <b>Artists</b>
                </h2>
                <div className="artist-list">
                    {event.artists.map((artist) => (
                        <p key={artist.id}>
                            <span className="artist-name">{artist.name}</span>
                            <br />
                            <span className="artist-role">{artist.role}</span>
                        </p>
                    ))}
                </div>
            </section>

            {/* Video Section */}
            <section className="video-section">
                {event.event_video ? (
                    <video
                        src={`/storage/${event.event_video}`}
                        controls
                        className="event-video"
                    >
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <div className="video-placeholder">
                        <p>No video available for this event.</p>
                    </div>
                )}
            </section>

            {/* Contact Host Section */}
            <section className="contact-host">
                <div className="text-center">
                    <div className="host-text-image">
                    <Link
                            href={route("host.contact.page", { id: event.id })} // This link now navigates to the contact form page
                            className="Host"
                        >
                            Get in touch with the host
                        </Link>
                        <img
                            src={HostImage}
                            alt="HostIcon"
                            className="Host-icon"
                        />
                    </div>
                    <p>
                        Here we have provided you the chance to contact <br />{" "}
                        with the event organizer and solve your problems <br />
                        about the event.
                    </p>
                </div>

                {/* Return Policy Modal */}
                {showReturnPolicy && (
                    <div className="modal-overlay" onClick={closeReturnPolicy}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-button" onClick={closeReturnPolicy}>×</button>
                            <h2>Return Policies</h2>
                            <p>
                            {event.return_policies}
                            </p>
                        </div>
                    </div>
                )}
            </section>

            <footer>
                <SubFooter />
            </footer>
        </>
    );
};

export default TBEventDetails;
