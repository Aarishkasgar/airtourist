// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h3>AirTourist</h3>
                        <p>Your journey begins with us. Providing seamless travel experiences worldwide from Muzaffarnagar.</p>
                        <div className="social-links">
                            <a href="https://facebook.com/airtourist.india" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/airtourist_ind" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                            <a href="https://instagram.com/airtourist.official" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="https://wa.me/919898987878" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                    <div className="footer-section links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/hajj">Hajj</Link></li>
                            <li><Link to="/umrah">Umrah</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/travel-tips">Travel Tips</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section contact-info">
                        <h3>Contact Us</h3>
                        <p><strong>Address:</strong> Gangaram Pura, Sarwat Gate, Muzaffarnagar, UP 251002</p>
                        <p><strong>Phone:</strong> <a href="tel:+919898987878">+91 9898987878</a></p>
                        <p><strong>Email:</strong> <a href="mailto:airtourist22@gmail.com">airtourist22@gmail.com</a></p>
                        <p><strong>CIN:</strong> U74999DL2016PTCXXXXXX</p> {/* Example CIN */}
                    </div>
                </div>
                <div className="footer-bottom">
                    © {new Date().getFullYear()} AirTourist. All rights reserved. Designed by Aarish.
                </div>
            </div>
        </footer>
    );
}

export default Footer;