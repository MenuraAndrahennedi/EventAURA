import React, { useState } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import profilelogo from "../../../assets/Logos/Profile-logo.jpg";
import "../../../../css/profile.scss";

import TBHeader from "@/Components/Header/TBHeader";
import SubFooter from "@/Components/Footer/SubFooter";
import TBSideBar from "@/Components/SideBar/TBSideBar";

const TBProfile = () => {
    const { user } = usePage().props; // Get user data from Inertia
    return (
        <div className="page-wrapper">
            <header>
                <TBHeader />
            </header>

            <main className="main-box">
                <div className="container my-5">
                    <div className="border-0 shadow card">
                        <div className="text-center card-body">
                            <h1>
                                <b>Hi {user.name}!</b>
                            </h1>
                            <h4>
                                <b>Welcome to Your Profile</b>
                            </h4>
                            <img
                                src={
                                    user.avatar
                                        ? `/storage/${user.avatar}`
                                        : profilelogo
                                }
                                alt="Avatar"
                                className="profile-avatar"
                            />
                        </div>
                    </div>

                    <div className="mt-4 row">
                        <div className="col-md-3">
                            <TBSideBar />
                        </div>
                        <div className="col-md-9">
                            <div className="border-0 shadow card">
                                <div className="card-body profile-details">
                                    <h5 className="text-center">
                                        <b>Profile Details</b>
                                    </h5>
                                    <p className="text-center">@{user.name}</p>

                                    <div className="details-grid">
                                        <div className="detail-label">
                                            Full Name:
                                        </div>
                                        <div className="detail-value">
                                            {user.name}
                                        </div>

                                        <div className="detail-label">
                                            Email:
                                        </div>
                                        <div className="detail-value">
                                            {user.email}
                                        </div>

                                        <div className="detail-label">
                                            Telephone No:
                                        </div>
                                        <div className="detail-value">
                                            {user.telephone}
                                        </div>
                                    </div>

                                    <div className="text-end">
                                        <Link
                                            href={route("customer.editProfile")}
                                            className="mt-3 btn btn-primary"
                                        >
                                            Edit Profile
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <SubFooter />
            </footer>
        </div>
    );
};

export default TBProfile;
