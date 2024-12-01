import React, { useState } from "react";
import "../styles/LoginBox.css";
import logo from "../assets/whiteShortLogo.png";

const RegisterBox = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, confirmPassword, nickname } = formData;

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      setSuccessMessage("");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          nickname,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error || "Registration failed. Please try again.");
        setSuccessMessage("");
      } else {
        setErrorMessage("");
        setSuccessMessage("Registration successful! You can now log in.");
        setFormData({
          email: "",
          password: "",
          confirmPassword: "",
          nickname: "",
        });
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("An error occurred. Please try again later.");
      setSuccessMessage("");
    }
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login-box">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>

          <h1 className="login-heading">REGISTER</h1>

          <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nickname" className="form-label">
                NICKNAME
              </label>
              <input
                type="text"
                id="nickname"
                name="nickname"
                className="form-input"
                value={formData.nickname}
                onChange={handleChange}
                placeholder="Enter your nickname"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
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
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-input"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />
            </div>

            <button type="submit" className="submit-button">
              REGISTER
            </button>
          </form>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      </div>
    </section>
  );
};

export default RegisterBox;
