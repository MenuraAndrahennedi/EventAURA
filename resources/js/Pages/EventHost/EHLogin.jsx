import React from 'react'
import './EHLogin.scss';
import MainHeader from './../../Components/Header/MainHeader';
import SubFooter from './../../Components/Footer/SubFooter';
import { Link,useForm } from '@inertiajs/react';

const EHLogin = () => {
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

        <main className="login-page d-flex align-items-stretch">
          <div className="image-section"></div>
          
          <div className="login-form-section d-flex justify-content-center ">
            <div className="login-form">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <h2 className="text-center mb-4">Sign in to EventAURA</h2>

                  <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                      <input type="text" name="email" placeholder="Email" className="form-control" value={data.email} onChange={handleChange} required/>
                      {errors.email && <div className="error text-danger">{errors.email}</div>}
                    </div>

                    <div className="mb-3">
                      <input type="password" name="password" placeholder="Password" className="form-control" value={data.password} onChange={handleChange} required />
                      {errors.password && <div className="error text-danger">{errors.password}</div>}
                    </div>

                    <div className="mb-3 text-end">
                    <small>< Link href={route('password.request')}>Forgot Password?</Link></small>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mb-3" disabled={processing}>Sign In</button>
                    
                    <div className="divider">
                      <span className="text-center">or login with</span>
                    </div>

                    <div className="social-login d-flex justify-content-around">
                      <a href="/login/google" className="btn btn-outline-secondary">Google</a>
                      <a href="/login/facebook" className="btn btn-outline-secondary">Facebook</a>
                      <a href="/login/apple" className="btn btn-outline-secondary">Apple</a>
                    </div>

                    <div className="text-center mt-4">
                      <small>Don’t have an account? <Link href={route('eh.register')}> Create an account</Link></small>
                    </div>

                  </form>

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

export default EHLogin
