import React from 'react';
import ReservationForm from '../components/ReservationForm';
import usePageTitle from '../hooks/usePageTitle';

const Contact = () => {
  usePageTitle('Contact & Location');
  return (
    <section className="section contact-section page-top" aria-label="Contact and location">
      <div className="container contact-container">
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <p className="section-eyebrow">Find Us</p>
          <h2>Visit Us</h2>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info contact-card">
            <div className="mb-6">
              <img 
                src="/assets/images/cafe-front-view.webp" 
                alt="Aster Cafe Front View" 
                className="img-premium" 
                style={{ height: '270px', width: '100%', objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Banjara Hills Rd No. 12<br />Behind Kawasaki Showroom<br />Hyderabad, Telangana</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div className="contact-details">
                <h3>Hours</h3>
                <p className="contact-hours-main">Daily: 8:30 AM – 3:00 AM</p>
                <p className="contact-note" style={{ fontSize: '0.75rem', color: '#9CA3AF', marginTop: '0.25rem' }}>
                  Hours sourced from public listings — please confirm before a late-night visit.
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div className="contact-details">
                <h3>Contact</h3>
                <a href="tel:+918686745411">+91 86867 45411</a>
                <a href="mailto:gyanprakash9966@gmail.com">gyanprakash9966@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper contact-card">
            <ReservationForm />
          </div>
        </div>

        <div className="contact-map" style={{ height: '320px', width: '100%', marginTop: '3rem' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.7598700803879!2d78.43487517618995!3d17.41112228348037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb977407bd329f%3A0x533f05720f570ce7!2sASTER+CAFE+%26+KITCHEN!5e0!3m2!1sen!2sin!4v1714541234567!5m2!1sen!2sin"
            title="Aster Cafe & Kitchen — Location Map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            style={{ width: '100%', height: '100%', border: 0, borderRadius: '8px' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
