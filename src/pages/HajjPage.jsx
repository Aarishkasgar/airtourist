// src/pages/HajjPage.jsx
import React, { useRef } from 'react';
import { useOnScreen } from '../App';
import { Link } from 'react-router-dom';
import '../styles/HajjUmrahPage.css'; // Shared CSS for Hajj and Umrah

function HajjPage() {
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

    const hajjPackages = [
        {
            name: 'Economy Hajj Package',
            duration: '25 Days',
            price: 'Starts from ₹3,50,000',
            features: [
                'Shared Accommodation (Makkah & Madinah)',
                'Standard Meals (Indian/Pakistani Cuisine)',
                'Basic Transport by Bus',
                'Visa & Document Assistance',
                'Ziyarat in Makkah & Madinah',
                'Medical Assistance on Call'
            ],
            image: 'https://images.unsplash.com/photo-1607567793444-245842858564?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Standard Hajj Package',
            duration: '20 Days',
            price: 'Starts from ₹4,50,000',
            features: [
                '3-Star Hotels (close to Haram)',
                'Full Board Meals (Buffet)',
                'AC Transport in Groups',
                'Experienced Religious Guide',
                'Pre-Hajj Orientation Session',
                'Medical & Emergency Support'
            ],
            image: 'https://images.unsplash.com/photo-1607567793503-490326e0e0e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Premium Hajj Package',
            duration: '15 Days',
            price: 'Starts from ₹6,00,000',
            features: [
                '5-Star Hotels (walking distance to Haram)',
                'Open Buffet Meals',
                'Private AC Transport',
                'Personalized Religious Guidance',
                'Exclusive VIP Tent in Mina & Arafat',
                'Laundry & Medical Services'
            ],
            image: 'https://images.unsplash.com/photo-1607567793510-d09f7b15d2a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ];

    return (
        <div className="hajj-umrah-page">
            <section ref={heroRef} className={`hajj-umrah-hero ${heroVisible ? 'fade-in' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1621251996765-a82f6e91f1a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
                <div className="container">
                    <h1 className="slide-in-up">Hajj Packages</h1>
                    <p className="slide-in-up" style={{ animationDelay: '0.2s' }}>Embark on your spiritual journey with our meticulously planned Hajj packages.</p>
                </div>
            </section>

            <section ref={section1Ref} className={`package-intro ${section1Visible ? 'slide-in-up' : ''}`}>
                <div className="container">
                    <h2>Your Sacred Journey Starts Here</h2>
                    <p>AirTourist is dedicated to providing pilgrims with a comfortable, safe, and spiritually fulfilling Hajj experience. We understand the sanctity of this journey and offer comprehensive packages tailored to your needs, ensuring peace of mind throughout your pilgrimage. Our experienced team ensures every detail is handled with utmost care.</p>
                </div>
            </section>

            <section ref={section2Ref} className={`package-list ${section2Visible ? 'slide-in-up' : ''}`}>
                <div className="container">
                    <h2>Our Hajj Packages</h2>
                    <div className="package-grid">
                        {hajjPackages.map((pkg, index) => (
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
                    <h2>Why Choose AirTourist for Hajj?</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <h3>Experienced Guides</h3>
                            <p>Knowledgeable and supportive religious guides to assist you through every ritual of Hajj, ensuring you perform them correctly and with peace.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Comfortable Accommodation</h3>
                            <p>Carefully selected 3-star to 5-star hotels in Makkah and Madinah, often within walking distance to the Haram, ensuring your comfort after tiring rituals.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Transparent Pricing</h3>
                            <p>All-inclusive packages with no hidden costs. We provide a clear breakdown of all expenses, from flights and accommodation to meals and transport.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Dedicated Support</h3>
                            <p>Our dedicated team provides 24/7 assistance throughout your holy journey, ensuring all your needs are met promptly and efficiently.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Logistics & Transport</h3>
                            <p>Seamless management of all ground logistics, including comfortable AC transport between holy sites and airports, ensuring smooth transitions.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Health & Safety</h3>
                            <p>Prioritizing your well-being with medical assistance on call, and adherence to all health and safety guidelines for a secure pilgrimage.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={section4Ref} className={`requirements-section ${section4Visible ? 'slide-in-up' : ''}`}>
                <div className="container">
                    <h2>Important Documents & Requirements for Hajj</h2>
                    <div className="requirements-list">
                        <div className="requirement-item">
                            <h3>Valid Passport</h3>
                            <p>Original passport with at least 6 months validity from the date of return and at least two blank pages.</p>
                        </div>
                        <div className="requirement-item">
                            <h3>Hajj Visa</h3>
                            <p>A valid Hajj visa (we assist in the process).</p>
                        </div>
                        <div className="requirement-item">
                            <h3>Photos</h3>
                            <p>Recent passport-sized photographs with white background.</p>
                        </div>
                        <div className="requirement-item">
                            <h3>Medical Certificates</h3>
                            <p>Mandatory vaccination certificates (Meningitis ACYW1357, seasonal flu shots).</p>
                        </div>
                        <div className="requirement-item">
                            <h3>Proof of Relationship (Mahram)</h3>
                            <p>For female pilgrims, proof of Mahram relationship is required.</p>
                        </div>
                        <div className="requirement-item">
                            <h3>Bank Statement</h3>
                            <p>Proof of financial solvency (as per Saudi government requirements).</p>
                        </div>
                    </div>
                    <p className="note">Please contact us for the most up-to-date requirements and detailed guidance.</p>
                    <Link to="/contact" className="secondary-btn">Enquire About Hajj</Link>
                </div>
            </section>
        </div>
    );
}

export default HajjPage;