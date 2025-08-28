import React, { useState } from "react";
import { usePage, router } from "@inertiajs/react";
import MainHeader from "./../../Components/Header/MainHeader";
import EHHeader from "./../../Components/Header/EHHeader";
import TBHeader from "./../../Components/Header/TBHeader";
import { motion } from "framer-motion";
import "../../../css/AboutUs.scss";
const AboutUS = () => {
    const { event, cart, success, error, total } = usePage().props; // Get event and cart data from Inertia
    const { auth } = usePage().props; // Get auth status
    function HeaderByRole() {
        const { auth } = usePage().props || {};
        const role = auth?.user?.role_id;

        if (role === 4) return <EHHeader />; // Event Host
        if (role === 5) return <TBHeader />; // Ticket Buyer
        if (role === 2) return <UserHeader />; // Manager (adjust to your header)
        // add more roles as needed…
        return <MainHeader />; // Guest / fallback
    }
    return (
        // Wrapper div that sets flex column layout and minimum viewport height
        <div className="page-wrapper d-flex flex-column min-vh-100">
            <header>
                <HeaderByRole />
            </header>

            {/* Main About Us content section */}
            <section className="aboutus-section">
                {/* Animated header section using framer-motion */}
                <motion.div
                    className="aboutus-header"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1>
                        About <span className="highlight">EventAura</span>
                    </h1>
                    <p>
                        Revolutionizing event planning and management with
                        innovation and simplicity.
                    </p>
                </motion.div>

                {/* Container for multiple info boxes */}
                <div className="aboutus-content">
                    {/* Mission statement box with fade-in animation */}
                    <motion.div
                        className="aboutus-box"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <h2>Our Mission</h2>
                        <p>
                            To empower event creators with a user-first digital
                            platform that simplifies planning, enhances
                            promotion, and enables seamless ticketing — all
                            while delivering an unforgettable attendee
                            experience.
                        </p>
                    </motion.div>

                    {/* Features box with a slightly longer delay */}
                    <motion.div
                        className="aboutus-box"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h2>Why EventAura?</h2>
                        <ul className="mb-0 custom-list ps-3">
                            <li>Streamlined event creation and publishing</li>
                            <li>Effortless ticketing and guest management</li>
                            <li>Real-time analytics and insights</li>
                            <li>
                                A platform built for both organizers and
                                attendees
                            </li>
                        </ul>
                    </motion.div>

                    {/* Team introduction box with the longest delay */}
                    <motion.div
                        className="aboutus-box"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        <h2>Who We Are</h2>
                        <p>
                            We are <strong>Code Catalysts</strong>, a team of
                            passionate developers, designers, and innovators
                            committed to crafting tools that connect people
                            through amazing experiences. We build with
                            precision, passion, and purpose.
                        </p>
                    </motion.div>
                </div>

                <div className="aboutus-quote">
                    <p>“We don’t just create events. We create moments.”</p>
                </div>
            </section>
            {/*<footer>
        <MainFooter />
      </footer>*/}
        </div>
    );
};

export default AboutUS;
