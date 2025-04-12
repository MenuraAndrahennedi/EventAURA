import React from 'react'
import '../../../../css/PendingRequest.scss'

import { Link } from '@inertiajs/react';

const EHSidebar = () => {
    return (
        <main>
            <div className="card shadow border-0 headbar">

                <div className="head-bar row">
                    <div className="col text-center p-0">
                        <Link href='/event/create-requests' className={location.pathname === '/event/create-requests' ? 'active-link' : ''}>Create Request</Link>
                    </div>
                    <div className="col text-center p-0">
                        <Link href='/managerUpdateRequest' className={location.pathname === '/managerUpdateRequest' ? 'active-link' : ''}>Update Request</Link>
                    </div>
                    <div className="col text-center p-0">
                        <Link href='/managerDeleteRequest' className={location.pathname === '/managerDeleteRequest' ? 'active-link' : ''}>Delete Request</Link>
                    </div>
                </div>


            </div>

        </main>
    )
}

export default EHSidebar
