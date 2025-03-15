import React from 'react'
import profilelogo from '../../../assets/Profile-logo.png';
import '../profile.scss';
import EHSidebar from './EHSidebar';
import EHHeader from './../../../Components/Header/EHHeader';
import SubFooter from '../../../Components/Footer/SubFooter';

const EHChangePW = () => {
  return (
    <>
      <header>
        <EHHeader />
      </header>

      <main>
        <div className="container my-5">
              <div className="card shadow border-0">
                <div className="card-body text-center">
                    <h1><b>Hi Anura!</b></h1>
                    <h4><b>Welcome to Your Profile</b></h4>
                    <img src= {profilelogo} alt="Avatar"className="profile-avatar" />
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
                          <button className="btn btn-secondary mt-3 me-2">Cancel</button>
                          <button className="btn btn-primary mt-3 ">Save Changes</button>
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
  )
}

export default EHChangePW
