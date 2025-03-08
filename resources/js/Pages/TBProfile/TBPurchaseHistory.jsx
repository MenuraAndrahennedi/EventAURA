import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import profilelogo from '../../../js/assets/Images/Profile-logo.png';
import '../../../css/Profile.scss';
import SubFooter from './../../Components/Footer/SubFooter';
import TBSidebar from './../../Components/SideBar/TBSidebar';
import TBHeader from './../../Components/Header/TBHeader';

const TBPurchaseHistory = () => {
  const events = [
    { name: 'Dara 1', Golden: '2', Silver: '2', Bronza: '2' , Payment: '125 346'},
    { name: 'Dara 2',Golden: '2', Silver: '3', Bronza: '2', Payment: '125 346' },
    { name: 'Dara 3', Golden: '2', Silver: '3', Bronza: '2' ,Payment: '125 346'},
  ];

  return (
    <>
      <header>
        <TBHeader />
      </header>               

      <main>
        <div className="container my-5">
              <div className="border-0 shadow card">
                <div className="text-center card-body">
                    <h1><b>Hi Anura!</b></h1>
                    <h4><b>Welcome to Your Profile</b></h4>
                    <img src= {profilelogo} alt="Avatar"className="profile-avatar" />
                </div>
              </div>

              <div className="mt-4 row">
                <div className="col-md-3">
                  <TBSidebar />
                </div>
                <div className="col-md-9">
                  <div className="border-0 shadow card">
                    <div className="card-body profile-details">
                        <h5 className="text-center"><b>Purchase History</b></h5>
                        <p className="text-center">@username</p>
                                  
                        {/* Table */}
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>Event Name</th>
                              <th>Golden Tickets</th>
                              <th>Silver Tickets</th>
                              <th>Bronza Tickets</th>
                              <th>Payment</th>
                            </tr>
                          </thead>
                          <tbody>
                            {events.map((event, index) => (
                              <tr key={index}>
                                <td>{event.name}</td>
                                <td>{event.Golden}</td>
                                <td>{event.Silver}</td>
                                <td>{event.Bronza}</td>
                                <td>{event.Payment}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table> 

                    </div>
                  </div>
                </div>
            </div>
        </div>
      </main>
      <footer>
        <SubFooter />
      </footer>
    </>
    
  )
}

export default TBPurchaseHistory