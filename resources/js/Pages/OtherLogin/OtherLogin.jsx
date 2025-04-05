import React from 'react'
import '../../../css/OtherLogin.scss';
import { Link,useForm } from '@inertiajs/react';
import MainHeader from '../../Components/Header/MainHeader';
import SubFooter from './../../Components/Footer/SubFooter';

const OtherLogin = () => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    post('/login'); 
  };



  return (
    <>
        <header>
          <MainHeader/> 
        </header>

       
        <main>
          <div className="OL-LoginForm-container ">
            <div className="OL-Login-overlay">
              <h2><b>Login</b></h2>

              <br />

              <form onSubmit={handleSubmit}>
                <input type="text" name="email" placeholder="Email / Username" value={data.email} onChange={handleChange} required /><br />
                {errors.email && <div className="error text-danger">{errors.email}</div>}

                <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} required />
                {errors.password && <div className="error text-danger">{errors.password}</div>}
                <div className="forgot-password">
                  <small><Link href={route('password.request')}>Forgot Password?</Link></small>
                </div>
                <button type="submit" disabled={processing} >Sign In</button>
              </form>

            </div>
          </div>
        </main>
      
        <footer>
          <SubFooter />
        </footer>
    </>
  )
}

export default OtherLogin
