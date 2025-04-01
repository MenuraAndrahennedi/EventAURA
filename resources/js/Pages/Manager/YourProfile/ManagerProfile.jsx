import React from 'react';
import {Link, usePage } from '@inertiajs/react';
import profilelogo from '../../../assets/Images/Profile-logo.png';
import '../../../../css/profile.scss';
import UserHeader from '../../../Components/Header/UserHeader';
import AdminFooter from '../../../Components/Footer/AdminFooter';
import OtherSideBar from './ManagerSideBar';

const ManagerProfile = () => {
  const { user } = usePage().props; // Get user data from Inertia
  return (
    <>
      <header>
        <UserHeader />
      </header>

      <main>
        <div className="container my-5">
              <div className="card shadow border-0">
                <div className="card-body text-center">
                    <h1><b>Hi {user.name}!</b></h1>
                    <h4><b>Welcome to Your Profile</b></h4>
                    <img src= {user.avatar ? `/storage/${user.avatar}` : profilelogo}  alt="Avatar"className="profile-avatar" />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-3">
                  <OtherSideBar />
                </div>
                <div className="col-md-9">
                  <div className="card shadow border-0">
                    <div className="card-body profile-details">
                    <h5 className="text-center"><b>Profile Details</b></h5>
                    <p className="text-center">@{user.name}</p>
                  
                  
                  <div className="details-grid">
                    <div className="detail-label">Full Name:</div>
                    <div className="detail-value">{user.name}</div>
                    
                    <div className="detail-label">Email:</div>
                    <div className="detail-value">{user.email}</div>
                    
                    <div className="detail-label">Telephone No:</div>
                    <div className="detail-value">{user.telephone}</div>
                  </div>

                  <div className="text-end">
                    <Link href={route('manager.profile.edit')} className="btn btn-primary mt-3">Edit Profile</Link>
                  </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </main>
      
      <footer>
        < AdminFooter/>
      </footer>
    </>
  )
}

export default ManagerProfile