import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import UserHeader from './../../Components/Header/UserHeader';
import SearchBar from './../../Components/SearchBar';
import AdminFooter from './../../Components/Footer/AdminFooter';
import Banner from '../../assets/Images/banner.png';

const UserOngoing = () => {
  return (
    <>
        <header>
          <UserHeader />
        </header>

         {/*Search Bar */}
         <SearchBar />


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
                        <Link href={route('user_view_event')} className="btn btn-primary">View Event</Link>
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
                         <Link href={route('user_view_event')} className="btn btn-primary">View Event</Link>
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
                            <Link href={route('user_view_event')} className="btn btn-primary">View Event</Link>
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
                            <Link href={route('user_view_event')} className="btn btn-primary">View Event</Link>
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
                            <Link href={route('user_view_event')} className="btn btn-primary">View Event</Link>
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
                            <Link href={route('user_view_event')} className="btn btn-primary">View Event</Link>
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

export default UserOngoing