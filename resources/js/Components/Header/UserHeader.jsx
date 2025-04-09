import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, usePage } from '@inertiajs/react';
import '../../../css/style.scss';
import Logo from '../../../js/assets/Images/Logo.png';


const UserHeader = () => {
  const { auth } = usePage().props;
  const user = auth?.user;

   // Determine the dashboard route based on user ID or role
   let dashboardRoute = '/';
   if (user?.role_id === 3) {
     dashboardRoute = '/admin/dashboard';
   } else if (user?.role_id === 2) {
     dashboardRoute = '/manager';
   } else if (user?.role_id === 1) {
     dashboardRoute = '/programmer/dashboard';
   }

   let userType = "";
    if (user?.role_id === 1) {
      userType = "Programmer";
    } else if (user?.role_id === 2) {
      userType = "Manager";
    } else if (user?.role_id === 3) {
      userType = "Admin";
    }

  return (
    <header>
       
            <Navbar expand="lg" className="bg-dark navbar-dark">
                <Navbar.Brand as={Link} href="/" className = 'logo'><img src={Logo} alt="Logo" className="logo-img" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} href={dashboardRoute} className = 'nav-link'>Dashboard</Nav.Link>
                    <Nav.Link as={Link} href="/ongoing" className = 'nav-link'>Ongoing events</Nav.Link>
                    <Nav.Link as={Link} href="/event/create-requests" className = 'nav-link'>Pending requests</Nav.Link>
                    <Nav.Link as={Link} href="/inquiries" className = 'nav-link'>Inquiries</Nav.Link>
                    <Nav.Link as={Link} href="/other/profile-show" className = 'nav-link'>{userType}</Nav.Link>
                </Nav>
                </div>
            </Navbar>
        
    </header>
    
  )
}

export default UserHeader
