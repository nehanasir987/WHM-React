import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Welcome to Dashboard! You have successfully logged in.");
    navigate("/dashboard");
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Please enter your details to sign in</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <div className="input-with-icon">
              <span className="icon"><i className="fa fa-user"></i></span>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <div className="input-with-icon">
              <span className="icon"><i className="fa fa-envelope"></i></span>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <span className="icon"><i className="fa fa-lock"></i></span>
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Enter your password" 
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-options">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Remember me
            </label>
            <a href="#forgot" className="forgot-link">Forgot password?</a>
          </div>

          <button type="submit" className="btn-submit">Sign In</button>
        </form>

        <div className="login-footer">
          <p>Don't have an account? <a href="#signup">Sign up</a></p>
        </div>
      </div>

      <div className="login-graphics">
        <div className="graphic-container">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="graphic-content">
            <h3>Welcome to Our Platform</h3>
            <p>Access your account and discover a world of opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
