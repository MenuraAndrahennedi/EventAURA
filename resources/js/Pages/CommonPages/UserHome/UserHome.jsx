import React from 'react'

import UserHeader from './../../../Components/Header/UserHeader';
import AdminFooter from './../../../Components/Footer/AdminFooter';

import './UserHome.scss';
import { Link } from 'react-router-dom';

{/*import Cover01 from '../../../assets/coverImage01.png';
import Cover02 from '../../../assets/coverImage05.png';
import Cover03 from '../../../assets/coverImage02.png';
import Cover04 from '../../../assets/coverImage03.png';
import Cover05 from '../../../assets/coverImage04.png';*/}



const UserHome = () => {
  return (
    <>
        <header>
          <UserHeader />
        </header>

       
        <div className="row pt-5 px-3 gx-5">  
              <div className="col-md-4 mb-4 position-relative"> 
                <div className="cards shadow border-0">
                  <div className="cards-img-top">
                   
                      <Link to="/AdminOngoing" className="image-overlay">Ongoing Events</Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4 position-relative">
                <div className="cards shadow border-0">
                  <div className="cards-img-top">
                    
                    <Link to="/" className="image-overlay">Pending Requests</Link>
                  </div>
              </div>
              </div>

              <div className="col-md-4 mb-4 position-relative">
                <div className="cards shadow border-0">
                  <div className="cards-img-top">
                      
                      <Link to="/" className="image-overlay">History</Link>
                  </div>
                </div>
              </div>
          </div>
          
            <div className="row pt-5 px-3 gx-5">  
                <div className="col-md-4 mb-4 position-relative"> 
                    <div className="cards shadow border-0">
                        <div className="cards-img-top">
                            
                            <Link to="/UserDetails" className="image-overlay">User Details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4 position-relative">
                    <div className="cards shadow border-0">
                        <div className="cards-img-top">
                      
                        <Link to="/" className="image-overlay">Reviews</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4 position-relative">
                    <div className="cards shadow border-0">
                        <div className="cards-img-top">
                            
                            <Link to="/" className="image-overlay">Inquiries</Link>
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

export default UserHome
