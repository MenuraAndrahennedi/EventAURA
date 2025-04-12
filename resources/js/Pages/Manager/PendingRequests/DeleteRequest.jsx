import React from 'react'
import UserHeader from '../../../Components/Header/UserHeader';
import ManagerFooter from '../../../Components/Footer/AdminFooter';
import '../../../../css/manager.scss';
import HeadBar from './HeadBar'
import { Link,useForm ,router } from '@inertiajs/react';

//import Banner from '../../assets/Images/banner.png';
//import ReviewIcon from '../../assets/Logos/review.png';



const managerDeleteRequest = ({requests}) => {
    const { post, processing } = useForm({});

    console.log("Delete requests:",requests);


     // Function to handle Accept/Reject
    //  const handleUpdateStatus = (id, status) => {
    //     post(route('delete-request.update'), {
    //         id,
    //         status
    //     });
    // };
    const handleUpdateStatus = (id, status) => {
        router.post(route('delete-request.update'), { id, status }, {
            onSuccess: () => window.location.reload(), // Refresh UI after update
        });
    };

    const handleDownloadReport = (id) => {
        window.location.href = route('delete-request.report', { id });
    };

    return (
        <>
            <header>
                <UserHeader />
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
                            {requests.length === 0 ? (
        <tr>
            <td colSpan="7" style={{ textAlign: 'center' }}>No Event Deletion Requests Found.</td>
        </tr>
    ) : (                     requests.map(request => (

                                <tr key={request.id}> 
                                    <td>{request.event.name}</td>
                                    <td>{request.event_host.name}</td>
                                    <td>{request.event.date}</td>
                                    <td>{request.event.startTime}</td>
                                    <td>{request.event.venue}</td>
                                    <td>
                                        {/* <Link to="#" className="btn btn-info btn-sm">
                                            Download
                                        </Link> */}
                                         <button onClick={() => handleDownloadReport(request.id)} className="btn btn-info btn-sm">
                                                    Download
                                                </button>
                                    </td>
                                    <td>
                                    {request.status === 'pending' ? ( 
                                        <> 
                                        {/* <Link to="#" className="btn btn-success btn-sm mx-1">
                                            Accept
                                        </Link> */}
                                        {/* <Link to="#" className="btn btn-danger btn-sm ml-10">
                                           Reject
                                        </Link> */}
                                         <button
                                                            onClick={() => handleUpdateStatus(request.id, 'approved')}
                                                            className="btn btn-success btn-sm mx-1"
                                                            disabled={processing}
                                                        >
                                                            Accept
                                                        </button>
                                                        <button
                                                            onClick={() => handleUpdateStatus(request.id, 'rejected')}
                                                            className="btn btn-danger btn-sm ml-10"
                                                            disabled={processing}
                                                        >
                                                            Reject
                                                        </button>
 </>
) : (
    <span className={`status-badge ${request.status}`}>
        {request.status}
    </span>
)}
                                    </td>
                                </tr>
                                // <tr>
                                //     <td>hello1</td>
                                //     <td>hello1</td>
                                //     <td>hello1</td>
                                //     <td>hello1</td>
                                //     <td>hello1</td>
                                //     <td>
                                //         <Link to="#" className="btn btn-info btn-sm">
                                //             Download
                                //         </Link>
                                //     </td>
                                //     <td>
                                //         <Link to="#" className="btn btn-success btn-sm mx-1">
                                //             Accept
                                //         </Link>
                                //         <Link to="#" className="btn btn-danger btn-sm  ml-10">
                                //            Reject
                                //         </Link>
                                //     </td>
                                // </tr>
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

            <style>
                {`
                    .status-badge {
                        padding: 5px 10px;
                        border-radius: 5px;
                        font-weight: bold;
                    }
                    .status-badge.accepted {
                        background-color: green;
                        color: white;
                    }
                    .status-badge.rejected {
                        background-color: red;
                        color: white;
                    }
                `}
            </style>
        </>

    )
}
export default managerDeleteRequest
