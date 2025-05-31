// import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import { Link,useState } from "@inertiajs/react";
// import Container from "react-bootstrap/Container";
// import "../../../css/style.scss";
// import Logo from "../../assets/Images/Logo.png";


import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../../../css/style.scss";
import Logo from "../../assets/Images/Logo.png";
import { Link } from "@inertiajs/react";

const MainHeader = () => {
    return (
        <header>
            <Navbar expand="lg" className="py-3 bg-dark navbar-dark">
                <Container fluid>
                    <Navbar.Brand
                        as={Link}
                        href={route("home")}
                        className="logo"
                    >
                        <img src={Logo} alt="Logo" className="logo-img" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link
                                as={Link}
                                href={route("home")}
                                className="px-3 text-white"
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                href="/about"
                                className="px-3 text-white"
                            >
                                About US
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                href={route("connect-with-us")}
                                className="px-3 text-white"
                            >
                                Contact US
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                href={route("browse")}
                                className="px-3 text-white"
                            >
                                BROWSE EVENT
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                href={route("event.create")}
                                className=" create-event-btn btn btn-info fw-bold ms-3"
                                style={{
                                    borderRadius: "20px",
                                    padding: "6px 16px",
                                }}
                            >
                                CREATE EVENT
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default MainHeader;

{
    /**
    return (
        <header>
            <Navbar className="py-3 bg-dark navbar-dark" expand="lg">
                <Container fluid>
                    
                    <Navbar.Brand as={Link} href={route('home')} className="logo">
                        <img src={Logo} alt="Logo" className="logo-img" />
                    </Navbar.Brand>

                    
                    <Nav className="flex-wrap ms-auto d-flex justify-content-center justify-content-lg-end">
                        <Nav.Link as={Link} href={route('home')} className="px-3 text-white">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} href="/about" className="px-3 text-white">
                            About US
                        </Nav.Link>
                        <Nav.Link as={Link} href={route('connect-with-us')} className="px-3 text-white">
                            Contact US
                        </Nav.Link>
                        <Nav.Link as={Link} href={route('browse')} className="px-3 text-white">
                            BROWSE EVENT
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            href={route('event.create')}
                            className="create-event-btn btn btn-info fw-bold ms-3"
                            style={{ borderRadius: "20px", padding: "6px 16px" }}
                        >
                            CREATE EVENT
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    ); */
}
