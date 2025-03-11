import React from 'react'
import { Link, usePage  } from '@inertiajs/react';
import '../../../css/style.scss';

const MainFooter = () => {
    return (
        <footer className="py-4 text-white bg-dark">
            <div className="container">
                <div className="row justify-content-between">

                    {/* EventAURA Section */}
                    <div className="text-center col-md-6">
                        <h5>© 2024 EventAURA</h5>
                        <ul className="mb-0 list-inline">
                            <li className="mx-3 list-inline-item">
                                <Link href={route('about')} className="text-white"> About US</Link>
                            </li>
                            <li className="mx-3 list-inline-item">
                                <Link href={route('home')} className="text-white"> Terms</Link>
                            </li>
                            <li className="mx-3 list-inline-item">
                                <Link href={route('home')} className="text-white"> Privacy Policies</Link>
                            </li>
                            <li className="mx-3 list-inline-item">
                                <Link href={route('home')} className="text-white"> Cookies</Link>
                            </li>
                            <li className="mx-3 list-inline-item">
                                <Link href={route('home')} className="text-white"> Status</Link>
                            </li>
                        </ul>
                    </div>

                    {/* CODECATALYSTS Section */}
                    <div className="text-center col-md-6">
                        <h5>© 2024 CODECATALYSTS</h5>
                        <ul className="mb-0 list-inline">
                            <li className="mx-3 list-inline-item">
                                <Link href={route('home')} className="text-white"> Developers</Link>
                            </li>
                            <li className="mx-3 list-inline-item">
                                <Link href={route('home')} className="text-white"> License & Registrations</Link>
                            </li>
                            <li className="mx-3 list-inline-item">
                                <Link href={route('home')} className="text-white"> Privacy Terms</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default MainFooter
