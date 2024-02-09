import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

export const SignUp = () => {
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
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="userName"
            value={formData.userName}
            onChange={signSearchHandle}
          />
          <input
            type="text"
            placeholder="Email"
            name="userEmail"
            value={formData.userEmail}
            onChange={signSearchHandle}
          />
          <input
            type="password"
            name="userPassword"
            placeholder="Password"
            value={formData.userPassword}
            onChange={signSearchHandle}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};
