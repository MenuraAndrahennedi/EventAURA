import React from 'react'
import '../profile.scss';
import { Link, usePage } from '@inertiajs/react';

const TBSidebar = () => {
  const { url } = usePage();   // Get the current URL
console.log("Current URL:", url);

  return (
  <main>
     <div className="card shadow border-0 sidebar">
        <div className="card-body p-4">
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
