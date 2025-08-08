import React from 'react'
import '../../../css/TablePages.scss';
import { Link } from '@inertiajs/react';

const EventHistoryHeadBar = () => {
  return (

    // Main container wrapping the head bar
    <main>
    {/* Card container with shadow and no border styling */}
        <div className="border-0 shadow card headbar">

            {/* Row container for navigation links */}
            <div className="head-bar row">
                <div className="p-0 text-center col">
                    <Link href='/ended-event-history' className={location.pathname === '/ended-event-history' ? 'active-link' : ''}>Ended</Link>
                </div>
                <div className="p-0 text-center col">
                    <Link href='/pending-payment-history' className={location.pathname === '/pending-payment-history' ? 'active-link' : ''}>Pending Payment</Link>
                </div>
                <div className="p-0 text-center col">
                    <Link href='/rejectedEventHistory' className={location.pathname === '/rejectedEventHistory' ? 'active-link' : ''}>Rejected</Link>
                </div>
            </div>


        </div>

    </main>
  )
}

export default EventHistoryHeadBar