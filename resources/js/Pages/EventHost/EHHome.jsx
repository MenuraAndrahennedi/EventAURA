import React from 'react'
import '../../../css/EHHome.scss';
import { Link } from '@inertiajs/react';

import EHHeader from './../../Components/Header/EHHeader';
import SubFooter from './../../Components/Footer/SubFooter';

import Cover01 from '../../assets/Images/coverImage01.png';
import Cover02 from '../../assets/Images/coverImage05.png';
import Cover03 from '../../assets/Images/coverImage02.png';

const EHHome = () => {
  return (
    <>
        <header>
            <EHHeader />
        </header>
       
        <h1 className="my-5 text-center">Monitor your work here!</h1>

     
        <div className="px-3 pt-5 row gx-5">  

              <div className="mb-4 col-md-4 position-relative"> 
                <div className="border-0 shadow card">
                  <div className="card-img-top">
                      <img src={Cover01} alt="Banner1" className="w-100"/>
                      <Link href={route('eventhost.ongoingEvents')} className="image-overlay">Your Ongoing Events</Link>
                  </div>
                </div>
              </div>

              <div className="mb-4 col-md-4 position-relative">
                <div className="border-0 shadow card">
                  <div className="card-img-top">
                    <img src={Cover02} alt="Banner2" className="w-100"/>
                    <Link href={route('eventhost.ongoingEvents.history')} className="image-overlay">Go to Profile</Link>
                  </div>
              </div>
              </div>

              <div className="mb-4 col-md-4 position-relative">
                <div className="border-0 shadow card">
                  <div className="card-img-top">
                      <img src={Cover03} alt="Banner3" className="w-100"/>
                      <Link href={route('event.create')} className="image-overlay">Create New Event</Link>
                  </div>
                </div>
              </div>
          </div>


        <footer>
            <SubFooter />
        </footer>
    
    </>
  )
}

export default EHHome
