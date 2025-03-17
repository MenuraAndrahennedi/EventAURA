
import React, { useState } from "react";
import '../../../css/Button.scss';
import { router } from "@inertiajs/react";

const VerifyButton = ({ email, password, redirectPath }) => {
    
  const [error, setError] = useState("");

  const handleVerify = (e) => {
    e.preventDefault(); // Prevent default form submission
    let errorMsg = "";

    // Validate email if provided
    if (email !== undefined && !email.trim()) {
      errorMsg = "Email is required!";
    }
    
    // Validate password
    if (!password.trim()) {
      errorMsg = "Password is required!";
    }

    if (errorMsg) {
      setError(errorMsg);
      return; // Stop execution if validation fails
    }

    setError(""); // Clear error if valid
    router.visit(route(redirectPath)); // Redirect dynamically
  };

  return (
    <div>
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleVerify} className="CustomButton1">Verify</button>
    </div>
  );
}

export default VerifyButton