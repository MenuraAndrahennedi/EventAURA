import React, { useEffect, useState } from "react";
import TBHeader from "../../Components/Header/TBHeader";
import MainFooter from "../../Components/Footer/MainFooter";
import SubFooter from "../../Components/Footer/SubFooter";

import "../../../css/BuyTickets.scss";
import { Link , usePage } from "@inertiajs/react";
import axios from "axios";

import SearchBar from "../../Components/SearchBar";
import HostImage from "../../assets/Logos/HostLogo.png";

const BuyTickets = () => {
    const { event } = usePage().props; 
    const [ticketCount, setTicketCount] = useState(1);
    const [cart, setCart] = useState([]);

    const handleAddToCart = () => {
        const ticketDetails = {
            eventId: event.id,
            eventName: event.name,
            ticketCount: ticketCount,
            //BTprice: event.bronze_ticket_price,
            //STprice: event.silver_ticket_price,
            //GTprice: event.gold_ticket_price,
        };

        // Add ticket details to the cart
        setCart((prevCart) => [...prevCart, ticketDetails]);
        console.log(`Added ${ticketCount} tickets for ${event.name} to the cart.`);
    };
    return (
        <>
            <header>
                <TBHeader />
            </header>

            {/*Search Bar */}
            <div className="search-bar-section">
                <SearchBar />
            </div>

            {/* ticket Section */}
            <section className="event-Details">
                <div className="banner">
                    <h1 className="banner-title">
                        <b>{event.name}</b>
                    </h1>
                </div>
{/*...................................................................................*/}
                <Link to="/TBEventDetails" className="view-event">
                    View Event Details
                </Link>

                <div className="event-info">
                    <div className="event-description">
                        <p>
                            {event.description}
                        </p>
                        <div className="event-meta">
                            <p>
                                <strong>Date:</strong> {event.date}
                            </p>
                            <p>
                                <strong>Venue:</strong> National Youth Service
                                Council Auditorium | Maharagama
                            </p>
                            <p>
                                <strong>Organizer:</strong>Eventmela
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
                                    href="/path/to/agenda.pdf"
                                    download
                                    className="button-link"
                                >
                                    Agenda.pdf
                                </a>{" "}
                                {/*set the path */}
                            </div>
                        </div>
                    </div>

                    <div className="ticket-categories">
                        <h3>Ticket Categories</h3>

                        <div className="ticket-option">
                            <div className="ticket-details">
                                <span className="ticket-name">
                                    Golden Ticket
                                </span>
                                <span className="ticket-availability">
                                    Available Tickets:
                                </span>
                                <label className="ticket-select-label">
                                    Select Tickets:
                                </label>
                            </div>
                            <div className="ticket-select">
                                <span className="ticket-price">
                                    {event.golden_ticket_price}per ticket
                                </span>
                                <span className="ticket-price">{event.golden_ticket_count}</span>
                                <input
                                    type="number"
                                    min="0"
                                    placeholder="count"
                                />
                            </div>
                        </div>

                        <div className="ticket-option">
                            <div className="ticket-details">
                                <span className="ticket-name">
                                    Silver Ticket
                                </span>
                                <span className="ticket-availability">
                                    Available Tickets:
                                </span>
                                <label className="ticket-select-label">
                                    Select Tickets:
                                </label>
                            </div>
                            <div className="ticket-select">
                                <span className="ticket-price">
                                {event.golden_ticket_price}per ticket
                                </span>
                                <span className="ticket-price">{event.golden_ticket_count}</span>
                                <input
                                    type="number"
                                    min="0"
                                    placeholder="count"
                                />
                            </div>
                        </div>

                        <div className="ticket-option">
                            <div className="ticket-details">
                                <span className="ticket-name">
                                    Bronze Ticket
                                </span>
                                <span className="ticket-availability">
                                    Available Tickets:
                                </span>
                                <label className="ticket-select-label">
                                    Select Tickets:
                                </label>
                            </div>
                            <div className="ticket-select">
                                <span className="ticket-price">
                                {event.golden_ticket_price} per ticket
                                </span>
                                <span className="ticket-price">{event.golden_ticket_count}</span>
                                <input
                                    type="number"
                                    min="0"
                                    placeholder="count"
                                />
                            </div>
                        </div>
                        <button onClick={handleAddToCart} className="btn btn-primary">
                        Add to Cart
                        </button>
                       {/*
                        <Link to="/TBCart">
                            <button className="add-to-cart">Add to Cart</button>
                        </Link>
                        */}
                    </div>
                </div>
            </section>

            {/* Cart Details */}
            <section className="cart-details">
                <h3>Cart Details</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Per Ticket</th>
                            <th>Count</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Golden Ticket</td>
                            <td>15,000 LKR</td>
                            <td>2</td>
                            <td>30,000 LKR</td>
                        </tr>
                        <tr>
                            <td>Silver Ticket</td>
                            <td>10,000 LKR</td>
                            <td>3</td>
                            <td>30,000 LKR</td>
                        </tr>
                        <tr>
                            <td>Bronze Ticket</td>
                            <td>5,000 LKR</td>
                            <td>4</td>
                            <td>20,000 LKR</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3">Total Amount</td>
                            <td>80,000 LKR</td>
                        </tr>
                    </tfoot>
                </table>

                <div className="event-buttons">
                    <Link to="/return-policies" className="return-policies">
                        Return Policies
                    </Link>
                    <Link to="/TBCart" className="tbCart">
                        {" "}
                        Continue
                    </Link>
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

export default BuyTickets;
