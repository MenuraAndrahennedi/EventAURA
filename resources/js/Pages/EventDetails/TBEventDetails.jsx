import React, { useEffect, useState } from "react";
import TBHeader from "../../Components/Header/TBHeader";
import MainFooter from "../../Components/Footer/MainFooter";
import SubFooter from "../../Components/Footer/SubFooter";

import "../../../css/TBEventDetails.scss";
import { Link , usePage } from "@inertiajs/react";
import axios from "axios";

import SearchBar from "../../Components/SearchBar";
import BannerImage from "../../assets/Images/banner.png";
import HostImage from "../../assets/Logos/HostLogo.png";

const TBEventDetails = () => {
    const { event } = usePage().props; 

    return (
        <>
            <header>
                <TBHeader />
            </header>

            {/*Search Bar */}
            <div className="search-bar-section">
                <SearchBar />
            </div>

            {/* Event Details Section */}
            <section className="event-details">
                <div className="banner">
                    <h1 className="banner-title">
                        <b>{event.name}</b>
                    </h1>
                </div>

                <div className="event-info">
                    <div className="event-poster">
                        <img src={event.image} alt="Event Poster" />
                    </div>

                    <div className="event-description">
                        <p>
                            {event.description}
                        </p>
                        <div className="event-meta">
                            <p>
                                <strong>Date:</strong>{event.date} 
                            </p>
                            <p>
                                <strong>Venue:</strong> {event.location}
                                
                            </p>
                            <p>
                                <strong>Organizer:</strong>{event.organizer}
                            </p>
                            <div className="button-row">
                                <a
                                    href="https://www.google.com/maps"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button-link"
                                >
                                    Location
                                </a>
                                {/* Download PDF */}
                                <a
                                    href={`/storage/${event.agenda_pdf}`}
                                    download
                                    className="button-link"
                                >
                                    Agenda.pdf
                                </a>{" "}
                                {/*set the path */}
                            </div>
                        </div>
                        <div className="event-buttons">
                            <Link href={`/event/${event.id}/buytickets`} className="buy-tickets">
                                Buy Tickets
                            </Link>
                            <Link
                                to="/return-policies"
                                className="return-policies"
                            >
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
                    <p>
                        <span className="artist-name">Sajith Premadasa</span>
                        <br />
                        <span className="artist-role">Drummer/Musician</span>
                    </p>
                    <p>
                        <span className="artist-name">
                            Ranil Wickramasinghe
                        </span>
                        <br />
                        <span className="artist-role">Actor</span>
                    </p>
                    <p>
                        <span className="artist-name">Anura Dissanayake</span>
                        <br />
                        <span className="artist-role">Party Time Talker</span>
                    </p>
                    <p>
                        <span className="artist-name">Kamal Perera</span>
                        <br />
                        <span className="artist-role">Guitarist</span>
                    </p>
                    <p>
                        <span className="artist-name">Ajith Kumarasena </span>
                        <br />
                        <span className="artist-role">Vocalist</span>
                    </p>
                    <p>
                        <span className="artist-name">Nalin Mendis</span>
                        <br />
                        <span className="artist-role">Bass Player</span>
                    </p>
                </div>
            </section>

            {/* Video Section */}
            <section className="video-section">
                <div className="video-placeholder">
                    <p>VIDEO</p>
                    {/* Placeholder text for now */}
                    {/* <video src="path/to/event-video.mp4" controls /> */}
                    {/* Uncomment and replace src  */}
                </div>
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
