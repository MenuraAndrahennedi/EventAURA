import React from 'react'
import { Link } from '@inertiajs/react';
import '../../../css/TablePages.scss';
import UserHeader from './../../Components/Header/UserHeader';
import AdminFooter from './../../Components/Footer/AdminFooter';



{/************Implement the function to select the header of the page based on the
    user role ids - manageer, admin, developer*************************/}

{/************Implement the function to select the footer of the page based on the
    user role manageer, admin, developer*************************/}



const TBUserDetails = () => {
  return (
    <>
     <header>
        <UserHeader />
    </header> 
    
    <main className='main-box'>

                <h1><b>TICKET BUYERS</b></h1>
                <div className='main-table'>
                    <div className="table-container">
                        <table className="review-table striped-table">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Email</th>
                                    <th>Contact Number</th>
                                    <th>History</th>
                                    <th>Delete User</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>hello</td>
                                    <td>hello</td>
                                    <td>hello</td>
                                    <td>
                                        <Link to="#" className="ml-5 black-button">
                                            Download
                                        </Link>
                                    </td>


                                    <td>
                                        <Link to="#" className="ml-5 red-button">
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>hello1</td>
                                    <td>hello1</td>
                                    <td>hello1</td>
                                    <td>
                                        <Link to="#" className="ml-5 black-button">
                                            Download
                                        </Link>
                                    </td>

                                    <td>
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

export default TBUserDetails