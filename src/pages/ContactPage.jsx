// src/pages/ContactPage.jsx
import React, { useRef } from 'react';
import { useOnScreen } from '../App';
import '../styles/ContactPage.css';

function ContactPage() {
    const heroRef = useRef();
    const formRef = useRef();
    const infoRef = useRef();
    const mapRef = useRef();

    const heroVisible = useOnScreen(heroRef, '-100px');
    const formVisible = useOnScreen(formRef, '-100px');
    const infoVisible = useOnScreen(infoRef, '-100px');
    const mapVisible = useOnScreen(mapRef, '-100px');


    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a backend server
        alert('Message sent! We will get back to you soon.');
        // Clear form fields
        e.target.reset();
    };

    return (
        <div className="contact-page">
            <section ref={heroRef} className={`contact-hero ${heroVisible ? 'fade-in' : ''}`}>
                <div className="container">
                    <h1>Get In Touch</h1>
                    <p style={{ animationDelay: '0.2s' }}>We're here to help you plan your perfect trip.</p>
                </div>
            </section>

            <section className="contact-content-section">
                <div className="container contact-grid">
                    <div ref={formRef} className={`contact-form-container ${formVisible ? 'slide-in-up' : ''}`}>
                        <h2>Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <input type="text" placeholder="Subject" required />
                            <textarea placeholder="Your Message" rows="6" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>

                    <div ref={infoRef} className={`contact-info-container ${infoVisible ? 'slide-in-up' : ''}`}>
                        <h2>Contact Information</h2>
                        <p>Feel free to reach out to us through any of the following channels or visit our office.</p>
                        <div className="info-item">
                            <h3>Address:</h3>
                            <p>Gangaram Pura, Sarwat Gate<br />Muzaffarnagar, Uttar Pradesh 251002</p>
                        </div>
                        <div className="info-item">
                            <h3>Phone:</h3>
                            <p><a href="tel:+917456808822">+91 7456808822</a></p>
                        </div>
                        <div className="info-item">
                            <h3>Email:</h3>
                            <p><a href="mailto:airtourist22@gmail.com">airtourist22@gmail.com</a></p>
                        </div>
                        <div className="info-item">
                            <h3>Business Hours:</h3>
                            <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                        <div className="info-item">
                            <h3>Follow Us:</h3>
                            <div className="social-links">
                                <a href="https://facebook.com/airtourist" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com/airtourist" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                                <a href="https://instagram.com/airtourist" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                <a href="https://wa.me/917456808822" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={mapRef} className={`map-section ${mapVisible ? 'slide-in-up' : ''}`}>
                <div className="container">
                    <h2>Our Location</h2>
                    <div className="map-embed">
                        {/* Google Maps Embed Code for Muzaffarnagar, Sarwat Gate. You can get exact embed from Google Maps */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.672450849969!2d77.7011986149454!3d29.47959078216147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbe0a3311874b%3A0x1d36c8b9d4c798e4!2sSarwat%20Gate%2C%20Muzaffarnagar%2C%20Uttar%20Pradesh%20251002!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="AirTourist Location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactPage;