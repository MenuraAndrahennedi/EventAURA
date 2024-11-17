import React from 'react'
import './ResetPW.scss';
import { Link } from 'react-router-dom';
import MainHeader from '../../Components/Header/MainHeader';
import SubFooter from '../../Components/Footer/SubFooter';

const SetNewPw = () => {
  return (
    <>
      <header>
         <MainHeader />
      </header>

      <div className="reset-password-container">
        <div className="reset-password-overlay">
          <h2>Set New Password</h2>
          <p>Choose a strong password to protect your account</p>
          <form>
            <input type="password" placeholder="Enter New Password" required />
            <input type="password" placeholder="Confirm New Password" required />
            <button type="submit">Change Password</button>
          </form>
        </div>
      </div>
      
    
    
      <footer>
        <SubFooter />
      </footer>
    </>
  )
}

export default SetNewPw
