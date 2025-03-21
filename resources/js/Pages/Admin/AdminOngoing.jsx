import React, {useEffect, useState} from 'react'
import '../../../css/BrowseEvent.scss';
import { Link } from '@inertiajs/react';
import axios from 'axios';
import Banner from '../../assets/Images/banner.png';
import SearchBar from '../../Components/SearchBar';
import UserHeader from '../../Components/Header/UserHeader';
import AdminFooter from '../../Components/Footer/AdminFooter';

const AdminOngoing = () => {

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
          <UserHeader />
        </header>

         {/*Search Bar */}
         <SearchBar />


            <section className = 'section-2 bg-light py-5'>
            <div className = 'container'>

            
            <div className = 'row pt-3'>
            {events.map((event) => (    
                <div className = 'col-md-4'key ={event.id}>
                <div className = 'card shadow border-0'>
                    <div className = 'card-img-top'>
                        <img src = {event.image} alt={event.name} className = 'w-100'/>
                    </div>
                    <div className = 'card-body p-4'>
                    <div className='event-details'>
                        <p className='event-date-time' > {event.date} | {event.startTime}</p>
                        <p className='event-location'>{event.venue}</p>
                    </div>
                    <div className='event-title'>
                        <h2><b>{event.name}</b></h2>
                    </div>
                    <div className = 'event-footer d-flex justify-content-between align-items-center mt-3'>
                        <p className='event-price'>{event.bronze_ticket_price} LKR <span className="price-subtext"><br/>upwards</span></p>
                        <Link href={route('admin.viewEvent',{id: event.id})} className='btn btn-primary'>View Event</Link>
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
                        <p className='event-date-time' >1st of April 2024 | 06.30 PM</p>
                        <p className='event-location'>National Youth Council</p>
                    </div>
                    <div className='event-title'>
                        <h2><b>Sky Heroes</b></h2>
                    </div>
                    <div className = 'event-footer d-flex justify-content-between align-items-center mt-3'>
                        <p className='event-price'>2,000 LKR <span className="price-subtext"><br/>upwards</span></p>
                        <Link to = '/ViewEvent' className='btn btn-primary'>View Event</Link>
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
                        <p className='event-date-time' > 1st of April 2024 | 06.30 PM</p>
                        <p className='event-location'>National Youth Council</p>
                        </div>
                        <div className='event-title'>
                        <h2><b>Sky Heroes</b></h2>
                        </div>
                        <div className = 'event-footer d-flex justify-content-between align-items-center mt-3'>
                            <p className='event-price'>2,000 LKR <span className="price-subtext"><br/>upwards</span></p>
                            <Link to = '/ViewEvent' className='btn btn-primary'>View Event</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            
            <div className = 'row pt-3'>
                <div className = 'col-md-4'>
                <div className = 'card shadow border-0'>
                    <div className = 'card-img-top'>
                        <img src = {Banner} alt="Banner1" className = 'w-100'/>
                    </div>
                    <div className = 'card-body p-4'>
                        <div className='event-details'>
                            <p className='event-date-time' >1st of April 2024 | 06.30 PM</p>
                            <p className='event-location'>National Youth Council</p>
                        </div>
                        <div className='event-title'>
                            <h2><b>Sky Heroes</b></h2>
                        </div>
                        <div className = 'event-footer d-flex justify-content-between align-items-center mt-3'>
                            <p className='event-price'>2,000 LKR <span className="price-subtext"><br/>upwards</span></p>
                            <Link to = '/ViewEvent' className='btn btn-primary'>View Event</Link>
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
                        <p className='event-date-time' > 1st of April 2024 | 06.30 PM</p>
                        <p className='event-location'>National Youth Council</p>
                        </div>
                        <div className='event-title'>
                        <h2><b>Sky Heroes</b></h2>
                        </div>
                        <div className = 'event-footer d-flex justify-content-between align-items-center mt-3'>
                            <p className='event-price'>2,000 LKR <span className="price-subtext"><br/>upwards</span></p>
                            <Link to = '/ViewEvent' className='btn btn-primary'>View Event</Link>
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
                        <p className='event-date-time' > 1st of April 2024 | 06.30 PM</p>
                        <p className='event-location'>National Youth Council</p>
                        </div>
                        <div className='event-title'>
                        <h2><b>Sky Heroes</b></h2>
                        </div>
                        <div className = 'event-footer d-flex justify-content-between align-items-center mt-3'>
                            <p className='event-price'>2,000 LKR <span className="price-subtext"><br/>upwards</span></p>
                            <Link to = '/ViewEvent' className='btn btn-primary'>View Event</Link>
                        </div>
                    </div>
                </div>
                </div>*/}
            </div> 
            </div>

        </section>

        <footer>
          <AdminFooter />
        </footer>
    </>
  )
}

export default AdminOngoing