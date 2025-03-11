import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import MainHeader from './../../Components/Header/MainHeader';
import SubFooter from './../../Components/Footer/SubFooter';
import '../../../css/TBLogin.scss';

const TBCreateAcc = () => {
  return (
    <>
        <header>
          <MainHeader/> 
        </header>

        <main>
          <div className="TB-Loginform-container">
            <div className="TB-Login-overlay">
              <h2>Create your Account</h2>
              <form>
                <input type="text" placeholder="Name" required />
                <input type="text" placeholder="Email" required />
                <input type="text" placeholder="Telephone No" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />

                <button type="submit">Continue</button>

                <div className="sign-up">
                  <small> <Link href={route('home')} className="custom-link">Terms and Conditions </Link>
                    </small>
                </div>

              </form>
              
              <hr className="custom-hr" />
              
              <div className="sign-up">
                <small>Already Have an account ? <Link href={route('tb_login')} > Sign in</Link>
                    </small>
              </div>

            </div>
          </div>
        </main>
      
      
        <footer>
          <SubFooter />
        </footer>
    </>
  )
}

export default TBCreateAcc