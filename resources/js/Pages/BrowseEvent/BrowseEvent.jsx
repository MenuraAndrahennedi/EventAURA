import React from "react";
import TBHeader from "../../Components/Header/TBHeader.jsx";
import MainFooter from "./../../Components/Footer/MainFooter";
import "../../../css/BrowseEvent.scss";
import { Link } from "@inertiajs/react";

import Banner from "../../assets/Images/banner.png";
import ReviewIcon from "../../assets/Logos/review.png";
import SearchBar from "../../Components/SearchBar";

const BrowseEvent = () => {
    return (
        <>
            <header>
                <TBHeader />
            </header>

            {/*Search Bar */}
            <SearchBar />

            {/*Body Content */}
            <section className="py-5 section-2 bg-light">
                <div className="container">
                    {/*1st Row*/}
                    <div className="pt-3 row">
                        <div className="col-md-4">
                            <div className="border-0 shadow card">
                                <div className="card-img-top">
                                    <img
                                        src={Banner}
                                        alt="Banner1"
                                        className="w-100"
                                    />
                                </div>
                                <div className="p-4 card-body">
                                    <div className="event-details">
                                        <p className="event-date-time">
                                            {" "}
                                            20, October 2024 | 07:00 PM
                                        </p>
                                        <p className="event-location">
                                            National Youth Council
                                        </p>
                                    </div>
                                    <div className="event-title">
                                        <h2>
                                            <b>Sky Heroes</b>
                                        </h2>
                                    </div>
                                    <div className="mt-3 event-footer d-flex justify-content-between align-items-center">
                                        <p className="event-price">
                                            2,000 LKR{" "}
                                            <span className="price-subtext">
                                                <br />
                                                upwards
                                            </span>
                                        </p>
                                        <Link
                                            to="/eventDetails"
                                            className="btn btn-primary"
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="border-0 shadow card">
                                <div className="card-img-top">
                                    <img
                                        src={Banner}
                                        alt="Banner1"
                                        className="w-100"
                                    />
                                </div>
                                <div className="p-4 card-body">
                                    <div className="event-details">
                                        <p className="event-date-time">
                                            20, October 2024 | 07:00 PM
                                        </p>
                                        <p className="event-location">
                                            National Youth Council
                                        </p>
                                    </div>
                                    <div className="event-title">
                                        <h2>
                                            <b>Sky Heroes</b>
                                        </h2>
                                    </div>
                                    <div className="mt-3 event-footer d-flex justify-content-between align-items-center">
                                        <p className="event-price">
                                            2,000 LKR{" "}
                                            <span className="price-subtext">
                                                <br />
                                                upwards
                                            </span>
                                        </p>
                                        <Link
                                            to="/eventDetails"
                                            className="btn btn-primary"
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="border-0 shadow card">
                                <div className="card-img-top">
                                    <img
                                        src={Banner}
                                        alt="Banner1"
                                        className="w-100"
                                    />
                                </div>
                                <div className="p-4 card-body">
                                    <div className="event-details">
                                        <p className="event-date-time">
                                            {" "}
                                            20, October 2024 | 07:00 PM
                                        </p>
                                        <p className="event-location">
                                            National Youth Council
                                        </p>
                                    </div>
                                    <div className="event-title">
                                        <h2>
                                            <b>Sky Heroes</b>
                                        </h2>
                                    </div>
                                    <div className="mt-3 event-footer d-flex justify-content-between align-items-center">
                                        <p className="event-price">
                                            2,000 LKR{" "}
                                            <span className="price-subtext">
                                                <br />
                                                upwards
                                            </span>
                                        </p>
                                        <Link
                                            to="/eventDetails"
                                            className="btn btn-primary"
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*2nd Row*/}
                    <div className="pt-3 row">
                        <div className="col-md-4">
                            <div className="border-0 shadow card">
                                <div className="card-img-top">
                                    <img
                                        src={Banner}
                                        alt="Banner1"
                                        className="w-100"
                                    />
                                </div>
                                <div className="p-4 card-body">
                                    <div className="event-details">
                                        <p className="event-date-time">
                                            {" "}
                                            20, October 2024 | 07:00 PM
                                        </p>
                                        <p className="event-location">
                                            National Youth Council
                                        </p>
                                    </div>
                                    <div className="event-title">
                                        <h2>
                                            <b>Sky Heroes</b>
                                        </h2>
                                    </div>
                                    <div className="mt-3 event-footer d-flex justify-content-between align-items-center">
                                        <p className="event-price">
                                            2,000 LKR{" "}
                                            <span className="price-subtext">
                                                <br />
                                                upwards
                                            </span>
                                        </p>
                                        <Link
                                            to="/eventDetails"
                                            className="btn btn-primary"
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="border-0 shadow card">
                                <div className="card-img-top">
                                    <img
                                        src={Banner}
                                        alt="Banner1"
                                        className="w-100"
                                    />
                                </div>
                                <div className="p-4 card-body">
                                    <div className="event-details">
                                        <p className="event-date-time">
                                            {" "}
                                            20, October 2024 | 07:00 PM
                                        </p>
                                        <p className="event-location">
                                            National Youth Council
                                        </p>
                                    </div>
                                    <div className="event-title">
                                        <h2>
                                            <b>Sky Heroes</b>
                                        </h2>
                                    </div>
                                    <div className="mt-3 event-footer d-flex justify-content-between align-items-center">
                                        <p className="event-price">
                                            2,000 LKR{" "}
                                            <span className="price-subtext">
                                                <br />
                                                upwards
                                            </span>
                                        </p>
                                        <Link
                                            to="/eventDetails"
                                            className="btn btn-primary"
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="border-0 shadow card">
                                <div className="card-img-top">
                                    <img
                                        src={Banner}
                                        alt="Banner1"
                                        className="w-100"
                                    />
                                </div>
                                <div className="p-4 card-body">
                                    <div className="event-details">
                                        <p className="event-date-time">
                                            {" "}
                                            20, October 2024 | 07:00 PM
                                        </p>
                                        <p className="event-location">
                                            National Youth Council
                                        </p>
                                    </div>
                                    <div className="event-title">
                                        <h2>
                                            <b>Sky Heroes</b>
                                        </h2>
                                    </div>
                                    <div className="mt-3 event-footer d-flex justify-content-between align-items-center">
                                        <p className="event-price">
                                            2,000 LKR{" "}
                                            <span className="price-subtext">
                                                <br />
                                                upwards
                                            </span>
                                        </p>
                                        <Link
                                            to="/eventDetails"
                                            className="btn btn-primary"
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-5">
                <div className="text-center">
                    <Link to="/review" className="Reviews ">
                        Leave Us a Review
                    </Link>
                    <img
                        src={ReviewIcon}
                        alt="ReviewIcon"
                        className="mx-2 Review-icon"
                    />
                </div>
            </section>

            <footer>
                <MainFooter />
            </footer>
        </>
    );
};

export default BrowseEvent;
