import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Regsiter.css'; // Ensure you have a CSS file for styling

function Register() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const result = validateValues(inputData);

    if (result === true) {
      axios.post('http://localhost:7787/users', inputData)
        .then((res) => {
          sessionStorage.setItem('email', inputData.email);
          sessionStorage.setItem('name', inputData.name);
          alert("Registration Successful");
          window.location.href='/home'; // Redirect to Home page after registration
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Enter Valid Inputs!");
    }
  };

  const validateValues = (inputData) => {
    if (inputData.name.length === 0) {
      alert("Please enter your Name!");
      return false;
    } else if (inputData.email.length === 0 || !inputData.email.includes('@')) {
      alert("Please enter a valid Email!");
      return false;
    } else if (inputData.password.length === 0) {
      alert("Please enter a Password!");
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister}>
        <h1>Register</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={inputData.name}
            onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={inputData.email}
            onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={inputData.password}
            onChange={(e) => setInputData({ ...inputData, password: e.target.value })}
            required
          />
        </div>
        <button type="submit">Register</button>
        <div className="login-link">
          <p>Already have an account? <a href="/">Login</a></p>
        </div>
      </form>
    </div>
  );
}

export default Register;
