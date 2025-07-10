// src/pages/GalleryPage.jsx
import React, { useRef } from 'react';
import { useOnScreen } from '../App';
import '../styles/GalleryPage.css'; // Create this CSS file

function GalleryPage() {
    const heroRef = useRef();
    const galleryGridRef = useRef();

    const heroVisible = useOnScreen(heroRef, '-100px');
    const galleryGridVisible = useOnScreen(galleryGridRef, '-100px');

    const images = [
        { src: 'https://images.unsplash.com/photo-1501785888041-af3ba6f60060?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Beautiful beach destination' },
        { src: 'https://images.unsplash.com/photo-1528184687654-a631f4722a84?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Mountain landscape' },
        { src: 'https://images.unsplash.com/photo-1510414349142-b94f31c2d0f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'City skyline at night' },
        { src: 'https://images.unsplash.com/photo-1518684079-c53c05e197ab?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Ancient ruins' },
        { src: 'https://images.unsplash.com/photo-1542382257-233d267ac125?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Pilgrimage site' },
        { src: 'https://images.unsplash.com/photo-1596706037807-6b45a963e3d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Safari adventure' },
        { src: 'https://images.unsplash.com/photo-1519638399535-1b3266d66e74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Historical building' },
        { src: 'https://images.unsplash.com/photo-1507204918731-831d1d817415?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Winter Wonderland' },
        { src: 'https://images.unsplash.com/photo-1490600125586-35a8ceea4e85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Cultural festival' },
    ];

    return (
        <div className="gallery-page">
            <section ref={heroRef} className={`gallery-hero ${heroVisible ? 'fade-in' : ''}`}>
                <div className="container">
                    <h1>Our Travel Gallery</h1>
                    <p style={{ animationDelay: '0.2s' }}>Explore a collection of moments from our unforgettable journeys.</p>
                </div>
            </section>

            <section ref={galleryGridRef} className={`gallery-content ${galleryGridVisible ? 'slide-in-up' : ''}`}>
                <div className="container">
                    <h2>Memories from Around the World</h2>
                    <p className="intro-text">Dive into the breathtaking sights and experiences shared by our travelers. These images capture the essence of the diverse destinations and spiritual journeys we facilitate.</p>
                    <div className="gallery-grid">
                        {images.map((image, index) => (
                            <div key={index} className="gallery-item">
                                <img src={image.src} alt={image.alt} loading="lazy" />
                                <div className="overlay">
                                    <p>{image.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GalleryPage;