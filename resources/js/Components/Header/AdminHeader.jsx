import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from '@inertiajs/react';
import '../../../css/style.scss';
import Logo from '../../assets/Images/Logo.png';

const AdminHeader = () => {
  return (
    <header>
        {/*<div classNmae='container py-3'>*/}
            <Navbar expand="lg" className="bg-dark navbar-dark">
                <Navbar.Brand as={Link} to="/" className = 'logo'><img src={Logo} alt="Logo" className="logo-img" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} href ={route('admin.dashboard')} className = 'nav-link'>Dashboard</Nav.Link>
                    <Nav.Link as={Link} href="/manager/ongoing" className = 'nav-link'>Ongoing events</Nav.Link>
                    <Nav.Link as={Link} href="/manager/create-requests" className = 'nav-link'>Pending requests</Nav.Link>
                    <Nav.Link as={Link} href="/inquiries" className = 'nav-link'>Inquiries</Nav.Link>
                    <Nav.Link as={Link} to="/admin" className = 'nav-link'>Admin Account</Nav.Link>
                </Nav>
                </div>
            </Navbar>
        {/*</div>*/}
    </header>
  )
}

export default AdminHeader
