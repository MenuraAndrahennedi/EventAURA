import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from '@inertiajs/react';

import '../../style.scss';
import Logo from '../../assets/Logo.png';

const MainHeader = () => {
  return (
    <header>
        <div classNmae='container py-3'>
            <Navbar expand="lg" className="bg-dark navbar-dark">
                <Navbar.Brand as={Link} to="/" className = 'logo'><img src={Logo} alt="Logo" className="logo-img" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/" className = 'nav-link'>Home</Nav.Link>
                    <Nav.Link as={Link} to="/about"className = 'nav-link'>About US</Nav.Link>
                    <Nav.Link as={Link} to="/contact" className = 'nav-link'>Contact US</Nav.Link>
                    <Nav.Link as={Link} to="/browse" className = 'nav-link'>Browse EVENT</Nav.Link>
                    <Nav.Link as={Link} to="/create" className = 'nav-link'>Create EVENT</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </header>
  )
}

export default MainHeader
