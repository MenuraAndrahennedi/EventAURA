import React,{ useEffect, useState } from 'react';
import { Link ,usePage} from '@inertiajs/react';
import axios from 'axios';
import './ViewEvent.scss';
import AdminFooter from '../../../Components/Footer/AdminFooter';
import UserHeader from '../../../Components/Header/UserHeader';

const ManagerViewEvent = () => {

  const { event:initialEvent } = usePage().props; // Get the event id from route parameters
   // const [event, setEvent] = useState(null);
    const [attendees, setAttendees] = useState({ count: 0 });

    useEffect(() => {
  //     axios.get(`/api/get-event/${id}`)
  //         .then(response => 
  //             setEvent(response.data));
  //        // Fetch attendee count
  //        axios.get(`/api/event/${id}/attendees`)
  //        .then(response => setAttendees({
  //            count: response.data.count,
  //            pdfUrl: `/api/event/${id}/attendees/pdf`
  //        }));     
  //         // .catch(error => {
  //         //     console.error('Error fetching event:', error);
  //         // });
  // }, [id]);

  // const fetchData = async () => {
  //   try {
  //     const eventResponse = await axios.get(`/api/get-event/${id}`);
  //     const attendeesResponse = await axios.get(`/api/event/${id}/attendees`);
      
  //     setEvent(eventResponse.data);
  //     setAttendees({
  //       count: attendeesResponse.data.count,
  //       pdfUrl: `/api/event/${id}/attendees/pdf`
  //     });
  //   } catch (error) {
  //     console.error('Error loading data:', error);
  //     // Handle error state
  //   }
  // };
  
  // fetchData();
  const fetchAttendees = async () => {
    try {
      const attendeesResponse = await axios.get(`/api/event/${initialEvent.id}/attendees`);
      setAttendees({
        count: attendeesResponse.data.count,
        pdfUrl: `/api/event/${initialEvent.id}/attendees/pdf`
      });
    } catch (error) {
      console.error('Error fetching attendees:', error);
    }
  };

  if (initialEvent?.id) {
    fetchAttendees();
  }


}, [initialEvent?.id]);

  if (!initialEvent) {
      return <div>Loading...</div>;
  }

  return (
    <div className="page-wrapper"
>
        <header>
          <UserHeader />
        </header>


          {/* Main Event Details Section */}
      <section className="event-details">
        {/* Banner Section */}
        <div className="banner">
          <h1 className="banner-title"><b>{initialEvent.name}</b></h1>
        </div>

        {/* Event Information Section */}
        <div className="info-section">
          <div className="info-grid">
            <div><b>Date:</b> <span>{initialEvent.date}</span></div>
            <div><b>Time:</b> <span>{initialEvent.startTime}</span></div>
            <div><b>Location:</b> <span>{initialEvent.venue}</span></div>
            <div><b>Event Status:</b> <span>Active</span></div>
          </div>
        </div>

        {/* Attendee Count Section */}
        <div className="gap-2 attendee-section d-flex flex-column flex-md-row align-items-start align-items-md-center">
          <b>Attendee Count:</b> <span>{attendees.count}</span>
          <a href={attendees.pdfUrl} download className="download-btnn">Download Attendee List</a> 
        </div>

        {/* Ticket Availability Section */}
        <div className="ticket-section">
          <b>Available Ticket Count</b>
          <div className="ticket-grid">
            <div>Golden <span className="ticket-count">{initialEvent.golden_ticket_count}</span></div>
            <div>Silver <span className="ticket-count">{initialEvent.silver_ticket_count}</span></div>
            <div>Bronze <span className="ticket-count">{initialEvent.bronze_ticket_count}</span></div>
          </div>
        </div>

      </section>
      <div style={{ marginBottom: '80px' }}></div>

      
        <footer>
          <AdminFooter />
        </footer>
    </div>
  )
}

export default ManagerViewEvent