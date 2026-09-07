import React from 'react';

const RatingBadge = ({ className = '' }) => {
  return (
    <div className={`rating-badge ${className}`}>
      <div className="rating-badge__stars">
        <span className="star">★</span>
        <span className="star">★</span>
        <span className="star">★</span>
        <span className="star">★</span>
        <span className="star-half">★</span>
      </div>
      <div className="rating-badge__text">
        <span className="score">4.2</span>
        <span className="reviews">(550+ Google Reviews)</span>
      </div>
    </div>
  );
};

export default RatingBadge;
