import React from 'react'
import '../profile.scss';
import { Link, useLocation } from 'react-router-dom';

const TBSidebar = () => {
  return (
  <main>
     <div className="card shadow border-0 sidebar">
        <div className="card-body p-4">
                <ul className="sidebar-menu">
                    <li><Link to='/TBaccount' className={location.pathname === '/TBaccount' ? 'active-link' : ''}>Profile Details</Link></li>
                    <li><Link to='/TBPurchaseHistory' className={location.pathname === '/TBPurchaseHistory' ? 'active-link' : ''}>Purchase History</Link></li>
                    <li><Link to='/TBChangePW' className={location.pathname === '/TBChangePW' ? 'active-link' : ''}>Change Password</Link></li>
                    <li><Link to='/TBSignout' className={location.pathname === '/TBSignout' ? 'active-link' : ''}>Sign Out</Link></li>
                </ul>
         </div>
      </div>
    
  </main>
  )
}

export default TBSidebar
