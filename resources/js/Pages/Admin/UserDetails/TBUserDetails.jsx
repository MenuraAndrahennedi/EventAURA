import React from 'react'
import { Link, useForm } from '@inertiajs/react';
import '../../../../css/TablePages.scss';
import UserHeader from '../../../Components/Header/UserHeader';
import AdminFooter from '../../../Components/Footer/AdminFooter';



{/************Implement the function to select the header of the page based on the
    user role ids - manageer, admin, developer*************************/}

{/************Implement the function to select the footer of the page based on the
    user role manageer, admin, developer*************************/}



const TBUserDetails = ({ ticketBuyers }) => {

  const { delete: destroy } = useForm(); 

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      destroy(route("users.destroy", id), {
        onSuccess: () => alert("User deleted successfully!"),
      });
    }
  };

  const handleDownload = (id) => {
    window.location.href = route("users.download", id);
  };

  return (
    <>
     <header>
        <UserHeader />
    </header> 
    
    <main className='main-box'>

                <h1><b>Ticket Buyers</b></h1>
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

                                {ticketBuyers.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.telephone}</td>
                                        <td>
                                        <button
                                            className="ml-5 black-button"
                                            onClick={() => handleDownload(user.id)}
                                        >
                                            Download
                                        </button>
                                        </td>
                                        <td>
                                        <button
                                            className="ml-5 red-button"
                                            onClick={() => handleDelete(user.id)}
                                        >
                                            Delete
                                        </button>
                                        </td>
                                    </tr>
                                    ))}

                                {/* <tr>
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

export default TBUserDetails