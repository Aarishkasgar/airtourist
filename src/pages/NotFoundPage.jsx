// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/NotFoundPage.css'; // You can create a specific CSS for this

function NotFoundPage() {
    return (
        <section className="not-found-page">
            <div className="container">
                <h1>404</h1>
                <p>Oops! The page you're looking for doesn't exist.</p>
                <Link to="/" className="secondary-btn">Go to Homepage</Link>
            </div>
        </section>
    );
}

export default NotFoundPage;