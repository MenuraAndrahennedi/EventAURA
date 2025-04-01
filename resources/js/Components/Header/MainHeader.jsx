import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "@inertiajs/react";

import "../../../css/style.scss";
import Logo from "../../assets/Images/Logo.png";

const MainHeader = () => {
    return (
       

        <header>
            
            <Navbar expand="lg" className="bg-dark navbar-dark ">
                <Navbar.Brand as={Link} href ={route('home')} className="logo">
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
                            href="/about"
                            className="nav-link"
                        >
                            About US
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            href={route('connect-with-us')}
                            className="nav-link"
                        >
                            Contact US
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            href= {route('tb.login')}
                            className="nav-link"
                        >
                            BROWSE EVENT
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            href={route('event.create')}
                            className="nav-link"
                        >
                            CREATE EVENT
                        </Nav.Link>
                    </Nav>
                </div>
            </Navbar>
           
    </header>
    
    
    );
};

export default MainHeader;
