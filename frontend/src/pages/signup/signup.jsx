import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Logo from '../../assets/Logo.png';

import "../login/login.css";

export const SignUp = () => {
  const url = process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userConfirmPassword: "",
  });
  var signSearchHandle = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  var signSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        url +
          "/register/" +
          formData.userEmail +
          "/" +
          formData.userPassword +
          "/" +
          formData.userName,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        Cookies.set("token", result.message, { expires: 7 });
        setauthenticationCall(true);
        await AuthenticationFunk();
        navigate("/");
      } else {
        console.error("Failed to make request:", response.statusText);
        setauthenticationCall(false);
      }
    } catch (error) {
      console.error("Failed to make request:", error);
      setauthenticationCall(false);
    }
  };

  useEffect(() => {}, []);

  const handleSubmit = (event) => {
    signSubmit(event);
  };

  return (
    <>
      <div className="loginPage">
        <div className="loginPageBackground"></div>
        <form onSubmit={handleSubmit} className="loginPageForm">
          <div className="loginPageLogo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="loginPageHeading">
            <h1>Sign Up</h1>
          </div>
          <input
            className="loginPageFormInput"
            type="text"
            placeholder="Username"
            name="userName"
            value={formData.userName}
            onChange={signSearchHandle}
          />
          <input
            className="loginPageFormInput"
            type="text"
            placeholder="Email"
            name="userEmail"
            value={formData.userEmail}
            onChange={signSearchHandle}
          />
          <input
            className="loginPageFormInput"
            type="password"
            name="userPassword"
            placeholder="Password"
            value={formData.userPassword}
            onChange={signSearchHandle}
          />
          <button type="submit" className="loginPageFormButton">
            Sign Up
          </button>
          <div className="changeModes">
          <p>Already have an account?<a href="/login">Login</a></p>
          
        </div>
        </form>
        
      </div>
    </>
  );
};
