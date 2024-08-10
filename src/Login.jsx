import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    setEmail("");
    setPassword("");
    setError("");
    },[]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', email, password);

    try {
      const response = await axios.get(`http://localhost:7787/users/getEmail/${email}`);
      const userData = response.data;
      console.log('Response:', userData);

      if (password === userData.password) {
        // Store user information in sessionStorage
        sessionStorage.setItem('email', email); // Store email in session storage
        sessionStorage.setItem('name', userData.name); // Store user name if needed

        alert("Login Success!!!");
    window.location.href='/home';
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="containerlogin">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Log in to your account</h2>

              {error && <p className="text-danger">{error}</p>}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    required
                    name="email"
                    autoComplete='off'
                    
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    role='EmailID'
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    required
                    name="password"
                    autoComplete='off'
                    
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    role='Password'
                  />
                </div>

                <button type="submit" className="btnlogin btnlogin-primary" id="btnn">
                  Submit
                </button>
              </form>
              <p className='text-center mt-4'>Don't have an account?</p>
              <button className="btton btton-secondary">
                <p className="text-center mt-4">
                  <Link to="/register">Sign up</Link>
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
