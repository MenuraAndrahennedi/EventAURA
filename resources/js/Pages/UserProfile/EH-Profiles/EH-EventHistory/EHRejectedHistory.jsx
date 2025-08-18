import React from 'react'
import '../../../../../css/profile2.scss';
import profilelogo from '../../../../assets/Images/Profile-logo.png';
import EHHeader from './../../../../Components/Header/EHHeader';
import EHSidebar from './../EHSidebar';
import SubFooter from './../../../../Components/Footer/SubFooter';
import { Link, usePage } from '@inertiajs/react';

const EHRejectedHistory = () => {

  const { user } = usePage().props;
  const { rejectedevents = [] } = usePage().props;

  // const events = [
  //   { name: 'Dara 1', date: '2024/10/10' },
  //   { name: 'Dara 2', date: '2024/10/10' },
  //   { name: 'Dara 3', date: '2024/10/10' },
  // ];
  return (
    <div className="page-wrapper">
      <header>
        <EHHeader />
      </header>

      <main className="main-box">
        <div className="container my-5">
              <div className="border-0 shadow card">
                <div className="text-center card-body">
                    <h1 className="profile-heading"><b>Hi {user.name}!</b></h1>
                    <h4><b>Welcome to Your Profile</b></h4>
                    <img src= {user.avatar ? `/storage/${user.avatar}` : profilelogo} alt="Avatar"className="profile-avatar" style={{ display: 'block', margin: '0 auto' }}/>
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
                        <p className="text-center">@{user.name}</p>
                        
                         {/* Tabs */}
                        {/* <div className="my-3 d-flex justify-content-around">
                          <div className="btn-group">
                            <Link href={route('eh.ongoing')} className={`btn ${location.pathname === '/EHOngoing' ? 'btn-primary active' : 'btn-outline-primary'}`} > On going</Link>
                            <Link href={route('eh.pendingPayments')} className={`btn ${location.pathname === '/EHPendingPayments' ? 'btn-primary active' : 'btn-outline-primary'}`} > Pending payments</Link>
                            <Link href={route('eh.pendingRequests')} className={`btn ${location.pathname === '/EHPendingRequests' ? 'btn-primary active' : 'btn-outline-primary'}`} >Pending Requests </Link>
                            <Link href={route('eh.rejected')} className={`btn ${location.pathname === '/EHRejected' ? 'btn-primary active' : 'btn-outline-primary'}`} > Rejected</Link>
                            <Link href={route('eh.history')} className={`btn ${location.pathname === '/EHHistory' ? 'btn-primary active' : 'btn-outline-primary'}`}>History</Link>
                          </div>
                        </div>
                        */}
                         {/* Tabs */}
                                                <div className="my-3 ">
                                                  <div className="flex-wrap btn-group d-flex justify-content-center">
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
                              <th>Request submitted date</th>
                              <th>Admin review</th>
                            </tr>
                          </thead>
                          <tbody>
                            {rejectedevents.map((event, index) => (
                              <tr key={index}>
                                <td>{event.name}</td>
                                <td>{new Date(event.created_at).toLocaleDateString()}</td>
                                <td><a href={route('event.rejection-pdf', event.id)} download className="text-black btn btn-info btn-sm">Download</a></td>
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
    </div>
    
  )
}

export default EHRejectedHistory