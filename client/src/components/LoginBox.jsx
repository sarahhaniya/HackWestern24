import React, { useState } from 'react';
import '../styles/LoginBox.css';
import logo from '../assets/whiteShortLogo.png';

const LoginBox = () =>
{
    const [formData, setFormData] = useState({
        userType: 'Admin/User',
        username: '',
        password: ''
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
        console.log('Form submitted:', formData);
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
                </div>
            </div>
        </section>
    );
};

export default LoginBox;