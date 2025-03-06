import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import '../../../css/TBLogin.scss';
import MainHeader from './../../Components/Header/MainHeader';
import SubFooter from './../../Components/Footer/SubFooter';

const TBLogin = () => {
  return (
    <>
        <header>
          <MainHeader/> 
        </header>

        <main>
          <div className="TB-Loginform-container">
            <div className="TB-Login-overlay">
              <h2>Sign in to EventAURA</h2>
              
              <div className="guest">
                  <small>
                    {/*<Link to="/">or continue as Guest</Link>*/}
                    <Link href={route('home')} >or continue as Guest</Link></small>
                </div>
                
              <form>
                <input type="text" placeholder="Email / Username" required />
                <input type="password" placeholder="Password" required />
                <div className="forgot-password">
                  <small>
                    {/*<Link to="/ForgotPW">Forgot Password?</Link>*/}
                    <Link href={route('home')} >Forgot Password?  </Link></small>
                </div>
                <button type="submit">Sign In</button>
              </form>

              <div className="divider"><span>or login with</span></div>
              
              <div className="social-login">
                <a href="https://www.google.com" className="btn-google" target="_blank" rel="noopener noreferrer">Google</a>
                <a href="https://www.facebook.com" className="btn-facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.apple.com" className="btn-apple" target="_blank" rel="noopener noreferrer">Apple</a>

              </div>
              <div className="sign-up">
                <small>Don’t have an account?    <Link href={route('home')} >Create an account</Link>
                {/*<Link to='/TBCreateAccount'>Create an account</Link>*/}</small>
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

export default TBLogin