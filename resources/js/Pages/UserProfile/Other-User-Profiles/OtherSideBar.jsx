import React from 'react'
import '../../../../css/profile2.scss';
import { Link, usePage } from '@inertiajs/react';

const OtherSideBar = () => {
  const { url } = usePage();
  return (
    <main>
     <div className="border-0 shadow card sidebar">
        <div className="p-4 card-body">
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