import React from 'react'
import '../OtherLogin/OtherLogin.scss';
import { Link } from 'react-router-dom';
import UserHeader from '../../Components/Header/UserHeader';
import AdminFooter from './../../Components/Footer/AdminFooter';

const VerficationPg02 = () => {
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
            <input type="text" placeholder="Email/Username" required /><br />
            <input type="password" placeholder="Password" required />
            <h5 style={{ color: 'black' }}>Verified.</h5>

            <Link to='/' className='CustomButton1'>Verify</Link >
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

export default VerficationPg02