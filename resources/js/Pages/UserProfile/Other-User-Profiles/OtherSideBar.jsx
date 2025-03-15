import React from 'react'
import '../profile.scss';
import { Link, usePage } from '@inertiajs/react';

const OtherSideBar = () => {
  const { url } = usePage();
  return (
    <main>
     <div className="card shadow border-0 sidebar">
        <div className="card-body p-4">
                <ul className="sidebar-menu">
                    <li><Link href={route('admin.profile')} className={location.pathname === '/OtherProfil' ? 'active-link' : ''}>Profile Details</Link></li>
                    <li><Link href={route('admin.changePW')} className={location.pathname === '/OtherChangePW' ? 'active-link' : ''}>Change Password</Link></li>
                    <li><Link href={route('admin.signOut')} className={location.pathname === '/OtherSignO' ? 'active-link' : ''}>Sign Out</Link></li>
                </ul>
         </div>
      </div>
      
  </main>
  )
}

export default OtherSideBar