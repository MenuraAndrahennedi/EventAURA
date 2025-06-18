import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link ,usePage} from "@inertiajs/react";
import "../../../css/style.scss";
import Logo from "../../assets/Images/Logo.png";
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';

const EHHeader = () => {
    const { props } = usePage();
    const { auth, url } = props;
    const isEventhost = auth.user && auth.user.role_id === 4;
    const hasUnreadMessages = props.hasUnreadMessages;
    return (
        <header>
            {/*<div className="container py-3">*/}
                <Navbar expand="lg" className="bg-dark navbar-dark">
                    <Container fluid>
                        <Navbar.Brand as={Link} href={route('home')} className="logo">
                        <img src={Logo} alt="Logo" className="logo-img" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <div id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            
                            <Nav.Link
                                as={Link}
                                href={route("home")}
                                className="px-3 text-white"
                            >
                                Home
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

                            <Nav.Link
                                as={Link}
                                href="/chatify" 
                                className="nav-link position-relative">
                               View Messages
                             {hasUnreadMessages && (
                                <span className="top-0 p-1 position-absolute start-100 translate-middle bg-primary rounded-circle">
                                <span className="visually-hidden">New messages</span>
                                </span>
                             )}
                            </Nav.Link>

                            {/*<div style = {{ marginLeft:'600px' }}>
                                                 {isEventhost ? (
                                <Dropdown align="end" className="ms-3">
                                    <Dropdown.Toggle
                                        variant="secondary"
                                        className="gap-2 text-white bg-transparent border-0 d-flex align-items-center"
                                        id="dropdown-basic"
                                    >
                                    {auth.user.avatar ? (
                                        <Image
                                            src={`/storage/${user.avatar}`}
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
                                    <Dropdown.Item as={Link} href={route('eventhost.profile')}>
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
                            >
                                Login
                            </Nav.Link>
                        )}
                        </div>*/}
                        <div className="d-flex align-items-center ms-3">
                                {isEventhost ? (
                                    <Dropdown align="end">
                                    <Dropdown.Toggle
                                        variant="secondary"
                                        className="gap-2 text-white bg-transparent border-0 d-flex align-items-center"
                                        id="dropdown-basic"
                                    >
                                        {auth.user.avatar ? (
                                        <Image
                                            src={`/storage/${auth.user.avatar}`}
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
                                        <span className="ms-2">{auth.user.name.split(" ")[0]}</span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} href={route('eventhost.profile')}>
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
                                    >
                                    Login
                                    </Nav.Link>
                                )}
                            </div>

                        </Nav>
                    </div>
                    </Container>
                </Navbar>
           {/* </div>*/}
        </header>
    );
};

export default EHHeader;
