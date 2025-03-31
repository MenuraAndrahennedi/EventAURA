import React, { useState } from 'react';
import { usePage, useForm } from '@inertiajs/react';
import profilelogo from '../../../assets/Images/Profile-logo.png';
import { Eye, EyeOff } from 'lucide-react';
import '../profile.scss';
import EHSidebar from './EHSidebar';
import EHHeader from '../../../Components/Header/EHHeader';
import SubFooter from '../../../Components/Footer/SubFooter';

const EHChangePW = ({user,flash} ) => {
  // const { user } = usePage().props;

  // const { data, setData, post, processing, reset, errors } = useForm({
  //   fullName: user.name || '',
  //   email: user.email || '',
  //   telephone: user.telephone || '',
  //   password: '',
  //   password_confirmation: '',
  // });

  // const [showPasswordForm, setShowPasswordForm] = useState(false);

  // const handleChange = (e) => {
  //   setData(e.target.name, e.target.value);
  // };

  // const handleSaveChanges = () => {
  //   post(route('eventhost.updateProfile'), {
  //     onSuccess: () => {
  //       setShowPasswordForm(true); 
  //     },
  //   });
  // };

  // const handleUpdatePassword = () => {
  //   post(route('eventhost.updatePassword'), {
  //     onSuccess: () => {
  //       reset('password', 'password_confirmation');
  //       setShowPasswordForm(false);
  //     },
  //   });
  // };

  // const handleCancel = () => {
  //   reset();
  //   setShowPasswordForm(false);
  // };

  // return (
  //   <>
  //     <header>
  //       <EHHeader />
  //     </header>

  //     <main>
  //       <div className="container my-5">
  //         <div className="card shadow border-0">
  //           <div className="card-body text-center">
  //             <h1><b>Hi {user.name}!</b></h1>
  //             <h4><b>Welcome to Your Profile</b></h4>
  //             <img src={profilelogo} alt="Avatar" className="profile-avatar" />
  //           </div>
  //         </div>

  //         <div className="row mt-4">
  //           <div className="col-md-3">
  //             <EHSidebar />
  //           </div>
  //           <div className="col-md-9">
  //             <div className="card shadow border-0">
  //               <div className="card-body profile-details">
  //                 <h5 className="text-center"><b>Change Password</b></h5>
  //                 <p className="text-center">@{user.name}</p>

  //                 {!showPasswordForm ? (
  //                   <div className="details-grid">
  //                     <div className="detail-label">Full Name:</div>
  //                     <input type="text" name="fullName" className="form-control" value={data.fullName} onChange={handleChange} placeholder="Enter Full Name" />
  //                     {errors.fullName && <div className="text-danger">{errors.fullName}</div>}

  //                     <div className="detail-label">Email:</div>
  //                     <input type="email" name="email" className="form-control" value={data.email} onChange={handleChange} placeholder="Enter Email" />
  //                     {errors.email && <div className="text-danger">{errors.email}</div>}

  //                     <div className="detail-label">Telephone No:</div>
  //                     <input type="text" name="telephone" className="form-control" value={data.telephone} onChange={handleChange} placeholder="Enter Telephone No" />
  //                     {errors.telephone && <div className="text-danger">{errors.telephone}</div>}

  //                     <div className="text-end">
  //                       <button className="btn btn-secondary mt-3 me-2" onClick={handleCancel}>Cancel</button>
  //                       <button className="btn btn-primary mt-3" onClick={handleSaveChanges} disabled={processing}>Save Changes</button>
  //                     </div>
  //                   </div>
  //                 ) : (
  //                   <div className="password-reset-form">
  //                     <h5 className="text-center"><b>Reset Password</b></h5>
  //                     <div className="mb-3">
  //                       <label>New Password</label>
  //                       <input type="password" name="password" className="form-control" value={data.password} onChange={handleChange} placeholder="Enter new password" />
  //                       {errors.password && <div className="text-danger">{errors.password}</div>}
  //                     </div>
  //                     <div className="mb-3">
  //                       <label>Confirm Password</label>
  //                       <input type="password" name="password_confirmation" className="form-control" value={data.password_confirmation} onChange={handleChange} placeholder="Confirm new password" />
  //                     </div>
  //                     <div className="text-end">
  //                       <button className="btn btn-secondary mt-3 me-2" onClick={handleCancel}>Cancel</button>
  //                       <button className="btn btn-success mt-3" onClick={handleUpdatePassword} disabled={processing}>Update Password</button>
  //                     </div>
  //                   </div>
  //                 )}
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </main>

  //     <footer>
  //       <SubFooter />
  //     </footer>
  //   </>
  // );
  const { data, setData, post, processing, errors ,reset } = useForm({
    current_password: '',
    new_password: '',
    new_password_confirmation:'',
  });

  const [successMessage, setSuccessMessage] = useState(flash.success || '');

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const togglePassword = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('eventhost.profile.update-password'),{
      preserveScroll: true,
      onSuccess: () => {
        setSuccessMessage('Password updated successfully!');  // Show success message
        reset();  // Clear input fields
      },
      onError: () => {
        setSuccessMessage(''); // Clear success message if there are errors
      }
    } 
  
  ); // Laravel route for password change
  };

  return (
    <>
    <header>
      <EHHeader />
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
                  <EHSidebar />
                </div>
                <div className="col-md-9">
                  <div className="card shadow border-0">
                    <div className="card-body profile-details">
                      <h5 className="text-center"><b>Change Password</b></h5>

                        {/* Success Message with Close Button */}
                  {successMessage && (
                    <div className="alert alert-success alert-dismissible fade show d-flex justify-content-between align-items-center" role="alert">
                      {successMessage}
                      <button type="button" className="btn-close" onClick={() => setSuccessMessage('')} aria-label="Close"></button>
                    </div>
                  )}
                      {/* <p className="text-center">@username</p>

                      <div className="details-grid">
                          {/* <div className="detail-label">Full Name:</div> */}
                          {/* <input type="text" className="form-control" placeholder="Enter Full Name" />
                          
                          <div className="detail-label">Email:</div>
                          <input type="email" className="form-control" placeholder="Enter Email" />

                          <div className="detail-label">Telephone No:</div>
                          <input type="text" className="form-control" placeholder="Enter Telephone No" />
                      </div>

                      <div className="text-end">
                        <button className="btn btn-secondary mt-3 me-2">Cancel</button>
                        <button className="btn btn-primary mt-3 ">Save Changes</button>
                      </div> */} 
                      <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Current Password</label>
                      <div className="input-group">
                      <input 
                        type={showPassword.current ? "text" : "password"}
                        className="form-control" 
                        value={data.current_password} 
                        onChange={(e) => setData('current_password', e.target.value)} 
                        required 
                      />
                      <span className="input-group-text" onClick={() => togglePassword("current")} style={{ cursor: "pointer" }}>
                          {showPassword.current ? <Eye /> : <EyeOff />}
                        </span>
                        </div>
                      {errors.current_password && <div className="text-danger">{errors.current_password}</div>}
                    </div>

                    <div className="mb-3">
                      <label className="form-label">New Password</label>
                      <div className="input-group">
                      <input 
                        type={showPassword.new ? "text" : "password"} 
                        className="form-control" 
                        value={data.new_password} 
                        onChange={(e) => setData('new_password', e.target.value)} 
                        required 
                      />
                        <span className="input-group-text" onClick={() => togglePassword("new")} style={{ cursor: "pointer" }}>
                          {showPassword.new ? <Eye /> : <EyeOff />}
                        </span>
                        </div>
                      {errors.new_password && <div className="text-danger">{errors.new_password}</div>}
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Confirm New Password</label>
                      <div className="input-group"> 
                      <input 
                        type={showPassword.confirm ? "text" : "password"}
                        className="form-control" 
                        value={data.new_password_confirmation} 
                        onChange={(e) => setData('new_password_confirmation', e.target.value)} 
                        required 
                      />
                         <span className="input-group-text" onClick={() => togglePassword("confirm")} style={{ cursor: "pointer" }}>
                          {showPassword.confirm ? <Eye /> : <EyeOff />}
                        </span>
                        </div>
                      {errors.new_password_confirmation && <div className="text-danger">{errors.new_password_confirmation}</div>}
                    </div>

                    <div className="text-end">
                      <button type="button" className="btn btn-secondary mt-3 me-2">Cancel</button>
                      <button type="submit" className="btn btn-primary mt-3" disabled={processing}>
                        {processing ? 'Updating...' : 'Change Password'}
                      </button>
                    </div>
                  </form>

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
};

export default EHChangePW;
