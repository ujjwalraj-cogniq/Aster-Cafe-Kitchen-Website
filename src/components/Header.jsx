import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import ReservationForm from './ReservationForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Prevent scroll when modal or menu is open
  useEffect(() => {
    if (isMenuOpen || isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, isModalOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = () => { setIsModalOpen(true); setIsMenuOpen(false); };
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="header-container">
          <Link to="/" className="header-logo" aria-label="Aster Cafe Home">
            <img src="/assets/images/Logo.png" alt="Aster Cafe" className="logo-img" />
            <div className="header-logo-text">
              <span className="logo-title">Aster</span>
              <span className="logo-subtitle">Cafe &amp; Kitchen</span>
            </div>
          </Link>

          <nav className="desktop-nav">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>Home</NavLink>
            <NavLink to="/menu" className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>Menu</NavLink>
            <NavLink to="/events" className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>Events</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>Our Story</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>Contact</NavLink>
          </nav>

          <div className="header-actions">
            <a href="https://wa.me/918686745411" target="_blank" rel="noopener noreferrer" className="cta-whatsapp desktop-only">
              WhatsApp
            </a>
            <button onClick={openModal} className="cta-primary desktop-only">Reserve a Table</button>
            <button 
              className={`hamburger ${isMenuOpen ? 'hamburger--open' : ''}`} 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__inner">
          <nav className="mobile-nav">
            <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? 'nav-link--active' : ''}`}>Home</NavLink>
            <NavLink to="/menu" className={({ isActive }) => `mobile-nav-link ${isActive ? 'nav-link--active' : ''}`}>Menu</NavLink>
            <NavLink to="/events" className={({ isActive }) => `mobile-nav-link ${isActive ? 'nav-link--active' : ''}`}>Events</NavLink>
            <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'nav-link--active' : ''}`}>Our Story</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link ${isActive ? 'nav-link--active' : ''}`}>Contact</NavLink>
          </nav>
          <div className="mobile-menu__actions">
            <button onClick={openModal} className="cta-primary w-full text-center">Reserve a Table</button>
            <a href="https://wa.me/918686745411" target="_blank" rel="noopener noreferrer" className="cta-whatsapp w-full text-center">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Reservation Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">×</button>
            <ReservationForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
