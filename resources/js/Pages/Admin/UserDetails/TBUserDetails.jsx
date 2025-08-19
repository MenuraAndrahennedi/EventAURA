import React,{useState} from 'react'
import { Link, useForm,router } from '@inertiajs/react';
import '../../../../css/TablePages.scss';
import UserHeader from '../../../Components/Header/UserHeader';
import AdminFooter from '../../../Components/Footer/AdminFooter';
import DeleteUserConfirmation from './DeleteUserConfirmation';



{/************Implement the function to select the header of the page based on the
    user role ids - manageer, admin, developer*************************/}

{/************Implement the function to select the footer of the page based on the
    user role manageer, admin, developer*************************/}



const TBUserDetails = ({ ticketBuyers }) => {

 // const {  post ,data} = useForm(); 
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility
  const [selectedUser, setSelectedUser] = useState(null); // Store the selected user for deletion
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this user?")) {
//       destroy(route("users.destroy", id), {
//         onSuccess: () => alert("User marked as deleted successfully!"),
//       });
//     }
//   };

const handleDeleteClick = (user) => {
    setSelectedUser(user); // Set the selected user
    setIsModalOpen(true); // Open the modal
  };

  const handleDeleteConfirmation = (reason) => {
    // if (selectedUser) {
    //    // setData('reason',reason);
    //   // Send the reason for deletion to the backend
    //   post(route("users.destroy", selectedUser.id),data, {
       
    //     preserveScroll: true,
    //     onSuccess: () => {
    //       setIsModalOpen(false); // Close the modal
    //       alert("User marked as deleted successfully!");
    //     },
    //   });
    // }
    if (selectedUser) {
        setIsModalOpen(false);

    router.post(`/delete/users/${selectedUser.id}?deletion_reason=${encodeURIComponent(reason)}`,{},{
        onSuccess: () => {
            setSuccessMessage("User marked as deleted successfully!");
            // Clear message after 3 seconds
            setTimeout(() => setSuccessMessage(''), 3000);
          }
    });
    
}
    
  };  

  //console.log("Deleting user with reason:", data.reason);

  const handleCancel = () => {
    setIsModalOpen(false); // Close the modal if canceled
  };



  const handleDownload = (id) => {
    window.location.href = route("users.download", id);
  };

  return (
    <div className="page-wrapper">
     <header>
        <UserHeader />
    </header> 
    
    <main className='main-box'>
    {successMessage && (
  <div className="success-toast">
    {successMessage}
  </div>
)}

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
                                            {user.user_status === 'deleted' ?(
                                             <button className="ml-5 red-button" disabled>
                                             Deleted
                                           </button>   
                                        ):(
                                    
                                        <button
                                            className="ml-5 red-button"
                                            onClick={() => handleDeleteClick(user)}
                                        >
                                            Delete
                                        </button>
                                        )}
                                    </td>
                                    </tr>
                                ))}

                                


                            </tbody>
                        </table>
                    </div>

                </div>



            </main>
<style>{`
.success-toast {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  animation: fadeOut 0.5s ease-in-out 2.5s forwards;
}

@keyframes fadeOut {
  to {
    opacity: 0;
    transform: translateY(-10px);
    visibility: hidden;
  }
}

`}
</style>


            <footer>
                <AdminFooter />
            </footer> 

            {/* Render the DeleteUserConfirmation Modal */}
      <DeleteUserConfirmation
        isOpen={isModalOpen}
        onClose={handleCancel}
        onConfirm={handleDeleteConfirmation}
      />
        </div>


  )
}

export default TBUserDetails