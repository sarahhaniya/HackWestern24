import React from 'react';
import '../styles/Navbar.css';
import navbarLogo from '../assets/navbarLogo.png';
const UnauthNavbar = () =>
{
    return (
        <nav className="navbar">
            <div className="navbar-logo-container">
                <a href="/" className="navbar-logo-link">
                    <img src={navbarLogo} alt="PickPark Logo" className="navbar-logo" />
                </a>
            </div>
            <div className="nav-links">
                <a href="/login" className="nav-link">LOG IN</a>
                <a href="/register" className="nav-link">REGISTER</a>
            </div>
        </nav>);
}; export default UnauthNavbar; 