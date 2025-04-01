import React from 'react'
import '../../../css/style.scss';
import { Link } from '@inertiajs/react';

import FB from '../../assets/Logos/fb black.png';
import Instar from '../../assets/Logos/Instargram black.png';
import X from '../../assets/Logos/logo X black.png';
import LinkedIn from '../../assets/Logos/linkedIn black.png';

const SubFooter = () => {
    return (
        <footer className="sub-footer bg-dark text-white">
            <div className="container text-center py-4">
                {/* Stay Updated Section */}
                <div className="stay-updated">
                    {/* <h1>Connect With US</h1> */}
                    <Link href="/connect-with-us"><h1>Connect With Us</h1></Link>
                    <Link href ="/reviewPg" className='element'>Leave a Review</Link>
                    <Link to='/help' className='element'><br />Help Center</Link>
                    <div className="social-icons d-flex justify-content-center mt-4">
                        <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={FB} alt="Facebook" className="social-icon mx-5" />
                        </Link>
                        <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={Instar} alt="Instagram" className="social-icon mx-5" />
                        </Link>
                        <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={X} alt="X" className="social-icon mx-5" />
                        </Link>
                        <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedIn} alt="LinkedIn" className="social-icon mx-5" />
                        </Link>
                    </div>
                </div>

                {/* Links Section */}
                <div className="footer-links row mt-4">
                    <div className="col-md-6 mb-3 text-center">
                        <h5>© 2024 EventAURA</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item mx-3">
                                <Link to="/about" className="footer-link">About Us</Link>
                            </li>
                            <li className="list-inline-item mx-3">
                                <Link to="/terms" className="footer-link">Terms</Link>
                            </li>
                            <li className="list-inline-item mx-3">
                                <Link to="/privacy" className="footer-link">Privacy Policies</Link>
                            </li>
                            <li className="list-inline-item mx-3">
                                <Link to="/cookies" className="footer-link">Cookies</Link>
                            </li>
                            <li className="list-inline-item mx-3">
                                <Link to="/status" className="footer-link">Status</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6 mb-3 text-center">
                        <h5>© 2024 CODECATALYSTS</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item mx-3">
                                <Link to="/developers" className="footer-link">Developers</Link>
                            </li>
                            <li className="list-inline-item mx-3">
                                <Link to="/license" className="footer-link">License & Registrations</Link>
                            </li>
                            <li className="list-inline-item mx-3">
                                <Link to="/privacy-terms" className="footer-link">Privacy Terms</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default SubFooter
