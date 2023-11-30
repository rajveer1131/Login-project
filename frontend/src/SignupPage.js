import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleUserChange = (e) => {
    const { name, value } = e.target;

    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/signup",
        userData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setUserData({
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleUserSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleUserChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleUserChange}
          required
        />
        <button type="submit">Register</button>
        <p>
          Already registered? <Link to="/">Login Here</Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
