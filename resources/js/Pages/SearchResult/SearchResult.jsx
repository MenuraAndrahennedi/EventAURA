import { useState} from 'react'
import { Form, FormControl, InputGroup, Dropdown } from 'react-bootstrap';
import '../../../css/style.scss';
import { BsSearch } from 'react-icons/bs';// Import search icon
import axios from 'axios';
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import TBHeader from "./../../Components/Header/TBHeader";

const SearchResult = ({ events, search, filter }) => {
    
    // Function to handle filter selection
    const handleFilterSelect = (selectedFilter) => {
        setFilter(selectedFilter);// Update filter state
        // Add logic for filtering results here
    };

    // Function to handle "Book Now" click event
    const handleBookNowClick = (eventId) => {
        axios.post(`/event/click/${eventId}`)// Send POST request to record click
            .then(response => {
                if (response.data.success) {
                    console.log("Click recorded successfully");// Log success
                }
            })
            .catch(error => {
                console.error("Error recording click", error);// Log error
            });
    };

    return (
        <>

            <header>
                <TBHeader />
            </header>

            
             {/* Events List Section */}
             <section className='py-5 section-2 bg-light'>
                    <div className='container'>

                        {/* Display message if no events are found */}
                        {events.length === 0 ? (
                            <div className="py-5 text-center">
                                <h4>No events found with filter "{filter}"</h4>
                            </div>
                        ) : (
                            // Display list of event cards
                            <div className='pt-3 row'>
                                {events.map((event) => (
                                    <div className='col-md-4' key={event.id}>
                                        <div className='border-0 shadow card'>
                                            
                                            <div className='card-img-top'>
                                                <img src={event.image} alt={event.name} className='w-100' />
                                            </div>
                                            {/* Event Details */}
                                            <div className='p-4 card-body'>
                                                <div className='event-details'>
                                                    <p className='event-date-time'>{event.date} | {event.startTime}</p>
                                                    <p className='event-location'>{event.venue}</p>
                                                </div>
                                                 {/* Event Title */}
                                                <div className='event-title'>
                                                    <h2><b>{event.name}</b></h2>
                                                </div>
                                                {/* Footer with price and button */}
                                                <div className='mt-3 event-footer d-flex justify-content-between align-items-center'>
                                                    <p className='event-price'>{event.bronze_ticket_price} LKR <span className="price-subtext"><br />upwards</span></p>
                                                    <Link href={route('event.details', { id: event.id })} className='btn btn-primary' onClick={() => handleBookNowClick(event.id)}>Book Now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
            </section>

        </>
    )
}

export default SearchResult