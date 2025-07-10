// src/pages/TravelTipsPage.jsx
import React, { useRef } from 'react';
import { useOnScreen } from '../App';
import '../styles/TravelTipsPage.css'; // Create this CSS file

function TravelTipsPage() {
    const heroRef = useRef();
    const tipsRef1 = useRef();
    const tipsRef2 = useRef();
    const tipsRef3 = useRef();

    const heroVisible = useOnScreen(heroRef, '-100px');
    const tips1Visible = useOnScreen(tipsRef1, '-100px');
    const tips2Visible = useOnScreen(tipsRef2, '-100px');
    const tips3Visible = useOnScreen(tipsRef3, '-100px');

    const generalTips = [
        { title: "Pack Smart", description: "Roll your clothes to save space, use packing cubes, and bring versatile items that can be mixed and matched." },
        { title: "Travel Insurance", description: "Always invest in comprehensive travel insurance. It covers medical emergencies, trip cancellations, lost luggage, and more." },
        { title: "Local Currency", description: "Have some local currency for small purchases, tips, and emergencies. Inform your bank about your travel plans to avoid card issues." },
        { title: "Stay Hydrated & Healthy", description: "Drink plenty of water, especially when flying. Carry a basic first-aid kit and any necessary personal medications." },
        { title: "Learn Basic Phrases", description: "Learning a few local phrases like 'hello,' 'thank you,' and 'excuse me' can greatly enhance your experience and endear you to locals." },
        { title: "Secure Documents", description: "Keep copies of your passport, visa, flight tickets, and hotel reservations both digitally (cloud, email) and physically (separate bag)." },
    ];

    const safetyTips = [
        { title: "Research Destination Safety", description: "Before traveling, research the current safety situation and local customs of your destination." },
        { title: "Share Itinerary", description: "Inform a trusted friend or family member about your travel plans and itinerary." },
        { title: "Beware of Scams", description: "Be cautious of common tourist scams. Always double-check prices and information." },
        { title: "Emergency Contacts", description: "Know the local emergency numbers and have your country's embassy contact details handy." },
    ];

    const hajjUmrahTips = [
        { title: "Physical Preparation", description: "Hajj and Umrah involve significant walking. Start light exercises well in advance to build stamina." },
        { title: "Study Rituals", description: "Familiarize yourself with the rituals of Hajj/Umrah before you go. This helps in performing them correctly and with focus." },
        { title: "Essential Items", description: "Carry comfortable Ihram clothing, a small Quran, prayer mat, light medicines, and comfortable sandals." },
        { title: "Group Discipline", description: "Stay with your group and follow your guide's instructions, especially during crowded rituals to avoid getting lost." },
    ];


    return (
        <div className="travel-tips-page">
            <section ref={heroRef} className={`travel-tips-hero ${heroVisible ? 'fade-in' : ''}`}>
                <div className="container">
                    <h1>Essential Travel Tips</h1>
                    <p style={{ animationDelay: '0.2s' }}>Make your journey smoother and more enjoyable with our expert advice.</p>
                </div>
            </section>

            <section ref={tipsRef1} className={`tips-section ${tips1Visible ? 'slide-in-up' : ''}`}>
                <div className="container">
                    <h2>General Travel Advice</h2>
                    <div className="tips-grid">
                        {generalTips.map((tip, index) => (
                            <div key={index} className="tip-card">
                                <h3>{tip.title}</h3>
                                <p>{tip.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section ref={tipsRef2} className={`tips-section bg-light ${tips2Visible ? 'slide-in-up' : ''}`}>
                <div className="container">
                    <h2>Safety & Security Tips</h2>
                    <div className="tips-grid">
                        {safetyTips.map((tip, index) => (
                            <div key={index} className="tip-card">
                                <h3>{tip.title}</h3>
                                <p>{tip.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section ref={tipsRef3} className={`tips-section ${tips3Visible ? 'slide-in-up' : ''}`}>
                <div className="container">
                    <h2>Hajj & Umrah Specific Tips</h2>
                    <p className="intro-text">For pilgrims embarking on the sacred journey:</p>
                    <div className="tips-grid">
                        {hajjUmrahTips.map((tip, index) => (
                            <div key={index} className="tip-card">
                                <h3>{tip.title}</h3>
                                <p>{tip.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TravelTipsPage;