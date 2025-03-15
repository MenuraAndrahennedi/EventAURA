import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "@inertiajs/react";

import "../../../css/style.scss";
import Logo from "../../assets/Images/Logo.png";

const MainHeader = () => {
    return (
        <header>
            <div className="container py-3">
                <Navbar expand="lg" className="bg-dark navbar-dark">
                    <Navbar.Brand as={Link} to="/" className="logo">
                        <img src={Logo} alt="Logo" className="logo-img" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} href="/" className="nav-link">
                                Home
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                href="/about"
                                className="nav-link"
                            >
                                About US
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                href="/contact"
                                className="nav-link"
                            >
                                Contact US
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                href="/browse"
                                className="nav-link"
                            >
                                Browse EVENT
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                href="/create"
                                className="nav-link"
                            >
                                Create EVENT
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    );
};

export default MainHeader;
