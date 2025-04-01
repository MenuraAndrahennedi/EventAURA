import React from 'react'

import UserHeader from '../../Components/Header/UserHeader';
import AdminFooter from '../../Components/Footer/AdminFooter';

import '../../../css/UserDashboard.scss';
import { Link } from '@inertiajs/react';

import Cover01 from '../../assets/Images/Tile 1.jpg';
import Cover02 from '../../assets/Images/Tile 2.jpg';
import Cover03 from '../../assets/Images/Tile 3.jpg';
import Cover04 from '../../assets/Images/Tile 4.jpg';
import Cover05 from '../../assets/Images/Tile 5.jpg';
import Cover06 from '../../assets/Images/Tile 6.jpg';



const UserHome = () => {
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
                      <Link href={route('admin.ongoingEvents')} className="image-overlay">Ongoing Events</Link>
                  </div>
                </div>
              </div>

              <div className="mb-4 col-md-4 position-relative">
                <div className="border-0 shadow cards">
                  <div className="cards-img-top">
                    <img src={Cover02} alt="Banner2" className="w-100"/>
                    <Link to="/" className="image-overlay">Pending Requests</Link>
                  </div>
              </div>
              </div>

              <div className="mb-4 col-md-4 position-relative">
                <div className="border-0 shadow cards">
                  <div className="cards-img-top">
                      <img src={Cover03} alt="Banner3" className="w-100"/>
                      <Link to="/" className="image-overlay">History</Link>
                  </div>
                </div>
              </div>
          </div>
          
            <div className="px-3 pt-5 row gx-5">  
                <div className="mb-4 col-md-4 position-relative"> 
                    <div className="border-0 shadow cards">
                        <div className="cards-img-top">
                            <img src={Cover04} alt="Banner4" className="w-100"/>
                            <Link href={route('admin.userDetails')} className="image-overlay">User Details</Link>
                        </div>
                    </div>
                </div>

                <div className="mb-4 col-md-4 position-relative">
                    <div className="border-0 shadow cards">
                        <div className="cards-img-top">
                        <img src={Cover05} alt="Banner5" className="w-100"/>
                        <Link to="/" className="image-overlay">Reviews</Link>
                        </div>
                    </div>
                </div>

                <div className="mb-4 col-md-4 position-relative">
                    <div className="border-0 shadow cards">
                        <div className="cards-img-top">
                            <img src={Cover06} alt="Banner6" className="w-100"/>
                            <Link to="/" className="image-overlay">Inquiries</Link>
                        </div>
                    </div>
                </div>
            </div>



        <footer>
          <AdminFooter />
          <Link href={route('add.member')} >Add</Link>
      </footer>
      
    </>

      
  )
}

export default UserHome
