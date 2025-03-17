import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import '../../../css/Profile.scss';

const EHSideBar = () => {
  return (
    <main>
     <div className="border-0 shadow card sidebar">
        <div className="p-4 card-body">
                <ul className="sidebar-menu">
                    <li><Link href={route('eh_profile_details')} className={route().current('eh_profile_details') ? 'active-link' : ''}>Profile Details</Link></li>
                    <li><Link href={route('eh_ongoing_history')} className={route().current('eh_ongoing_history') ? 'active-link' : ''}>Event History</Link></li>
                    <li><Link href={route('eh_change_pw')} className={route().current('eh_change_pw') ? 'active-link' : ''}>Change Password</Link></li>
                    <li><Link href={route('eh_signout')} className={route().current('eh_signout') ? 'active-link' : ''}>Sign Out</Link></li>
                </ul>
         </div>
      </div>
    
  </main>
  )
}

export default EHSideBar