import React ,{useState} from 'react'
import '../../profile.scss';
import profilelogo from '../../../../assets/Images/Profile-logo.png';
import EHHeader from './../../../../Components/Header/EHHeader';
import EHSidebar from './../EHSidebar';
import SubFooter from './../../../../Components/Footer/SubFooter';
import { Link, usePage , router } from '@inertiajs/react';

const EHPendingRequests = () => {

  const { user,flash } = usePage().props;
  const { pendingevents = [] } = usePage().props;
  const [updatedEvents, setUpdatedEvents] = useState(pendingevents);
   const [successMessage, setSuccessMessage] = useState(""); // Success message state

  const handleCancel = (eventId) => {
    router.post(`/event/cancel/${eventId}`, {}, {
      onSuccess: () => {
        setUpdatedEvents((prevEvents) =>
          prevEvents.map(event =>
            event.id === eventId ? { ...event, event_status: "cancelled" } : event
          )
        );
        setSuccessMessage("Event creation request cancelled successfully!"); // Set success message

         // Hide the success message after 3 seconds
         setTimeout(() => {
          setSuccessMessage("");
      }, 5000);
      }
    });
  };

  return (
    <>
    <header>
      <EHHeader />
    </header>

    <main>
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
                        {/* Flash Message
                  {flash.success && (
                    <div className="text-center alert alert-success">{flash.success}</div>
                  )} */}
                  
                 {/* Success Message */}
            {successMessage && (
                <div className="success-message">
                    {successMessage}
                </div>
            )}
                      
                       {/* Tabs
                      <div className="my-3 d-flex justify-content-around">
                        <div className="btn-group">
                          <Link href={route('eh.ongoing')} className={`btn ${location.pathname === '/EHOngoing' ? 'btn-primary active' : 'btn-outline-primary'}`} > On going</Link>
                          <Link href={route('eh.pendingPayments')} className={`btn ${location.pathname === '/EHPendingPayments' ? 'btn-primary active' : 'btn-outline-primary'}`} > Pending payments</Link>
                          <Link href={route('eh.pendingRequests')} className={`btn ${location.pathname === '/EHPendingRequests' ? 'btn-primary active' : 'btn-outline-primary'}`} >Pending Requests </Link>
                          <Link href={route('eh.rejected')} className={`btn ${location.pathname === '/EHRejected' ? 'btn-primary active' : 'btn-outline-primary'}`} > Rejected</Link>
                          <Link href={route('eh.history')} className={`btn ${location.pathname === '/EHHistory' ? 'btn-primary active' : 'btn-outline-primary'}`}>History</Link>
                        </div>
                      </div> */}
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
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                        {updatedEvents.length === 0? (
                              <tr>
                                <td colSpan="4" className="text-center">No events found.</td>
                              </tr>
                            ) : null}
                          {updatedEvents.map((event) => (
                            <tr key={event.id}>
                              <td>{event.name}</td>
                              <td>{new Date(event.created_at).toLocaleDateString()}</td>
                              <td>
                                {/* <Link to = '/' className='text-black btn btn-info btn-sm'>Cancel Request</Link > */}
                                {event.event_status === "cancelled" ? (
                              <button className="text-black btn btn-info btn-sm" disabled>Cancelled</button>
                            ) : (
                              <button className="text-black btn btn-info btn-sm" onClick={() => handleCancel(event.id)}>Cancel</button>
                            )}
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

      
 {/* Add CSS styles for the success message */}
 <style>
                {`
                .success-message {
                    background-color: #d4edda;
                    color: #155724;
                    padding: 10px;
                    border-radius: 5px;
                    text-align: center;
                    margin: 10px auto;
                    width: 50%;
                    font-weight: bold;
                    animation: fadeOut 3s forwards;
                }

                @keyframes fadeOut {
                    0% { opacity: 1; }
                    100% { opacity: 0; }
                }
                `}
            </style>
    </main>

    <footer>
      <SubFooter />
    </footer>
  </>
  
  )
}

export default EHPendingRequests