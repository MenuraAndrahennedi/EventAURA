import React,{ useEffect, useState } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import axios from "axios";
import ManagerHeader from "@/Components/Header/ManagerHeader";
import ManagerFooter from "../../Components/Footer/ManagerFooter";
import "../../../css/manager.scss";
import { Link } from "@inertiajs/react";
import RevenuePieChart from "@/Components/Charts/RevenuePieChart";

//import Banner from '../../assets/Images/banner.png';
//import ReviewIcon from '../../assets/Logos/review.png';

const ManagerDashboard = () => {

    const [ticketSales, setTicketSales] = useState([]);
    const [monthlySales, setMonthlySales] = useState([]);

    useEffect(() => {
        axios.get("/manager/stats").then((response) => {
            setTicketSales(response.data.ticketSales);
            setMonthlySales(response.data.monthlySales);
            //setAverageRatings(response.data.averageRatings);
        });
    }, []);

    return (
        <>
            <header>
                <ManagerHeader />
            </header>

            {/*Body Content */}
            <section className="section-2  py-5">
                <div className="container">
                    {/*1st Row*/}
                    <div className="row justify-content-center align-items-center pt-3">
                        <div className="col-md-3 m-3 ">
                            <Link
                                href="/manager/ongoing"
                                className="text-decoration-none"
                            >
                                <div className="card shadow border-0">
                                    <div className="card-body p-4">
                                        <h2>
                                            <b>ONGOING EVENTS</b>
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-md-3 m-3">
                            <Link
                                href="/manager/create-requests"
                                className="text-decoration-none"
                            >
                                <div className="card shadow border-0">
                                    <div className="card-body p-4">
                                        <h2>
                                            <b>PENDING REQUESTS</b>
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-md-3 m-3">
                            <Link
                                href="/manager/endedEventHistory"
                                className="text-decoration-none"
                            >
                                <div className="card shadow border-0">
                                    <div className="card-body p-4">
                                        <h2>
                                            <b>HISTORY</b>
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/*2nd Row*/}
                    <div className="row justify-content-center align-items-center pt-3 mt-4">
                        <div className="col-md-3 m-3">
                            <Link
                                href="/manager/profile"
                                className="text-decoration-none"
                            >
                                <div className="card shadow border-0">
                                    <div className="card-body p-4">
                                        <h2>
                                            <b>YOUR PROFILE</b>
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3 m-3">
                            <Link
                                href="/manager/reviews"
                                className="text-decoration-none"
                            >
                                <div className="card shadow border-0">
                                    <div className="card-body p-4">
                                        <h2>
                                            <b>REVIEWS</b>
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3 m-3">
                            <Link
                                href="/inquiries"
                                className="text-decoration-none"
                            >
                                <div className="card shadow border-0">
                                    <div className="card-body p-4">
                                        <h2>
                                            <b>INQUIRIES</b>
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-4 d-flex justify-content-center pt-3">
                <Link href="/add-new-member" className="btn btn-primary">
                    Add New Team Member
                </Link>
            </section>

            <section className="section-5">
                <h1 className="text-center" style={{ color: "#ffffff", fontSize: "3.5rem", fontWeight: "bold" }}>
                    <b>STATISTICS</b>
                </h1>

                
                <div className="container mt-4">
           
             {/* Ticket Sales Per Event */}
             <div className="row justify-content-center">
             <div className="col-md-4">
             <div style={{backgroundColor:"#555",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"}}>
                <h5 className="text-center" style={{ color: "#ffffff" }}>Total Ticket Sales Per Event</h5>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={ticketSales}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ccc"  />
                        <XAxis dataKey="name" stroke="#ffffff" />
                        <YAxis stroke="#ffffff" />
                        <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff" }}/>
                        <Legend wrapperStyle={{ color: "#ffffff" }}  />
                        <Bar dataKey="tickets_sold" fill="#4CAF50"  barSize={30} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            </div>
            
        
           
            {/* Monthly Sales Trend */}
              <div className="col-md-4">
              <div style={{backgroundColor:"#555",
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
                <ManagerFooter />
            </footer>
        </>
    );
};
export default ManagerDashboard;
