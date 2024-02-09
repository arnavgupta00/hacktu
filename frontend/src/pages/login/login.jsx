import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Logo from '../../assets/Logo.png';

import "./login.css";

export const Login = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });
  var signSearchHandle = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  var signSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        url + "/login/" + formData.userEmail + "/" + formData.userPassword,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // You can adjust the content type as needed
          },
          // Add any other options like body, credentials, etc., as needed
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
            <h1>Login</h1>
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
            name="use"
            placeholder="Password"
            value={formData.userPassword}
            onChange={signSearchHandle}
          />
          <button type="submit" className="loginPageFormButton">
            Login
          </button>
          <div className="changeModes">
          <p>Don't have an account?<a href="/signup">Sign Up</a></p>
          </div>
        </form>
      </div>
    </>
  );
};
