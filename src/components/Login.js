import React, { useState } from "react";
import './Login.css';
import Validation from "./LoginValidation";
import { Link } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  }

  return (
    <div className="Login">
      <div className="login-container">
        <h2>Welcome Back!</h2>
        <form action="" onSubmit={handleSubmit}>
          <p>Login to your personal portfolio.</p>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleInput}
              required
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleInput}
              required
            />
            {errors.password && <span className="text-danger" >{errors.password}</span>}
          </div>
          <div className="form-group forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          <p>Terms & Conditions applied*.</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
