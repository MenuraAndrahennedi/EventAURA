import React from "react";
import { useForm } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import profilelogo from "../../../assets/Logos/Profile-logo.jpg";
import TBHeader from "./../../../Components/Header/TBHeader";
import TBSidebar from "./TBSidebar";
import SubFooter from "./../../../Components/Footer/SubFooter";
import "../../../../css/profile2.scss";

const TBSignOut = () => {
    const { post } = useForm();
    const { user } = usePage().props;

    const handleLogout = () => {
        post(route("SignOut")); // Sends a POST request to logout
    };
    const handleKeepSignedIn = () => {
        window.history.back(); // Goes back to the previous page
    };
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
                            <TBSidebar />
                        </div>
                        <div className="col-md-9">
                            <div className="border-0 shadow card">
                                <div className="card-body profile-details">
                                    <h5 className="text-center">
                                        <b>Do you want to sign out?</b>
                                    </h5>
                                    <p className="text-center">@{user.name}</p>
                                    <br />
                                    <h5 className="text-center">
                                        Are you sure ?
                                    </h5>
                                    <br />
                                    <div className=" text-end">
                                        <div
                                            className="text-center"
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                gap: "10px",
                                                marginTop: "20px",
                                            }}
                                        >
                                            <button
                                                className="btn btn-yes me-2"
                                                onClick={handleLogout}
                                                style={{
                                                    width: "150px",
                                                    height: "45px",
                                                }}
                                            >
                                                Yes,Sign Out
                                            </button>
                                            <button
                                                className="btn btn-no "
                                                onClick={handleKeepSignedIn}
                                                style={{
                                                    width: "150px",
                                                    height: "45px",
                                                }}
                                            >
                                                Keep,Signed in
                                            </button>
                                        </div>
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

export default TBSignOut;
