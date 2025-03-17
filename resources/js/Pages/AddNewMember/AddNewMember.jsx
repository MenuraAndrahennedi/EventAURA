import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import '../../../css/UserLogin.scss';
import UserHeader from './../../Components/Header/UserHeader';
import AdminFooter from './../../Components/Footer/AdminFooter';


//logic need -continue only when the user is logged.
//

const AddNewMember = () => {
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
            <Link href={route('verification01')} className="CustomButton"> Continue </Link>
            <Link href={route('user_login')} className="CustomButton">Sign in  </Link>
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

export default AddNewMember