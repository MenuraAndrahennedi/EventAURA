import React from 'react'
import '../../../css/EHLogin.scss';
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
          <div className="image-section d-none d-md-block col-md-6"></div>
          
          <div className="p-4 login-form-section d-flex justify-content-center align-items-center col-12 col-md-6 min-vh-100">
            <div className="login-form w-100 " style={{ maxWidth: "400px" }}>
              <div className="border-0 shadow card">
                <div className="p-4 card-body">
                  <h1 className="mb-4 text-center">Sign in to EventAURA</h1>

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
                    <small>< Link href={route('password.request')} className="Guest-link">Forgot Password?</Link></small>
                    </div>

                    <button type="submit" className="mb-3 btn btn-primary w-100" disabled={processing}>Sign In</button>
                    
                    <div className="divider">
                      <span className="text-center">or login with</span>
                    </div>

                    <div className="social-login d-flex justify-content-around">
                      <a href="/login/google" className="btn btn-outline-secondary">Google</a>
                      <a href="/login/facebook" className="btn btn-outline-secondary">Facebook</a>
                      <a href="/login/apple" className="btn btn-outline-secondary">Apple</a>
                    </div>

                    <div className="mt-4 text-center">
                      <small>Don’t have an account? <Link href={route('eh.register')}className="Guest-link"> Create an account</Link></small>
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
