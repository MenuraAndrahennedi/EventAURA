import React,{useEffect,useState} from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import axios from "axios";
import UserHeader from '../../Components/Header/UserHeader';
import AdminFooter from '../../Components/Footer/AdminFooter';
import RevenuePieChart from "@/Components/Charts/RevenuePieChart";
import '../../../css/UserHome.scss';

import { Link } from '@inertiajs/react';

//import Cover01 from '../../assets/Images/Tile 1.jpg';
//import Cover02 from '../../assets/Images/Tile 2.jpg';
//import Cover03 from '../../assets/Images/Tile 3.jpg';
//import Cover04 from '../../assets/Images/Tile 4.jpg';
//import Cover05 from '../../assets/Images/Tile 5.jpg';
//import Cover06 from '../../assets/Images/Tile 6.jpg';



const UserHome = () => {
  const [ticketSales, setTicketSales] = useState([]);
    const [monthlySales, setMonthlySales] = useState([]);
    const [monthlyUsersByRole, setMonthlyUsersByRole] = useState([]);

    useEffect(() => {
        axios.get("/manager/stats").then((response) => {
            setTicketSales(response.data.ticketSales);
            setMonthlySales(response.data.monthlySales);
            //setAverageRatings(response.data.averageRatings);
        });
    }, []);

    useEffect(() => {
      axios.get("/admin/monthly-user-registrations-by-role")
        .then(response => {
          const raw = response.data;
          const grouped = {};
    
          raw.forEach(item => {
            if (!grouped[item.month]) {
              grouped[item.month] = { month: item.month, event_hosts: 0, ticket_buyers: 0 };
            }
    
            if (item.role_id === 4) {
              grouped[item.month].event_hosts = item.count;
            } else if (item.role_id === 5) {
              grouped[item.month].ticket_buyers = item.count;
            }
          });
    
          const formatted = Object.values(grouped);
          setMonthlyUsersByRole(formatted);
        })
        .catch(error => {
          console.error("Error loading user registration stats by role:", error);
        });
    }, []);
     
    
  return (
    <>
        <header>
          <UserHeader />
        </header>

        {/* <div>
            <Link href={route('admin.profile')} className="image-overlay">Admin Profile</Link>
        </div> */}


        <div className="px-3 pt-5 row gx-5">  
          
              <div className="col-md-4 mb-4 position-relative"> 
                <div className="cards shadow border-0">                  
                  <div className="cards-img-top">
                      {/* <img src={Cover01} alt="Banner1" className="w-100"/> */}
                      <Link href={route('ongoing')} className="image-overlay">Ongoing Events</Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4 position-relative">
                <div className="cards shadow border-0">
                  <div className="cards-img-top">
                    {/* <img src={Cover02} alt="Banner2" className="w-100"/> */}
                    <Link href="/event/create-requests" className="image-overlay">Pending Requests</Link>
                  </div>
              </div>
              </div>

              <div className="col-md-4 mb-4 position-relative">
                <div className="cards shadow border-0">
                  <div className="cards-img-top">
                      {/* <img src={Cover03} alt="Banner3" className="w-100"/> */}
                      <Link href="/ended-event-history" className="image-overlay">History</Link>
                  </div>
                </div>
              </div>
          </div>
          
            <div className="row pt-5 px-3 gx-5">  
                <div className="col-md-4 mb-4 position-relative"> 
                    <div className="cards shadow border-0">
                        <div className="cards-img-top">
                            {/* <img src={Cover04} alt="Banner4" className="w-100"/> */}
                            <Link href={route('admin.userDetails')} className="image-overlay">User Details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4 position-relative">
                    <div className="cards shadow border-0">
                        <div className="cards-img-top">
                        {/* <img src={Cover05} alt="Banner5" className="w-100"/> */}
                        <Link href="/show-reviews" className="image-overlay">Reviews</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4 position-relative">
                    <div className="cards shadow border-0">
                        <div className="cards-img-top">
                            {/* <img src={Cover06} alt="Banner6" className="w-100"/> */}
                            <Link href="/inquiries" className="image-overlay">Inquiries</Link>
                        </div>
                    </div>
                </div>
            </div>

             <section className="section-5">
                            <h1 className="text-center" style={{ color: "#ffffff", fontSize: "3.5rem", fontWeight: "bold" }}>
                                <b>STATISTICS</b>
                            </h1>
            
                            
                            <div className="container mt-4">
                       
                         {/* User registrtions within months */}
                         <div className="row justify-content-center">
                         
                        <div className="col-md-4">
                        <div className='chart-container' style={{
                         backgroundColor: "#2c3e50",
                         padding: "15px",
                         borderRadius: "10px",
                         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
                       }}>
                       <h5 className="text-center" style={{ color: "#ffffff" }}>
                       Monthly User Registrations
                           </h5>
                    <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyUsersByRole}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                  <XAxis dataKey="month" stroke="#ffffff" />
                  <YAxis stroke="#ffffff" />
                  <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff" }} />
                 <Legend wrapperStyle={{ color: "#ffffff" }} />
                <Line type="monotone" dataKey="event_hosts" stroke="#3498DB" strokeWidth={2} name="Event Hosts" />
                <Line type="monotone" dataKey="ticket_buyers" stroke="#2ECC71" strokeWidth={2} name="Ticket Buyers" />
               </LineChart>
               </ResponsiveContainer>


  </div>
  </div>
                        
                    
                       
                        {/* Monthly Sales Trend */}
                          <div className="col-md-4">
                          <div style={{backgroundColor:"#2c3e50",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"}}> 
                            <h5 className="text-center" style={{ color: "#ffffff" }}>Monthly Ticket Sales Trend</h5>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={monthlySales}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                                    <XAxis dataKey="month"stroke="#ffffff" />
                                    <YAxis stroke="#ffffff" />
                                    <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff" }} />
                                    <Legend wrapperStyle={{ color: "#ffffff" }}  />
                                    <Line type="monotone" dataKey="total_tickets" stroke="#FF5733" strokeWidth={3} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        </div>
                        
                 
                                <div className="col-md-4">
                                    <RevenuePieChart />
                                </div>
                            </div>
            
                    </div>
            
            
            
            
            
                        </section>


        <footer>
          <AdminFooter />
      </footer>
    </>

      
  )
}

export default UserHome
