import React from 'react'
import { Link } from '@inertiajs/react';
import '../../../css/style.scss';

const MainFooter = () => {
  return (
    <footer className="bg-dark text-white py-4">
    <div className="container">
      <div className="row justify-content-between">

        {/* EventAURA Section */}
        <div className="col-md-6 text-center">
          <h5>© 2024 EventAURA</h5>
          <ul className="list-inline mb-0">
            <li className="list-inline-item mx-3">
              <Link to="/about" className="text-white">About US</Link>
            </li>
            <li className="list-inline-item mx-3">
              <Link to="/terms" className="text-white">Terms</Link>
            </li>
            <li className="list-inline-item mx-3">
              <Link to="/privacy" className="text-white">Privacy Policies</Link>
            </li>
            <li className="list-inline-item mx-3">
              <Link to="/cookies" className="text-white">Cookies</Link>
            </li>
            <li className="list-inline-item mx-3">
              <Link to="/status" className="text-white">Status</Link>
            </li>
          </ul>
        </div>

        {/* CODECATALYSTS Section */}
        <div className="col-md-6 text-center">
          <h5>© 2024 CODECATALYSTS</h5>
          <ul className="list-inline mb-0">
            <li className="list-inline-item mx-3">
              <Link to="/developers" className="text-white">Developers</Link>
            </li>
            <li className="list-inline-item mx-3">
              <Link to="/license" className="text-white">License & Registrations</Link>
            </li>
            <li className="list-inline-item mx-3">
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
