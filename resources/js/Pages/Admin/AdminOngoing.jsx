// import React, {useEffect, useState} from 'react'
// import '../../../css/BrowseEvent.scss';
// import { Link } from '@inertiajs/react';
// import axios from 'axios';
// import Banner from '../../assets/Images/banner.png';
// import SearchBar from '../../Components/SearchBar';
// import UserHeader from '../../Components/Header/UserHeader';
// import AdminFooter from '../../Components/Footer/AdminFooter';

// const AdminOngoing = () => {

//     const [events , setEvents] = useState([]);

//     useEffect(() => {
//       axios.get('/api/events')
//       .then (response =>{
//         setEvents(response.data);
//       })
//       .catch (error =>{
//         console.error("There was an error fetching events" , error);
  
//       });
//     }, []); 
//   return (
//     <>
//         <header>
//           <UserHeader />
//         </header>

//          {/*Search Bar */}
//          <SearchBar />


//             <section className = 'py-5 section-2 bg-light'>
//             <div className = 'container'>

            
//             <div className = 'pt-3 row'>
//             {events.map((event) => (    
//                 <div className = 'col-md-3'key ={event.id}>
//                 <div className = 'border-0 shadow card'>
//                     <div className = 'card-img-top'>
//                         <img src = {event.image} alt={event.name} className = 'w-100'/>
//                     </div>
//                     <div className = 'p-4 card-body'>
//                     <div className='event-details'>
//                         <p className='event-date-time' > {event.date} | {event.startTime}</p>
//                         <p className='event-location'>{event.venue}</p>
//                     </div>
//                     <div className='event-title'>
//                         <h2><b>{event.name}</b></h2>
//                     </div>
//                     <div className = 'mt-3 event-footer d-flex justify-content-between align-items-center'>
//                         <p className='event-price'>{event.bronze_ticket_price} LKR <span className="price-subtext"><br/>upwards</span></p>
//                         <Link href={route('admin.viewEvent',{id: event.id})} className='btn btn-primary'>View Event</Link>
//                     </div>
//                     </div>
//                 </div>
//                 </div>
//                 ))}
                
//             </div> 
//             </div>

//         </section>

//         <footer>
//           <AdminFooter />
//         </footer>
//     </>
//   )
// }

// export default AdminOngoing