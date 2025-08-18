import React from 'react'
import '../../../../css/profile2.scss';
import { Link, usePage } from '@inertiajs/react';

const TBSidebar = () => {
  const { url } = usePage();   // Get the current URL
console.log("Current URL:", url);

  return (
  <main>
     <div className="border-0 shadow card sidebar">
        <div className="p-4 card-body">
                <ul className="sidebar-menu">
                    <li><Link href='/tb-profile' className={url === '/TBaccount' ? 'active-link' : ''}>Profile Details</Link></li>
                    <li><Link href='/TBPurchaseHistory' className={url === '/TBPurchaseHistory' ? 'active-link' : ''}>Purchase History</Link></li>
                    <li><Link href='/TBChangePW' className={url === '/TBChangePW' ? 'active-link' : ''}>Change Password</Link></li>
                    <li><Link href='/TBSignOut' className={url === '/TBSignout' ? 'active-link' : ''}>Sign Out</Link></li>
                </ul>
         </div>
      </div>
    
  </main>
  )
}

export default TBSidebar
