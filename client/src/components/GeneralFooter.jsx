import React from 'react';
import '../styles/GeneralFooter.css';
import footerLogo from '../assets/lightLogo.png';

const GeneralFooter = () =>
{
    const currentYear = new Date().getFullYear();

    const SocialIcons = {
        Facebook: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        ),
        Twitter: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
        ),
        Instagram: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        ),
        LinkedIn: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        )
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section mainf">
                    <img src={footerLogo} alt="PickPark Logo" className="footer-logo" />
                    <p className="footer-description">
                        Revolutionizing workplace parking management with smart, efficient solutions
                        that make parking hassle-free for everyone.
                    </p>
                    <div className="social-links">
                        <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">
                            <SocialIcons.Facebook />
                        </a>
                        <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
                            <SocialIcons.Twitter />
                        </a>
                        <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">
                            <SocialIcons.Instagram />
                        </a>
                        <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
                            <SocialIcons.LinkedIn />
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3 className="footer-heading">Company</h3>
                    <div className="footer-links">
                        <a href="/about" className="footer-link">About Us</a>
                        <a href="/careers" className="footer-link">Careers</a>
                        <a href="/contact" className="footer-link">Contact</a>
                        <a href="/blog" className="footer-link">Blog</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3 className="footer-heading">Solutions</h3>
                    <div className="footer-links">
                        <a href="/for-businesses" className="footer-link">For Businesses</a>
                        <a href="/for-properties" className="footer-link">For Properties</a>
                        <a href="/pricing" className="footer-link">Pricing</a>
                        <a href="/case-studies" className="footer-link">Case Studies</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3 className="footer-heading">Support</h3>
                    <div className="footer-links">
                        <a href="/help" className="footer-link">Help Center</a>
                        <a href="/documentation" className="footer-link">Documentation</a>
                        <a href="/terms" className="footer-link">Terms of Service</a>
                        <a href="/privacy" className="footer-link">Privacy Policy</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} PickPark. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default GeneralFooter;