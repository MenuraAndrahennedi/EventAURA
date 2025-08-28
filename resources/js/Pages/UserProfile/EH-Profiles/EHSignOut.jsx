import React from "react";
import { usePage, router } from "@inertiajs/react";
import profilelogo from "../../../assets/Images/Profile-logo.png";
import "../../../../css/profile2.scss";
import EHSidebar from "./EHSidebar";
import EHHeader from "./../../../Components/Header/EHHeader";
import SubFooter from "./../../../Components/Footer/SubFooter";

const EHSignOut = () => {
    const { user } = usePage().props;

    const handleSignOut = () => {
        router.post("/logout"); // Call Laravel's logout route
    };

    const handleKeepSignedIn = () => {
        window.history.back(); // Goes back to the previous page
    };
    return (
        <div className="page-wrapper">
            <header>
                <EHHeader />
            </header>

            <main className="main-box">
                <div className="container my-5">
                    <div className="border-0 shadow card">
                        <div className="text-center card-body">
                            <h1 className="profile-heading">
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
                                style={{ display: "block", margin: "0 auto" }}
                            />
                        </div>
                    </div>

                    <div className="mt-4 row">
                        <div className="col-md-3">
                            <EHSidebar />
                        </div>
                        <div className="col-md-9">
                            <div className="border-0 shadow card">
                                <div className="card-body profile-details">
                                    <h4 className="text-center">
                                        <b>Do you want to sign out?</b>
                                    </h4>
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
                                                onClick={handleSignOut}
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

export default EHSignOut;
