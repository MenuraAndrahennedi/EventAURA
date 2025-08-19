import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Eye, EyeOff } from 'lucide-react';
import profilelogo from '../../../assets/Images/Profile-logo.png';
import '../../../../css/profile.scss';
import '../../UserProfile/profile.scss';
import UserHeader from '../../../Components/Header/UserHeader';
import OtherSideBar from './ManagerSideBar';
import AdminFooter from '../../../Components/Footer/AdminFooter';


const ManagerChangePW = ({ user,flash }) => {
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
    post(route('manager.updatePassword'),{
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
    <div className="page-wrapper"
>
    <header>
      <UserHeader />
    </header>

    <main className="main-box">
      <div className="container my-5">
            <div className="border-0 shadow card">
              <div className="text-center card-body">
                  <h1><b>Hi {user.name}!</b></h1>
                  <h4><b>Welcome to Your Profile</b></h4>
                  <img src= {user.avatar ? `/storage/${user.avatar}` : profilelogo}  alt="Avatar"className="profile-avatar" />
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

                        {/* Success Message with Close Button */}
                  {successMessage && (
                    <div className="alert alert-success alert-dismissible fade show d-flex justify-content-between align-items-center" role="alert">
                      {successMessage}
                      <button type="button" className="btn-close" onClick={() => setSuccessMessage('')} aria-label="Close"></button>
                    </div>
                  )}
                      
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
                      <button type="button" className="btn btn-secondaryy me-2">Cancel</button>
                      <button type="submit" className="btn btn-blue" disabled={processing}>
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
      <AdminFooter />
    </footer>
  </div>
  )
}

export default ManagerChangePW