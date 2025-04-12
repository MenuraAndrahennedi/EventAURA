import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, usePage} from "@inertiajs/react";
import "../../../css/style.scss";

import Logo from "../../assets/Images/Logo.png";

const TBHeader = () => {
    const { auth, url } = usePage().props;
    const isCustomer = auth.user && auth.user.role_id === 5;
    return (
        <header>
            
                <Navbar expand="lg" className="bg-dark navbar-dark">
                    <Navbar.Brand as={Link} href= {route('home')} className="logo">
                        <img src={Logo} alt="Logo" className="logo-img" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} href = {route('home')} className={`nav-link ${url === '/' ? 'nav-link-active': ''}`}>
                                Home
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                href="/about"
                                className={`nav-link ${url === '/about' ? 'nav-link-active' : ''}`}
                            >
                                About US
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                href= {route('connect-with-us')}
                                className={`nav-link ${url === '/connect-with-us' ? 'nav-link-active' : ''}`}
                            >
                                Contact US
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                href ={route('browse')}
                                className={`nav-link ${url === '/browse' ? 'nav-link-active' : ''}`}
                            >
                                BROWSE EVENT
                            </Nav.Link>

                            {isCustomer ?(
                            <Nav.Link
                                as={Link}
                                href={route('tb-profile')}
                                className={`nav-link ${url === '/tb-profile' ? 'nav-link-active' : ''}`}
                            >
                                User Account
                            </Nav.Link>
                            ):(
                            <Nav.Link
                                as={Link}
                                href={route('tb.login')}
                                className={`nav-link ${url === '/tb/login' ? 'nav-link-active' : ''}`} >Login</Nav.Link>
                            )}
                        </Nav>
                    </div>
                </Navbar>
                {/* <style>
                    {`
                    .nav-link-active {
                    background-color: #4ed5ec; // light blue
                    color: #000 !important;
                    border-radius: 999px;
                    padding: 6px 16px;
                    font-weight: 500;
                    transition: background-color 0.3s ease;
}
                    `}
                </style> */}
            
        </header>
    );
};

export default TBHeader;
