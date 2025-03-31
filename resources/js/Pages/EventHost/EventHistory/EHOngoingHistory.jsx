import React, {useEffect, useState} from 'react'
import '../../../../css/profile.scss';
import profilelogo from '../../../assets/Images/Profile-logo.png';
import EHHeader from '../../../Components/Header/EHHeader';
import EHSidebar from '../../UserProfile/EH-Profiles/EHSidebar';
import SubFooter from '../../../Components/Footer/SubFooter';
import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react'

const EHOngoingHistory = () => {
  const { user } = usePage().props;
  const { ongoingevents = [] } = usePage().props;
  
  const handleDownload = (url) => {
    window.open(url, "_blank");
};

  console.log(ongoingevents);
  return (
     <>
      <header>
        <EHHeader />
      </header>

      <main>
        <div className="container my-5">
              <div className="card shadow border-0">
                <div className="card-body text-center">
                    <h1><b>Hi {user.name}!</b></h1>
                    <h4><b>Welcome to Your Profile</b></h4>
                    <img src= {user.avatar ? `/storage/${user.avatar}` : profilelogo} alt="Avatar"className="profile-avatar" />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-3">
                  <EHSidebar />
                </div>

                <div className="col-md-9">
                  <div className="card shadow border-0">
                    <div className="card-body profile-details">
                        <h5 className="text-center"><b>Event History</b></h5>
                        <p className="text-center">@{user.name}</p>
                        
                         {/* Tabs */}
                        <div className="d-flex justify-content-around my-3">
                          <div className="btn-group">
                            <Link href={route('eventhost.ongoingEvents.history')} className={`btn ${location.pathname === '/event-host/profile' ? 'btn-primary active' : 'btn-outline-primary'}`} > On going</Link>
                            <Link href={route('eh.pendingPayments')} className={`btn ${location.pathname === '/EHPendingPayments' ? 'btn-primary active' : 'btn-outline-primary'}`} > Pending payments</Link>
                            <Link href={route('eh.pendingRequests')} className={`btn ${location.pathname === '/EHPendingRequests' ? 'btn-primary active' : 'btn-outline-primary'}`} >Pending Requests </Link>
                            <Link href={route('eh.rejected')} className={`btn ${location.pathname === '/EHRejected' ? 'btn-primary active' : 'btn-outline-primary'}`} > Rejected</Link>
                            <Link href={route('eh.history')} className={`btn ${location.pathname === '/EHHistory' ? 'btn-primary active' : 'btn-outline-primary'}`}>Ended</Link>
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
                          {ongoingevents.length === 0? (
                              <tr>
                                <td colSpan="4" className="text-center">No events found.</td>
                              </tr>
                            ) : null}
                            {ongoingevents.map((event, index) => (
                              <tr key={index}>
                                <td>{event.name}</td>
                                <td>{event.sell_percentage}%</td>
                                <td>
                                <button
            className="btn btn-info btn-sm text-black"
            onClick={() => handleDownload(`/event/selling-ticket-report/${event.id}`)}
          >
            Download
          </button>
                                  </td>
                                <td>
                                  {/* <a href="/path/to/file.pdf" download className="btn btn-info btn-sm text-black">Download</a> */}
                                  <button
            className="btn btn-info btn-sm text-black"
            onClick={() => handleDownload(`/event/event-attendees-list/${event.id}`)}
          >
            Download
          </button>
                                  </td>
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