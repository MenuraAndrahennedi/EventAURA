import React from 'react'
import '../profile.scss';
import { Link, useLocation } from 'react-router-dom';

const EHSidebar = () => {
  return (
    <main>
     <div className="card shadow border-0 sidebar">
        <div className="card-body p-4">
                <ul className="sidebar-menu">
                    <li><Link to='/EHaccount' className={location.pathname === '/EHaccount' ? 'active-link' : ''}>Profile Details</Link></li>
                    <li><Link to='/EH-EventHistory' className={location.pathname === '/EH-EventHistory' ? 'active-link' : ''}>Event History</Link></li>
                    <li><Link to='/EHChangePW' className={location.pathname === '/EHChangePW' ? 'active-link' : ''}>Change Password</Link></li>
                    <li><Link to='/EHSignout' className={location.pathname === '/EHSignout' ? 'active-link' : ''}>Sign Out</Link></li>
                </ul>
         </div>
      </div>
    
  </main>
  )
}

export default EHSidebar
