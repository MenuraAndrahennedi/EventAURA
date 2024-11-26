import React from "react";
import ManagerHeader from "@/Components/Header/ManagerHeader";
import ManagerFooter from "../../Components/Footer/ManagerFooter";
import "../../../css/manager.scss";
import { Link } from "@inertiajs/react";

//import Banner from '../../assets/Images/banner.png';
//import ReviewIcon from '../../assets/Logos/review.png';

const ManagerDashboard = () => {
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
                                href="/browse"
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
                                href="/browse"
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
                                href="/browse"
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
                                href="/browse"
                                className="text-decoration-none"
                            >
                                <div className="card shadow border-0">
                                    <div className="card-body p-4">
                                        <h2>
                                            <b>USER DETAILS</b>
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3 m-3">
                            <Link
                                href="/browse"
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
                                href="/browse"
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
                <Link to="/browse" className="btn btn-primary">
                    Add New Team Member
                </Link>
            </section>

            <section className="section-5">
                <h1>
                    <b>STAT</b>
                </h1>
            </section>

            <footer>
                <ManagerFooter />
            </footer>
        </>
    );
};
export default ManagerDashboard;
