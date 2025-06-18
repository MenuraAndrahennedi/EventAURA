import React, { useState } from 'react'
import profilelogo from '../../../assets/Images/Profile-logo.png';
import '../profile.scss';
import UserHeader from './../../../Components/Header/UserHeader';
import AdminFooter from './../../../Components/Footer/AdminFooter';
import OtherSideBar from './OtherSideBar';
import { useForm, usePage } from '@inertiajs/react';

const OtherProfile = () => {

  const { user } = usePage().props; 
  
    const { data, setData, post, processing, reset, errors } = useForm({
        fullName: user.name || '',
        email: user.email || '',
        telephone: user.telephone || '',
        avatar:null,
      });
    
      const [showProfileForm, setShowProfileForm] = useState(false);
    
      const handleChange = (e) => {
        setData(e.target.name, e.target.value);
      };
    
      const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        setData('avatar', file || null); // Only set if a file is selected
      }; 

      const handleSaveChanges = () => {
        post(route('admin.updateProfile'), {
          onSuccess: () => {
            setShowProfileForm(true); 
          },
        });
      };
  
      const handleSave = () => {
        post(route('admin.updateProfile'), {
          onSuccess: () => {
            alert("Profile updated successfully!"); 
            setShowProfileForm(false); 
          },
          onError: (errors) => {
            console.error(errors); 
          }
        });
      };
    
      const handleCancel = () => {
        reset();
        setShowProfileForm(false);
      };

  return (
    <div className="page-wrapper">
      <header>
        <UserHeader />
      </header>

      <main className="main-box">
        <div className="container my-5">
              <div className="border-0 shadow card">
                <div className="text-center card-body">
                    <h1><b>Hi {user.name}!</b></h1>
                    <h4><b>Welcome to Your Profile</b></h4>
                    <img src= {user.avatar || profilelogo} alt="Avatar"className="profile-avatar" style={{ display: 'block', margin: '0 auto' }} />
                </div>
              </div>

              <div className="mt-4 row">
                <div className="col-md-3">
                  <OtherSideBar />
                </div>
                <div className="col-md-9">
                  <div className="border-0 shadow card">
                    <div className="card-body profile-details">
                    <h5 className="text-center"><b>Profile Details</b></h5>


                    {showProfileForm ? (
                    
                    <div className="details-grid">
                      <div className="detail-label">Full Name:</div>
                      <input
                        type="text"
                        name="fullName"
                        className="form-control"
                        value={data.name}
                        onChange={handleChange}
                        required
                      />

                      <div className="detail-label">Email:</div>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={data.email}
                        onChange={handleChange}
                        required
                      />

                      <div className="detail-label">Telephone No:</div>
                      <input
                        type="text"
                        name="telephone"
                        className="form-control"
                        value={data.telephone}
                        onChange={handleChange}
                      />

                      <div className="detail-label">Profile Picture:</div>
                      <input
                        type="file"
                        name="avatar"
                        className="form-control"
                        onChange={handleAvatarChange}
                      />
                   
                    <div className="text-end">
                      <button type="submit" className="mt-3 btn btn-success" onClick={handleSave}>Save</button>
                      <button type="button" className="mt-3 btn btn-secondary ms-2" onClick={handleCancel}>Cancel</button>
                    </div>
                    </div>

                ) : (

                  <>
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
                      <button className="mt-3 btn btn-primary" onClick={handleSaveChanges}>Edit Profile</button>
                    </div>
                  </>
                )}
                </div>
            </div>
        </div>
        </div>
        </div>
      </main>
      
      <footer>
        < AdminFooter/>
      </footer>
    </div>
  )
}

export default OtherProfile