import React, { useState } from 'react';
import { ALL_MENU_ITEMS, CATEGORIES } from '../data/menuData';
import MenuCard from '../components/MenuCard';
import usePageTitle from '../hooks/usePageTitle';

const Menu = () => {
  usePageTitle('Menu');
  const [active, setActive] = useState('Pizza'); // Defaulting to Pizza to showcase it
  
  // Adding 'All' to the start
  const allCats = ['All', ...CATEGORIES];

  const filtered = active === 'All'
    ? ALL_MENU_ITEMS
    : ALL_MENU_ITEMS.filter(i => i.category === active);

  return (
    <section className="section menu-section page-top" aria-label="Full menu">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Explore</p>
          <h2>Curated Offerings</h2>
          <p className="section-sub">Fresh ingredients, bold flavours, baked and brewed with love.</p>
        </div>

        <div className="category-filter" role="tablist" aria-label="Menu categories">
          {allCats.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`filter-btn ${active === cat ? 'filter-btn--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-grid" role="tabpanel">
          {filtered.map(item => <MenuCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
};

export default Menu;
