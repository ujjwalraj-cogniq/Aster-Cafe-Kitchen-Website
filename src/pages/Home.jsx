import React from 'react';
import { Link } from 'react-router-dom';
import { ALL_MENU_ITEMS, HOME_TEASER_IDS } from '../data/menuData';
import MenuCard from '../components/MenuCard';
import RatingBadge from '../components/RatingBadge';
import usePageTitle from '../hooks/usePageTitle';

const Home = () => {
  usePageTitle('Where Flavor Meets Comfort');
  const teaserItems = ALL_MENU_ITEMS.filter(item => HOME_TEASER_IDS.includes(item.id));

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero" id="home" aria-label="Hero">
        <div className="hero-bg" aria-hidden="true">
          <img
            src="/assets/images/aster-cafe-outdoor-patio-evening.webp"
            alt="Aster Cafe Patio"
            className="hero-bg__img"
          />
          <div className="hero-bg__overlay" />
        </div>

        <div className="hero-content">

          <h1 className="hero-title">Where Flavor<br />Meets Comfort</h1>
          <p className="hero-subtitle">
            Handcrafted coffee, gourmet bites &amp; cozy vibes on Banjara Hills Road&nbsp;12.
          </p>
          <div className="hero-trust mt-8">
            <RatingBadge />
          </div>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <span className="scroll-line" />
        </div>
      </section>

      {/* ── Menu Teaser ── */}
      <section className="section menu-section" aria-label="Menu highlights">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">What We Serve</p>
            <h2>Curated Offerings</h2>
            <p className="section-sub">From early morning rituals to late-night culinary cravings.</p>
          </div>
          <div className="menu-grid">
            {teaserItems.slice(0, 6).map(item => <MenuCard key={item.id} item={item} />)}
          </div>
          <div className="menu-action">
            <Link to="/menu" className="btn btn-outline">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* ── Events Teaser ── */}
      <section className="section events-teaser" aria-label="Private Events">
        <div className="container">
          <div className="events-grid">
            <div className="events-image-col" style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/assets/images/aster-cafe-bridal-shower-decor.webp"
                alt="Aster Cafe beautifully decorated for an event"
                className="img-premium"
                loading="lazy"
                style={{ maxWidth: '85%' }}
              />
            </div>
            <div className="events-content">
              <p className="section-eyebrow" style={{ marginBottom: '1rem' }}>Celebrate With Us</p>
              <h2 className="events-title">Host Your Next Celebration</h2>
              <p className="events-desc">
                From intimate bridal showers to vibrant birthday parties, our romantic, neon-lit spaces provide the perfect backdrop for unforgettable gatherings.
              </p>
              <Link to="/events" className="btn btn-outline mt-8" style={{ display: 'inline-flex' }}>
                Explore Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story Teaser ── */}
      <section className="section story-teaser" aria-label="Our Story" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-content" style={{ order: 1 }}>
              <p className="section-eyebrow" style={{ marginBottom: '1rem' }}>Our Heritage</p>
              <h2 className="events-title">A Journey of Passion</h2>
              <p className="events-desc">
                Aster Cafe &amp; Kitchen was born out of a love for handcrafted food and vibrant community spaces. Join us in celebrating a modern twist on classic comforts.
              </p>
              <Link to="/about" className="btn btn-outline mt-8" style={{ display: 'inline-flex' }}>
                Read Our Story
              </Link>
            </div>
            <div className="about-image-col" style={{ order: 2 }}>
              <img
                src="/assets/images/indoor-seating-area.webp"
                alt="Aster Cafe indoor seating"
                className="img-premium"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Mini Gallery Strip ── */}
      <section className="section gallery-teaser" aria-label="Gallery Preview">
        <div className="container text-center">
          <div className="section-header">
            <p className="section-eyebrow">A Glimpse Inside</p>
            <h2>Aster Cafe in Pictures</h2>
          </div>
          
          <div className="mini-gallery-grid">
            <img src="/assets/images/img2.webp" alt="Cafe ambiance" className="mini-gallery-img" loading="lazy" />
            <img src="/assets/images/food_vibe.webp" alt="Food vibe" className="mini-gallery-img" loading="lazy" />
            <img src="/assets/images/cafe-front-view.webp" alt="Cafe front view" className="mini-gallery-img" loading="lazy" />
            <img src="/assets/images/live-music.webp" alt="Live music performance" className="mini-gallery-img" loading="lazy" />
            <img src="/assets/images/dine-in-table.webp" alt="Dine-in table setup" className="mini-gallery-img" loading="lazy" />
            <img src="/assets/images/coffee-and-fried-cutlets.webp" alt="Coffee and cutlets" className="mini-gallery-img" loading="lazy" />
          </div>

          <div className="mt-8 text-center" style={{ marginTop: '3rem' }}>
            <Link to="/about#gallery" className="btn btn-outline" style={{ display: 'inline-flex' }}>
              See More Photos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
