import React from 'react'
import { Link } from '@inertiajs/react';
import '../../../css/style.scss';

const MainFooter = () => {
    return (
        <footer className="py-4 text-white bg-dark">
            // Footer element with padding, white text, and dark background
            
            <div className="container">
                <div className="row justify-content-between">
                {/* Row to distribute content between EventAURA and CODECATALYSTS sections */}

                    {/* EventAURA Section */}
                    <div className="text-center col-md-6">
                        <h5>© 2025 EventAURA</h5>

                        {/* Inline navigation list */}
                        <ul className="mb-0 list-inline">
                            <li className="mx-3 list-inline-item">
                                <Link to="/about" className="text-white">About US</Link>
                            </li>
                            <li className="mx-3 list-inline-item">
                                <Link to="/terms" className="text-white">Terms</Link>
                            </li>
                            <li className="mx-3 list-inline-item">
                                <Link to="/privacy" className="text-white">Privacy Policies</Link>
                            </li>
                            <li className="mx-3 list-inline-item">
                                <Link to="/cookies" className="text-white">Cookies</Link>
                            </li>
                            <li className="mx-3 list-inline-item">
                                <Link to="/status" className="text-white">Status</Link>
                            </li>
                        </ul>
                    </div>


                    {/* CODECATALYSTS Section */}
                    <div className="text-center col-md-6">
                        <h5>© 2025 CODECATALYSTS</h5>
                        
                        {/* Inline navigation list */}
                        <ul className="mb-0 list-inline">
                            <li className="mx-3 list-inline-item">
                                <Link to="/developers" className="text-white">Developers</Link>
                            </li>
                            <li className="mx-3 list-inline-item">
                                <Link to="/license" className="text-white">License & Registrations</Link>
                            </li>
                            <li className="mx-3 list-inline-item">
                                <Link to="/privacy-terms" className="text-white">Privacy Terms</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default MainFooter
