
import React from 'react'
import TBHeader from '../../Components/Header/TBHeader.jsx';
import MainFooter from './../../Components/Footer/MainFooter';
import './BrowseEvent.scss';
import { Link } from '@inertiajs/react';

import Banner from '../../assets/banner.png';
import ReviewIcon from '../../assets/Logos/review.png';
import SearchBar from '../../Components/SearchBar';

const BrowseEvent = () => {
  return (
    <>
      <header>
        <TBHeader />
      </header>

      {/*Search Bar */}
        <SearchBar />
      
      {/*Body Content */}
      <section className = 'section-2 bg-light py-5'>
        <div className = 'container'>

          {/*1st Row*/}
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

          {/*2nd Row*/}
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
        </div>

      </section>

      <section className ='section-5'>
              <div className='text-center'>
                    <Link to ='/review' className='Reviews '>Leave Us a Review</Link >
                    <img src={ReviewIcon} alt='ReviewIcon' className='Review-icon mx-2' />
                </div>
      </section>

      <footer>
        <MainFooter />
      </footer>
    </>
  )
}

export default BrowseEvent
