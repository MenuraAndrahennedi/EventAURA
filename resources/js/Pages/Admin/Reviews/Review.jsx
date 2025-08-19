// import React ,{useState} from 'react'
// import { Link ,useForm,router} from '@inertiajs/react';
// import '../../../../css/TablePages.scss';
// import AdminFooter from '../../../Components/Footer/AdminFooter';
// import UserHeader from '../../../Components/Header/UserHeader';
// import ReplyToReviewModal from "./ReplyToReviewModal";

// {/************Implement the function to select the header of the page based on the
//     user role ids - manageer, admin, developer*************************/}

// {/************Implement the function to select the footer of the page based on the
//     user role manageer, admin, developer*************************/}


// const Review = ({reviews}) => {
//     //const { post } = useForm();
//     const { delete: destroy } = useForm(); // Get delete function
//     const [selectedReview, setSelectedReview] = useState(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [successMessage, setSuccessMessage] = useState('');
//     const [localReviews, setLocalReviews]=useState(reviews);

//     const handleReply = (reply) => {
//         router.post(`/reviews/${selectedReview.id}/reply`, {
//             reply :reply
//         }, {
//             onSuccess: () => {
//                 setSuccessMessage('Reply sent successfully! ✅');
//                 setIsModalOpen(false);
//                 setTimeout(() => setSuccessMessage(''), 3000); // Fade out message after 3s

//             },
//         });
//     };
    
//     const handleApprove = (reviewId) => {
//         router.post(`/reviews/${reviewId}/approve`, {}, {
//             onSuccess: () => {
//                 // Update local state after successful approval
//                 setLocalReviews(prevReviews => 
//                     prevReviews.map(review => 
//                         review.id === reviewId 
//                             ? { ...review, is_approved: true } 
//                             : review
//                     )
//                 );
//             }
//         });
//     };
    

//   return (
//     <>
//             <header>
//                 <UserHeader />
//             </header> 

//             <main className='main-box'>

// <h1><b>REVIEWS</b></h1>
//   {/* ✅ Success Message */}
//   {successMessage && (
//                     <div className="success-message">
//                         {successMessage}
//                     </div>
//                 )}
// <div className='main-table'>
//     <div className="table-container">
//         <table className="review-table striped-table">
//             <thead>
//                 <tr>
//                     <th>User</th>
//                     <th>Email</th>
//                     <th>Review</th>
//                     <th>Rating</th>
//                     <th>Respond</th>

//                 </tr>
//             </thead>
//             <tbody>
//             {reviews.map((review) => (
//                 <tr key ={review.id}>
//                     <td>{review.user ? review.user.name : review.guest_name}</td>
//                     <td>{review.user ? review.user.email : review.guest_email}</td>
//                     <td>{review.comment}</td>
//                     <td>{'⭐'.repeat(review.rating)}</td>


//                     <td>
//                     {/* <button onClick={() => post(`/reviews/${review.id}/approve`)}  className="mx-1 green-button ">
//                           Approve
//                      </button> */}
//                       <button 
//         onClick={() => handleApprove(review.id)} 
//         className={`mx-1 ${review.is_approved ? 'gray-button' : 'green-button'}`}
//         disabled={review.is_approved}
//     >
//         {review.is_approved ? 'Approved ' : 'Approve'}
//     </button>
//                      <button onClick={() => { 
//                             setSelectedReview(review); 
//                             setIsModalOpen(true); 
//                         }} className="mx-1 green-button " style={{backgroundColor:"black"}}>
//                            Reply
//                      </button>
//                      <button onClick={() => destroy(`/reviews/${review.id}`) } className="ml-5 red-button">
//                             Delete
//                      </button>
//                     </td>
//                 </tr>
//                  ))}
                

//             </tbody>
//         </table>
//     </div>

// </div>

//  {/* Reply Modal - Placed Outside the Table */}
//  <ReplyToReviewModal 
//         isOpen={isModalOpen} 
//         onClose={() => setIsModalOpen(false)} 
//         onConfirm={handleReply} 
//         review={selectedReview} 
//     />

// </main>



//             <footer>
//                 <AdminFooter />
//             </footer> 

//            {/* ✅ CSS for Fade Effect */}
//            <style>
//                 {`
//                 .success-message {
//                     background-color: #d4edda;
//                     color: #155724;
//                     padding: 10px;
//                     border-radius: 5px;
//                     margin: 10px auto;
//                     text-align: center;
//                     max-width: 400px;
//                     transition: opacity 1s ease-out;
//                 }
//                 `}
//             </style> 
//         </>


//   )
// };

// export default Review