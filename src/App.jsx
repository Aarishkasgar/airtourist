// src/App.jsx
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import HajjPage from './pages/HajjPage';
import UmrahPage from './pages/UmrahPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import TravelTipsPage from './pages/TravelTipsPage'; // New Page Import
import NotFoundPage from './pages/NotFoundPage';

// Optional: Component to scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

// Hook for fade-in on scroll (re-usable)
export const useOnScreen = (ref, rootMargin = '0px') => {
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If it's intersecting, set true and disconnect observer (observe once)
                if (entry.isIntersecting) {
                    setIntersecting(true);
                    observer.unobserve(entry.target);
                }
            },
            { rootMargin }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, rootMargin]);
    return isIntersecting;
};


function App() {
    return (
        <Router>
            <ScrollToTop /> {/* Add this */}
            <div className="app-container">
                <Header />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/hajj" element={<HajjPage />} />
                        <Route path="/umrah" element={<UmrahPage />} />
                        <Route path="/gallery" element={<GalleryPage />} /> {/* New Route */}
                        <Route path="/travel-tips" element={<TravelTipsPage />} /> {/* New Route */}
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<NotFoundPage />} /> {/* 404 Page */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;