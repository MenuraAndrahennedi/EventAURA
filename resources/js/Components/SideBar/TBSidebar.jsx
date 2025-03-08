import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import '../../../css/Profile.scss';

const TBSidebar = () => {
  return (
    <main>
    <div className="border-0 shadow card sidebar">
       <div className="p-4 card-body">
               <ul className="sidebar-menu">
                    <li><Link href={route('tb_profile')} className={route().current('tb_profile') ? 'active-link' : ''}>Profile Details</Link></li>
                    <li><Link href={route('tb_purchase_history')} className={route().current('tb_purchase_history') ? 'active-link' : ''}>Purchase History</Link></li>
                    <li><Link href={route('tb_changepw')} className={route().current('tb_changepw') ? 'active-link' : ''}>Change Password</Link></li>
                    <li><Link href={route('tb_signout')} className={route().current('tb_signout') ? 'active-link' : ''}>Sign Out</Link></li>
               </ul>
        </div>
     </div>
   
 </main>
  )
}

export default TBSidebar