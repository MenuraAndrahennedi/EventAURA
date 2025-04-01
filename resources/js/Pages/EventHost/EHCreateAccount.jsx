import React from 'react'
import './EHLogin.scss';
import MainHeader from './../../Components/Header/MainHeader';
import SubFooter from './../../Components/Footer/SubFooter';
import { Link ,useForm} from '@inertiajs/react';

const EHCreateAccount = () => {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    telephone: '',
    password: '',
    password_confirmation: '',
    role_id: 4, // Assuming 3 represents the role of "Event Host"
  });
 
  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/register'); // Laravel Breeze's register route
  };

  return (
    <>
        <header>
          <MainHeader/> 
        </header>

        <main className="login-page d-flex align-items-stretch">
          <div className="image-section"></div>
          
          <div className="login-form-section d-flex justify-content-center align-items-center">
            <div className="login-form">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <h2 className="text-center mb-4"> Create Your account</h2>

                  <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                      <input type="text" name ="name" placeholder="Name" value={data.name} onChange={handleChange}  className="form-control"  required/>
                      {errors.name && <div className="error">{errors.name}</div>}
                    </div>

                    <div className="mb-3">
                      <input type="email" name="email" placeholder="Email"  value={data.email} onChange={handleChange} className="form-control" required />
                      {errors.email && <div className="error">{errors.email}</div>}
                    </div>

                    <div className="mb-3">
                      <input type=" text" name="telephone" placeholder="Telephone No" value={data.telephone} onChange={handleChange} className="form-control"  required/>
                      {errors.telephone && <div className="error">{errors.telephone}</div>}
                    </div>

                    <div className="mb-3">
                      <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} className="form-control" required />
                      {errors.password && <div className="error">{errors.password}</div>}
                    </div>

                    <div className="mb-3">
                      <input type="password" name="password_confirmation" placeholder=" Confirm Password" value={data.password_confirmation} onChange={handleChange} className="form-control" required />
                      {errors.password_confirmation && <div className="error">{errors.password_confirmation}</div>}
                    </div>

                    <button type="submit" disabled={processing} className="btn btn-primary w-100 mb-3">Continue</button>
                    
                    <div className="mb-3 text-center"><small>
                      < Link to= '/terms' >Terms and Conditions</Link>
                    </small></div >

                    <hr />

                    <div className="text-center mt-4">
                      <small>Already have an account? <Link href={route('eh.login')}> Sign in</Link></small>
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

export default EHCreateAccount
