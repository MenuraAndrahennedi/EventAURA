import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, usePage} from "@inertiajs/react";
import "../../../css/style.scss";

import Logo from "../../assets/Images/Logo.png";
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';


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

                            {/* {isCustomer ?(
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
                            )} */}

                                                   {/*} <div style = {{ marginLeft:'650px' }}>
                                                                                                {isCustomer ? (
                                                    <Dropdown align="end" className="ms-3">
                                                        <Dropdown.Toggle
                                                            variant="secondary"
                                                            className="gap-2 text-white bg-transparent border-0 d-flex align-items-center"
                                                            id="dropdown-basic"
                                                        >
                                                            {auth.user.profile_image ? (
                                                                <Image
                                                                    src={`/storage/${auth.user.profile_image}`}
                                                                    roundedCircle
                                                                    width="30"
                                                                    height="30"
                                                                    alt="Profile"
                                                                />
                                                            ) : (
                                                                <div
                                                                    style={{
                                                                        width: '35px',
                                                                        height: '35px',
                                                                        borderRadius: '50%',
                                                                        backgroundColor: 'rgb(19, 185, 227)',
                                                                        color: 'white',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        fontWeight: 'bold',
                                                                    }}
                                                                >
                                                                    {auth.user.name.charAt(0).toUpperCase()}
                                                                </div>
                                                            )}
                                                            <span>{auth.user.name.split(" ")[0]}</span>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item as={Link} href={route('tb-profile')}>
                                                                User Account
                                                            </Dropdown.Item>
                                                            <Dropdown.Divider />
                                                            <Dropdown.Item as={Link} href={route('logout')} method="post">
                                                                Logout
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                ) : (
                                                    <Nav.Link
                                                        as={Link}
                                                        href={route('tb.login')}
                                                        className={`nav-link ${url === '/tb/login' ? 'nav-link-active' : ''}`}
                                                        style = {{border:'solid rgb(19, 185, 227)',borderRadius:'25px', padding:'8px 20px'}}
                                                    >
                                                        Login
                                                    </Nav.Link>
                                                )}
                                                                        </div>*/}

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
