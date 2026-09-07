import React from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

const NotFound = () => {
  usePageTitle('Page Not Found');
  return (
    <section className="section page-top not-found-section" aria-label="Page not found">
      <div className="container not-found-content text-center">
        <span className="not-found-code" aria-hidden="true" style={{ fontSize: '6rem', color: '#C5A059', fontFamily: 'Playfair Display, serif' }}>404</span>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#F8F8F2' }}>This page wandered off the menu.</h2>
        <p style={{ color: '#9CA3AF', marginBottom: '2rem' }}>The page you're looking for doesn't exist — but great food does.</p>
        <Link to="/" className="cta-primary" style={{ display: 'inline-flex' }}>Back to Home</Link>
      </div>
    </section>
  );
};

export default NotFound;
