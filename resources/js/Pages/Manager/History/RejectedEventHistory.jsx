import React from 'react'
import { Link } from '@inertiajs/react';
import HeadBar from '../../../Components/HeadBar/EventHistoryHeadBar';
import '../../../../css/TablePages.scss';
import AdminFooter from './../../../Components/Footer/AdminFooter';
import UserHeader from './../../../Components/Header/UserHeader';

const RejectedEventHistory = ({rejectedEvents=[]}) => {

    const handleDownloadReport = (eventId) => {
        window.open(`/rejected-event/${eventId}/report`);
    };

  return (
    <>
           <header>
                <UserHeader />
            </header> 

            <main className='main-box'>

                <h1><b>EVENT HISTORY</b></h1>
                <div className='main-table'>
                    <HeadBar />
                    <div className="table-container">
                        <table className="history-table striped-table">
                            <thead>
                                <tr>
                                    <th>Event Name</th>
                                    <th>Rejected Date</th>
                                    <th></th>

                                </tr>
                            </thead>
                            <tbody>
                            {rejectedEvents.length > 0 ? (
                                    rejectedEvents.map(event => (
                                <tr key= {event.id}>
                                    <td>{event.name}</td>
                                    <td>{event.rejected_at ? new Date(event.rejected_at).toLocaleDateString() : 'N/A'}</td>


                                    {/* <td>
                                        <Link to="#"
                                         className="blue-button">
                                            Event Report
                                        </Link>
                                    </td> */}
                                      <td>
                                    <button
                                className="blue-button"
                                onClick={() => handleDownloadReport(event.id)}
                            >
                                Download Report
                            </button>    
                                    </td>

                                </tr>
                                 ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" style={{ textAlign: 'center' }}>No rejected events found.</td>
                                    </tr>
                                )}  
                                {/* // <tr>
                                //     <td>hello1</td>
                                //     <td>hello1</td>

                                //     <td>
                                //         <Link to="#" className="blue-button">
                                //             Event Report
                                //         </Link>
                                //     </td>

                                // </tr> */}
                            </tbody>
                        </table>
                    </div>

                </div>



            </main>



           <footer>
                <AdminFooter />
            </footer> 
        </>


  )
}

export default RejectedEventHistory