import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import UserHeader from './../../Components/Header/UserHeader';
import AdminFooter from './../../Components/Footer/AdminFooter';
import '../../../css/UserLogin.scss';
import VerifyButton from '../../Components/Buttons/VerifyButton';

 //need the logic

 
const Verification01 = () => {

  const [password, setPassword] = useState("");

  return (
    <>
      <header>
        <UserHeader/> 
      </header>

    
      <main>
        <div className="OL-LoginForm-container ">
          <div className="OL-Login-overlay">
            <h2><b>Verification</b></h2>

            <br />

            <form >
              <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
               />

              <div>
                <VerifyButton password={password} redirectPath="verification02" />
              </div>

            </form>

          </div>
        </div>
      </main>
    
      <footer>
        <AdminFooter />
      </footer>
    </>
  )
}

export default Verification01