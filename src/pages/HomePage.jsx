// src/pages/HomePage.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useOnScreen } from '../App'; // Re-use the hook from App.jsx
import '../styles/HomePage.css';

function HomePage() {
    const heroRef = useRef();
    const servicesRef = useRef();
    const destinationsRef = useRef();
    const testimonialsRef = useRef();

    const heroVisible = useOnScreen(heroRef, '-100px');
    const servicesVisible = useOnScreen(servicesRef, '-100px');
    const destinationsVisible = useOnScreen(destinationsRef, '-100px');
    const testimonialsVisible = useOnScreen(testimonialsRef, '-100px');

    const topDestinations = [
        { name: 'Agra', image: 'https://images.unsplash.com/photo-1577717903186-e8202ed724b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Experience the grandeur of the Taj Mahal.' },
        { name: 'Jaipur', image: 'https://images.unsplash.com/photo-1603517175240-575775f92265?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'The Pink City\'s vibrant culture and palaces.' },
        { name: 'Goa', image: 'https://images.unsplash.com/photo-1594943922312-d9e03d7c2a71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Beaches, parties, and vibrant nightlife.' },
        { name: 'Varanasi', image: 'https://images.unsplash.com/photo-1534015694247-4f63c2c31043?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Spiritual heart of India, ancient ghats.' },
        { name: 'Darjeeling', image: 'https://images.unsplash.com/photo-1627962635957-c33589b25121?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Queen of the Hills, tea gardens and views.' },
        { name: 'Kochi', image: 'https://images.unsplash.com/photo-1597405232971-d6a066b1d44d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Gateway to Kerala\'s backwaters and history.' },
    ];

    const testimonials = [
        { quote: "AirTourist made our family trip to Goa absolutely seamless. Their team handled everything beautifully!", author: "Rohit Sharma" },
        { quote: "The Hajj package was incredibly well-organized and supportive. Truly a blessing to travel with them.", author: "Fatima Khan" },
        { quote: "Found the best deals for my international flights. The booking process was super easy and fast.", author: "Rahul Gupta" },
        { quote: "Our custom tour to Rajasthan was beyond expectations. Every detail was perfectly managed.", author: "Priya Devi" },
        { quote: "The Umrah experience was spiritual and comfortable. Highly recommend AirTourist for pilgrims.", author: "Ahmed Hassan" },
    ];

    return (
        <div className="home-page">
            <section ref={heroRef} className={`hero-section ${heroVisible ? 'fade-in' : ''}`}>
                <div className="container">
                    <div className="hero-content">
                        <h1 className="slide-in-up">Discover Your Next Adventure</h1>
                        <p className="slide-in-up" style={{ animationDelay: '0.2s' }}>Explore the world with AirTourist – Your trusted travel partner for unforgettable journeys.</p>
                        <Link to="/services" className="explore-btn slide-in-up" style={{ animationDelay: '0.4s' }}>Explore Packages</Link>
                    </div>
                </div>
            </section>

            <section ref={servicesRef} className={`services-overview-section ${servicesVisible ? 'slide-in-up' : ''}`}>
                <div className="container">
                    <h2>Our Top Services</h2>
                    <div className="services-grid">
                        <div className="service-item">
                            <h3>Flight Booking</h3>
                            <p>Seamless international and domestic flight reservations.</p>
                        </div>
                        <div className="service-item">
                            <h3>Hotel Reservations</h3>
                            <p>Find the best stays from budget to luxury accommodations.</p>
                        </div>
                        <div className="service-item">
                            <h3>Hajj & Umrah</h3>
                            <p>Specialized spiritual pilgrimage packages with care.</p>
                        </div>
                        <div className="service-item">
                            <h3>Custom Tours</h3>
                            <p>Tailored itineraries for a truly personalized travel experience.</p>
                        </div>
                    </div>
                    <Link to="/services" className="secondary-btn">View All Services</Link>
                </div>
            </section>

            <section ref={destinationsRef} className={`destinations-overview-section ${destinationsVisible ? 'slide-in-up' : ''}`}>
                <div className="container">
                    <h2>Popular Destinations</h2>
                    <div className="destinations-grid">
                        {topDestinations.map((dest, index) => (
                            <div key={index} className="destination-card">
                                <img src={dest.image} alt={dest.name} loading="lazy" />
                                <div className="card-content">
                                    <h3>{dest.name}</h3>
                                    <p>{dest.description}</p>
                                    <button>View Packages</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link to="/contact" className="secondary-btn">Plan Your Trip Now</Link>
                </div>
            </section>

            <section ref={testimonialsRef} className={`testimonials-overview-section ${testimonialsVisible ? 'slide-in-up' : ''}`}>
                <div className="container">
                    <h2>What Our Customers Say</h2>
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card">
                                <p>"{testimonial.quote}"</p>
                                <h4>- {testimonial.author}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;