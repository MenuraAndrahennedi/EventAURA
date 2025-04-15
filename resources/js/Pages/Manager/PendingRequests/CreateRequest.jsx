import React,  {useState , useEffect } from 'react'
import UserHeader from '../../../Components/Header/UserHeader'
import ManagerFooter from '../../../Components/Footer/AdminFooter';
import '../../../../css/manager.scss';
import HeadBar from './HeadBar'
import { Link ,router ,usePage } from '@inertiajs/react';
import RejectEventConfirmation from '@/Pages/CommonPages/RejectEventConfirmation';

//import Banner from '../../assets/Images/banner.png';
//import ReviewIcon from '../../assets/Logos/review.png';



const managerCreateRequest = ({ events  }) => {
    const { flash } = usePage().props;
  
    console.log("Flash message from Laravel:", flash);  // Debugging log
//     console.log("Full Page Props:", page.props);
// console.log("Flash Message:", page.props.flash);
// console.log("Flash Success:", page.props.flash?.success); 

    const [showModal, setShowModal] = useState(false);
    const [selectedEventId, setSelectedEventId] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

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

  useEffect(() => {
    if (flash?.success) {
        console.log("Success Message Found:", flash.success);
        setSuccessMessage(flash.success);

        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    }
}, [flash]);
 
  const handleApprove = (eventId) =>{
    router.post(`/manager/approve-event/${eventId}`, {
        preserveScroll: true, // Prevents scrolling to top after request
        onSuccess: (page) => {
            console.log("Full Page Props:", page.props);
            console.log("Flash Message:", page.props.flash);
            console.log("Flash Success:", page.props.flash?.success);
           
       
             if (page.props.flash?.success) {
                console.log("Success Message Found:", page.props.flash.success);
                setSuccessMessage(page.props.flash.success);

        //     // Fade out the message after 3 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 4000);

        }
       
        },
        onError: (errors) => {
            console.error("Error approving event:", errors);
        }

    });
  };


  const handleConfirmDelete = (reason) => {
    // Build the URL with the event ID & reason
    window.location.href = `/manager/delete-event/${selectedEventId}?rejection_reason=${encodeURIComponent(reason)}`
    closeModal();
};
    return (
        <div className="page-wrapper">
            <header>
                <UserHeader />
            </header>

            <main className='pending-request'>

                <h1><b>PENDING REQUESTS</b></h1>

 {/* Success Message */}
 {successMessage && (
                    <div className="alert alert-success fade-out">
                        {successMessage}
                    </div>
                )}

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
                                    <th>Agenda</th>
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
                                        <Link to="#" className="mx-1 btn btn-success btn-sm">
                                            Accept
                                        </Link>
                                        <Link to="#" className="ml-10 btn btn-danger btn-sm">
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
                                        <Link to="#" className="mx-1 btn btn-success btn-sm ">
                                            Accept
                                        </Link>
                                        <Link to="#" className="ml-10 btn btn-danger btn-sm">
                                            Delete
                                        </Link>
                                    </td>
                                </tr> */}
                            {events.length === 0 ? (
        <tr>
            <td colSpan="8" style={{ textAlign: 'center' }}>No Event Creation Requests Found.</td>
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
                        <a
                            href={`/storage/${event.agenda_pdf}`} 
                            className="btn btn-info btn-sm" 
                            target="_blank" // Open in a new window
                             rel="noopener noreferrer" 
                        >
                            Download
                        </a>
                    ) : (
                        "No Report Available"
                    )}
                                        </td>
                                        <td>
                                        <a
                            href={`/pending/event-report/${event.id}`} 
                            className="btn btn-info btn-sm" 
                            target="_blank" // Open in a new window
                             rel="noopener noreferrer" 
                        >
                            Download
                        </a>
                        </td>
                                       
                                        <td>
                                            {/* <Link 
                                                href={`/manager/approve-event/${event.id}`} 
                                                className="mx-1 btn btn-success btn-sm"
                                            >
                                                Accept
                                            </Link> */}
                                              <button
                                                    className="mx-1 btn btn-success btn-sm"
                                                    onClick={() => handleApprove(event.id)}
                                                >
                                                    Accept
                                                </button>
                                            <button
                                               
                                                className="ml-10 btn btn-danger btn-sm"
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
{/* CSS for fading out message */}
<style>
                {`
                    .alert-success {
                        position: fixed;
                        top: 10px;
                        left: 50%;
                        transform: translateX(-50%);
                        background: #28a745;
                        color: white;
                        padding: 10px 20px;
                        border-radius: 5px;
                        font-size: 16px;
                        font-weight: bold;
                        opacity: 1;
                        transition: opacity 0.5s ease-in-out;
                    }

                    .fade-out {
                        opacity: 0;
                    }
                `}
            </style>


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
        </div>

    );
};
export default managerCreateRequest
