import React from 'react'

import UserHeader from '../../Components/Header/UserHeader';
import AdminFooter from '../../Components/Footer/AdminFooter';

import '../../../css/UserHome.scss';
import { Link } from '@inertiajs/react';

//import Cover01 from '../../assets/Images/Tile 1.jpg';
//import Cover02 from '../../assets/Images/Tile 2.jpg';
//import Cover03 from '../../assets/Images/Tile 3.jpg';
//import Cover04 from '../../assets/Images/Tile 4.jpg';
//import Cover05 from '../../assets/Images/Tile 5.jpg';
//import Cover06 from '../../assets/Images/Tile 6.jpg';



const UserHome = () => {
  return (
    <>
        <header>
          <UserHeader />
        </header>

       
         
        <div className="container pt-5">
        <div className="row g-3">
              <div className="mb-4 col-12 col-md-4 position-relative"> 
                <div className="border-0 shadow cards">
                  <div className="cards-img-top">
                      {/* <img src={Cover01} alt="Banner1" className="w-100"/> */}
                      <Link href={route('ongoing')} className="image-overlay">Ongoing Events</Link>
                  </div>
                </div>
              </div>

              <div className="mb-4 col-12 col-md-4 position-relative">
                <div className="border-0 shadow cards">
                  <div className="cards-img-top">
                    {/* <img src={Cover02} alt="Banner2" className="w-100"/> */}
                    <Link href="/event/create-requests" className="image-overlay">Pending Requests</Link>
                  </div>
              </div>
              </div>

              <div className="mb-4 col-12 col-md-4 position-relative">
                <div className="border-0 shadow cards">
                  <div className="cards-img-top">

                      {/* <img src={Cover03} alt="Banner3" className="w-100"/> */}
                      <Link href="/ended-event-history" className="image-overlay">History</Link>
                  </div>
                </div>
              </div>
          </div>
          
            <div className="pt-5 row g-3">  
                <div className="mb-4 col-12 col-md-4 position-relative"> 
                    <div className="border-0 shadow cards">
                        <div className="cards-img-top">
                            <Link href={route('admin.userDetails')} className="image-overlay">User Details</Link>
                        </div>
                    </div>
                </div>

                <div className="mb-4 col-12 col-md-4 position-relative">
                    <div className="border-0 shadow cards">
                        <div className="cards-img-top">
                        {/* <img src={Cover05} alt="Banner5" className="w-100"/> */}
                        <Link href="/show-reviews" className="image-overlay">Reviews</Link>
                        </div>
                    </div>
                </div>

                <div className="mb-4 col-12 col-md-4 position-relative">
                    <div className="border-0 shadow cards">
                        <div className="cards-img-top">
                            <Link href="/inquiries" className="image-overlay">Inquiries</Link>
                        </div>
                    </div>
                </div>
            </div>
</div>
<section className="pt-3 section-4 d-flex justify-content-center">
                <Link href="/add-new-member" className="btn btn-primary">
                    Add New Team Member
                </Link>
            </section>


        <footer >
          <AdminFooter />
         
      </footer>
      
    </>

      
  )
}

export default UserHome
