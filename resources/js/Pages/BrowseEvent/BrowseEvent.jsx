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
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios
            .get("/api/events")
            .then((response) => {
                setEvents(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching events", error);
            });
    }, []);

    const handleBookNowClick = (eventId) => {
        axios.post(`/event/click/${eventId}`)
            .then(response => {
                if (response.data.success) {
                    console.log("Click recorded successfully");
                }
            })
            .catch(error => {
                console.error("Error recording click", error);
            });
    };

    
    return (
        <>
            <header>
                <TBHeader />
            </header>

            {/*Search Bar */}
            <SearchBar />

            <section className="py-5 section-2 bg-light">
                <div className="container">
                    {/*1st Row*/}
                    <div className="pt-3 row d-flex justify-content-center">
                        {events.map((event) => (
                            <div className="col-12 col-sm-6 col-md-3" key={event.id}>
                                <div className="border-0 shadow card">
                                    <div className="card-img-top">
                                        <img
                                            src={event.image}
                                            alt={event.name}
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="p-2 card-body">
                                        <div className="event-details">
                                            <p className="event-date-time">
                                                {" "}
                                                {event.date} | {event.startTime}{" "}
                                            </p>
                                            <p className="event-location">
                                                {" "}
                                                {event.venue}{" "}
                                            </p>
                                        </div>
                                        <div className="event-title">
                                            <h2>
                                                <b> {event.name} </b>
                                            </h2>
                                        </div>
                                        <div className="mt-3 event-footer d-flex justify-content-between align-items-center">
                                            <p className="event-price">
                                                {event.bronze_ticket_price} LKR{" "}
                                                <span className="price-subtext">
                                                    <br />
                                                    upwards
                                                </span>
                                            </p>
                                           {(event.golden_ticket_count ===0 && event.silver_ticket_count ===0 && event.bronze_ticket_count ===0) ? (
                                            
                                             <Link
                                                 href={route('event.details',{id:event.id})}
                                                className="btn btn-danger"
                                                onClick={() => handleBookNowClick(event.id)}
                                            >
                                                Sold Out
                                            </Link>
                                            
                                            ):(
                                                 <Link
                                                 href={route('event.details',{id:event.id})}
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

            {/*<section className="section-5">
                <div className="text-center">
                    <Link href ="/reviewPg" className='Reviews '>Leave Us a Review</Link >
                    <img
                        src={ReviewIcon}
                        alt="ReviewIcon"
                        className="mx-2 Review-icon"
                    />
                </div>
            </section>*/}

            <footer>
                <SubFooter />
            </footer>
        </>
    );
};

export default BrowseEvent;
