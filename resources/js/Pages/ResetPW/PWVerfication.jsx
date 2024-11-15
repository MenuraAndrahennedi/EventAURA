import React from 'react'
import MainHeader from '../../Components/Header/MainHeader'
import SubFooter from './../../Components/Footer/SubFooter';
import './ResetPW.scss';
import { Link } from 'react-router-dom';

const PWVerfication = () => {
  return (
    <>
      <header>
        <MainHeader /> 
      </header>

      <div className="reset-password-container">
        <div className="reset-password-overlay">
          <h2>Password Reset</h2>
          <p>Enter the verification code that was sent to abc@gmail.com</p>
          <form>
            <input type="text" placeholder="Code" required />
            <Link to="/SetNewPw"><button type="submit">Reset</button></Link>
          </form>
        </div>
      </div>

      <footer>
        <SubFooter />
      </footer>
    </>
  )
}

export default PWVerfication
