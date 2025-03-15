import React from 'react'
import '../profile.scss';
import profilelogo from '../../../assets/Profile-logo.png';
import EHHeader from './../../../Components/Header/EHHeader';
import EHSidebar from './EHSidebar';
import SubFooter from './../../../Components/Footer/SubFooter';


const EventHistoryEH = () => {
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
                        <h5 className="text-center"><b>Event History</b></h5>
                        <p className="text-center">@username</p>
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

export default EventHistoryEH
