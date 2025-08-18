import React from 'react'
import '../../../css/TBLogin.scss';
import MainHeader from './../../Components/Header/MainHeader';
import SubFooter from './../../Components/Footer/SubFooter';
import { Link,useForm } from '@inertiajs/react';//here

const TBLogin = () => {

  // Initialize form data and methods from Inertia's useForm hook
  const { data, setData, post, processing, errors } = useForm({
    email: '',       // Stores user email
    password: '',    // Stores user password
  });

  // Handle input changes and update state
  const handleChange = (e) => {//here
    setData(e.target.name, e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    post(route('login')); // Send POST request to login route
  };


  return (
    <>
        <header>
          <MainHeader/> 
        </header>

        <main>
          <div className="TB-Loginform-container">
            <div className="TB-Login-overlay">

              <h2><b>Sign in to EventAURA</b></h2>
              <p>or <Link href= {route('browse.guest')} className="guest-link">continue as Guest </Link></p>

              {/* Login Form */}
              <form onSubmit={handleSubmit}>
                {/* Email Input */}
              <input 
                type="text" 
                name="email" 
                placeholder="Email" 
                value={data.email} 
                onChange={handleChange} 
                required 
              />
              {errors.email && <div className="error">{errors.email}</div>} {/* Display email errors */}

              {/* Password Input */}
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={data.password} 
                onChange={handleChange} 
                required 
              />
              {errors.password && <div className="error">{errors.password}</div>} {/* Display password errors */}

              {/* Forgot Password Link */}
              <div className="forgot-password">
                <small>
                  <Link href={route('password.request')} className="guest-link">Forgot Password?</Link>
                </small>
              </div>

                <button type="submit" disabled={processing}>Sign In</button>
              </form>

              {/* Divider for social login section */}
              <div className="divider"><span>or login with</span></div>
              
              {/* Social Login Options */}
              <div className="social-login">
                  <a href="/login/google" className="btn-google">Google</a>
                  <a href="/login/facebook" className="btn-facebook">Facebook</a>
                  <a href="/login/apple" className="btn-apple">Apple</a>
             </div>


               {/* Link to Registration Page */}
              <div className="sign-up">
                <small>Don’t have an account? <Link href={route('tb.register')}className="guestttt-link">Create an account</Link></small>
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

export default TBLogin
