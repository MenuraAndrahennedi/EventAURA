import React, { useEffect, useState } from "react";
import TBHeader from "./../../Components/Header/TBHeader";
import SubFooter from "./../../Components/Footer/SubFooter";

import "../../../css/BrowseEvent.scss";
import { Link } from "@inertiajs/react";
import axios from "axios";

import Banner from "../../assets/Images/banner.png";
import ReviewIcon from "../../assets/Logos/review.png";
import SearchBar from "../../Components/SearchBar";

const BrowseEvent = () => {
    // State to hold list of events fetched from server
    const [events, setEvents] = useState([]);

    // Current filter selected by user, default to 'All'
    const [filter, setFilter] = useState("All");

    // Search term input by user
    const [searchTerm, setSearchTerm] = useState("");

    /**
     * Fetch events from backend API based on search and filter criteria.
     * @param {string} search - The search keyword for filtering events.
     * @param {string} filter - The category or filter type.
     * @param {boolean} append - Whether to append new events or replace existing ones.
     */

    const fetchEvents = (search = "", filter = "All", append = false) => {
        axios
            .get("/events/search", {
                params: { search, filter },
            })
            .then((response) => {
                if (append) {
                    // Merge new events with existing ones (avoid duplicates by ID)
                    setEvents((prevEvents) => {
                        const newEvents = response.data.filter(
                            (newEvent) =>
                                !prevEvents.some((e) => e.id === newEvent.id)
                        );
                        return [...prevEvents, ...newEvents];
                    });
                } else {
                    // Replace events (used when filter changes)
                    setEvents(response.data);
                }
            })
            .catch((error) => {
                console.error("There was an error fetching events", error);
            });
    };
    // Fetch events whenever the filter changes
    useEffect(() => {
        fetchEvents(searchTerm, filter);
    }, [filter]);

    /**
     * Handler when user changes filter.
     * Resets search term and fetches fresh event list.
     * @param {string} newFilter - Selected filter value
     */
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        setSearchTerm("");
        fetchEvents("", newFilter, false); // Reset with new filter
    };

    return (
        <>
            <header>
                <TBHeader />
            </header>

            {/* Search Bar component with callback props */}
            <SearchBar
                onFilterChange={handleFilterChange}
                onSearch={(term) => {
                    setSearchTerm(term);
                    fetchEvents(term, filter, false); // Append search results
                }}
            />

            {/* Events listing section */}
            <section className="px-5 py-5 section-2 bg-light">
                <div className="container">
                    <div className="pt-3 row d-flex justify-content-center">
                        {/* Map over events array and display each event card */}
                        {events.map((event) => (
                            <div
                                className="col-12 col-sm-6 col-sm-4 col-md-4 col-lg-3"
                                key={event.id}
                            >
                                <div className="border-0 shadow card">
                                    <div className="card-img-top">
                                        <img
                                            src={event.image}
                                            alt={event.name}
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="p-4 card-body">
                                        <div className="event-details">
                                            <p className="event-date-time">
                                                {event.date} | {event.startTime}
                                            </p>
                                            <p className="event-location">
                                                {event.venue}
                                            </p>
                                        </div>
                                        <div className="event-title">
                                            <h2>
                                                <b>{event.name}</b>
                                            </h2>
                                        </div>

                                        {/* Event footer with price and booking button */}
                                        <div className="mt-3 event-footer d-flex justify-content-between align-items-center">
                                            <p className="event-price">
                                                {event.bronze_ticket_price} LKR
                                                <span className="price-subtext">
                                                    <br />
                                                    upwards
                                                </span>
                                            </p>

                                            {/* Conditional rendering of booking button based on ticket availability */}
                                            {/* {event.golden_ticket_count <= 0 &&
                                            event.silver_ticket_count <= 0 &&
                                            event.bronze_ticket_count <= 0 ? (
                                                <Link
                                                    href={route(
                                                        "event.details",
                                                        { id: event.id }
                                                    )}
                                                    className="btn btn-danger"
                                                >
                                                    Sold Out
                                                </Link>
                                            ) : (
                                                <Link
                                                    href={route(
                                                        "event.details",
                                                        { id: event.id }
                                                    )}
                                                    className="btn btn-primary"
                                                    onClick={() =>
                                                        handleBookNowClick(
                                                            event.id
                                                        )
                                                    }
                                                >
                                                    Book Now
                                                </Link>
                                            )} */}
                                             {/* Check if event is in the past */}
    {new Date(event.date) < new Date() ? (
        <span className="btn btn-secondary disabled">Ended</span>
    ) : event.golden_ticket_count <= 0 &&
      event.silver_ticket_count <= 0 &&
      event.bronze_ticket_count <= 0 ? (
        <Link
            href={route("event.details", { id: event.id })}
            className="btn btn-danger"
        >
            Sold Out
        </Link>
    ) : (
        <Link
            href={route("event.details", { id: event.id })}
            className="btn btn-primary"
            onClick={() => handleBookNowClick(event.id)}
        >
            Book Now
        </Link>
    )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer>
                <SubFooter />
            </footer>
        </>
    );
};

export default BrowseEvent;
