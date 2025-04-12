import React from 'react'
import { Link } from '@inertiajs/react';
import HeadBar from '../../../Components/HeadBar/EventHistoryHeadBar';
import '../../../../css/TablePages.scss';
import AdminFooter from './../../../Components/Footer/AdminFooter';
import UserHeader from './../../../Components/Header/UserHeader';

{/************Implement the function to select the header of the page based on the
    user role ids  - manageer, admin, developer*************************/}

{/************Implement the function to select the footer of the page based on the
    user role manageer, admin, developer*************************/}


const PendingPaymentsHistory = ({pendingPaymentEvents}) => {
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
                            <th>Amount to be paid</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                    {pendingPaymentEvents.length > 0 ? (
                                    pendingPaymentEvents.map(event => (
                        <tr key ={event.id}>
                            <td>{event.name}</td>
                            <td>Rs.1000</td>


                            <td>
                                {/* <Link to="#" className="blue-button">
                                    Event Report
                                </Link> */}
                                 <a
                          href={`/pending/event-report/${event.id}`}
                          className="blue-button"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Event Report
                        </a>
                            </td>

                        </tr>
                                    ))
                                ):(

                                    <tr>
                                    <td colSpan="3" style={{ textAlign: 'center' }}>No events found.</td>
                                </tr>
                                )}
                        {/* <tr>
                            <td>hello1</td>
                            <td>hello1</td>

                            <td>
                                <Link to="#" className="blue-button">
                                    Event Report
                                </Link>
                            </td>

                        </tr> */}

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

export default PendingPaymentsHistory