import React from 'react'
import '../../../css/TablePages.scss';
import { Link } from '@inertiajs/react';

const EventHistoryHeadBar = () => {
  return (
    <main>
    <div className="border-0 shadow card headbar">

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