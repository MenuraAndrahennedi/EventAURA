import React from 'react'
import '../../../css/TablePages.scss';
import { Link } from '@inertiajs/react';

const EventHistoryHeadBar = () => {
  return (
    <main>
    <div className="border-0 shadow card headbar">

        <div className="head-bar row">
            <div className="p-0 text-center col">
                <Link href= {route("ended_events")} className={location.pathname === '/endedevents' ? 'active-link' : ''}>Ended</Link>
            </div>
            <div className="p-0 text-center col">
                <Link href={route('pending_history')} className={location.pathname === '/pendinghistory' ? 'active-link' : ''}>Pending Payment</Link>
            </div>
            <div className="p-0 text-center col">
                <Link href={route('rejected_history')} className={location.pathname === '/rejectedhistory' ? 'active-link' : ''}>Rejected</Link>
            </div>
        </div>


    </div>

</main>

  )
}

export default EventHistoryHeadBar