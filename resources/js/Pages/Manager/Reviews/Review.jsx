import React ,{useState} from 'react'
import { Link ,useForm,router} from '@inertiajs/react';
import '../../../../css/TablePages.scss';
import AdminFooter from '../../../Components/Footer/AdminFooter';
import UserHeader from '../../../Components/Header/UserHeader';
import ReplyToReviewModal from "./ReplyToReviewModal";



const Review = ({reviews}) => {
    //const { post } = useForm();
    const { delete: destroy } = useForm(); // Initialize Inertia delete function

     // Local state for currently selected review to reply to
  const [selectedReview, setSelectedReview] = useState(null);

  // Control whether the reply modal is open
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Local state for displaying success messages (e.g., reply sent)
  const [successMessage, setSuccessMessage] = useState('');

  // Maintain a local copy of reviews to allow instant UI updates
  const [localReviews, setLocalReviews] = useState(reviews);

  // Handler to send reply to backend and update UI accordingly
  const handleReply = (reply) => {
        router.post(`/reviews/${selectedReview.id}/reply`, {
            reply :reply
        }, {
            onSuccess: () => {
                setSuccessMessage('Reply sent successfully! ');
                setIsModalOpen(false);
                setTimeout(() => setSuccessMessage(''), 3000); // Fade out message after 3s

            },
        });
    };
    

    // Handler to approve a review, update local state to reflect approval instantly
    const handleApprove = (reviewId) => {
        router.post(`/reviews/${reviewId}/approve`, {}, {
            onSuccess: () => {
                // Update local state after successful approval
                setLocalReviews(prevReviews => 
                    prevReviews.map(review => 
                        review.id === reviewId 
                            ? { ...review, is_approved: true } 
                            : review
                    )
                );
            }
        });
    };
    

  return (
    <div className="page-wrapper">
            <header>
                <UserHeader />
            </header> 

            <main className='main-box'>
                        <h1><b>REVIEWS</b></h1>
                        
                        {/* Success Message */}
                        {successMessage && (
                            <div className="success-message">
                                {successMessage}
                            </div>
                        )}

                        {/* Reviews table */}
                        <div className='main-table'>
                            <div className="table-container">
                                <table className="review-table striped-table">
                                    <thead>
                                        <tr>
                                            <th>User</th>
                                            <th>Email</th>
                                            <th>Review</th>
                                            <th>Rating</th>
                                            <th>Respond</th>

                                        </tr>
                                    </thead>

                                    <tbody>
                                    {/* Iterate over reviews to display each */}
                                    {reviews.map((review) => (
                                        
                                        <tr key ={review.id}>
                                            <td>{review.user ? review.user.name : review.guest_name}</td>
                                            <td>{review.user ? review.user.email : review.guest_email}</td>
                                            <td>{review.comment}</td>
                                            <td>{'*'.repeat(review.rating)}</td>

                                            <td>
                                                {/* Approve button disables when review is already approved */}
                                                <button 
                                                    onClick={() => handleApprove(review.id)} 
                                                    className={`mx-1 ${review.is_approved ? 'gray-button' : 'green-button'}`}
                                                    disabled={review.is_approved}
                                                >
                                                     {review.is_approved ? 'Approved ' : 'Approve'}
                                                </button>

                                                {/* Reply button opens modal with selected review */}
                                                <button onClick={() => { 
                                                    setSelectedReview(review); 
                                                    setIsModalOpen(true); 
                                                    }} className="mx-1 green-button " style={{backgroundColor:"black"}}>
                                                    Reply
                                                </button>
                                                
                                                {/* Delete button to remove review */}
                                                <button onClick={() => destroy(`/reviews/${review.id}`) } className="ml-5 red-button">
                                                    Delete
                                                </button>
                                            </td>

                                        </tr>
                                        ))}
                                        
                                    </tbody>
                                </table>
                            </div>

                        </div>

                        {/* Reply Modal - Placed Outside the Table */}
                        <ReplyToReviewModal 
                                isOpen={isModalOpen} 
                                onClose={() => setIsModalOpen(false)} 
                                onConfirm={handleReply} 
                                review={selectedReview} 
                        />

            </main>



            <footer>
                <AdminFooter />
            </footer> 

           {/* Inline CSS for success message fade effect */}
           <style>
                {`
                .success-message {
                    background-color: #d4edda;
                    color: #155724;
                    padding: 10px;
                    border-radius: 5px;
                    margin: 10px auto;
                    text-align: center;
                    max-width: 400px;
                    transition: opacity 1s ease-out;
                }
                `}
            </style> 
        </div>


  )
};

export default Review