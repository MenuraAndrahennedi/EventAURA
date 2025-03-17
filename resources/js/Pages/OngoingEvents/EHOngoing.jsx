import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import SubFooter from './../../Components/Footer/SubFooter';
import EHHeader from './../../Components/Header/EHHeader';
import '../../../css/BrowseEvent.scss';
import Banner from '../../assets/Images/banner.png';


const EHOngoing = () => {
  return (
    <>

      <header>
          <EHHeader />
      </header>

      <h1 className="my-5 text-center">Your Ongoing Events</h1>

       {/*Body Content */}
       <section className = 'py-5 section-2 bg-light'>
        <div className = 'container'>

          {/*1st Row*/}
          {/*<div className = 'pt-3 row'>
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
                      <Link to = '/TBEventDetails' className='btn btn-primary'>Book Now</Link>
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
                    <Link to = '/TBEventDetails' className='btn btn-primary'>Book Now</Link>
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
                          <Link to = '/TBEventDetails' className='btn btn-primary'>Book Now</Link>
                    </div>
                </div>
              </div>
            </div>
          </div>*/}

          {/*2nd Row*/}
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
                           <Link href={route('eh_view_event')} className="remaining-tickets-button">Remaining Tickets </Link>
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
                          <Link href={route('eh_view_event')} className="remaining-tickets-button">Remaining Tickets </Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      
      <footer>
          <SubFooter />
      </footer>
    </>
  )
}

export default EHOngoing