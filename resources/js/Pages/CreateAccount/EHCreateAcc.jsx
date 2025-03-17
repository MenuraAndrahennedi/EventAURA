import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import '../../../css/EHLogin.scss';
import MainHeader from './../../Components/Header/MainHeader';
import SubFooter from './../../Components/Footer/SubFooter';

const EHCreateAcc = () => {
  return (
    <>
        <header>
        <MainHeader/> 
        </header>

        <main className="login-page d-flex align-items-stretch">
          <div className="image-section"></div>
          
          <div className="login-form-section d-flex justify-content-center align-items-center">
            <div className="login-form">
              <div className="border-0 shadow card">
                <div className="p-4 card-body">
                  <h2 className="mb-4 text-center"> Create Your account</h2>

                  <form>

                    <div className="mb-3">
                      <input type="text" placeholder="Name" className="form-control" />
                    </div>

                    <div className="mb-3">
                      <input type="email" placeholder="Email" className="form-control" />
                    </div>

                    <div className="mb-3">
                      <input type=" text" placeholder="Telephone No" className="form-control" />
                    </div>

                    <div className="mb-3">
                      <input type="password" placeholder="Password" className="form-control" />
                    </div>

                    <div className="mb-3">
                      <input type="password" placeholder=" Confirm Password" className="form-control" />
                    </div>

                    <button className="mb-3 btn btn-primary w-100">Continue</button>
                    
                    <div className="mb-3 text-center"><small>
                      <Link href={route('home')} >Terms and Conditions </Link>
                    </small></div >

                    <hr />

                    <div className="mt-4 text-center">
                      <small>Already have an account? <Link href={route('eh_login')} > Sign in</Link></small>
                    </div>

                  </form>

                </div>
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

export default EHCreateAcc
