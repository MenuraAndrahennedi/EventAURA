import React from 'react'
import ManagerHeader from '../../../Components/Header/ManagerHeader'
import ManagerFooter from '../../../Components/Footer/AdminFooter';
import '../../../../css/manager.scss';
import HeadBar from './HeadBar'
import { Link ,router } from '@inertiajs/react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useState } from "react";


//import Banner from '../../assets/Images/banner.png';
//import ReviewIcon from '../../assets/Logos/review.png';

 // Function to generate and download PDF
 const handleDownloadPDF = (request) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Event Update Request", 14, 20);
    doc.setFontSize(12);

    const updateData = JSON.parse(request.update_data); // Parse JSON data
    const existingData = request.event || {}; // Existing event details


    // // Table headers
    // const headers = [["Field", "Value"]];
    // const data = Object.entries(updateData).map(([key, value]) => [key, value]);

    // doc.autoTable({
    //     startY: 30,
    //     head: headers,
    //     body: data,
    //     theme: "grid",
    // });
    let yPosition = 30; // Starting position for text

    doc.setFontSize(14);
    doc.text("Comparison of Event Data", 14, yPosition);
    yPosition += 10;

    // Table headers
    doc.setFontSize(12);
    doc.text("Field", 14, yPosition);
    doc.text("Current Value", 80, yPosition);
    doc.text("Requested Update", 140, yPosition);
    yPosition += 5;
    doc.line(14, yPosition, 190, yPosition); // Add a separator line
    yPosition += 5;

    // Iterate over update data and compare with existing data
    Object.entries(updateData).forEach(([key, newValue]) => {
        let oldValue = existingData[key] ?? "N/A"; // Default to "N/A" if no old value exists
        
        // Format text
        doc.text(`${key}`, 14, yPosition);
        doc.text(`${oldValue}`, 80, yPosition);
        doc.text(`${newValue}`, 140, yPosition);
        
        yPosition += 10; // Move to the next line
    });

    // Add the details to the PDF
    // Object.entries(updateData).forEach(([key, value]) => {
    //     doc.text(`${key}: ${value}`, 14, yPosition);
    //     yPosition += 10; // Move down for next line
    // });


    doc.save(`${request.event?.name || 'event_update'}_request.pdf`);
};

// const handleAccept = (id) => {
//     router.post(`/event/update/approve/${id}`, {}, {
//         onSuccess: () => {
//             alert("Event update request approved successfully!");
//         },
//         onError: (errors) => {
//             console.error("Error approving event update:", errors);
//         }
//     });
// };



const UpdateRequest = ( {requests}) => {
    const [approvedRequests, setApprovedRequests] = useState([]); // Track approved requests
    const [successMessage, setSuccessMessage] = useState(""); // Success message state
    const handleAccept = (id) => {
        router.post(`/event/update/approve/${id}`, {}, {
            onSuccess: () => {
                setApprovedRequests((prev) => [...prev, id]); // Mark request as approved
                setSuccessMessage("Event update request approved successfully!"); // Set success message
                
                // Hide the success message after 3 seconds
                setTimeout(() => {
                    setSuccessMessage("");
                }, 5000);
            },
            onError: (errors) => {
                console.error("Error approving event update:", errors);
            }
        });
    };

    return (
        <>
            <header>
                <ManagerHeader />
            </header>

            <main className='pending-request'>

                <h1><b>PENDING REQUESTS</b></h1>

                 {/* Success Message */}
            {successMessage && (
                <div className="success-message">
                    {successMessage}
                </div>
            )}
            
                <div className='request-table'>
                    <HeadBar />
                    <div className="container">
                        <table className="custom-table">
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
                            {requests.length > 0 ? (
                                    requests.map((request) => (
                                <tr key ={request.id}>
                                    <td>{request.event?.name || " "}</td>
                                    <td>{request.event_host?.name || " "}</td>
                                    <td>{request.event?.date || " "}</td>
                                    <td>{request.event?.startTime || " "}</td>
                                    <td>{request.event?.venue || " "}</td>
                                    <td>
                                        {/* <Link to="#" className="btn btn-info btn-sm">
                                            Download
                                        </Link> */}
                                         <button 
                        className="btn btn-info btn-sm"
                        onClick={() => handleDownloadPDF(request)}
                    >
                        Download
                    </button>
                                    </td>
                                    <td>
                                        {/* <Link href={`/event/update/approve/${request.id} `}className="btn btn-success btn-sm mx-1">
                                            Accept
                                        </Link> */}
                                        {/* <button 
    className="btn btn-success btn-sm mx-1"
    onClick={() => handleAccept(request.id)}
>
    Accept
</button> */} {approvedRequests.includes(request.id) ? (
    <button className="btn btn-secondary btn-sm" disabled>
    Accepted
</button>
) : (
<button 
    className="btn btn-success btn-sm mx-1"
    onClick={() => handleAccept(request.id)}
>
    Accept
</button>
)}
                                        <Link to="#" className="btn btn-danger btn-sm ml-10">
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                                 ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" style={{ textAlign: "center" }}>No pending update requests found.</td>
                                    </tr>
                                )}
                                

                            </tbody>
                        </table>
                    </div>

                </div>

 {/* Add CSS styles for the success message */}
 <style>
                {`
                .success-message {
                    background-color: #d4edda;
                    color: #155724;
                    padding: 10px;
                    border-radius: 5px;
                    text-align: center;
                    margin: 10px auto;
                    width: 50%;
                    font-weight: bold;
                    animation: fadeOut 3s forwards;
                }

                @keyframes fadeOut {
                    0% { opacity: 1; }
                    100% { opacity: 0; }
                }
                `}
            </style>

            </main>



            <footer>
                <ManagerFooter />
            </footer>
        </>

    )
}
export default UpdateRequest
