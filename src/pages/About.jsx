import React, { useState } from 'react';
import usePageTitle from '../hooks/usePageTitle';
import GalleryLightbox from '../components/GalleryLightbox';

const galleryImages = [
  { src: '/assets/images/biryani-floral-wall-background.webp', alt: 'Biryani against floral wall', caption: 'Floral' },
  { src: '/assets/images/aster-cafe-outdoor-patio-evening.webp', alt: 'Aster Cafe outdoor patio', caption: 'Patio' },
  { src: '/assets/images/interrior.webp', alt: 'Aster Cafe interior styling', caption: 'Interior' },
  { src: '/assets/images/aster-cafe-bridal-shower--table-dinein-decor.webp', alt: 'Bridal shower table decor', caption: 'Decor' },
  { src: '/assets/images/aster-cafe-bridal-shower-decor.webp', alt: 'Bridal shower venue styling', caption: 'Events' },
  { src: '/assets/images/aster-cafe-avocado-toast-and-salad-presentation.webp', alt: 'Avocado toast and salad', caption: 'Fresh' },
  { src: '/assets/images/aster-cafe-interior-seating.webp', alt: 'Cozy interior seating', caption: 'Ambiance' },
  { src: '/assets/images/food-plattings.webp', alt: 'Beautiful food platting', caption: 'Gourmet' },
  { src: '/assets/images/multi-special-non-veg-platter.webp', alt: 'Non-veg platter', caption: 'Platter' },
  { src: '/assets/images/iced-matcha-latte.webp', alt: 'Iced Matcha Latte', caption: 'Matcha' },
  { src: '/assets/images/alfredo-pasta-plate.webp', alt: 'Alfredo Pasta', caption: 'Alfredo' },
  { src: '/assets/images/chocolate-drizzled-waffle-dessert.webp', alt: 'Waffle dessert', caption: 'Dessert' },
];

const About = () => {
  usePageTitle('Our Story');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);
  return (
    <>
    <section className="section about-section page-top" aria-label="About Aster">
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <img
              src="/assets/images/indoor-seating-area.webp"
              alt="Aster Cafe cozy indoor seating area with warm ambient gold lighting"
              className="img-premium about-img-main"
              loading="lazy"
            />
            <img
              src="/assets/images/dine-in-table.webp"
              alt="Intimate dine-in table setting at Aster Cafe"
              className="img-premium about-img-secondary"
              loading="lazy"
            />
          </div>

          <div className="about-content">
            <p className="section-eyebrow" style={{ marginBottom: '1rem' }}>Our Story</p>
            <h2 className="about-title">The Aster Experience</h2>
            <p className="about-desc">
              Step into a space buzzing with vibrant energy — plum-purple walls, glowing neon signs,
              romantic gold lighting, and lush floral installations. Aster isn't just a cafe;
              it's a feeling.
            </p>
            <p className="about-desc">
              Whether it's a quiet morning coffee or a lively late-night gathering, every corner
              of Aster Cafe is designed to be photographed, felt, and remembered.
            </p>
            <p className="about-desc">
              Rooted in Hyderabad's Banjara Hills, we bring together gourmet food, handcrafted
              drinks, and a space that's equal parts vibrant, floral, and deeply cozy.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ── Gallery Section ── */}
    <section id="gallery" className="section gallery-section" aria-label="Our Gallery">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-eyebrow">A Glimpse Inside</p>
          <h2>Moments at Aster</h2>
        </div>

        <div className="masonry-grid">
          {galleryImages.slice(0, visibleCount).map((img, idx) => (
            <div 
              key={idx} 
              className="masonry-item" 
              onClick={() => setLightboxIndex(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setLightboxIndex(idx); }}
              aria-label={`View enlarged ${img.caption}`}
            >
              <img src={img.src} alt={img.alt} className="masonry-img" loading="lazy" />
              <div className="masonry-overlay">
                <span>{img.caption}</span>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < galleryImages.length && (
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <button 
              onClick={() => setVisibleCount(galleryImages.length)} 
              className="btn btn-outline" 
              style={{ display: 'inline-flex', cursor: 'pointer' }}
            >
              See More Photos
            </button>
          </div>
        )}
      </div>
    </section>

    {lightboxIndex !== null && (
      <GalleryLightbox 
        images={galleryImages} 
        initialIndex={lightboxIndex} 
        onClose={() => setLightboxIndex(null)} 
      />
    )}
    </>
  );
};

export default About;
