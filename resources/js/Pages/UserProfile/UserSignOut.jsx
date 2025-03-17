import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import profilelogo from '../../assets/Images/Profile-logo.png';
import '../../../css/Profile.scss';
import UserHeader from './../../Components/Header/UserHeader';
import AdminFooter from './../../Components/Footer/AdminFooter';
import UserSideBar from './../../Components/SideBar/UserSideBar';

const UserSignOut = () => {
  return (
    <>
    <header>
      <UserHeader />
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
                 <UserSideBar />
              </div>
              <div className="col-md-9">
                <div className="border-0 shadow card">
                  <div className="card-body profile-details">
                      <h5 className="text-center"><b>Do you want to sign out?</b></h5>
                      <p className="text-center">@username</p><br />
                      <h5 className="text-center">Are you sure ?</h5><br />
                    <div className=" text-end">
                        <button className="mt-3 btn btn-primary me-2">Yes,Sign Out</button>
                        <button className="mt-3 btn btn-secondary">Keep,Signed in</button>
                      </div>
                  </div>
                  
                </div>
              </div>
          </div>
      </div>
    </main>

    <footer>
      <AdminFooter />
    </footer>
  </>
  )
}

export default UserSignOut