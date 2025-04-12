import React from 'react'
import '../../../../css/profile.scss';
import { Link,usePage } from '@inertiajs/react';

const ManagerSideBar = () => {
  const { url } = usePage(); // Get the current Inertia URL
  return (
    <main>
     <div className="card shadow border-0 sidebar">
        <div className="card-body p-4">
                <ul className="sidebar-menu">
                    <li><Link href ='/other/profile-show' className={url === '/other/profile-show' ? 'active-link' : ''}>Profile Details</Link></li>
                    <li><Link href ='/other/change-password' className={url === '/other/change-password' ? 'active-link' : ''}>Change Password</Link></li>
                    <li><Link href ='/other/logout' className={url === '/other/logout' ? 'active-link' : ''}>Sign Out</Link></li>
                </ul>
         </div>
      </div>
    
  </main>
  )
}

export default ManagerSideBar