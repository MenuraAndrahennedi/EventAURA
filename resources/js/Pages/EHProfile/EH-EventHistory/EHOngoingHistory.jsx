import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import '../../../../css/Profile.scss';
import profilelogo from '../../../../js/assets/Images/Profile-logo.png';
import EHHeader from './../../../Components/Header/EHHeader';
import EHSidebar from '../../../Components/SideBar/EHSideBar';
import SubFooter from './../../../Components/Footer/SubFooter';

const EHOngoingHistory = () => {
  const events = [
    { name: 'Dara 1', percentage: '50%' },
    { name: 'Dara 2', percentage: '65%' },
    { name: 'Dara 3', percentage: '34%' },
  ];

  return (
     <>
      <header>
        <EHHeader />
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
                  <EHSidebar />
                </div>

                <div className="col-md-9">
                  <div className="border-0 shadow card">
                    <div className="card-body profile-details">
                        <h5 className="text-center"><b>Event History</b></h5>
                        <p className="text-center">@username</p>
                        
                         {/* Tabs */}
                        <div className="my-3 d-flex justify-content-around">
                          <div className="btn-group">
                             <Link href={route('eh_ongoing_history')} className={`btn ${route().current('eh_ongoing_history') ? 'btn-primary active' : 'btn-outline-primary'}`}>On going</Link>
                             <Link href={route('eh_pending_payments')} className={`btn ${route().current('eh_pending_payments') ? 'btn-primary active' : 'btn-outline-primary'}`}>Pending payments</Link>
                             <Link href={route('eh_pending_requests')} className={`btn ${route().current('eh_pending_requests') ? 'btn-primary active' : 'btn-outline-primary'}`}>Pending Requests</Link>
                             <Link href={route('eh_rejected_history')} className={`btn ${route().current('eh_rejected_history') ? 'btn-primary active' : 'btn-outline-primary'}`}>Rejected</Link>
                             <Link href={route('eh_history')} className={`btn ${route().current('eh_history') ? 'btn-primary active' : 'btn-outline-primary'}`}>History</Link>
                          </div>
                        </div>
                       

                        {/* Table */}
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>Event Name</th>
                              <th>Ticket Sell Percentage</th>
                              <th>Ticket Selling Report</th>
                              <th>Attendees List</th>
                            </tr>
                          </thead>
                          <tbody>
                            {events.map((event, index) => (
                              <tr key={index}>
                                <td>{event.name}</td>
                                <td>{event.percentage}</td>
                                <td><a href="/path/to/file.pdf" download className="text-black btn btn-info btn-sm">Download</a></td>
                                <td><a href="/path/to/file.pdf" download className="text-black btn btn-info btn-sm">Download</a></td>
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

export default EHOngoingHistory