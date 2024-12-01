import React, { useState } from 'react';
import '../styles/LoginBox.css';
import logo from '../assets/whiteShortLogo.png';

const RegisterBox = () =>
{
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword)
        {
            alert('Passwords do not match');
            return;
        }
        console.log('Form submitted:', formData);
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
                </div>
            </div>
        </section>
    );
};

export default RegisterBox;