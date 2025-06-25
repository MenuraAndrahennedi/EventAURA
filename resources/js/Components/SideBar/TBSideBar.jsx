import React from 'react'
import { Link } from "@inertiajs/react";
import '../../../css/profile.scss';

const TBSideBar = () => {
  return (
    <main>
    <div className="border-0 shadow card sidebar">
       <div className="p-4 card-body">
               <ul className="sidebar-menu">
                    <li><Link href={route('tb-profile')} className={route().current('tb-profile') ? 'active-link' : ''}>Profile Details</Link></li>
                    <li><Link href={route('TBPurchaseHistory')} className={route().current('TBPurchaseHistory') ? 'active-link' : ''}>Purchase History</Link></li>
                    <li><Link href={route('user.change-password')} className={route().current('user.change-password') ? 'active-link' : ''}>Change Password</Link></li>
                    <li><Link href={route('TBSignOut')} className={route().current('TBSignOut') ? 'active-link' : ''}>Sign Out</Link></li>
               </ul>
        </div>
     </div>
   
 </main>
  )
}

export default TBSideBar