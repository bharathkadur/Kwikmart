// src/components/LoginPage.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../CSS/styles.css';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ identifier: '', password: '' }); // Changed 'email' to 'identifier'
  const [error, setError] = useState(null);
  const userList = useSelector(state => state.user.userList);
  const navigate = useNavigate();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleButton = () => {
    navigate('/AddUser');
  }

  const handleLoginSubmit = e => {
    e.preventDefault();
    setError(null);

    const { identifier, password } = loginData; 
    console.log("Identifier:", identifier);

    if (!identifier || !password) {
      setError('Please enter both email/phone number and password.'); 
      return;
    }

    const user = userList.find(u => u.email === identifier || u.phone === Number(identifier));
    console.log("User:", user);

    if (!user) {
      alert('User Not Found');
      return;
    }

    if (user.Password !== password) { 
      alert('Incorrect Password');
      return;
    }

    alert('Login Successful');
    navigate('/Home');
  };

  return (
    <div className="login-page">
      <div className="heading">
        <h1>KWIKMA₹T</h1>
      </div>
      <div className="container">
        <div className="form-container">
          <div className="heading">
            <h2>Hello Friend..!</h2>
            <h3>Enter The Credentials</h3>
          </div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <form onSubmit={handleLoginSubmit}>
            <div>
              <input
                type="text"
                name="identifier" // Changed 'email' to 'identifier'
                placeholder="Email/Phone Number" // Changed placeholder
                value={loginData.identifier}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="small-button">Submit</button>
          </form>
          <button type="button" onClick={handleButton} className="small-button">Click Here to Register</button>
        </div>
        <div className="logo-container"></div>
      </div>
    </div>
  );
};

export default LoginPage;
