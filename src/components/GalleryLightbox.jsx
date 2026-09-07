import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryLightbox = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const goNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (initialIndex === null) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose} aria-modal="true" role="dialog">
      <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
        <X size={32} />
      </button>
      
      <button className="lightbox-nav prev" onClick={goPrev} aria-label="Previous image">
        <ChevronLeft size={48} />
      </button>
      
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt || 'Gallery image'} 
          className="lightbox-image fade-in-fast"
          key={currentIndex} // forces re-render for animation
        />
        {images[currentIndex].caption && (
          <p className="lightbox-caption">{images[currentIndex].caption}</p>
        )}
      </div>

      <button className="lightbox-nav next" onClick={goNext} aria-label="Next image">
        <ChevronRight size={48} />
      </button>
    </div>
  );
};

export default GalleryLightbox;
