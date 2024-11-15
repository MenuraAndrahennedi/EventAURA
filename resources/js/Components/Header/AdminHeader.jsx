import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from '@inertiajs/react';
import '../../style.scss';
import Logo from '../../assets/Logo.png';

const AdminHeader = () => {
  return (
    <header>
        <div classNmae='container py-3'>
            <Navbar expand="lg" className="bg-dark navbar-dark">
                <Navbar.Brand as={Link} to="/" className = 'logo'><img src={Logo} alt="Logo" className="logo-img" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/AdminDashboard" className = 'nav-link'>Dashboard</Nav.Link>
                    <Nav.Link as={Link} to="/ongoing"className = 'nav-link'>Ongoing events</Nav.Link>
                    <Nav.Link as={Link} to="/pendingRequests" className = 'nav-link'>Pending requests</Nav.Link>
                    <Nav.Link as={Link} to="/inquiries" className = 'nav-link'>Inquiries</Nav.Link>
                    <Nav.Link as={Link} to="/admin" className = 'nav-link'>Admin Account</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </header>
  )
}

export default AdminHeader
