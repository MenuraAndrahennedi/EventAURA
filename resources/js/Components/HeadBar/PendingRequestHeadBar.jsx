import React from 'react'
import { Link } from '@inertiajs/react';
import '../../../css/TablePages.scss';

const PendingRequestHeadBar = () => {
  return (
    <main>
    <div className="border-0 shadow card headbar">

        <div className="head-bar row">
            <div className="p-0 text-center col">
                <Link href='/managerCreateRequest' className={location.pathname === '/managerCreateRequest' ? 'active-link' : ''}>Create Request</Link>
            </div>
            <div className="p-0 text-center col">
                <Link href='/managerUpdateRequest' className={location.pathname === '/managerUpdateRequest' ? 'active-link' : ''}>Update Request</Link>
            </div>
            <div className="p-0 text-center col">
                <Link href='/managerDeleteRequest' className={location.pathname === '/managerDeleteRequest' ? 'active-link' : ''}>Delete Request</Link>
            </div>
        </div>


    </div>

</main>
  )
}

export default PendingRequestHeadBar