import React from 'react'
import '../../../css/style.scss';
import { Link } from '@inertiajs/react';

import FB from '../../assets/Logos/fb black.png';
import Instar from '../../assets/Logos/Instargram black.png';
import X from '../../assets/Logos/logo X black.png';
import LinkedIn from '../../assets/Logos/linkedIn black.png';

const SubFooter = () => {
    return (
        <footer className="text-white sub-footer bg-dark">
            <div className="container py-4 text-center">
                {/* Stay Updated Section */}
                <div className="stay-updated">
                    <h1>Connect With US</h1>
                    <Link to='/review' className='element'>Leave a Review</Link>
                    <Link to='/help' className='element'><br />Help Center</Link>
                    <div className="mt-4 social-icons d-flex justify-content-center">
                        <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={FB} alt="Facebook" className="mx-5 social-icon" />
                        </Link>
                        <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={Instar} alt="Instagram" className="mx-5 social-icon" />
                        </Link>
                        <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={X} alt="X" className="mx-5 social-icon" />
                        </Link>
                        <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedIn} alt="LinkedIn" className="mx-5 social-icon" />
                        </Link>
                    </div>
                </div>

                {/* Links Section */}
                <div className="mt-4 footer-links row">
                    <div className="mb-3 text-center col-md-6">
                        <h5>© 2024 EventAURA</h5>
                        <ul className="list-inline">
                            <li className="mx-3 list-inline-item">
                                <Link href={route('about')} className="text-white"> About US</Link>
                            </li>
                            <li className="mx-3 list-inline-item">
                                <Link href={route('home')} className=""> </Link>
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

                    <div className="mb-3 text-center col-md-6">
                        <h5>© 2024 CODECATALYSTS</h5>
                        <ul className="list-inline">
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

export default SubFooter
