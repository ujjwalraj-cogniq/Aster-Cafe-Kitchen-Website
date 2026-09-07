import React from 'react';

const MenuCard = ({ item }) => {
  return (
    <div className="menu-card">
      <div className="menu-card__image-wrapper">
        <img
          src={item.image}
          alt={item.title}
          className="menu-card__image"
          loading="lazy"
        />
      </div>
      <div className="menu-card__content">
        <h3 className="menu-card__title">{item.title}</h3>
        <p className="menu-card__desc">{item.desc}</p>
      </div>
    </div>
  );
};

export default MenuCard;
