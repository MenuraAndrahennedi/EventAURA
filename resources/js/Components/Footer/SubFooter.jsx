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
                    {/* <h1>Connect With US</h1> */}
                    
                        <Link href="/connect-with-us"><h1>Connect With Us</h1></Link>
                        <Link href ="/reviewPg" className='element'>Leave a Review</Link>
                        <Link to='/help' className='element'><br />Help Center</Link>
                    
                    <div className="flex-wrap gap-0 mt-3 social-icons d-flex justify-content-center">
                        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={FB} alt="Facebook" className="mx-5 social-icon" />
                        </Link>
                        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={Instar} alt="Instagram" className="mx-5 social-icon" />
                        </Link>
                        <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={X} alt="X" className="mx-5 social-icon" />
                        </Link>
                        <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedIn} alt="LinkedIn" className="mx-5 social-icon" />
                        </Link>
                    </div>
                </div>

                {/* Links Section */}
                <div className="mt-4 footer-links row">
                    <div className="mb-3 text-center col-md-6">
                        <h5>© 2024 EventAURA</h5>
                        <ul className="list-inline">
                            <li className="mx-2 list-inline-item d-block d-md-inline">
                                <Link href="/about" className="footer-link">About Us</Link>
                            </li>
                            <li className="mx-3 list-inline-item">
                                <Link href="/terms" className="footer-link">Terms</Link>
                            </li>
                            <li className="mx-3 list-inline-item">
                                <Link href="/privacy" className="footer-link">Privacy Policies</Link>
                            </li>
                            <li className="mx-3 list-inline-item">
                                <Link href="/cookies" className="footer-link">Cookies</Link>
                            </li>
                            <li className="mx-3 list-inline-item">
                                <Link href="/status" className="footer-link">Status</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-3 text-center col-md-6">
                        <h5>© 2024 CODECATALYSTS</h5>
                        <ul className="list-inline">
                            <li className="mx-3 list-inline-item">
                                <Link thref="/developers" className="footer-link">Developers</Link>
                            </li>
                            <li className="mx-3 list-inline-item">
                                <Link href="/license" className="footer-link">License & Registrations</Link>
                            </li>
                            <li className="mx-3 list-inline-item">
                                <Link href="/privacy-terms" className="footer-link">Privacy Terms</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default SubFooter
