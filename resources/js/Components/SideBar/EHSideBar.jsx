import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import '../../../css/Profile.scss';

const EHSideBar = () => {
  return (
    <main>
     <div className="border-0 shadow card sidebar">
        <div className="p-4 card-body">
                <ul className="sidebar-menu">
                    <li><Link to='/EHaccount' className={location.pathname === '/EHaccount' ? 'active-link' : ''}>Profile Details</Link></li>
                    <li><Link to='/EHOngoing' className={location.pathname === '/EHOngoing' ? 'active-link' : ''}>Event History</Link></li>
                    <li><Link to='/EHChangePW' className={location.pathname === '/EHChangePW' ? 'active-link' : ''}>Change Password</Link></li>
                    <li><Link to='/EHSignout' className={location.pathname === '/EHSignout' ? 'active-link' : ''}>Sign Out</Link></li>
                    <li></li>
                </ul>
         </div>
      </div>
    
  </main>
  )
}

export default EHSideBar