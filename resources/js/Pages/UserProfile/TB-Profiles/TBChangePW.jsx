import React from 'react';
import { useForm } from '@inertiajs/react';
import TBHeader from './../../../Components/Header/TBHeader';
import TBSidebar from './TBSidebar';
import SubFooter from './../../../Components/Footer/SubFooter';
import '../profile.scss';

const TBChangePW = ({ user, success }) => {
  const { data, setData, post, processing, errors } = useForm({
    old_password: '',
    new_password: '',
    new_password_confirmation: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('user.change-password'));
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
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-3">
              <TBSidebar />
            </div>
            <div className="col-md-9">
              <div className="card shadow border-0">
                <div className="card-body profile-details">
                  <h5 className="text-center"><b>Change Password</b></h5>

                  {/* Success Message */}
                  {success && <div className="alert alert-success text-center">{success}</div>}

                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="old_password">Old Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="old_password"
                        placeholder="Enter Old Password"
                        value={data.old_password}
                        onChange={(e) => setData('old_password', e.target.value)}
                      />
                      {errors.old_password && <span className="text-danger">{errors.old_password}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="new_password">New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="new_password"
                        placeholder="Enter New Password"
                        value={data.new_password}
                        onChange={(e) => setData('new_password', e.target.value)}
                      />
                      {errors.new_password && <span className="text-danger">{errors.new_password}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="new_password_confirmation">Confirm New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="new_password_confirmation"
                        placeholder="Confirm New Password"
                        value={data.new_password_confirmation}
                        onChange={(e) => setData('new_password_confirmation', e.target.value)}
                      />
                      {errors.new_password_confirmation && <span className="text-danger">{errors.new_password_confirmation}</span>}
                    </div>

                    <div className="text-end">
                      <button type="submit" className="btn btn-primary mt-3" disabled={processing}>Save Changes</button>
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
  );
};

export default TBChangePW;
