import React from 'react'
import '../OtherLogin/OtherLogin.scss';
import { Link } from 'react-router-dom';
import AdminFooter from './../../Components/Footer/AdminFooter';
import UserHeader from './../../Components/Header/UserHeader';

const AddNewMemeber = () => {
  
  return (
    <>
      <header>
        <UserHeader/> 
      </header>

    
      <main>
        <div className="OL-LoginForm-container ">
          <div className="OL-Login-overlay">
            <h2><b>Add new member</b></h2>

            <br />

            <form>
              <input type="text" placeholder="Role" required /><br />
              <input type="text" placeholder="Name" required /><br />
              <input type="text" placeholder="Email" required /><br />
              <input type="text" placeholder="Tele no" required /><br />
              <input type="password" placeholder="Password" required />
              <input type="password" placeholder="Confirm Password" required />
              <Link to='/VerificationPg01' className='CustomButton'>Continue</Link >
              
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

export default AddNewMemeber