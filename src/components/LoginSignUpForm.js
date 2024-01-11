// LoginSignupForm.js
import React, { useState } from 'react';
import './LoginSignUpForm.css'; // Import your CSS file

const LoginSignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [currentForm, setCurrentForm] = useState('login'); // 'login' or 'signup'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling form submissions
    console.log('Form submitted:', formData);
  };

  const switchForm = () => {
    setCurrentForm(currentForm === 'login' ? 'signup' : 'login');
  };

  return (
    <div className="container" id="container">
      {/* ... other HTML content ... */}
      <div className={`form-container ${currentForm === 'signup' ? 'sign-up-container' : 'sign-in-container'}`}>
        <form onSubmit={handleFormSubmit}>
          <h1 className="h1tag">{currentForm === 'signup' ? 'Sign Up' : 'Login'}</h1>
          {/* ... form fields ... */}
          {currentForm === 'signup' && (
            <label>
              <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleInputChange} />
            </label>
          )}
          <label>
            <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} />
          </label>
          <label>
            <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange} />
          </label>
          <button type="submit">{currentForm === 'signup' ? 'Sign Up' : 'Login'}</button>
        </form>
      </div>
      {/* ... other HTML content ... */}
    </div>
  );
};

export default LoginSignupForm;
