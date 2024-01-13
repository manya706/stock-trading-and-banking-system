import React from "react";
import './Signup.css';
import { Link } from "react-router-dom";
function Signup() {
  return (
        <div className="Sign-In">
        <div class="signin-container">
            <h2>Sign-Up</h2>
            <form>
              <p>
                Signin to your personal portfolio.
              </p>
                <div class="form-group">
                    {/* <label for="username">Username:</label> */}
                    <input type="email" id="email id" name="email" placeholder='Email ID' required />
                </div>
                <div class="form-group">
                    {/* <label for="username">Username:</label> */}
                    <input type="text" id="username" name="username" placeholder='Username' required />
                </div>
                <div class="form-group">
                    {/* <label for="password" >Password:</label> */}
                    <input type="password" id="password" name="password" placeholder='Password' required />
                </div>
                <div class="form-group forgot-password">
                    <a href="#">Forgot Password?</a>
                </div>
                <Link to='/' type="submit" class="signin-btn">Sign In</Link>
                <p>
                  Terms & Conditions applied*.
                </p>
            </form>
        </div>
    </div>
  );
}

export default Signup;
