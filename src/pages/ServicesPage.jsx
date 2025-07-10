// src/pages/ServicesPage.jsx
import React, { useRef } from 'react';
import { useOnScreen } from '../App';
import { Link } from 'react-router-dom';
import '../styles/ServicesPage.css';

function ServicesPage() {
    const heroRef = useRef();
    const section1Ref = useRef();
    const section2Ref = useRef();
    const section3Ref = useRef();

    const heroVisible = useOnScreen(heroRef, '-100px');
    const section1Visible = useOnScreen(section1Ref, '-100px');
    const section2Visible = useOnScreen(section2Ref, '-100px');
    const section3Visible = useOnScreen(section3Ref, '-100px');

    return (
        <div className="services-page">
            <section ref={heroRef} className={`services-hero ${heroVisible ? 'fade-in' : ''}`}>
                <div className="container">
                    <h1>Our Comprehensive Travel Services</h1>
                    <p style={{ animationDelay: '0.2s' }}>From flight bookings to custom tours, we cover all your travel needs.</p>
                </div>
            </section>

            <section ref={section1Ref} className={`service-category ${section1Visible ? 'slide-in-up' : ''}`}>
                <div className="container">
                    <h2>Flight & Hotel Booking</h2>
                    <div className="service-details-grid">
                        <div className="service-details-item">
                            <img src="https://images.unsplash.com/photo-1502604810058-cf066063b2f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Flight Booking" loading="lazy" />
                            <h3>Global Flight Tickets</h3>
                            <p>Access to major airlines and competitive fares worldwide. We simplify complex routes and ensure you get the best value for your air travel.</p>
                        </div>
                        <div className="service-details-item">
                            <img src="https://images.unsplash.com/photo-1560965384-263bf67b8417?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hotel Booking" loading="lazy" />
                            <h3>Accommodation Solutions</h3>
                            <p>Book hotels, resorts, and villas. Whether it's luxury or budget, we find the perfect stay for your trip.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={section2Ref} className={`service-category bg-light ${section2Visible ? 'slide-in-up' : ''}`}>
                <div className="container">
                    <h2>Pilgrimage & Specialized Tours</h2>
                    <div className="service-details-grid">
                        <div className="service-details-item">
                            <img src="https://images.unsplash.com/photo-1621251996765-a82f6e91f1a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hajj Package" loading="lazy" />
                            <h3><Link to="/hajj">Hajj Packages</Link></h3>
                            <p>Comprehensive Hajj packages ensuring a spiritual and comfortable journey for pilgrims.</p>
                        </div>
                        <div className="service-details-item">
                            <img src="https://images.unsplash.com/photo-1618337588329-873b22ef0f04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Umrah Package" loading="lazy" />
                            <h3><Link to="/umrah">Umrah Packages</Link></h3>
                            <p>Tailored Umrah packages designed for convenience and devotion, throughout the year.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={section3Ref} className={`service-category ${section3Visible ? 'slide-in-up' : ''}`}>
                <div className="container">
                    <h2>Custom & Group Travel</h2>
                    <div className="service-details-grid">
                        <div className="service-details-item">
                            <img src="https://images.unsplash.com/photo-1544007137-b27ce0903328?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Custom Tours" loading="lazy" />
                            <h3>Personalized Tour Packages</h3>
                            <p>Craft your dream vacation with our bespoke tour planning service. Tell us your preferences, and we'll create an unforgettable itinerary.</p>
                        </div>
                        <div className="service-details-item">
                            <img src="https://images.unsplash.com/photo-1473187280963-c35391d84b21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Group Travel" loading="lazy" />
                            <h3>Group & Corporate Travel</h3>
                            <p>Specialized services for corporate trips, school excursions, or large family vacations, ensuring smooth coordination and execution.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta-section">
                <div className="container">
                    <h2>Ready to Plan Your Next Journey?</h2>
                    <p>Contact us today and let our experts assist you.</p>
                    <Link to="/contact" className="explore-btn">Get a Free Quote</Link>
                </div>
            </section>
        </div>
    );
}

export default ServicesPage;