
import React, {useEffect, useState} from 'react'
import TBHeader from './../../Components/Header/TBHeader';
import MainFooter from './../../Components/Footer/MainFooter';

import '../../../css/BrowseEvent.scss';
import { Link } from '@inertiajs/react';
import axios from 'axios';

import Banner from '../../assets/Images/banner.png';
import ReviewIcon from '../../assets/Logos/review.png';
import SearchBar from '../../Components/SearchBar';

const BrowseEvent = () => {


  const [events , setEvents] = useState([]);

  useEffect(() => {
    axios.get('/api/events')
    .then (response =>{
      setEvents(response.data);
    })
    .catch (error =>{
      console.error("There was an error fetching events" , error);

    });
  }, []);
  return (
    <>
      <header>
        <TBHeader />
      </header>


            {/*Search Bar */}
            <SearchBar />


          {/*1st Row*/}
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
                    <p className='event-location'> {event.location} </p>
                  </div>
                  <div className='event-title'>
                    <h2><b> {event.name} </b></h2>
                  </div>
                  <div className = 'event-footer d-flex justify-content-between align-items-center mt-3'>
                      <p className='event-price'>{event.bronze_ticket_price} LKR <span className="price-subtext"><br/>upwards</span></p>
                      <Link to = '/eventDetails' className='btn btn-primary'>Book Now</Link>
                  </div>
                </div>
              </div>
            </div>
            ))}
            
           {/* <div className = 'col-md-4'>
              <div className = 'card shadow border-0'>
                <div className = 'card-img-top'>
                    <img src = {Banner} alt="Banner1" className = 'w-100'/>
                </div>
                <div className = 'card-body p-4'>
                  <div className='event-details'>
                     <p className='event-date-time' >20, October 2024 | 07:00 PM</p>
                     <p className='event-location'>National Youth Council</p>
                  </div>
                <div className='event-title'>
                    <h2><b>Sky Heroes</b></h2>
                </div>
                <div className = 'event-footer d-flex justify-content-between align-items-center mt-3'>
                    <p className='event-price'>2,000 LKR <span className="price-subtext"><br/>upwards</span></p>
                    <Link to = '/eventDetails' className='btn btn-primary'>Book Now</Link>
                </div>
              </div>
             </div>
            </div>
            <div className = 'col-md-4'>
              <div className = 'card shadow border-0'>
                <div className = 'card-img-top'>
                    <img src = {Banner} alt="Banner1" className = 'w-100'/>
                </div>
                <div className = 'card-body p-4'>
                    <div className='event-details'>
                      <p className='event-date-time' > 20, October 2024 | 07:00 PM</p>
                      <p className='event-location'>National Youth Council</p>
                    </div>
                    <div className='event-title'>
                      <h2><b>Sky Heroes</b></h2>
                    </div>
                    <div className = 'event-footer d-flex justify-content-between align-items-center mt-3'>
                          <p className='event-price'>2,000 LKR <span className="price-subtext"><br/>upwards</span></p>
                          <Link to = '/eventDetails' className='btn btn-primary'>Book Now</Link>
                    </div>
                </div>
              </div>
            </div>
          </div>

          2nd Row
          <div className = 'row pt-3'>
            <div className = 'col-md-4'>
              <div className = 'card shadow border-0'>
                <div className = 'card-img-top'>
                    <img src = {Banner} alt="Banner1" className = 'w-100'/>
                </div>
                <div className = 'card-body p-4'>
                    <div className='event-details'>
                        <p className='event-date-time' > 20, October 2024 | 07:00 PM</p>
                        <p className='event-location'>National Youth Council</p>
                    </div>
                    <div className='event-title'>
                        <h2><b>Sky Heroes</b></h2>
                    </div>
                    <div className = 'event-footer d-flex justify-content-between align-items-center mt-3'>
                          <p className='event-price'>2,000 LKR <span className="price-subtext"><br/>upwards</span></p>
                          <Link to = '/eventDetails' className='btn btn-primary'>Book Now</Link>

                    </div>

                    {/*2nd Row*/}
                    <div className='row pt-3'>
                        <div className='col-md-4'>
                            <div className='card shadow border-0'>
                                <div className='card-img-top'>
                                    <img src={Banner} alt="Banner1" className='w-100' />
                                </div>
                                <div className='card-body p-4'>
                                    <div className='event-details'>
                                        <p className='event-date-time' > 20, October 2024 | 07:00 PM</p>
                                        <p className='event-location'>National Youth Council</p>
                                    </div>
                                    <div className='event-title'>
                                        <h2><b>Sky Heroes</b></h2>
                                    </div>
                                    <div className='event-footer d-flex justify-content-between align-items-center mt-3'>
                                        <p className='event-price'>2,000 LKR <span className="price-subtext"><br />upwards</span></p>
                                        <Link to='/TBEventDetails' className='btn btn-primary'>Book Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card shadow border-0'>
                                <div className='card-img-top'>
                                    <img src={Banner} alt="Banner1" className='w-100' />
                                </div>
                                <div className='card-body p-4'>
                                    <div className='event-details'>
                                        <p className='event-date-time' > 20, October 2024 | 07:00 PM</p>
                                        <p className='event-location'>National Youth Council</p>
                                    </div>
                                    <div className='event-title'>
                                        <h2><b>Sky Heroes</b></h2>
                                    </div>
                                    <div className='event-footer d-flex justify-content-between align-items-center mt-3'>
                                        <p className='event-price'>2,000 LKR <span className="price-subtext"><br />upwards</span></p>
                                        <Link to='/TBEventDetails' className='btn btn-primary'>Book Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card shadow border-0'>
                                <div className='card-img-top'>
                                    <img src={Banner} alt="Banner1" className='w-100' />
                                </div>
                                <div className='card-body p-4'>
                                    <div className='event-details'>
                                        <p className='event-date-time' > 20, October 2024 | 07:00 PM</p>
                                        <p className='event-location'>National Youth Council</p>
                                    </div>
                                    <div className='event-title'>
                                        <h2><b>Sky Heroes</b></h2>
                                    </div>
                                    <div className='event-footer d-flex justify-content-between align-items-center mt-3'>
                                        <p className='event-price'>2,000 LKR <span className="price-subtext"><br />upwards</span></p>
                                        <Link to='/TBEventDetails' className='btn btn-primary'>Book Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              </div>
            </div> 
         */}
          </div>
        </div>


            </section>

            <section className='section-5'>
                <div className='text-center'>
                    <Link to='/review' className='Reviews '>Leave Us a Review</Link >
                    <img src={ReviewIcon} alt='ReviewIcon' className='Review-icon mx-2' />
                </div>
            </section>

            <footer>
                <SubFooter />
            </footer>
        </>
    )
}

export default BrowseEvent



