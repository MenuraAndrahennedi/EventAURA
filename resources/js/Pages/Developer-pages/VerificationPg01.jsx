import React from 'react'
import '../../../css/OtherLogin.scss';
import { Link } from '@inertiajs/react';
import AdminFooter from './../../Components/Footer/AdminFooter';
import UserHeader from './../../Components/Header/UserHeader';

const VerificationPg01 = () => {
  return (
    <>
      <header>
        <UserHeader/> 
      </header>

    
      <main>
        <div className="OL-LoginForm-container ">
          <div className="OL-Login-overlay">
            <h2><b>Verification</b></h2>

            <br />

            {/* Verification form */}
            <form>
              <input type="password" placeholder="Password" required />
              <Link to='/VerificationPg02' className='CustomButton1'>Verify</Link >
              <Link to='/' className='CustomButton'>Sign in</Link >
            </form>

          </div>
        </div>
      </main>
    
      <footer>
        <AdminFooter />
      </footer>
    </>
    
  )
}

export default VerificationPg01