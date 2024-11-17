import React from 'react'
import MainHeader from '../../Components/Header/MainHeader'
import SubFooter from './../../Components/Footer/SubFooter';
import './ResetPW.scss';
import { Link } from 'react-router-dom';

const ForgotPW = () => {
  return (
    <>
      <header>
        <MainHeader/> 
      </header>

      <div className="reset-password-container">
        <div className="reset-password-overlay">
          <h2>Password Reset</h2>
          <p>Enter your email address to reset your password</p>
          <form>
            <input type="email" placeholder="Email" required />
            <Link to="/PWVerification"><button type="submit">Reset</button></Link>
          </form>
        </div>
      </div>
      
    
    
      <footer>
        <SubFooter />
      </footer>
      
    </>
  )
}

export default ForgotPW
