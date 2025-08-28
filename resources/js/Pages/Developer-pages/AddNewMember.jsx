import React, { useState,useEffect }  from 'react'
import '../../../css/OtherLogin.scss';
import { Link ,useForm,usePage} from '@inertiajs/react';
import AdminFooter from '../../Components/Footer/AdminFooter';
import UserHeader from '../../Components/Header/UserHeader';

const AddNewMember = () => {
  // Initialize form state and methods using Inertia useForm hook
  const { data, setData, post, processing, errors ,reset} = useForm({
    role: "", 
    name: "",
    email: "",
    telephone: "",
    password: "",
    password_confirmation: "",
  });
 // State to hold success message after form submission
  const [successMessage, setSuccessMessage] = useState("");

  // Automatically clear success message after 5 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

   // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    post("/register-new-member", {
      onSuccess: () => {
        setSuccessMessage("User registered successfully!"); 
        reset(); // Clear form fields after successful submission
      },
    }
    ); 
  };

  
  return (
    <>
      <header>
        <UserHeader/> 
      </header>

    
      <main>
        <div className="OL-LoginForm-container ">
          <div className="OL-Login-overlay">
       
             {/* Show success message */}
              {successMessage && (
                <div className="alert alert-success">{successMessage}</div>
              )} 
              <h2><b>Add new member</b></h2>
              <br />
        
             {/* Member registration form */}
            <form onSubmit={handleSubmit}>
              
                    {/* Role Dropdown */}
                    <select 
                      value={data.role} 
                      onChange={(e) => setData("role", e.target.value)} 
                      required
                    >
                      <option value="">Select Role</option>
                      
                      <option value="2">Manager</option>
                      <option value="3">Admin</option>
                    </select>
                    {/* Display validation error for role */}
                    {errors.role && <div className="text-danger">{errors.role}</div>}


                    {/* Name input */}
                    <input 
                    type="text" 
                    placeholder="Name"
                    value={data.name} 
                    onChange={(e) => setData("name", e.target.value)} 
                    required />
                    {errors.name && <div className="text-danger">{errors.name}</div>}<br />

                     {/* Email input */}
                    <input
                    type="text"
                    placeholder="Email"
                    value={data.email} 
                    onChange={(e) => setData("email", e.target.value)} 
                    required />{errors.email && <div className="text-danger">{errors.email}</div>}<br />

                    {/* Telephone input */}
                    <input 
                    type="text" 
                    placeholder="Tele no"
                    value={data.telephone} 
                    onChange={(e) => setData("telephone", e.target.value)} 
                    required />{errors.telephone && <div className="text-danger">{errors.telephone}</div>}<br />

                    {/* Password input */}
                    <input 
                    type="password" 
                    placeholder="Password" 
                    value={data.password} 
                    onChange={(e) => setData("password", e.target.value)} 
                    required />{errors.password && <div className="text-danger">{errors.password}</div>}

                    {/* Confirm password input */}
                    <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={data.password_confirmation} 
                    onChange={(e) => setData("password_confirmation", e.target.value)} 
                    required />{errors.password_confirmation && <div className="text-danger">{errors.password_confirmation}</div>}

                    {/* Submit button with disabled state while processing */}
                    <button 
                        type='submit' 
                        className='mb-3 btn btn-primary w-100' 
                        style={{backgroundColor:"black", padding:"5px", borderRadius:"50px"}}  
                        disabled={processing}
                    > 
                        {processing ? "Processing..." : "Add Member"}
                    </button>
                    
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