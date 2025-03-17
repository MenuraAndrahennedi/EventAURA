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
    // if (!event) {
    //     return <div>Loading...</div>;
    // }
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
                        <img src={event.image} alt={event.name} />
                    </div>

                    <div className="event-description">
                        <p>{event.description}</p>
                        <div className="event-meta">
                            <p>
                                <strong>Date:</strong> {event.date}
                            </p>
                            <p>
                                <strong>Venue:</strong> {event.venue}
                            </p>
                            <p>
                                <strong>Organizer:</strong>
                                {event.organizer}
                            </p>
                            <div className="button-row">
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
                                    href={event.agenda_pdf}
                                    target="_blank" // Open in a new window
                                    rel="noopener noreferrer" // Ensure secure behavior
                                    className="button-link"
                                >
                                    Agenda.pdf
                                </a>{" "}
                                {/*set the path */}
                            </div>
                        </div>
                        <div className="event-buttons">
                            <Link
                                href={route("buytickets", { id: event.id })}
                                className="buy-tickets"
                            >
                                Buy Tickets
                            </Link>
                            <Link href="#" className="return-policies">
                                Return Policies
                            </Link>
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
                {event.video ? (
                    <video
                        src={event.event_video}
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
                {/* <p>VIDEO</p> */}
                {/* Placeholder text for now */}
                {/* <video src="path/to/event-video.mp4" controls /> */}
                {/* Uncomment and replace src  */}
            </section>

            {/* Contact Host Section */}
            <section className="contact-host">
                <div className="text-center">
                    <div className="host-text-image">
                        <Link to="/HostContact" className="Host">
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
            </section>

            <footer>
                <SubFooter />
            </footer>
        </>
    );
};

export default TBEventDetails;
