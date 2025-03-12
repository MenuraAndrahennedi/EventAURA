import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import UserHeader from './../../Components/Header/UserHeader';
import AdminFooter from './../../Components/Footer/AdminFooter';
import '../../../css/UserLogin.scss';
import VerifyButton from '../../Components/Buttons/VerifyButton';


const Verification02 = () => {
  {/*const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verified, setVerified] = useState(false);*/}
  
  
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

            <form>
              <input type="text" placeholder="Email/Username" required /><br />
              <input type="password" placeholder="Password" required />
              <button onClick={() => route('verification02')} className="CustomButton1">Verify</button>     

               {/** <input 
                type="text" 
                placeholder="Email/Username" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              /><br />

              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />

             
              <VerifyButton 
                email={email} 
                password={password} 
                onVerify={() => setVerified(true)} 
              /> */}      

              {/*<Link href={route('user_login')} className="CustomButton">Sign in  </Link>*/}
            </form>
               {/* Show message when verified */}
               {/*{verified && <p className="verified-message">Verified Successfully!</p>}*/}
          </div>
        </div>
      </main>
    
      <footer>
        <AdminFooter />
      </footer>
  </>
  )
}

export default Verification02