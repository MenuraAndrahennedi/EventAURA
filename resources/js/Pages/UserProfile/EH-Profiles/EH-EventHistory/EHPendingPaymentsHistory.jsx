import React from 'react'
import '../../profile.scss';
import profilelogo from '../../../../assets/Images/Profile-logo.png';
import EHHeader from './../../../../Components/Header/EHHeader';
import EHSidebar from './../EHSidebar';
import SubFooter from './../../../../Components/Footer/SubFooter';
import { Link, usePage } from '@inertiajs/react';

const EHPendingPaymentsHistory = () => {

  const { user } = usePage().props;
  const { pendingPaymentevents = [] } = usePage().props;
  
  // const events = [
  //   { name: 'Dara 1', amount: 'Rs 135 987' },
  //   { name: 'Dara 2', amount: 'Rs 126 785' },
  //   { name: 'Dara 3', amount: 'Rs 137 234' },
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
                    <img src= {user.avatar ? `/storage/${user.avatar}` : profilelogo}alt="Avatar"className="profile-avatar" style={{ display: 'block', margin: '0 auto' }}/>
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
                              <th>Amount to be paid</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                          {pendingPaymentevents.length === 0? (
                              <tr>
                                <td colSpan="4" className="text-center">No events found.</td>
                              </tr>
                            ) : null}
                            {pendingPaymentevents.map((event, index) => (
                              <tr key={index}>
                                <td>{event.name}</td>
                                <td>Rs.1000.00</td>
                                <td> <Link href = 'eventhost/payment/checkout' className='text-black btn btn-info btn-sm'>Make Payments</Link ></td>
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

export default EHPendingPaymentsHistory