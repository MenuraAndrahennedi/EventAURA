import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import UserHeader from './../../Components/Header/UserHeader';
import AdminFooter from './../../Components/Footer/AdminFooter';
import '../../../css/UserLogin.scss';
//26
const Verification01 = () => {
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
              
              <Link href={route('verification02')} className="CustomButton1">Verify </Link>
              <Link href={route('home')} className="CustomButton">Sign in  </Link>
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

export default Verification01