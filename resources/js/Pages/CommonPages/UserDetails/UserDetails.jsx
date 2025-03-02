import React from 'react'

import UserHeader from '../../../Components/Header/UserHeader';
import AdminFooter from '../../../Components/Footer/AdminFooter';


import './UserDetails.scss';
import { Link } from 'react-router-dom';


import Cover03 from '../../../assets/coverImage04.png';
import Cover04 from '../../../assets/coverImage03.png';

const UserDetails = () => {
  return (
   <>
         <header>
          <UserHeader />
        </header>

        <h1 className="text-center my-5">User Details</h1>
       <div className="row pt-5 px-3 gx-5">  
              <div className="col-md-4 mb-4 position-relative"> 
                <div className="cardd shadow border-0">
                  <div className="cardd-img-top">
                  <img src={Cover03} alt="Banner3" className="w-100"/> 
                      <Link to="/" className="image-overlay">Ticket Buyers</Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4 position-relative">
                <div className="cardd shadow border-0">
                  <div className="cardd-img-top">
                  <img src={Cover04} alt="Banner3" className="w-100"/>
                    <Link to="/" className="image-overlay">Event Hosts</Link>
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