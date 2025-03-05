import React, { useEffect, useState } from "react";
import TBHeader from "../../Components/Header/TBHeader";
import SubFooter from "../../Components/Footer/SubFooter";
import "../../../css/BrowseEvent.scss";
import { Link } from "@inertiajs/react";
import axios from "axios";

import Banner from "../../assets/Images/banner.png";
import ReviewIcon from "../../assets/Logos/review.png";
import SearchBar from "../../Components/SearchBar";


const BrowseEvent = () => {
    return (
      <>
        <header>
          <TBHeader />
        </header>
  
        {/*Search Bar */}
          <SearchBar />
        
        {/*Body Content */}
        <section className = 'py-5 section-2 bg-light'>
          <div className = 'container'>
  
            {/*1st Row*/}
            <div className = 'pt-3 row'>
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
                        <Link href={route('home')} className="btn btn-primary"> Book Now </Link>
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
                       <p className='event-date-time' >1st of April 2024 | 06.30 PM</p>
                       <p className='event-location'>National Youth Council</p>
                    </div>
                  <div className='event-title'>
                      <h2><b>Sky Heroes</b></h2>
                  </div>
                  <div className = 'mt-3 event-footer d-flex justify-content-between align-items-center'>
                      <p className='event-price'>2,000 LKR <span className="price-subtext"><br/>upwards</span></p>
                      <Link href={route('home')} className="btn btn-primary"> Book Now </Link>
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
                            <Link href={route('home')} className="btn btn-primary"> Book Now </Link>
                      </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/*2nd Row*/}
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
                            <span className='sold-out-button'>Sold Out</span>
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
                            <Link href={route('home')} className="btn btn-primary"> Book Now </Link>
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
                            <Link href={route('home')} className="btn btn-primary"> Book Now </Link>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </section>
  
        <section className ='section-5'>
                <div className='text-center'>
                      <Link to ='/review' className='Reviews '>Leave Us a Review</Link >
                      <img src={ReviewIcon} alt='ReviewIcon' className='mx-2 Review-icon' />
                  </div>
        </section>
  
        <footer>
          <SubFooter />
        </footer>
      </>
    )
  }
  
  export default BrowseEvent
  
/*const BrowseEvent = () => {
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
        <>
            <header>
                <TBHeader />
            </header>

            
            <SearchBar />

            /*<section className="py-5 section-2 bg-light">
                <div className="container">
                    
                    
                    <div className="pt-3 row">
                        {events.map((event) => (
                            <div className="col-md-4" key={event.id}>
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
                                                {" "}
                                                {event.date} | {event.startTime}{" "}
                                            </p>
                                            <p className="event-location">
                                                {" "}
                                                {event.location}{" "}
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
                                            <Link
                                                 href={`/event/${event.id}`}
                                                className="btn btn-primary"
                                            >
                                                Book Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        
                    </div>
                </div>
            </section>

            <section className="section-5">
                <div className="text-center">
                    <Link to="/review" className="Reviews ">
                        Leave Us a Review
                    </Link>
                    <img
                        src={ReviewIcon}
                        alt="ReviewIcon"
                        className="mx-2 Review-icon"
                    />
                </div>
            </section>

            <footer>
                <SubFooter />
            </footer>
        </>
    );
};



export default BrowseEvent;*/
