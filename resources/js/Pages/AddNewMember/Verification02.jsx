import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import UserHeader from './../../Components/Header/UserHeader';
import AdminFooter from './../../Components/Footer/AdminFooter';
import '../../../css/UserLogin.scss';

const Verification02 = () => {
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
              <button onClick={() => route('verification02')} className="CustomButton1">Verify</button>                 //verification logic
                {/*<Link href={route('user_login')} className="CustomButton">Sign in  </Link>*/}
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

export default Verification02