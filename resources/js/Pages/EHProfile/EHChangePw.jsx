import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import SubFooter from './../../Components/Footer/SubFooter';
import EHHeader from './../../Components/Header/EHHeader';
import '../../../css/Profile.scss';
import profilelogo from '../../../js/assets/Images/Profile-logo.png';
import EHSidebar from './../Manager/PendingRequests/HeadBar';


const EHChangePw = () => {
  return (
    <>
      <header>
        <EHHeader />
      </header>

      <main>
        <div className="container my-5">
              <div className="border-0 shadow card">
                <div className="text-center card-body">
                    <h1><b>Hi Anura!</b></h1>
                    <h4><b>Welcome to Your Profile</b></h4>
                    <img src= {profilelogo} alt="Avatar"className="profile-avatar" />
                </div>
              </div>

              <div className="mt-4 row">
                  <div className="col-md-3">
                    <EHSidebar />
                  </div>
                  <div className="col-md-9">
                    <div className="border-0 shadow card">
                      <div className="card-body profile-details">
                        <h5 className="text-center"><b>Change Password</b></h5>
                        <p className="text-center">@username</p>

                        <div className="details-grid">
                            <div className="detail-label">Full Name:</div>
                            <input type="text" className="form-control" placeholder="Enter Full Name" />
                            
                            <div className="detail-label">Email:</div>
                            <input type="email" className="form-control" placeholder="Enter Email" />

                            <div className="detail-label">Telephone No:</div>
                            <input type="text" className="form-control" placeholder="Enter Telephone No" />
                        </div>

                        <div className="text-end">
                          <button className="mt-3 btn btn-secondary me-2">Cancel</button>
                          <button className="mt-3 btn btn-primary ">Save Changes</button>
                        </div>
                    </div>
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

export default EHChangePw