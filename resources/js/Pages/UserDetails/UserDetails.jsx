
import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import UserHeader from './../../Components/Header/UserHeader';
import AdminFooter from './../../Components/Footer/AdminFooter';

import '../../../css/UserDetails.scss';
import Cover03 from '../../assets/Images/coverImage04.png';
import Cover04 from '../../assets/Images/coverImage03.png';
//25,35
const UserDetails = () => {
  return (
    <>
         <header>
          <UserHeader />
        </header>

        <h1 className="my-5 text-center">User Details</h1>
       <div className="px-3 pt-5 row gx-5">  
              <div className="mb-4 col-md-4 position-relative"> 
                <div className="border-0 shadow cardd">
                  <div className="cardd-img-top">
                  <img src={Cover03} alt="Banner3" className="w-100"/> 
                      <Link href={route('tb_user_details')} className="image-overlay"> Ticket Buyers </Link>
                  </div>
                </div>
              </div>

              <div className="mb-4 col-md-4 position-relative">
                <div className="border-0 shadow cardd">
                  <div className="cardd-img-top">
                  <img src={Cover04} alt="Banner3" className="w-100"/>
                    <Link href={route('eh_user_details')} className="image-overlay"> Event Hosts </Link>
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

export default UserDetails