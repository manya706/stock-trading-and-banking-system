import React from "react";
import './Login.css';
function Login(){
    return (
        <div className="Login">
        <div class="login-container">
            <h2>Welcome Back!</h2>
            <form>
              <p>
                Login to your personal portfolio.
              </p>
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
                <button type="submit" class="login-btn">Login</button>
                <p>
                  Terms & Conditions applied*.
                </p>
            </form>
        </div>
    </div>
    )
}

export default Login