import React from 'react'
import { Link } from '@inertiajs/react';
import '../../../css/TablePages.scss';
import  HeadBar from '../../Components/HeadBar/PendingRequestsHeadBar';
import UserHeader from './../../Components/Header/UserHeader';
import AdminFooter from './../../Components/Footer/AdminFooter';

{/************Implement the function to select the header of the page based on the
    user role ids  - manageer, admin, developer*************************/}

{/************Implement the function to select the footer of the page based on the
    user role manageer, admin, developer*************************/}

const CreateRequest = () => {
  return (
    <>
    <header>
        <UserHeader />
    </header> 

    <main className='main-box'>

        <h1><b>PENDING REQUESTS</b></h1>
        <div className='main-table'>
            <HeadBar />
            <div className="table-container">
                <table className="request-table striped-table">
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

                        <tr>
                            <td>hello1 </td>
                            <td>hello1 </td>
                            <td>heloo</td>
                            <td>hello1</td>
                            <td>hello1</td>
                            <td>
                                <Link to="#" className="blue-button">
                                    Download
                                </Link>
                            </td>
                            <td>
                                <Link to="#" className="mx-1 green-button ">
                                    Accept
                                </Link>
                                <Link to="#" className="ml-10 red-button">
                                    Delete
                                </Link>
                            </td>
                        </tr>



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

export default CreateRequest