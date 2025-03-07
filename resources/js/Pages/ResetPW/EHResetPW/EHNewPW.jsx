import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import EHHeader from './../../../Components/Header/EHHeader';
import SubFooter from './../../../Components/Footer/SubFooter';
import '../../../../css/ResetPW.scss';


const EHNewPW = () => {
  return (
    <>
    <header>
       <EHHeader />
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

export default EHNewPW