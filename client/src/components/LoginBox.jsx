import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginBox.css";
import logo from "../assets/whiteShortLogo.png";

const LoginBox = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    userType: "Choose Admin or User",
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { userType, username, password } = formData;
  
    if (userType === "Choose Admin or User") {
      setErrorMessage("Please select a user type.");
      return;
    }
  
    if (!username || !password) {
      setErrorMessage("Username and password are required.");
      return;
    }
  
    const apiUrl =
      userType === "Admin"
        ? "http://localhost:3000/api/loginAdmin"
        : "http://localhost:3000/api/login";
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password,
        }),
      });
  
      const result = await response.json();
      console.log("Response status:", response.status);
      console.log("Response body:", result);
  
      if (!response.ok) {
        if (result.error === "Email not registered") {
          setErrorMessage("The email is not registered. Please sign up first.");
        } else if (result.error === "Incorrect password") {
          setErrorMessage("Incorrect password. Please try again.");
        } else {
          setErrorMessage(result.error || "Login failed. Please try again.");
        }
      } else {
        setErrorMessage("");
        setIsAuthenticated(true);
        if (userType === "Admin") {
          navigate("/auth");
        } else {
          navigate("/bookingpage");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };
  

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login-box">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>

          <h1 className="login-heading">LOG IN</h1>

          <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="userType" className="form-label">
                CHOOSE USER TYPE
              </label>
              <select
                id="userType"
                name="userType"
                className="form-select"
                value={formData.userType}
                onChange={handleChange}
              >
                <option value="Choose Admin or User">Choose Admin or User</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="username" className="form-label">
                USERNAME
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-input"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="submit-button">
              SUBMIT
            </button>
          </form>

          {errorMessage && (
            <p style={{ color: "red", fontWeight: "bold", marginTop: "10px", textAlign: "center" }}>
                {errorMessage}
  </p>
)}
        </div>
      </div>
    </section>
  );
};

export default LoginBox;
