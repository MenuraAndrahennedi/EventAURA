import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from '@inertiajs/react';
import '../../../css/style.scss';
import Logo from '../../../js/assets/Images/Logo.png';


const UserHeader = () => {
  return (
    <header>
       
            <Navbar expand="lg" className="bg-dark navbar-dark">
                <Navbar.Brand as={Link} to="/" className = 'logo'><img src={Logo} alt="Logo" className="logo-img" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/DeveloperDashboard" className = 'nav-link'>Dashboard</Nav.Link>
                    <Nav.Link as={Link} to="/AdminOngoing"className = 'nav-link'>Ongoing events</Nav.Link>
                    <Nav.Link as={Link} to="/pendingRequests" className = 'nav-link'>Pending requests</Nav.Link>
                    <Nav.Link as={Link} to="/inquiries" className = 'nav-link'>Inquiries</Nav.Link>
                    <Nav.Link as={Link} to="/OtherProfile" className = 'nav-link'>User Account</Nav.Link>
                </Nav>
                </div>
            </Navbar>
        
    </header>
    
  )
}

export default UserHeader
