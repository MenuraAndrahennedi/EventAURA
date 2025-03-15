import React from 'react'
import '../OtherLogin/OtherLogin.scss';
import { Link } from 'react-router-dom';
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