import React,  {useState} from 'react'
import ManagerHeader from '../../../Components/Header/ManagerHeader'
import ManagerFooter from '../../../Components/Footer/AdminFooter';
import '../../../../css/manager.scss';
import HeadBar from './HeadBar'
import { Link } from '@inertiajs/react';
import RejectEventConfirmation from '@/Pages/CommonPages/RejectEventConfirmation';

//import Banner from '../../assets/Images/banner.png';
//import ReviewIcon from '../../assets/Logos/review.png';



const managerCreateRequest = ({ events }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedEventId, setSelectedEventId] = useState(null);

     // Open the modal for a specific event
  const openDeleteModal = (eventId) => {
    setSelectedEventId(eventId);
    setShowModal(true);
  };

 // Close the modal
 const closeModal = () => {
    setShowModal(false);
    setSelectedEventId(null);
  };
 
  const handleConfirmDelete = (reason) => {
    // Build the URL with the event ID & reason
    window.location.href = `/manager/delete-event/${selectedEventId}?rejection_reason=${encodeURIComponent(reason)}`
    closeModal();
};
    return (
        <>
            <header>
                <ManagerHeader />
            </header>

            <main className='pending-request'>

                <h1><b>PENDING REQUESTS</b></h1>
                <div className='request-table'>
                    <HeadBar />
                    <div className="container">
                        <table className="custom-table">
                            <thead>
                                <tr>
                                    <th>Event Name</th>
                                    <th>Event Host</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Venue</th>
                                    <th>Report</th>
                                    <th>Approval</th>
                                </tr>
                            </thead>
                            <tbody>

                                {/* <tr>
                                    <td>hello</td>
                                    <td>hello</td>
                                    <td>hello</td>
                                    <td>hello</td>
                                    <td>hello</td>
                                    <td>
                                        <Link to="#" className="btn btn-info btn-sm">
                                            Download
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to="#" className="btn btn-success btn-sm mx-1">
                                            Accept
                                        </Link>
                                        <Link to="#" className="btn btn-danger btn-sm ml-10">
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>hello1</td>
                                    <td>hello1</td>
                                    <td>hello1</td>
                                    <td>hello1</td>
                                    <td>hello1</td>
                                    <td>
                                        <Link to="#" className="btn btn-info btn-sm">
                                            Download
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to="#" className="btn btn-success btn-sm mx-1 ">
                                            Accept
                                        </Link>
                                        <Link to="#" className="btn btn-danger btn-sm  ml-10">
                                            Delete
                                        </Link>
                                    </td>
                                </tr> */}
                            {events.length === 0 ? (
        <tr>
            <td colSpan="7" style={{ textAlign: 'center' }}>No Event Creation Requests Found.</td>
        </tr>
    ) : (

                                events.map(event => (
                                    <tr key={event.id}>
                                        <td>{event.name}</td>
                                        <td>{event.organizer}</td>
                                        <td>{event.date}</td>
                                        <td>{`${event.startTime} - ${event.endTime}`}</td>
                                        <td>{event.venue}</td>
                                        <td>
                                            {/* <Link 
                                                href={`/storage/${event.agenda_pdf}`} 
                                                className="btn btn-info btn-sm" 
                                                download
                                            >
                                                Download
                                            </Link> */}
                                             {event.agenda_pdf ? (
                        <Link 
                            href={`/storage/${event.agenda_pdf}`} 
                            className="btn btn-info btn-sm" 
                            download
                        >
                            Download
                        </Link>
                    ) : (
                        "No Report Available"
                    )}
                                        </td>
                                        <td>
                                            <Link 
                                                href={`/manager/approve-event/${event.id}`} 
                                                className="btn btn-success btn-sm mx-1"
                                            >
                                                Accept
                                            </Link>
                                            <button
                                               
                                                className="btn btn-danger btn-sm ml-10"
                                                onClick={() => openDeleteModal(event.id)}
                                                >
                                            
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
    )}

                            </tbody>
                        </table>
                    </div>

                </div>



            </main>



            <footer>
                <ManagerFooter />
            </footer>

              {/* Include the custom modal */}
      <RejectEventConfirmation
        isOpen={showModal}
        onClose={closeModal}
        onConfirm={handleConfirmDelete}
        title="Are you sure you want to delete this event?"
      />
        </>

    );
};
export default managerCreateRequest
