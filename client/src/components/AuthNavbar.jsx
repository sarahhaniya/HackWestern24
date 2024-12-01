import React from 'react'
import navbarLogo from '../assets/lightLogo.png'
const AuthNavbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo-container">
                <a href="/" className="navbar-logo-link">
                    <img src={navbarLogo} alt="PickPark Logo" className="navbar-logo" />
                </a>
            </div>
            <div className="nav-links">
                <a href="/BookingPage" className="nav-link">Book</a>
            </div>
            <div className="nav-links">
                <a href="/Reservationpage" className="nav-link">Reservations</a>
            </div>
            <div className="nav-links">
                <a href="/" className="nav-link">SIGN OUT</a>
            </div>
        </nav>);
}

export default AuthNavbar
