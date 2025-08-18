import React from 'react'
import '../../../css/OtherLogin.scss';
import { Link,useForm } from '@inertiajs/react';
import MainHeader from '../../Components/Header/MainHeader';
import SubFooter from './../../Components/Footer/SubFooter';

const OtherLogin = () => {
  
  // Initialize form data and handlers using Inertia's useForm hook
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });

  // Handle input changes by updating form data state
  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

 // Handle form submission, send POST request to '/login' route
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

               {/* Login form */}
              <form onSubmit={handleSubmit}>
                
                  {/* Email input */}
                    <input 
                      type="text" 
                      name="email" 
                      placeholder="Email / Username" 
                      value={data.email} 
                      onChange={handleChange} r
                      equired 
                    />
                    <br />
                    {/* Display validation error for email if any */}
                    {errors.email && <div className="error text-danger">{errors.email}</div>}



                  {/* Password input */}
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={data.password}
                      onChange={handleChange}
                      required
                    />
                    {/* Display validation error for password if any */}
                    {errors.password && <div className="error text-danger">{errors.password}</div>}
                    
                  {/* Forgot password link */}
                    <div className="forgot-password">
                      <small>
                        <Link href={route('password.request')} className="guest-link">
                          Forgot Password?
                        </Link>
                      </small>
                    </div>

                  {/* Submit button, disabled while form is processing */}
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
