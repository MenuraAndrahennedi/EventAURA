import React from 'react'
import '../../Pages/BrowseEvent/BrowseEvent.scss';
import { Link } from 'react-router-dom';

import Banner from '../../assets/banner.png';
import SearchBar from '../../Components/SearchBar';
import UserHeader from './../../Components/Header/UserHeader';
import AdminFooter from './../../Components/Footer/AdminFooter';

const AdminOngoing = () => {
  return (
    <>
        <header>
          <UserHeader />
        </header>

         {/*Search Bar */}
         <SearchBar />


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

            {/*2nd Row*/}
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
                </div>
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