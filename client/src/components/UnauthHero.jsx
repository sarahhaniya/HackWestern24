import React from 'react';
import '../styles/UnauthHero.css';
import heroLogo from '../assets/darkLogo.png';

const UnauthHero = () =>
{
    return (
        <div className="hero-container">
            <div className="hero-content">
                <img src={heroLogo} alt="PickPark Logo" className="hero-logo" />

                <h1 className="hero-title">
                    Reimagine Workplace Parking: Simple, Fair, and Hassle-Free
                </h1>

                <p className="hero-description">
                    Streamline parking management with an intuitive system designed for your team.
                    Reserve spots effortlessly, reduce stress, and bring order to parking chaos—all
                    with just a few taps.
                </p>
            </div>
        </div>
    );
};

export default UnauthHero;