import React, { useEffect, useState,useContext  } from "react";
import TBHeader from "../../Components/Header/TBHeader";
import MainFooter from "../../Components/Footer/MainFooter";
import SubFooter from "../../Components/Footer/SubFooter";
//import React, { useContext } from "re
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
const { cart, updateCart, lockedTickets } = useContext(CartContext);

const handleTicketChange = (type, value) => {
    const count = Math.max(0, Number(value)); // Ensure non-negative values

    if (!event || !event.id) {
        console.error("Error: event or event.id is undefined");
        return;
    }
    updateCart({ [type]: count }, event.id);

    // updateCart({
    //     [event.id]: {
    //         ...cart[event.id],  // Keep existing cart data
    //         [type]: count
    //     }
    // }, event.id);
     
     
   
};

const calculateTotal = () => {
    const eventCart = cart[event.id] || {};
    return (
        (eventCart.golden||0) * event.golden_ticket_price +
        (eventCart.silver ||0) * event.silver_ticket_price +
        (eventCart.bronze ||0) * event.bronze_ticket_price
    );
};

// const updateDatabase = async () => {
//     try {
//         await axios.post('/update-ticket-count', {
//             event_id: event.id,
//             golden_count: goldenCount,
//             silver_count: silverCount,
//             bronze_count: bronzeCount, 
//         });
//         console.log('Ticket counts updated successfully!');
//     } catch (error) {
//         console.error('Error updating ticket counts:', error);
//     }
// };




    return (
        <>
            <header>
                <TBHeader />
            </header>
{/* 
            // {/*Search Bar */}
           {/*} // <div className="search-bar-section">
            //     <SearchBar />
            // </div> */}

            {/* ticket Section */}
            <section className="event-Details">
                <div className="banner">
                    <h1 className="banner-title">
                        <b>{event.name}</b>
                    </h1>
                </div>

                <Link href={route('event.details',{id:event.id})} className="view-event">
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
                                <strong>Venue:</strong>{event.venue}
                            </p>
                            <p>
                                <strong>Organizer:</strong>{event.organizer}
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
                                    
                                    href={`/storage/${event.agenda_pdf}`}
                                    target="_blank" // Open in a new window
                                    rel="noopener noreferrer" // Ensure secure behavior
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
                                {event.golden_ticket_price} LKR per ticket
                                </span>
                                <span className="ticket-price">{Math.max(event.golden_ticket_count - (lockedTickets[event.id]?.golden || 0), 0)}</span>
                                {event.golden_ticket_count - (lockedTickets.golden || 0) > 0 ? (     
                                <input
                                    type="number"
                                    min="0"
                                    value={cart[event.id]?.golden || 0}
                                    placeholder="count"
                                    onChange={(e) => handleTicketChange('golden', e.target.value)}
                                />
                            ) : (
                                <span className="sold-out">Sold Out</span>
                            )}

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
                                {event.silver_ticket_price} LKR per ticket
                                </span>
                                <span className="ticket-price">{Math.max(event.silver_ticket_count - (lockedTickets[event.id]?.silver || 0), 0)}</span>
                                {event.silver_ticket_count - (lockedTickets.silver || 0) > 0 ? (   
                                <input
                                    type="number"
                                    min="0"
                                    value={cart[event.id]?.silver|| 0}
                                    placeholder="count"
                                    onChange={(e) => handleTicketChange('silver', e.target.value)}
                                />
                            ) : (
                                <span className="sold-out">Sold Out</span>
                            )}
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
                                {event.bronze_ticket_price} LKR per ticket
                                </span>
                                <span className="ticket-price">{Math.max(event.bronze_ticket_count - (lockedTickets[event.id]?.bronze || 0), 0)}</span>
                                {event.bronze_ticket_count - (lockedTickets.bronze || 0) > 0 ? (    
                                <input
                                    type="number"
                                    min="0"
                                    placeholder="count"
                                    value={cart[event.id]?.bronze || 0}
                                    onChange={(e) => handleTicketChange('bronze', e.target.value)}
                                />
                            ) : (
                                <span className="sold-out">Sold Out</span>
                            )}
                            </div>
                        </div>

                        {/* <Link to="/TBCart">
                            <button onClick={updateDatabase} className="add-to-cart">Add to Cart</button>
                        </Link> */}
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
                            <td>{event.golden_ticket_price} LKR</td>
                            <td>{(cart[event.id]?.golden || 0)}</td>
                            <td>{(cart[event.id]?.golden || 0) * event.golden_ticket_price} LKR</td>
                        </tr>
                        <tr>
                            <td>Silver Ticket</td>
                            <td>{event.silver_ticket_price} LKR</td>
                            <td>{(cart[event.id]?.silver || 0)}</td>
                            <td>{(cart[event.id]?.silver || 0) * event.silver_ticket_price} LKR</td>
                        </tr>
                        <tr>
                            <td>Bronze Ticket</td>
                            <td>{event.bronze_ticket_price} LKR</td>
                            <td>{(cart[event.id]?.bronze || 0)}</td>
                            <td>{(cart[event.id]?.bronze || 0) * event.bronze_ticket_price} LKR</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3">Total Amount</td>
                            <td>{calculateTotal()}  LKR</td>
                        </tr>
                    </tfoot>
                </table>

                <div className="event-buttons">
                    <Link to="/return-policies" className="return-policies">
                        Return Policies
                    </Link>
                    <Link href= {route('buyticketscart',{id:event.id}) } className="tbCart">
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
