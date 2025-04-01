import React from 'react'
import '../../../css/TablePages.scss';
import { Link } from '@inertiajs/react';

const EventHistoryHeadBar = () => {
  return (
    <main>
    <div className="border-0 shadow card headbar">

        <div className="head-bar row">
            <div className="p-0 text-center col">
                <Link href='/manager/endedEventHistory' className={location.pathname === '/manager/endedEventHistory' ? 'active-link' : ''}>Ended</Link>
            </div>
            <div className="p-0 text-center col">
                <Link href='/manager/pendingPaymentHistory' className={location.pathname === '/manager/pendingPaymentHistory' ? 'active-link' : ''}>Pending Payment</Link>
            </div>
            <div className="p-0 text-center col">
                <Link href='/manager/rejectedEventHistory' className={location.pathname === '/manager/rejectedEventHistory' ? 'active-link' : ''}>Rejected</Link>
            </div>
        </div>


    </div>

</main>
  )
}

export default EventHistoryHeadBar