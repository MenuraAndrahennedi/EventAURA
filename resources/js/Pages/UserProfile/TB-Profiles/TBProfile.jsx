import React from 'react'
import TBHeader from '../../../Components/Header/TBHeader'
import SubFooter from '../../../Components/Footer/SubFooter'
import TBSidebar from './TBSidebar'
import profilelogo from '../../../assets/Profile-logo.png';
import '../profile.scss';
const TBProfile = () => {
  return (
    <>
      <header>
        <TBHeader />
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
                  <TBSidebar />
                </div>
                <div className="col-md-9">
                  <div className="card shadow border-0">
                    <div className="card-body profile-details">
                    <h5 className="text-center"><b>Profile Details</b></h5>
                    <p className="text-center">@username</p>
                  
                  
                  <div className="details-grid">
                    <div className="detail-label">Full Name:</div>
                    <div className="detail-value">Full Name</div>
                    
                    <div className="detail-label">Email:</div>
                    <div className="detail-value">email@gmail.com</div>
                    
                    <div className="detail-label">Telephone No:</div>
                    <div className="detail-value">0779123456</div>
                  </div>

                  <div className="text-end">
                    <button className="btn btn-primary mt-3">Edit Profile</button>
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

export default TBProfile
