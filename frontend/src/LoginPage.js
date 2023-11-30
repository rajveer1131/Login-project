import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate(); // useNavigate replaces useHistory in React Router v6

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  // submit function
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/', loginData);
      const { success, message } = response.data;

      if (success) {
        alert("Success");
        console.log('Login Successfully');
        // Redirect to the home page upon successful login
        // navigate('/home');
      } else {
        console.log(message);
      }
    } catch (error) {
      alert("Failed");
      console.error('Login error', error);
    }

    setLoginData({
      username: '',
      password: '',
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLoginSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={loginData.username}
          onChange={handleLoginChange}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={loginData.password}
          onChange={handleLoginChange}
          required
        />
        <button type='submit'>Login</button>
        <p>
          Not registered yet? <Link to='/signup'>Register Here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
