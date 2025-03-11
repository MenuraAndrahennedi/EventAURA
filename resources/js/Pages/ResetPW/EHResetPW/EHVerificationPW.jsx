import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import EHHeader from './../../../Components/Header/EHHeader';
import SubFooter from './../../../Components/Footer/SubFooter';
import '../../../../css/ResetPW.scss';

const EHVerificationPW = () => {
  return (
    <>
      <header>
        <EHHeader /> 
      </header>

      <div className="reset-password-container">
        <div className="reset-password-overlay">
          <h2>Password Reset</h2>
          <p>Enter the verification code that was sent to abc@gmail.com</p>
          <form>
            <input type="text" placeholder="Code" required />
            <Link href={route('eh_new_pw')} ><button type="submit">Reset</button></Link>
          </form>
        </div>
      </div>

      <footer>
        <SubFooter />
      </footer>
    </>
  )
}

export default EHVerificationPW