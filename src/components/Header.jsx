// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo">AirTourist</Link>
                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={`nav ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
                        <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                        <li className="dropdown">
                            <span className="dropdown-toggle" onClick={() => { /* maybe toggle submenu if needed */ }}>Pilgrimage</span>
                            <ul className="dropdown-menu">
                                <li><Link to="/hajj" onClick={toggleMenu}>Hajj</Link></li>
                                <li><Link to="/umrah" onClick={toggleMenu}>Umrah</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
                        <li><Link to="/travel-tips" onClick={toggleMenu}>Travel Tips</Link></li>
                        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                    </ul>
                </nav>
                <Link to="/contact" className="book-now-btn">Book Now</Link>
            </div>
        </header>
    );
}

export default Header;