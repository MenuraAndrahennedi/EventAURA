import React, { useState } from 'react';
import TBHeader from '../../../Components/Header/TBHeader'
import SubFooter from '../../../Components/Footer/SubFooter'
import TBSidebar from './TBSidebar'
import profilelogo from '../../../assets/Logos/Profile-logo.jpg';
import '../profile.scss';
import { useForm, usePage } from '@inertiajs/react';

const TBProfile = () => {
  const { user } = usePage().props;
  const [isEditing, setIsEditing] = useState(false);

  const { data, setData, post } = useForm({
    email: user.email,
    telephone: user.telephone,
    profile_image: null,
  });

  const handleChange = (e) => setData(e.target.name, e.target.value);
  const handleImageChange = (e) => setData('avatar', e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('profile.update'), { onSuccess: () => setIsEditing(false) });
  };
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
                    <img 
                src={user.avatar ? `/storage/${user.avatar}` : profilelogo} 
                alt="Avatar" 
                className="profile-avatar" 
              />
              </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-3">
                  <TBSidebar />
                </div>
                <div className="col-md-9">
                  <div className="card shadow border-0">
                    <div className="card-body profile-details">
                    <h5 className="text-center"><b>Profile Details</b></h5>
                    <p className="text-center">@{user.name}</p>
                  
                    {isEditing ? (
                    <form onSubmit={handleSubmit}>
                      <div>

                        <label>Email:</label>
                        <input type="email" name="email" value={data.email} onChange={handleChange} className="form-control" />

                        <label>Telephone:</label>
                        <input type="text" name="telephone" value={data.telephone} onChange={handleChange} className="form-control" />

                        <label>Profile Image:</label>
                        <input type="file" name="avatar" onChange={handleImageChange} className="form-control" />
                      </div>

                      <div className="text-end mt-3">
                        <button type="button" className="btn btn-secondary me-2" onClick={() => setIsEditing(false)}>Cancel</button>
                        <button type="submit" className="btn btn-primary">Save</button>
                      </div>
                    </form>
                  ) : (
                    <>
                      <div className="details-grid">
                        <div className="detail-label">Full Name:</div>
                        <div className="detail-value">{user?.name || 'Name not available'}</div>
                  
                        <div className="detail-label">Email:</div>
                        <div className="detail-value">{user?.email || 'Email not available'}</div>
                  
                        <div className="detail-label">Telephone No:</div>
                        <div className="detail-value">{user?.telephone ?? 'Not Available'}</div>
                      </div>
                  
                      <div className="text-end">
                        <button className="btn btn-primary mt-3" onClick={() => setIsEditing(true)}>Edit Profile</button>
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
        <SubFooter />
      </footer>
    </>
    
  )
}

export default TBProfile
