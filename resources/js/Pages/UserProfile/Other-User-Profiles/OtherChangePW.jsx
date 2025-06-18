import React, { useState } from 'react'
import { usePage, useForm } from '@inertiajs/react';
import profilelogo from '../../../assets/Images/Profile-logo.png';
import '../profile.scss';
import UserHeader from './../../../Components/Header/UserHeader';
import OtherSideBar from './OtherSideBar';
import AdminFooter from './../../../Components/Footer/AdminFooter';


const OtherChangePW = () => {
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
      post(route('admin.updateProfile'), {
        onSuccess: () => {
          setShowPasswordForm(true); 
        },
      });
    };
  
    const handleUpdatePassword = () => {
      post(route('admin.updatePassword'), {
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

  return (
    <>
    <header>
      <UserHeader />
    </header>

    <main>
      <div className="container my-5">
            <div className="border-0 shadow card">
              <div className="text-center card-body">
                  <h1><b>Hi {user.name}!</b></h1>
                  <h4><b>Welcome to Your Profile</b></h4>
                  <img src= {profilelogo} alt="Avatar"className="profile-avatar" style={{ display: 'block', margin: '0 auto' }}/>
              </div>
            </div>

            <div className="mt-4 row">
                <div className="col-md-3">
                  <OtherSideBar />
                </div>
                <div className="col-md-9">
                  <div className="border-0 shadow card">
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
                        <button className="mt-3 btn btn-secondary me-2" onClick={handleCancel}>Cancel</button>
                        <button className="mt-3 btn btn-primary" onClick={handleSaveChanges} disabled={processing}>Save Changes</button>
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
                        <button className="mt-3 btn btn-secondary me-2" onClick={handleCancel}>Cancel</button>
                        <button className="mt-3 btn btn-success" onClick={handleUpdatePassword} disabled={processing}>Update Password</button>
                      </div>
                    </div>
                  )}
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

export default OtherChangePW