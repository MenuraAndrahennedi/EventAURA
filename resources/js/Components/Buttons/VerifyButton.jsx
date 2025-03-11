
import React, { useState } from "react";
import '../../../css/Button.scss';

const VerifyButton = ({ email, password, onSuccess }) => {
    const [error, setError] = useState("");

    const handleVerify = () => {
      if (!email.trim() || !password.trim()) {
        setError("Email and Password are required!"); // ✅ Show error if fields are empty
        return;
      }
  
      //  Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Invalid email format!");
        return;
      }
  
      setError(""); //  Clear error if validation passes
      onSuccess(); //  Call the success function (navigate)
    };
  
    return (
      <div>
        {error && <p style={{ color: "red" }}>{error}</p>} {/* ✅ Show error */}
        <button onClick={handleVerify} className="CustomButton1">
          Verify
        </button>
      </div>
    );
    
}

export default VerifyButton