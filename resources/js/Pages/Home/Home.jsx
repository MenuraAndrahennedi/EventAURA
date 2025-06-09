import React, { useState } from "react";
import MainHeader from "../../Components/Header/MainHeader";
import MainFooter from "../../Components/Footer/MainFooter";
import "../../../css/Home.scss";
import { Link, usePage } from "@inertiajs/react";
//import '../../style.scss';
import { motion } from "framer-motion";

import HomeImg1 from "../../assets/Images/Home-1.png";
import HomeImg2 from "../../assets/Images/Home-2.png";
import FBIcon from "../../assets/Logos/fb.png";
import InstargramIcon from "../../assets/Logos/Instargram.png";
import XIcon from "../../assets/Logos/logo X.png";
import LinkedInIcon from "../../assets/Logos/linkedIn.png";
{
    /*import WhiteCircle from '../../assets/Logos/Eclipse white.svg';
import BlueCircle from '../../assets/Logos/Eclipse blue.svg';*/
}
import ReviewIcon from "../../assets/Logos/review.png";

export default function Home() {
    const { flash = {} } = usePage().props;
    const [showError, setShowError] = useState(!!flash.error);
    
    return (
        <>
            <header>
                <MainHeader />
            </header>


            {/* Flash message */}
            {showError && flash.error && (
            <div className="text-center alert alert-danger alert-dismissible fade show" role="alert">
                {flash.error}
                <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => setShowError(false)} // Hide the alert on click
                ></button>
            </div>
            )}

            <main>

                {/*Section 01 */}
                <section className="section-1">
                    <div className="topic d-flex align-items-center">
                        <div className="container-fluid">
                            <div className="text-center">


                                    <motion.h1
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 1, ease: "easeOut" }}>
                                            FIND YOUR NEXT <br />
                                            AWESOME EVENT <br />
                                            HERE!
                                    </motion.h1>

                                <br />

                                
                                    <p style={{ fontSize: "19px", color: "#fff" }}>
                                    Let EventAURA help you find the event that's just right for you! <br />
                                    </p>

                                    <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#fff" }}>
                                    Browse our awesome events for fun things to do in your area.
                                    </h2>

                               
                                <Link
                                    href={route("browse")}
                                    className="btn btn-primary"
                                >
                                    Browse Event
                                </Link>
                                
                                <br />
                                <Link href={route("oth.login")}>
                                    {" "}
                                    #Other Login pg
                                </Link>{" "}
                                
                            </div>
                        </div>
                    </div>
                </section>

                {/*Section 02 */}
                <section className="section-2">
                    <div className="topic d-flex align-items-center">
                        <div className="container-fluid">
                            <div className="text-center">
                                
                                <motion.h2
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                style={{ fontSize: "29px", fontWeight: "bold" }}
                                >
                                LOOKING TO PUBLISH YOUR EVENT?
                                </motion.h2>

                                <br />

                                <motion.p
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                                style={{ fontSize: "17px", color: "#000" }}
                                >
                                Planning your events and selling tickets has <br />
                                never been easier with EventAura's super user-friendly platform by your side!
                                </motion.p>
                                                                
                                <Link
                                    href={route("event.create")}
                                    className="btn btn-primary"
                                >
                                    Create Event
                                </Link>
                            </div>
                        </div>
                    </div>
                    <hr className="centered-line" />
                </section>

                {/*Section 03 */}
                <section className="py-5 section-3">
                    <div className="container py-5">
                        <div className="row">
                            <div className="mb-4 col-12 col-md-6 ">
                                <h3>
                                    EASIEST EVENT HANDLING AND TICKETING
                                    PLATFORM
                                </h3>
                                <p>
                                    Planning your events and selling tickets has
                                    never been
                                    <br />
                                    easier with EventAUra's super user-friendly
                                    platform <br />
                                    by your side
                                </p>
                                <Link
                                    href={route("about")}
                                    className="btn btn-primary"
                                >
                                    ABOUT US
                                </Link>
                            </div>
                            <div className="mb-4 col-12 col-md-6">
                                <img
                                    src={HomeImg2}
                                    alt="Img2"
                                    className="Img-fluid"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="mb-4 col-12 col-md-6 ">
                                <img
                                    src={HomeImg1}
                                    alt="Img1"
                                    className="Img-fluid"
                                />
                            </div>
                            <div className="mb-4 col-12 col-md-6 ">
                                <h2>NEED HELP</h2>
                                <p>
                                    Our user-friendly TicketLeap help center is
                                    always <br />
                                    buzzing with the latest updates to empower
                                    you to plan <br />
                                    your next event with confidence! It's also a
                                    handy <br />
                                    resource to use to answer ticket buyer
                                    questions.Trust <br />
                                    us to provide the unwavering support you
                                    need for <br />a successful event!
                                </p>
                                <Link
                                    href={route("help")}
                                    className="btn btn-primary"
                                >
                                    HELP CENTRE
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/*Section 04 */}
                <section className="section-4">
                    <div className="topic d-flex align-items-center">
                        <div className="container-fluid">
                            <div className="text-center">
                                <h1>STAY UPDATED</h1>
                                <div className="flex-wrap gap-2 d-flex justify-content-center">
                                    <a href
                                        ="https://www.facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={FBIcon}
                                            alt="Facebook"
                                            className="mx-5 social-icon loading-icon"
                                        />
                                    </a>

                                    <a href
                                        ="https://www.instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={InstargramIcon}
                                            alt="Instagram"
                                            className="mx-5 social-icon loading-icon"
                                        />
                                    </a>

                                    <a href
                                        ="https://www.twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={XIcon}
                                            alt="X"
                                            className="mx-5 social-icon loading-icon"
                                        />
                                    </a>

                                    <a href
                                        ="https://www.linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={LinkedInIcon}
                                            alt="LinkedIn"
                                            className="mx-5 social-icon loading-icon"
                                        />
                                    </a>
                                </div>
                                <div className="ReviewLink">
                                    <Link href ="/reviewPg" className="Review ">
                                        Leave Us a Review
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <MainFooter />
            </footer>
        </>
    );

}