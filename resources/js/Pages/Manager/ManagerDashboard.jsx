import React, { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
} from "recharts";
import axios from "axios";
import UserHeader from "@/Components/Header/UserHeader";
import ManagerFooter from "../../Components/Footer/AdminFooter";
import "../../../css/manager.scss";
import "../../../css/UserHome.scss";
import { Link } from "@inertiajs/react";
import RevenuePieChart from "@/Components/Charts/RevenuePieChart";

//import Banner from '../../assets/Images/banner.png';
//import ReviewIcon from '../../assets/Logos/review.png';

import Cover01 from "../../assets/Images/Tile 1.jpg";
import Cover02 from "../../assets/Images/Tile 2.jpg";
import Cover03 from "../../assets/Images/Tile 3.jpg";
import Cover04 from "../../assets/Images/Tile 4.jpg";
import Cover05 from "../../assets/Images/Tile 5.jpg";
import Cover06 from "../../assets/Images/Tile 6.jpg";

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
                <UserHeader />
            </header>

            {/*Body Content */}

            <section className="py-5 section-2">
                <div className="container">
                    {/* 1st Row */}
                    <div className="px-3 pt-5 row gx-5">
                        <div className="mb-4 col-12 col-md-4 position-relative">
                            <div className="border-0 shadow cards">
                                <div className="overflow-hidden cards-img-top">
                                    <img
                                        src={Cover01}
                                        alt="Banner1"
                                        className="w-100 image1"
                                    />
                                    <Link
                                        href="/ongoing"
                                        className="image-overlay"
                                    >
                                        Ongoing Events
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 col-12 col-md-4 position-relative">
                            <div className="border-0 shadow cards">
                                <div className="overflow-hidden cards-img-top">
                                    <img
                                        src={Cover02}
                                        alt="Banner2"
                                        className="w-100 image1"
                                    />
                                    <Link
                                        href="/event/create-requests"
                                        className="image-overlay"
                                    >
                                        Pending Requests
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4col-12 col-md-4 position-relative">
                            <div className="border-0 shadow cards">
                                <div className="overflow-hidden cards-img-top">
                                    <img
                                        src={Cover03}
                                        alt="Banner3"
                                        className="w-100 image1"
                                    />
                                    <Link
                                        href="/ended-event-history"
                                        className="image-overlay"
                                    >
                                        History
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2nd Row */}
                    <div className="px-3 pt-5 row gx-5">
                        <div className="mb-4 col-12 col-md-4 position-relative">
                            <div className="border-0 shadow cards">
                                <div className="overflow-hidden cards-img-top">
                                    <img
                                        src={Cover04}
                                        alt="Banner4"
                                        className="w-100 image1"
                                    />
                                    <Link
                                        href="/other/profile-show"
                                        className="image-overlay"
                                    >
                                        Your Profile
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 col-12 col-md-4 position-relative">
                            <div className="border-0 shadow cards">
                                <div className="overflow-hidden cards-img-top">
                                    <img
                                        src={Cover05}
                                        alt="Banner5"
                                        className="w-100 image1"
                                    />
                                    <Link
                                        href="/show-reviews"
                                        className="image-overlay"
                                    >
                                        Reviews
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 col-12 col-md-4 position-relative">
                            <div className="border-0 shadow cards">
                                <div className="overflow-hidden cards-img-top">
                                    <img
                                        src={Cover06}
                                        alt="Banner6"
                                        className="w-100 image1"
                                    />
                                    <Link
                                        href="/inquiries"
                                        className="image-overlay"
                                    >
                                        Inquiries
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className = "flex-row items-center justify-center">
           <section className="px-3 pt-3 section-4 d-flex justify-content-center">
                <Link href="/add-new-member" className="btn btn-primary">
                    Add New Team Member
                </Link>
            </section>

            <section className="px-3 pt-3 section-4 d-flex justify-content-center">
                <Link href="/paymenthistory" className="btn btn-primary">
                    View Payment History
                </Link>
            </section>

        </div>*/}

            <section className="section-5">
                <h1
                    className="text-center"
                    style={{
                        color: "#ffffff",
                        fontSize: "3.5rem",
                        fontWeight: "bold",
                    }}
                >
                    <b>STATISTICS</b>
                </h1>

                <div className="container mt-4">
                    {/* Ticket Sales Per Event */}
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div
                                style={{
                                    backgroundColor: "#2c3e50",
                                    padding: "15px",
                                    borderRadius: "10px",
                                    boxShadow:
                                        "0px 4px 10px rgba(0, 0, 0, 0.3)",
                                }}
                            >
                                <h5
                                    className="text-center"
                                    style={{ color: "#ffffff" }}
                                >
                                    Total Ticket Sales Per Event
                                </h5>
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={ticketSales}>
                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                            stroke="#ccc"
                                        />
                                        <XAxis
                                            dataKey="name"
                                            stroke="#ffffff"
                                            tick={false}
                                        />
                                        <YAxis stroke="#ffffff" />
                                        <Tooltip
                                            formatter={(value) => [
                                                `${value} tickets`,
                                                "Tickets Sold",
                                            ]}
                                            labelFormatter={(label) =>
                                                `Event: ${label}`
                                            }
                                            contentStyle={{
                                                backgroundColor: "#222",
                                                color: "#fff",
                                            }}
                                        />
                                        <Legend
                                            wrapperStyle={{ color: "#ffffff" }}
                                        />
                                        <Bar
                                            dataKey="tickets_sold"
                                            fill="#4CAF50"
                                            barSize={30}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Monthly Sales Trend */}
                        <div className="col-md-4">
                            <div
                                style={{
                                    backgroundColor: "#2c3e50",
                                    padding: "15px",
                                    borderRadius: "10px",
                                    boxShadow:
                                        "0px 4px 10px rgba(0, 0, 0, 0.3)",
                                }}
                            >
                                <h5
                                    className="text-center"
                                    style={{ color: "#ffffff" }}
                                >
                                    Monthly Ticket Sales Trend
                                </h5>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={monthlySales}>
                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                            stroke="#ccc"
                                        />
                                        <XAxis
                                            dataKey="month"
                                            stroke="#ffffff"
                                        />
                                        <YAxis stroke="#ffffff" />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: "#222",
                                                color: "#fff",
                                            }}
                                        />
                                        <Legend
                                            wrapperStyle={{ color: "#ffffff" }}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="total_tickets"
                                            stroke="#FF5733"
                                            strokeWidth={3}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <RevenuePieChart />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-4 pt-3">
                    <Link
                        href="/paymenthistory"
                        className="px-3 py-3 btn btn-primary3"
                    >
                        Finance Statistics
                    </Link>
                </div>
            </section>

            <footer>
                <ManagerFooter />
            </footer>
        </>
    );
};
export default ManagerDashboard;
