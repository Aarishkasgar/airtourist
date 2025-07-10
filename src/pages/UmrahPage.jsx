// src/pages/UmrahPage.jsx
import React, { useRef } from 'react';
import { useOnScreen } from '../App';
import { Link } from 'react-router-dom';
import '../styles/HajjUmrahPage.css'; // Shared CSS for Hajj and Umrah

function UmrahPage() {
    const heroRef = useRef();
    const section1Ref = useRef();
    const section2Ref = useRef();
    const section3Ref = useRef();
    const section4Ref = useRef(); // For documents/requirements

    const heroVisible = useOnScreen(heroRef, '-100px');
    const section1Visible = useOnScreen(section1Ref, '-100px');
    const section2Visible = useOnScreen(section2Ref, '-100px');
    const section3Visible = useOnScreen(section3Ref, '-100px');
    const section4Visible = useOnScreen(section4Ref, '-100px');

    const umrahPackages = [
        {
            name: 'Basic Umrah Package',
            duration: '7 Days',
            price: 'Starts from ₹80,000',
            features: [
                'Standard Accommodation (3-star)',
                'Shared Transport',
                'Visa Assistance',
                'Ziyarat in Makkah & Madinah (Optional)',
                'Return Airfare (Economy)'
            ],
            image: 'https://images.unsplash.com/photo-1621251996765-a82f6e91f1a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Comfort Umrah Package',
            duration: '10 Days',
            price: 'Starts from ₹1,20,000',
            features: [
                '3-Star Hotels (close to Haram)',
                'AC Transport',
                'Full Board Meals',
                'Guided Ziyarat',
                'Return Airfare (Economy/Premium Economy)'
            ],
            image: 'https://images.unsplash.com/photo-1618337588329-873b22ef0f04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Deluxe Umrah Package',
            duration: '14 Days',
            price: 'Starts from ₹1,80,000',
            features: [
                '4-Star Hotels (walking distance to Haram)',
                'Private AC Transport',
                'Open Buffet Meals',
                'Comprehensive Guided Ziyarat',
                'Return Airfare (Business Class)',
                'Laundry Service'
            ],
            image: 'https://images.unsplash.com/photo-1621251996765-a82f6e91f1a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ];

    return (
        <div className="hajj-umrah-page">
            <section ref={heroRef} className={`hajj-umrah-hero umrah-hero ${heroVisible ? 'fade-in' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1618337588329-873b22ef0f04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
                <div className="container">
                    <h1 className="slide-in-up">Umrah Packages</h1>
                    <p className="slide-in-up" style={{ animationDelay: '0.2s' }}>Plan your spiritual journey to Mecca and Medina with our tailored Umrah packages.</p>
                </div>
            </section>

            <section ref={section1Ref} className={`package-intro ${section1Visible ? 'slide-in-up' : ''}`}>
                <div className="container">
                    <h2>Your Spiritual Retreat, Simplified</h2>
                    <p>AirTourist offers a variety of Umrah packages throughout the year, designed to provide a comfortable and spiritually enriching experience. Whether you seek a short, intense spiritual journey or a more relaxed, extended stay, we have options to suit your needs and budget. Our team ensures every aspect of your pilgrimage is taken care of.</p>
                </div>
            </section>

            <section ref={section2Ref} className={`package-list ${section2Visible ? 'slide-in-up' : ''}`}>
                <div className="container">
                    <h2>Our Umrah Packages</h2>
                    <div className="package-grid">
                        {umrahPackages.map((pkg, index) => (
                            <div key={index} className="package-card">
                                <img src={pkg.image} alt={pkg.name} loading="lazy" />
                                <div className="card-content">
                                    <h3>{pkg.name}</h3>
                                    <p><strong>Duration:</strong> {pkg.duration}</p>
                                    <p className="price">{pkg.price}</p>
                                    <h4>Key Features:</h4>
                                    <ul>
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                    <button>Enquire Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section ref={section3Ref} className={`why-choose-us ${section3Visible ? 'slide-in-up' : ''}`}>
                <div className="container">
                    <h2>Why Choose AirTourist for Umrah?</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <h3>Flexible Dates</h3>
                            <p>Packages available throughout the year, allowing you to choose dates that best fit your schedule and convenience.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Comfortable Logistics</h3>
                            <p>Hassle-free travel, accommodation, and transportation arrangements, including comfortable AC buses for Ziyarat tours.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Visa & Documentation</h3>
                            <p>Complete assistance with all necessary paperwork, including Umrah visa processing, ensuring a smooth and worry-free experience.</p>
                        </div>
                        <div className="feature-item">
                            <h3>24/7 Support</h3>
                            <p>Our dedicated team is available around the clock to assist you with any queries or emergencies during your pilgrimage.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Experienced Guides</h3>
                            <p>Benefit from the knowledge and guidance of our experienced religious scholars who accompany groups on Ziyarat tours.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Tailored Packages</h3>
                            <p>Options ranging from economy to deluxe, providing choices for different budgets and preferences without compromising on quality.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={section4Ref} className={`requirements-section ${section4Visible ? 'slide-in-up' : ''}`}>
                <div className="container">
                    <h2>Important Documents & Requirements for Umrah</h2>
                    <div className="requirements-list">
                        <div className="requirement-item">
                            <h3>Valid Passport</h3>
                            <p>Original passport with at least 6 months validity from the date of return and at least two blank pages.</p>
                        </div>
                        <div className="requirement-item">
                            <h3>Umrah Visa</h3>
                            <p>A valid Umrah visa (we assist in the process).</p>
                        </div>
                        <div className="requirement-item">
                            <h3>Photos</h3>
                            <p>Recent passport-sized photographs with white background.</p>
                        </div>
                        <div className="requirement-item">
                            <h3>Medical Certificates</h3>
                            <p>Mandatory vaccination certificates (Meningitis ACYW1357).</p>
                        </div>
                        <div className="requirement-item">
                            <h3>Proof of Relationship (Mahram)</h3>
                            <p>For female pilgrims, proof of Mahram relationship is required.</p>
                        </div>
                    </div>
                    <p className="note">Please contact us for the most up-to-date requirements and detailed guidance.</p>
                    <Link to="/contact" className="secondary-btn">Enquire About Umrah</Link>
                </div>
            </section>
        </div>
    );
}

export default UmrahPage;