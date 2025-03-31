import React from 'react'
import '../profile.scss';
import { Link, usePage } from '@inertiajs/react';

const EHSidebar = () => {

  const { url } = usePage();
  return (
    <main>
     <div className="card shadow border-0 sidebar">
        <div className="card-body p-4">
                <ul className="sidebar-menu">
                    <li><Link href={route('eventhost.profile')} className={location.pathname === '/event-host/profile' ? 'active-link' : ''}>Profile Details</Link></li>
                    <li><Link href={route('eventhost.ongoingEvents.history')} className={location.pathname === 'eventhost/ongoing-history' ? 'active-link' : ''}>Event History</Link></li>
                    <li><Link href={route('eventhost.changePW')} className={location.pathname === '/event-host/changePW' ? 'active-link' : ''}>Change Password</Link></li>
                    <li><Link href={route('eventhost.signOut')} className={location.pathname === '/event-host/signOut' ? 'active-link' : ''}>Sign Out</Link></li>
                </ul>
         </div>
      </div>
    
  </main>
  )
}

export default EHSidebar
