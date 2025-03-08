import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import '../../../css/Profile.scss';

const UserSideBar = () => {
  return (
    <main>
    <div className="border-0 shadow card sidebar">
       <div className="p-4 card-body">
               <ul className="sidebar-menu">
                    <li><Link href={route('user_profile')} className={route().current('user_profile') ? 'active-link' : ''}>Profile Details</Link></li>
                    <li><Link href={route('user_change_pw')} className={route().current('user_change_pw') ? 'active-link' : ''}>Change Password</Link></li>
                    <li><Link href={route('user_signout')} className={route().current('user_signout') ? 'active-link' : ''}>Sign Out</Link></li>
               </ul>
        </div>
     </div>
   
 </main>
  )
}

export default UserSideBar