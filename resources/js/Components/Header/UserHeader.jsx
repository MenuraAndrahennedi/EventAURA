import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, usePage } from '@inertiajs/react';
import '../../../css/style.scss';
import Logo from '../../../js/assets/Images/Logo.png';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';


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
                    

                     {/* Profile Dropdown */}
                     {/*<div style = {{ marginLeft:'500px' }}>
            <Dropdown align="end" className="ms-3">
              <Dropdown.Toggle
                variant="secondary"
                className="gap-2 text-white bg-transparent border-0 d-flex align-items-center"
                id="dropdown-basic"
              >
                {user?.avatar ? (
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
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      backgroundColor: 'rgb(19, 185, 227)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                    }}
                  >
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                )}
                <span>{user?.name?.split(' ')[0]}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} href="/other/profile-show">
                  User Account
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} href={route('logout')} method="post">
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>*/}
                </Nav>
                </div>
            </Navbar>
        
    </header>
    
  )
}

export default UserHeader
