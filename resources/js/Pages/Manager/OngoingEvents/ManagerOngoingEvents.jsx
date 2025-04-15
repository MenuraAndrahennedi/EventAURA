import React, { useEffect, useState } from 'react';
import { Link } from  "@inertiajs/react";
//import '../../../../css/BrowseEvent.scss';
import '../../../../css/OngoingEvents.scss';
import Banner from '../../../assets/Images/banner.png';
import SearchBar from '../../../Components/SearchBar';
import UserHeader from '../../../Components/Header/UserHeader';
import AdminFooter from '../../../Components/Footer/AdminFooter';
import axios from "axios";


const ManagerOngoingEvents = () => {

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

  return (
    <div className="page-wrapper">
        <header>
          <UserHeader />
        </header>


        <h1 className="my-5 text-4xl font-extrabold text-center sm:text-3xl md:text-4xl">Ongoing Events</h1>
         {/*Search Bar */}
         <SearchBar />
         

            <section className = 'py-5 section-2 bg-light'>
            <div className = 'container'>

            {/*1st Row*/}
            <div className = 'pt-3 row'>
             {events.map((event) => (   
                <div className = 'col-md-3' key={event.id}>
                <div className = 'border-0 shadow card'>
                    <div className = 'card-img-top'>
                        <img src = {event.image} alt={event.name} className = 'w-100'/>
                    </div>
                    <div className = 'p-4 card-body'>
                    <div className='event-details'>
                        <p className='event-date-time' > 
                        {" "}
                        {event.date} | {event.startTime}{" "} 
                        </p>
                        <p className='event-location'>
                        {" "}
                        {event.venue}{" "} 
                        </p>
                    </div>
                    <div className='event-title'>
                        <h2><b>{event.name}</b></h2>
                    </div>
                    <div className = 'mt-3 event-footer d-flex justify-content-between align-items-center'>
                        <p className='event-price'>
                        {event.bronze_ticket_price} 
                        LKR{" "}
                            <span
                             className="price-subtext">
                                <br/>upwards
                                </span>
                                </p>
                        <Link href={route('viewevent',{id:event.id})} className='btn btn-primary'>View Event</Link>
                    </div>
                    </div>
                </div>
                </div>
                ))}
                {/* <div className = 'col-md-4'>
                <div className = 'border-0 shadow card'>
                    <div className = 'card-img-top'>
                        <img src = {Banner} alt="Banner1" className = 'w-100'/>
                    </div>
                    <div className = 'p-4 card-body'>
                    <div className='event-details'>
                        <p className='event-date-time' >1st of April 2024 | 06.30 PM</p>
                        <p className='event-location'>National Youth Council</p>
                    </div>
                    <div className='event-title'>
                        <h2><b>Sky Heroes</b></h2>
                    </div>
                    <div className = 'mt-3 event-footer d-flex justify-content-between align-items-center'>
                        <p className='event-price'>2,000 LKR <span className="price-subtext"><br/>upwards</span></p>
                        <Link to = '/ViewEvent' className='btn btn-primary'>View Event</Link>
                    </div>
                </div>
                </div>
                </div>
                <div className = 'col-md-4'>
                <div className = 'border-0 shadow card'>
                    <div className = 'card-img-top'>
                        <img src = {Banner} alt="Banner1" className = 'w-100'/>
                    </div>
                    <div className = 'p-4 card-body'>
                        <div className='event-details'>
                        <p className='event-date-time' > 1st of April 2024 | 06.30 PM</p>
                        <p className='event-location'>National Youth Council</p>
                        </div>
                        <div className='event-title'>
                        <h2><b>Sky Heroes</b></h2>
                        </div>
                        <div className = 'mt-3 event-footer d-flex justify-content-between align-items-center'>
                            <p className='event-price'>2,000 LKR <span className="price-subtext"><br/>upwards</span></p>
                            <Link to = '/ViewEvent' className='btn btn-primary'>View Event</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            2nd Row
            <div className = 'pt-3 row'>
                <div className = 'col-md-4'>
                <div className = 'border-0 shadow card'>
                    <div className = 'card-img-top'>
                        <img src = {Banner} alt="Banner1" className = 'w-100'/>
                    </div>
                    <div className = 'p-4 card-body'>
                        <div className='event-details'>
                            <p className='event-date-time' >1st of April 2024 | 06.30 PM</p>
                            <p className='event-location'>National Youth Council</p>
                        </div>
                        <div className='event-title'>
                            <h2><b>Sky Heroes</b></h2>
                        </div>
                        <div className = 'mt-3 event-footer d-flex justify-content-between align-items-center'>
                            <p className='event-price'>2,000 LKR <span className="price-subtext"><br/>upwards</span></p>
                            <Link to = '/ViewEvent' className='btn btn-primary'>View Event</Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className = 'col-md-4'>
                <div className = 'border-0 shadow card'>
                    <div className = 'card-img-top'>
                        <img src = {Banner} alt="Banner1" className = 'w-100'/>
                    </div>
                    <div className = 'p-4 card-body'>
                    <div className='event-details'>
                        <p className='event-date-time' > 1st of April 2024 | 06.30 PM</p>
                        <p className='event-location'>National Youth Council</p>
                        </div>
                        <div className='event-title'>
                        <h2><b>Sky Heroes</b></h2>
                        </div>
                        <div className = 'mt-3 event-footer d-flex justify-content-between align-items-center'>
                            <p className='event-price'>2,000 LKR <span className="price-subtext"><br/>upwards</span></p>
                            <Link to = '/ViewEvent' className='btn btn-primary'>View Event</Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className = 'col-md-4'>
                <div className = 'border-0 shadow card'>
                    <div className = 'card-img-top'>
                        <img src = {Banner} alt="Banner1" className = 'w-100'/>
                    </div>
                    <div className = 'p-4 card-body'>
                    <div className='event-details'>
                        <p className='event-date-time' > 1st of April 2024 | 06.30 PM</p>
                        <p className='event-location'>National Youth Council</p>
                        </div>
                        <div className='event-title'>
                        <h2><b>Sky Heroes</b></h2>
                        </div>
                        <div className = 'mt-3 event-footer d-flex justify-content-between align-items-center'>
                            <p className='event-price'>2,000 LKR <span className="price-subtext"><br/>upwards</span></p>
                            <Link to = '/ViewEvent' className='btn btn-primary'>View Event</Link>
                        </div>
                    </div>
                </div>
                </div> */}
            </div>
            </div>

        </section>

        <footer>
          <AdminFooter />
        </footer>
    </div>
  )
}

export default ManagerOngoingEvents