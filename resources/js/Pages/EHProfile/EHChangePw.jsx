<<<<<<< HEAD:resources/js/Pages/UserProfile/EH-Profiles/EHChangePW.jsx
import React, { useState } from 'react';
import { usePage, useForm } from '@inertiajs/react';
import profilelogo from '../../../assets/Images/Profile-logo.png';
import '../profile.scss';
import EHSidebar from './EHSidebar';
import EHHeader from '../../../Components/Header/EHHeader';
import SubFooter from '../../../Components/Footer/SubFooter';

const EHChangePW = () => {
  const { user } = usePage().props;

  const { data, setData, post, processing, reset, errors } = useForm({
    fullName: user.name || '',
    email: user.email || '',
    telephone: user.telephone || '',
    password: '',
    password_confirmation: '',
  });

  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const handleSaveChanges = () => {
    post(route('eventhost.updateProfile'), {
      onSuccess: () => {
        setShowPasswordForm(true); 
      },
    });
  };

  const handleUpdatePassword = () => {
    post(route('eventhost.updatePassword'), {
      onSuccess: () => {
        reset('password', 'password_confirmation');
        setShowPasswordForm(false);
      },
    });
  };

  const handleCancel = () => {
    reset();
    setShowPasswordForm(false);
  };

=======
import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import SubFooter from './../../Components/Footer/SubFooter';
import EHHeader from './../../Components/Header/EHHeader';
import '../../../css/Profile.scss';
import profilelogo from '../../../js/assets/Images/Profile-logo.png';
import EHSidebar from '../../../js/Components/SideBar/EHSideBar';


const EHChangePw = () => {
>>>>>>> Hirunika's-Branch:resources/js/Pages/EHProfile/EHChangePw.jsx
  return (
    <>
      <header>
        <EHHeader />
      </header>

      <main>
        <div className="container my-5">
<<<<<<< HEAD:resources/js/Pages/UserProfile/EH-Profiles/EHChangePW.jsx
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <h1><b>Hi {user.name}!</b></h1>
              <h4><b>Welcome to Your Profile</b></h4>
              <img src={profilelogo} alt="Avatar" className="profile-avatar" />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-3">
              <EHSidebar />
            </div>
            <div className="col-md-9">
              <div className="card shadow border-0">
                <div className="card-body profile-details">
                  <h5 className="text-center"><b>Change Password</b></h5>
                  <p className="text-center">@{user.name}</p>

                  {!showPasswordForm ? (
                    <div className="details-grid">
                      <div className="detail-label">Full Name:</div>
                      <input type="text" name="fullName" className="form-control" value={data.fullName} onChange={handleChange} placeholder="Enter Full Name" />
                      {errors.fullName && <div className="text-danger">{errors.fullName}</div>}

                      <div className="detail-label">Email:</div>
                      <input type="email" name="email" className="form-control" value={data.email} onChange={handleChange} placeholder="Enter Email" />
                      {errors.email && <div className="text-danger">{errors.email}</div>}

                      <div className="detail-label">Telephone No:</div>
                      <input type="text" name="telephone" className="form-control" value={data.telephone} onChange={handleChange} placeholder="Enter Telephone No" />
                      {errors.telephone && <div className="text-danger">{errors.telephone}</div>}

                      <div className="text-end">
                        <button className="btn btn-secondary mt-3 me-2" onClick={handleCancel}>Cancel</button>
                        <button className="btn btn-primary mt-3" onClick={handleSaveChanges} disabled={processing}>Save Changes</button>
                      </div>
                    </div>
                  ) : (
                    <div className="password-reset-form">
                      <h5 className="text-center"><b>Reset Password</b></h5>
                      <div className="mb-3">
                        <label>New Password</label>
                        <input type="password" name="password" className="form-control" value={data.password} onChange={handleChange} placeholder="Enter new password" />
                        {errors.password && <div className="text-danger">{errors.password}</div>}
                      </div>
                      <div className="mb-3">
                        <label>Confirm Password</label>
                        <input type="password" name="password_confirmation" className="form-control" value={data.password_confirmation} onChange={handleChange} placeholder="Confirm new password" />
                      </div>
                      <div className="text-end">
                        <button className="btn btn-secondary mt-3 me-2" onClick={handleCancel}>Cancel</button>
                        <button className="btn btn-success mt-3" onClick={handleUpdatePassword} disabled={processing}>Update Password</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
=======
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
>>>>>>> Hirunika's-Branch:resources/js/Pages/EHProfile/EHChangePw.jsx
            </div>
          </div>
        </div>
      </main>

      <footer>
        <SubFooter />
      </footer>
    </>
  );
};

<<<<<<< HEAD:resources/js/Pages/UserProfile/EH-Profiles/EHChangePW.jsx
export default EHChangePW;
=======
export default EHChangePw
>>>>>>> Hirunika's-Branch:resources/js/Pages/EHProfile/EHChangePw.jsx
