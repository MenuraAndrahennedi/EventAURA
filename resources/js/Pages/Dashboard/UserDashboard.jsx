import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

import UserHeader from './../../Components/Header/UserHeader';
import AdminFooter from './../../Components/Footer/AdminFooter';
import '../../../css/UserDashboard.scss';

import Cover01 from '../../assets/Images/Tile 1.jpg';
import Cover02 from '../../assets/Images/Tile 2.jpg';
import Cover03 from '../../assets/Images/Tile 3.jpg';
import Cover04 from '../../assets/Images/Tile 4.jpg';
import Cover05 from '../../assets/Images/Tile 5.jpg';
import Cover06 from '../../assets/Images/Tile 6.jpg';


//update to add new member
//32,42,52,64,74,84
const UserDashboard = () => {
  return (
    <>
        <header>
          <UserHeader />
        </header>

       
        <div className="px-3 pt-5 row gx-5">  
          
              <div className="mb-4 col-md-4 position-relative"> 
                <div className="border-0 shadow cards">
                  <div className="cards-img-top">
                      <img src={Cover01} alt="Banner1" className="w-100"/>
                       <Link href={route('user_ongoing')} className="image-overlay"> Ongoing Events</Link>
                  </div>
                </div>
              </div>

              <div className="mb-4 col-md-4 position-relative">
                <div className="border-0 shadow cards">
                  <div className="cards-img-top">
                    <img src={Cover02} alt="Banner2" className="w-100"/>
                     <Link href={route('create_request')} className="image-overlay"> Pending Requests</Link>
                  </div>
              </div>
              </div>

              <div className="mb-4 col-md-4 position-relative">
                <div className="border-0 shadow cards">
                  <div className="cards-img-top">
                      <img src={Cover03} alt="Banner3" className="w-100"/>
                      <Link href={route('ended_events')} className="image-overlay"> History</Link>
                  </div>
                </div>
              </div>
          </div>
          
            <div className="px-3 pt-5 row gx-5">  
                <div className="mb-4 col-md-4 position-relative"> 
                    <div className="border-0 shadow cards">
                        <div className="cards-img-top">
                            <img src={Cover04} alt="Banner4" className="w-100"/>
                            <Link href={route('user_details')} className="image-overlay"> User Details</Link>
                        </div>
                    </div>
                </div>

                <div className="mb-4 col-md-4 position-relative">
                    <div className="border-0 shadow cards">
                        <div className="cards-img-top">
                        <img src={Cover05} alt="Banner5" className="w-100"/>
                        <Link href={route('review')} className="image-overlay">Reviews </Link>
                        </div>
                    </div>
                </div>

                <div className="mb-4 col-md-4 position-relative">
                    <div className="border-0 shadow cards">
                        <div className="cards-img-top">
                            <img src={Cover06} alt="Banner6" className="w-100"/>
                            <Link href={route('inquiries')} className="image-overlay">Inquiries </Link>
                        </div>
                    </div>
                </div>
            </div>


        <footer>
          <AdminFooter />
      </footer>
    </>
  )
}

export default UserDashboard