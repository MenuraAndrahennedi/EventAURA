import React from 'react'
import { Link } from '@inertiajs/react';
import '../../../css/TablePages.scss';

const PendingRequestsHeadBar = () => {
  return (
    <main>
    <div className="border-0 shadow card headbar">

        <div className="head-bar row">
            <div className="p-0 text-center col">
                <Link href={route('create_request')} className={location.pathname === '/createrequest' ? 'active-link' : ''}>Create Request</Link>
            </div>
            <div className="p-0 text-center col">
                <Link href={route('update_request')} className={location.pathname === '/updaterequest' ? 'active-link' : ''}>Update Request</Link>
            </div>
            <div className="p-0 text-center col">
                <Link href={route('delete_request')} className={location.pathname === '/deleterequest' ? 'active-link' : ''}>Delete Request</Link>
            </div>
        </div>


    </div>

</main>

  )
}

export default PendingRequestsHeadBar