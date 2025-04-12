import React from 'react'
import '../../../css/TBLogin.scss';
import MainHeader from './../../Components/Header/MainHeader';
import SubFooter from './../../Components/Footer/SubFooter';
import { Link,useForm } from '@inertiajs/react';//here

const TBLogin = () => {

  const { data, setData, post, processing, errors } = useForm({//here
    email: '',
    password: '',
  });

  const handleChange = (e) => {//here
    setData(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {//here
    e.preventDefault();
    post(route('login'));
  };
  return (
    <>
        <header>
          <MainHeader/> 
        </header>

        <main>
          <div className="TB-Loginform-container">
            <div className="TB-Login-overlay">
              <h2>Sign in to EventAURA</h2>
              <p>or <Link href= {route('browse.guest')}>continue as Guest </Link></p>

              <form onSubmit={handleSubmit}>
                <input type="text" name ="email" placeholder="Email" value={data.email} onChange={handleChange} required />
                {errors.email && <div className="error">{errors.email}</div>}

                <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} required />
                {errors.password && <div className="error">{errors.password}</div>}

                <div className="forgot-password">
                  <small><Link  href={route('password.request')}>Forgot Password?</Link></small>
                </div>
                <button type="submit" disabled={processing}>Sign In</button>
              </form>

              <div className="divider"><span>or login with</span></div>
              
              <div className="social-login">
             
                <a href="/login/google" className="btn-google">
                  Google
                </a>
                <a href="/login/facebook" className="btn-facebook">
                  Facebook
                </a>
                <a href="/login/apple" className="btn-apple">
                  Apple
                </a>
              </div>
              <div className="sign-up">
                <small>Don’t have an account? <Link href={route('tb.register')}>Create an account</Link></small>
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
