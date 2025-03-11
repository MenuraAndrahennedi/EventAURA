import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "@inertiajs/react";

import "../../../css/style.scss";
import Logo from "../../assets/Images/Logo.png";

const MainHeader = () => {
    return (
        <header>
            <div >
                <Navbar expand="lg" className="bg-dark navbar-dark">
                <Navbar.Brand as={Link} href={route("home")} className="logo">
                        <img src={Logo} alt="Logo" className="logo-img" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} href={route("home")} className="nav-link">Home</Nav.Link>
                            <Nav.Link as={Link} href={route("about")} className="nav-link">About Us</Nav.Link>
                            <Nav.Link as={Link} href={route("home")} className="nav-link">Contact Us</Nav.Link>
                            <Nav.Link as={Link} href={route("browse")} className="nav-link">Browse Events</Nav.Link>
                            <Nav.Link as={Link} href={route("create_event")} className="nav-link">Create Event</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    );
};



export default MainHeader;
