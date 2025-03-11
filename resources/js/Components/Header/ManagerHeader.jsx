import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "@inertiajs/react";
import "../../../css/style.scss";
import Logo from "../../assets/Images/Logo.png";

const ManagerHeader = () => {
    return (
        <header>
            <div>
                    <Navbar expand="lg" className="bg-dark navbar-dark">
                    <Navbar.Brand as={Link} href={route("home")} className="logo">
                        <img src={Logo} alt="Logo" className="logo-img" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} href={route("user_dashboard")} className="nav-link">Dashboard</Nav.Link>
                            <Nav.Link as={Link} href={route("user_ongoing")} className="nav-link">Ongoing Events</Nav.Link>
                            <Nav.Link as={Link} href={route("create_request")} className="nav-link">Pending requests</Nav.Link>
                            <Nav.Link as={Link} href={route("inquiries")} className="nav-link">Inquiries</Nav.Link>
                            <Nav.Link as={Link} href={route("user_profile")} className="nav-link">Profile</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    );
};

export default ManagerHeader;
