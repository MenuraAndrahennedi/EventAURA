import React from 'react'
import { Link } from '@inertiajs/react';
import '../../../css/TablePages.scss';
import AdminFooter from './../../Components/Footer/AdminFooter';
import UserHeader from './../../Components/Header/UserHeader';

{/************Implement the function to select the header of the page based on the
    user role ids - manageer, admin, developer*************************/}

{/************Implement the function to select the footer of the page based on the
    user role manageer, admin, developer*************************/}


const Inquiries = () => {
  return (
    <>
   <header>
        <UserHeader />
    </header> 

    <main className='main-box'>

        <h1><b>INQUIRIES</b></h1>
        <div className='main-table'>
            <div className="table-container">
                <table className="review-table striped-table">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Respond</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>

                            <td>
                                <Link to="#" className="mx-1 green-button ">
                                    Accept
                                </Link>
                                <Link to="#" className="ml-5 red-button">
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

export default Inquiries