import React from 'react'
import { usePage, router} from '@inertiajs/react'
import profilelogo from '../../../assets/Images/Profile-logo.png';
import '../profile.scss';
import EHSidebar from './EHSidebar';
import EHHeader from './../../../Components/Header/EHHeader';
import SubFooter from './../../../Components/Footer/SubFooter';

const EHSignOut = () => {
  const { user } = usePage().props; 
  
  const handleSignOut = () => {
    router.post('/logout'); // Call Laravel's logout route
  };
  
  const handleCancel = () => {
    // Do nothing, stay on the same page
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
                        <h5 className="text-center"><b>Do you want to sign out?</b></h5>
                        <p className="text-center">@{user.name}</p><br />
                        <h5 className="text-center">Are you sure ?</h5><br />
                      <div className=" text-end">
                          <button className="btn btn-primary mt-3 me-2"onClick={handleSignOut}>Yes,Sign Out</button>
                          <button className="btn btn-secondary mt-3" onClick={handleCancel}>Keep,Signed in</button>
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

export default EHSignOut
