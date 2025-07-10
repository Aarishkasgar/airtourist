// src/pages/AboutPage.jsx
import React, { useRef } from 'react';
import { useOnScreen } from '../App';
import '../styles/AboutPage.css';

function AboutPage() {
    const section1Ref = useRef();
    const section2Ref = useRef();
    const section3Ref = useRef();

    const section1Visible = useOnScreen(section1Ref, '-100px');
    const section2Visible = useOnScreen(section2Ref, '-100px');
    const section3Visible = useOnScreen(section3Ref, '-100px');

    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="container">
                    <h1 className="fade-in">About AirTourist</h1>
                    <p className="fade-in" style={{ animationDelay: '0.2s' }}>Your trusted partner for unforgettable journeys since 2005.</p>
                </div>
            </section>

            <section ref={section1Ref} className={`about-mission ${section1Visible ? 'slide-in-up' : ''}`}>
                <div className="container">
                    <div className="mission-content">
                        <div className="mission-text">
                            <h2>Our Mission</h2>
                            <p>At AirTourist, our mission is to redefine travel by providing seamless, personalized, and enriching experiences. We believe that every journey should be an adventure, a discovery, and a memory to cherish. We are dedicated to offering exceptional service, transparent pricing, and expert guidance to make your travel dreams a reality.</p>
                        </div>
                        <div className="mission-image">
                            <img src="https://images.unsplash.com/photo-1542129482-1405e608035b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mission" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>

            <section ref={section2Ref} className={`about-values ${section2Visible ? 'slide-in-up' : ''}`}>
                <div className="container">
                    <h2>Our Values</h2>
                    <div className="values-grid">
                        <div className="value-item">
                            <h3>Customer First</h3>
                            <p>We prioritize your needs and satisfaction above all else.</p>
                        </div>
                        <div className="value-item">
                            <h3>Integrity</h3>
                            <p>Honesty and transparency are the cornerstones of our business.</p>
                        </div>
                        <div className="value-item">
                            <h3>Excellence</h3>
                            <p>We strive for perfection in every aspect of our service.</p>
                        </div>
                        <div className="value-item">
                            <h3>Innovation</h3>
                            <p>Constantly seeking new ways to enhance your travel experience.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={section3Ref} className={`about-team ${section3Visible ? 'slide-in-up' : ''}`}>
                <div className="container">
                    <h2>Meet Our Team</h2>
                    <div className="team-members">
                        <div className="team-member-card">
                            <img src="https://images.unsplash.com/photo-1506794833959-cd602c7d9760?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 1" />
                            <h3>Aarish Khan</h3>
                            <p>Founder & CEO</p>
                        </div>
                        <div className="team-member-card">
                            <img src="https://images.unsplash.com/photo-1542382257-233d267ac125?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 2" />
                            <h3>Priya Singh</h3>
                            <p>Head of Operations</p>
                        </div>
                        <div className="team-member-card">
                            <img src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 3" />
                            <h3>Vikram Reddy</h3>
                            <p>Senior Travel Consultant</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;