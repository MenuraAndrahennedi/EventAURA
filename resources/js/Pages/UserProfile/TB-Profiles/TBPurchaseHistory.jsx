import React from 'react'
import profilelogo from '../../../assets/Profile-logo.png';
import TBHeader from './../../../Components/Header/TBHeader';
import TBSidebar from './TBSidebar';
import SubFooter from './../../../Components/Footer/SubFooter';
import '../profile.scss';

const TBPurchaseHistory = () => {
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
                        <h5 className="text-center"><b>Purchase History</b></h5>
                        <p className="text-center">@username</p>
                        <table className = 'table table-striped'>
                          <thread>
                              <tr>
                                <th> </th>
                                <th> </th>
                                <th> </th>
                              </tr>
                            </thread>
                            <thread>
                              <tr>
                                <th> </th>
                                <th> </th>
                                <th> </th>
                              </tr>
                          </thread>
                        </table>
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

export default TBPurchaseHistory
