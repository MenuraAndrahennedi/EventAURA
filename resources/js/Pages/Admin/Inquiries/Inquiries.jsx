import React ,{useState} from 'react'
import { Link ,useForm,router} from '@inertiajs/react';
import '../../../../css/TablePages.scss';
import AdminFooter from '../../../Components/Footer/AdminFooter';
import UserHeader from '../../../Components/Header/UserHeader';
import ReplyToInquiryModal from './ReplyToInquiryModal';

{/************Implement the function to select the header of the page based on the
    user role ids - manageer, admin, developer*************************/}

{/************Implement the function to select the footer of the page based on the
    user role manageer, admin, developer*************************/}


const Inquiries = ({inquiries}) => {
    const { post, delete: destroy } = useForm();
    const [selectedInquiry, setSelectedInquiry] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [localInquiries, setInquiries] = useState(inquiries);
    // const { props } = usePage();
    // console.log('Props after fix:', props); // Debug
    // const inquiries = props.inquiries || []; // Fallback to empty array if undefined

    const handleReply = (reply) => {
        router.post(`/inquiries/${selectedInquiry.id}/reply`, {
            reply :reply
        },{
            onSuccess: () => {
                  // Update local state to mark inquiry as resolved
                  setInquiries(prevInquiries => 
                    prevInquiries.map(inq => 
                        inq.id === selectedInquiry.id 
                            ? { ...inq, reply: reply, is_resolved: true } 
                            : inq
                    )
                );
                setSuccessMessage('Reply sent successfully and emailed to the user!');
                setTimeout(() => setSuccessMessage(''), 3000);
                setIsModalOpen(false);
            },
        });
    };

  return (
    <>
   <header>
        <UserHeader />
    </header> 

    <main className='main-box'>

        <h1><b>INQUIRIES</b></h1>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className='main-table'>
            <div className="table-container">
                <table className="review-table striped-table">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Reply</th>
                            <th>Respond</th>

                        </tr>
                    </thead>
                    <tbody>
                    {inquiries.map((inquiry) => (
                        <tr key={inquiry.id}>
                            <td>{inquiry.name}</td>
                            <td>{inquiry.email}</td>
                            <td>{inquiry.subject}</td>
                            <td>{inquiry.message}</td>
                            <td>{inquiry.reply ? inquiry.reply : 'No reply yet'}</td>

                            <td>
                                {/* <Link to="#" className="mx-1 green-button ">
                                    Accept
                                </Link>
                                <Link to="#" className="ml-5 red-button">
                                    Delete
                                </Link> */}
                                  <button onClick={() => {
                                                setSelectedInquiry(inquiry);
                                                setIsModalOpen(true);
                                            }} className="mx-1 green-button">
                                                 {inquiry.is_resolved ? 'Viewed' : 'View'}
                                            </button>
                                            <button onClick={() => destroy(`/inquiries/${inquiry.id}`)} className="ml-5 red-button">
                                                Delete
                                            </button>
                            </td>
                        </tr>

))}
                    </tbody>
                </table>
            </div>

        </div>



    </main>

    <ReplyToInquiryModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onConfirm={handleReply} 
                inquiry={selectedInquiry} 
            />


    <footer>
        <AdminFooter />
    </footer> 
</>


  )
}

export default Inquiries