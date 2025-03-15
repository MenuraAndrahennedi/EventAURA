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
                    <li><Link href ='/manager/profile' className={url === '/manager/profile' ? 'active-link' : ''}>Profile Details</Link></li>
                    <li><Link href ='/manager/changePW' className={url === '/manager/changePW' ? 'active-link' : ''}>Change Password</Link></li>
                    <li><Link href ='/manager/signout' className={url === '/manager/signout' ? 'active-link' : ''}>Sign Out</Link></li>
                </ul>
         </div>
      </div>
    
  </main>
  )
}

export default ManagerSideBar