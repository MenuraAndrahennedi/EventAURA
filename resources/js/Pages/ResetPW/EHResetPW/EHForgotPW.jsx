import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import EHHeader from './../../../Components/Header/EHHeader';
import SubFooter from './../../../Components/Footer/SubFooter';
import '../../../../css/ResetPW.scss';

const EHForgotPW = () => {
  return (
    <>
      <header>
        <EHHeader/> 
      </header>

      <div className="reset-password-container">
        <div className="reset-password-overlay">
          <h2>Password Reset</h2>
          <p>Enter your email address to reset your password</p>
          <form>
            <input type="email" placeholder="Email" required />
             <Link href={route('eh_verification_pw')} ><button type="submit">Reset</button></Link>
          </form>
        </div>
      </div>
      
    
    
      <footer>
        <SubFooter />
      </footer>
      
    </>
  )
}

export default EHForgotPW