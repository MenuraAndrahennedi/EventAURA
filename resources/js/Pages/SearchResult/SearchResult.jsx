import { useState} from 'react'
import { Form, FormControl, InputGroup, Dropdown } from 'react-bootstrap';
import '../../../css/style.scss';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';

const SearchResult = ({ events, search, filter }) => {
    

    const handleFilterSelect = (selectedFilter) => {
        setFilter(selectedFilter);
        // Add logic for filtering results here
    };

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

            <section className="search-bar bg-light py-3">
                <div className="container d-flex justify-content-center">
                    <InputGroup className="w-75">

                        <Dropdown onSelect={handleFilterSelect}>
                            <Dropdown.Toggle variant="outline-secondary">
                                Filter: {filter}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="All">All</Dropdown.Item>
                                <Dropdown.Item eventKey="Upcoming">Upcoming</Dropdown.Item>
                                <Dropdown.Item eventKey="Past">Past</Dropdown.Item>
                                <Dropdown.Item eventKey="Popular">Popular</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <FormControl
                            placeholder="Search events"
                            value={search}
                            onChange={(e) => {
                                handleSearchChange(e);
                                //performSearch(e.target.value, filter);
                            }}
                        />

                        <InputGroup.Text >
                            <BsSearch />
                        </InputGroup.Text>

                    </InputGroup>
                </div>
            </section>
            
             <section className = 'section-2 bg-light py-5'>
                        <div className='container'>
                      
                       <div className = 'row pt-3'>
                        {events.map ((event) => (
                          <div className = 'col-md-4' key ={event.id} >
                          <div className = 'card shadow border-0'>
                            <div className = 'card-img-top'>
                                <img src = {event.image} alt= {event.name} className = 'w-100'/>
                            </div>
                            <div className = 'card-body p-4'>
                              <div className='event-details'>
                                <p className='event-date-time' > {event.date} | {event.startTime} </p>
                                <p className='event-location'> {event.venue} </p>
                              </div>
                              <div className='event-title'>
                                <h2><b> {event.name} </b></h2>
                              </div>
                              <div className = 'event-footer d-flex justify-content-between align-items-center mt-3'>
                                  <p className='event-price'>{event.bronze_ticket_price} LKR <span className="price-subtext"><br/>upwards</span></p>
                                  <Link href={route('event.details',{id:event.id})} className='btn btn-primary' onClick={() => handleBookNowClick(event.id)}>Book Now</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        ))}
                        </div> 
         
                </div>
              
            </section> 
        </>
    )
}

export default SearchResult