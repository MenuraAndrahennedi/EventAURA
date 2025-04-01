import React, { useState } from 'react';
import { usePage, useForm,Link } from '@inertiajs/react';
import TBHeader from '../../../Components/Header/EHHeader';
import SubFooter from '../../../Components/Footer/SubFooter';
import profilelogo from '../../../assets/Images/Profile-logo.png';
import '../profile.scss';
import EHSidebar from './EHSidebar';
import axios from 'axios';

const EHProfile = () => {
  
  const { user } = usePage().props; 

  // const { data, setData, post, processing, reset, errors } = useForm({
  //     fullName: user.name || '',
  //     email: user.email || '',
  //     telephone: user.telephone || '',
  //   });
  
  //   const [showProfileForm, setShowProfileForm] = useState(false);
  
  //   const handleChange = (e) => {
  //     setData(e.target.name, e.target.value);
  //   };
  
  //   const handleSaveChanges = () => {
  //     post(route('eventhost.updateProfile'), {
  //       onSuccess: () => {
  //         setShowProfileForm(true); 
  //       },
  //     });
  //   };

  //   const handleSave = () => {
  //     post(route('eventhost.updateProfile'), {
  //       onSuccess: () => {
  //         alert("Profile updated successfully!"); 
  //         setShowProfileForm(false); 
  //       },
  //       onError: (errors) => {
  //         console.error(errors); 
  //       }
  //     });
  //   };
  
  //   const handleCancel = () => {
  //     reset();
  //     setShowProfileForm(false);
  //   };
 

  return (
    <>
      <header>
        <TBHeader />
      </header>

      <main>
        <div className="container my-5">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <h1><b>Hi {user.name}!</b></h1> 
              <h4><b>Welcome to Your Profile</b></h4>
              <img src={user.avatar ? `/storage/${user.avatar}` : profilelogo}  alt="Avatar" className="profile-avatar" />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-3">
              <EHSidebar />
            </div>
            <div className="col-md-9">
              <div className="card shadow border-0">
                <div className="card-body profile-details">
                  <h5 className="text-center"><b>Profile Details</b></h5>
                  <p className="text-center">@{user.name}</p>
                  {/* {showProfileForm ? (
                    
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
                     
                      <div className="text-end">
                        <button type="submit" className="btn btn-success mt-3" onClick={handleSave}>Save</button>
                        <button type="button" className="btn btn-secondary mt-3 ms-2" onClick={handleCancel}>Cancel</button>
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
                        <button className="btn btn-primary mt-3" onClick={handleSaveChanges}>Edit Profile</button>
                      </div>
                    </>
                  )} */}
                   <div className="details-grid">
                    <div className="detail-label">Full Name:</div>
                    <div className="detail-value">{user.name}</div>
                    
                    <div className="detail-label">Email:</div>
                    <div className="detail-value">{user.email}</div>
                    
                    <div className="detail-label">Telephone No:</div>
                    <div className="detail-value">{user.telephone}</div>
                  </div>

                  <div className="text-end">
                    <Link href={route('eventhost.profile.edit') }className="btn btn-primary mt-3">Edit Profile</Link>
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
  );
}

export default EHProfile;
