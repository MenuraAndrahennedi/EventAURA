import React, { useState } from 'react';
import { usePage, useForm,router } from '@inertiajs/react';
import '../../../../css/profile.scss';
import TBHeader from '../../../Components/Header/EHHeader';
import AdminFooter from '../../../Components/Footer/AdminFooter';
import EHSidebar from './EHSidebar';

const EHEditProfile = () => {
  const { user } = usePage().props; // Get user data from Inertia
  const { data, setData, post, processing, errors } = useForm({
    name: user.name || '',
    email: user.email || '',
    telephone: user.telephone || '',
    avatar:null,
  });

 // Handle file input change
const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setData('avatar', file); // Only set if a file is selected
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();

  //     // Remove avatar field if no new file is selected
  // const updatedData = { ...data };
  // if (!data.avatar) {
  //   delete updatedData.avatar;
  // }

  // post(route('eventhost.profile.update'), updatedData);// Submit form using Inertia
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('telephone', data.telephone);

  if (data.avatar) {
      formData.append('avatar', data.avatar); // Append file
  }

  // post(route('eventhost.profile.update'), {
  //     data: formData,
  //     forceFormData: true, // Ensure Inertia sends it as FormData
  // });
  
  router.post(route('eventhost.profile.update'), formData, {
    forceFormData: true, // Forces Inertia to send as multipart/form-data
    preserveScroll: true, // Prevents the page from scrolling up after submission
});
  };

  return (
    <div className="page-wrapper">
      <header>
        <TBHeader />
      </header>

      <main className="main-box">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              <EHSidebar />
            </div>
            <div className="col-md-9">
              <div className="border-0 shadow card">
                <div className="card-body">
                  <h5 className="text-center"><b>Edit Profile</b></h5>
                  <form onSubmit={handleSubmit} encType="multipart/form-data">
                    
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" name="name" value={data.name} onChange={(e) => setData('name', e.target.value)} className="form-control" />
                      {errors.name && <small className="text-danger">{errors.name}</small>}
                    </div>

                    <div className="mt-3 form-group">
                      <label>Email</label>
                      <input type="email" name="email" value={data.email} onChange={(e) => setData('email', e.target.value)} className="form-control" />
                      {errors.email && <small className="text-danger">{errors.email}</small>}
                    </div>

                    <div className="mt-3 form-group">
                      <label>Telephone</label>
                      <input type="text" name="telephone" value={data.telephone} onChange={(e) => setData('telephone', e.target.value)} className="form-control" />
                      {errors.telephone && <small className="text-danger">{errors.telephone}</small>}
                    </div>

                    <div className="mt-3 form-group">
                      <label>Profile Picture</label>
                      <input type="file" name="avatar" onChange={handleAvatarChange} className="form-control" />
                      {errors.avatar && <small className="text-danger">{errors.avatar}</small>}
                    </div>

                    <div className="mt-4 text-end">
                      <button type="submit" className="btn btn-primary" disabled={processing}> {processing ? 'Updating...' : 'Update Profile'}</button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <AdminFooter />
      </footer>
    </div>
  );
};

export default EHEditProfile;
