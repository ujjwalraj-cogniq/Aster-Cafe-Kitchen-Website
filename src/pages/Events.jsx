import React from 'react';
import usePageTitle from '../hooks/usePageTitle';

const Events = () => {
  usePageTitle('Private Events');
  return (
    <section className="section events-section page-top" aria-label="Private events">
      <div className="container">
        <div className="events-grid">
          <div className="events-image-col">
            <img
              src="/assets/images/aster-cafe-tricolor-decorations.webp"
              alt="Beautifully decorated event table setup at Aster Cafe"
              className="img-premium"
              loading="lazy"
            />
          </div>
          <div className="events-content">
            <p className="section-eyebrow" style={{ marginBottom: '1rem' }}>Host With Us</p>
            <h2 className="events-title">Celebrate<br />Your Special Moments</h2>
            <p className="events-desc">
              From intimate bridal showers and vibrant birthday parties to creative art workshops and private catering.
              Our glowing, romantic spaces — flooded with neon warmth and floral accents —
              provide the perfect backdrop for unforgettable gatherings.
            </p>
            <ul className="events-list">
              <li><span className="bullet" aria-hidden="true" /><span>Birthday Parties &amp; Anniversaries</span></li>
              <li><span className="bullet" aria-hidden="true" /><span>Bridal Showers &amp; Pre-wedding Events</span></li>
              <li><span className="bullet" aria-hidden="true" /><span>Art Workshops &amp; Creative Meetups</span></li>
              <li><span className="bullet" aria-hidden="true" /><span>Private Catering &amp; Curated Menus</span></li>
            </ul>
            <a
              href="https://wa.me/918686745411"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline mt-8"
              style={{ display: 'inline-flex' }}
            >
              Inquire for Booking
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
