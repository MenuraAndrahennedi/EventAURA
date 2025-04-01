import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "@inertiajs/react";
import "../../../css/style.scss";
import Logo from "../../assets/Images/Logo.png";

const EHHeader = () => {
    return (
        <header>
            {/*<div className="container py-3">*/}
                <Navbar expand="lg" className="bg-dark navbar-dark">
                    <Navbar.Brand as={Link} href={route('home')} className="logo">
                        <img src={Logo} alt="Logo" className="logo-img" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} href={route('home')} className="nav-link">
                                Home
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/about"
                                className="nav-link"
                            >
                                About US
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                href = {route('connect-with-us')}
                                className="nav-link"
                            >
                                Contact US
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                               href ={route('event.create')}
                                className="nav-link"
                            >
                                CREATE EVENT
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                href={route('eventhost.dashboard')} 
                                className="nav-link"
                            >
                                Dashboard
                            </Nav.Link>
                        </Nav>
                    </div>
                </Navbar>
           {/* </div>*/}
        </header>
    );
};

export default EHHeader;
