import React, { useEffect, useState, useContext } from "react";
import TBHeader from "../../Components/Header/TBHeader";
import MainFooter from "../../Components/Footer/MainFooter";
import SubFooter from "../../Components/Footer/SubFooter";
import { CartContext } from "../../../js/contexts/CartContext";
import "../../../css/BuyTickets.scss";
import { Link } from "@inertiajs/react";
import axios from "axios";
import SearchBar from "../../Components/SearchBar";
import HostImage from "../../assets/Logos/HostLogo.png";

const BuyTickets = ({ event }) => {
    const [goldenCount, setGoldenCount] = useState(0);
    const [silverCount, setSilverCount] = useState(0);
    const [bronzeCount, setBronzeCount] = useState(0);
    // Using React context to manage cart and locked ticket states
    const { cart, updateCart, lockedTickets } = useContext(CartContext);

    // Show/hide modal for return policies
    const [showReturnPolicy, setShowReturnPolicy] = useState(false);

    /**
     * Handles ticket count changes
     * Ensures non-negative count and updates cart context for the current event
     */
    const handleTicketChange = (type, value) => {
        const count = Math.max(0, Number(value)); // Ensure non-negative values

        if (!event || !event.id) {
            console.error("Error: event or event.id is undefined");
            return;
        }
        // Update the cart with new ticket count for this event
        updateCart({ [type]: count }, event.id);
    };

    /**
     * Calculate the total price based on selected ticket counts in cart
     */
    const calculateTotal = () => {
        const eventCart = cart[event.id] || {};
        return (
            (eventCart.golden || 0) * event.golden_ticket_price +
            (eventCart.silver || 0) * event.silver_ticket_price +
            (eventCart.bronze || 0) * event.bronze_ticket_price
        );
    };

    // Modal open/close handlers
    const openReturnPolicy = () => setShowReturnPolicy(true);
    const closeReturnPolicy = () => setShowReturnPolicy(false);

    return (
        <>
            <header>
                <TBHeader />
            </header>

            {/* Event Title Banner */}
            <section className="event-Details">
                <div className="banner">
                    <h1 className="banner-title">
                        <b>{event.name}</b>
                    </h1>
                </div>

                <Link
                    href={route("event.details", { id: event.id })}
                    className="mt-3 view-event"
                >
                    Go back to Event Details
                </Link>

                {/* Event description and meta info */}
                <div className="event-info">
                    <div className="event-description">
                        <p>{event.description} </p>
                        <div className="event-meta">
                            <p>
                                <strong>Date:</strong> {event.date}
                            </p>
                            <p>
                                <strong>Venue:</strong>
                                {event.venue}
                            </p>
                            <p>
                                <strong>Organizer:</strong>
                                {event.organizer}
                            </p>
                            <div className="button-row">
                                {/* Link to location (Google Maps ) */}
                                <a
                                    href={event.location}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button-link"
                                >
                                    Location
                                </a>
                                {/* Download event agenda PDF */}
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
                    </div>

                    {/* Ticket Categories and selection inputs */}
                    <div className="ticket-categories">
                        <h3>Ticket Categories</h3>

                        {/* Golden Ticket */}
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
                                    {event.golden_ticket_price} LKR per ticket
                                </span>
                                <span className="ticket-price">
                                    {Math.max(
                                        event.golden_ticket_count -
                                            (lockedTickets[event.id]?.golden ||
                                                0),
                                        0
                                    )}
                                </span>
                                {event.golden_ticket_count -
                                    (lockedTickets.golden || 0) >
                                0 ? (
                                    <input
                                        type="number"
                                        min="0"
                                        value={cart[event.id]?.golden || 0}
                                        placeholder="count"
                                        onChange={(e) =>
                                            handleTicketChange(
                                                "golden",
                                                e.target.value
                                            )
                                        }
                                    />
                                ) : (
                                    <span className="sold-out">Sold Out</span>
                                )}
                            </div>
                        </div>

                        {/* Silver Ticket */}
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
                                    {event.silver_ticket_price} LKR per ticket
                                </span>
                                <span className="ticket-price">
                                    {Math.max(
                                        event.silver_ticket_count -
                                            (lockedTickets[event.id]?.silver ||
                                                0),
                                        0
                                    )}
                                </span>
                                {event.silver_ticket_count -
                                    (lockedTickets.silver || 0) >
                                0 ? (
                                    <input
                                        type="number"
                                        min="0"
                                        value={cart[event.id]?.silver || 0}
                                        placeholder="count"
                                        onChange={(e) =>
                                            handleTicketChange(
                                                "silver",
                                                e.target.value
                                            )
                                        }
                                    />
                                ) : (
                                    <span className="sold-out">Sold Out</span>
                                )}
                            </div>
                        </div>

                        {/* Bronze Ticket */}
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
                                    {event.bronze_ticket_price} LKR per ticket
                                </span>
                                <span className="ticket-price">
                                    {Math.max(
                                        event.bronze_ticket_count -
                                            (lockedTickets[event.id]?.bronze ||
                                                0),
                                        0
                                    )}
                                </span>
                                {event.bronze_ticket_count -
                                    (lockedTickets.bronze || 0) >
                                0 ? (
                                    <input
                                        type="number"
                                        min="0"
                                        placeholder="count"
                                        value={cart[event.id]?.bronze || 0}
                                        onChange={(e) =>
                                            handleTicketChange(
                                                "bronze",
                                                e.target.value
                                            )
                                        }
                                    />
                                ) : (
                                    <span className="sold-out">Sold Out</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cart summary section */}
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
                            <td>{event.golden_ticket_price} LKR</td>
                            <td>{cart[event.id]?.golden || 0}</td>
                            <td>
                                {(cart[event.id]?.golden || 0) *
                                    event.golden_ticket_price}{" "}
                                LKR
                            </td>
                        </tr>
                        <tr>
                            <td>Silver Ticket</td>
                            <td>{event.silver_ticket_price} LKR</td>
                            <td>{cart[event.id]?.silver || 0}</td>
                            <td>
                                {(cart[event.id]?.silver || 0) *
                                    event.silver_ticket_price}{" "}
                                LKR
                            </td>
                        </tr>
                        <tr>
                            <td>Bronze Ticket</td>
                            <td>{event.bronze_ticket_price} LKR</td>
                            <td>{cart[event.id]?.bronze || 0}</td>
                            <td>
                                {(cart[event.id]?.bronze || 0) *
                                    event.bronze_ticket_price}{" "}
                                LKR
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3">Total Amount</td>
                            <td>{calculateTotal()} LKR</td>
                        </tr>
                    </tfoot>
                </table>

                <div className="event-buttons">
                    {/* Return policy modal toggle */}
                    <button
                        className="return-policies"
                        onClick={openReturnPolicy}
                    >
                        Return Policies
                    </button>

                    {/* Continue to cart page */}
                    <Link
                        href={route("buyticketscart", { id: event.id })}
                        className="tbCart"
                    >
                        {" "}
                        Continue
                    </Link>
                </div>

                {/* Return policy modal */}
                {showReturnPolicy && (
                    <div className="modal-overlay" onClick={closeReturnPolicy}>
                        <div
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="close-button"
                                onClick={closeReturnPolicy}
                            >
                                ×
                            </button>
                            <h2>Return Policies</h2>
                            <p>{event.return_policies}</p>
                        </div>
                    </div>
                )}
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
