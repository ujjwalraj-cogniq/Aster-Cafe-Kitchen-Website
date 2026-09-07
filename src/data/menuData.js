// Exact file-to-dish mapping source of truth
export const ALL_MENU_ITEMS = [
  // ── Pizza ──
  { id: 'pz1', category: 'Pizza', title: "Aster's Signature Pizza", desc: 'Classic house pizza with premium cheese and vibrant sauce.', image: '/assets/images/pizza.webp' },
  { id: 'pz2', category: 'Pizza', title: 'Chicken Loaded Pizza', desc: 'Generously topped with seasoned chicken, peppers, and melted cheese.', image: '/assets/images/chicken_loaded_pizza.webp' },
  { id: 'pz3', category: 'Pizza', title: 'Spicy Hawaiian Pizza', desc: 'Juicy pineapple, spiced chicken, and house chilli flakes.', image: '/assets/images/spicy_hawaiian_pizza.webp' },

  // ── Burgers & Sandwiches ──
  { id: 'bg1', category: 'Burgers & Sandwiches', title: 'Signature Crispy Burger', desc: 'Golden crispy patty with fresh lettuce and house sauce.', image: '/assets/images/crispy-burger-and-fries-blue-plate.webp' },
  { id: 'bg2', category: 'Burgers & Sandwiches', title: 'Club Sandwich Platter', desc: 'Stacked grilled chicken and crisp veggies on artisan bread.', image: '/assets/images/club-sandwich-and-fries-platter.webp' },
  { id: 'bg3', category: 'Burgers & Sandwiches', title: 'Classic Burger Combo', desc: 'Juicy patty served with golden fries and a refreshing side.', image: '/assets/images/burgers-and-fries-presentation.webp' },

  // ── Breakfast ──
  { id: 'br1', category: 'Breakfast', title: 'Avocado Toast', desc: 'Mashed avocado on artisan bread, topped with microgreens.', image: '/assets/images/aster-cafe-avocado-toast-and-salad-presentation.webp' },
  { id: 'br2', category: 'Breakfast', title: 'Omelette & Fries', desc: 'Fluffy herb omelette paired with crispy golden fries.', image: '/assets/images/omelette-and-fries-breakfast-plate.webp' },
  { id: 'br3', category: 'Breakfast', title: 'Sweetcorn Omelette', desc: 'A rich, savory omelette packed with sweetcorn and fresh herbs.', image: '/assets/images/omelette-sweetcorn.webp' },
  { id: 'br4', category: 'Breakfast', title: 'Pancake Stack', desc: 'Towering fluffy pancakes served with fresh fruit and syrup.', image: '/assets/images/pancake-stack-presentation.webp' },
  { id: 'br5', category: 'Breakfast', title: 'Pain Perdu', desc: 'French-style brioche toast — crisp outside, pillowy soft within.', image: '/assets/images/pain-perdu-presentation.webp' },
  { id: 'br6', category: 'Breakfast', title: 'Nasi Goreng', desc: 'Indonesian fried rice topped with a perfectly cooked omelette.', image: '/assets/images/nasi-goreng-with-chicken-satay-friedrice-omelette.webp' },

  // ── Mains ──
  { id: 'mn1', category: 'Mains', title: 'Creamy Alfredo', desc: 'Rich, truffley, and deeply comforting pasta.', image: '/assets/images/alfredo-pasta-plate.webp' },
  { id: 'mn2', category: 'Mains', title: 'Grilled Chicken', desc: 'Herb-marinated chicken breast with seasonal vegetables.', image: '/assets/images/chicken-breast-with-grilled-veggies.webp' },
  { id: 'mn3', category: 'Mains', title: 'Chicken Fried Rice', desc: 'Wok-tossed rice with tender chicken and vegetables.', image: '/assets/images/chicken-fried-rice-black-bowl.webp' },
  { id: 'mn4', category: 'Mains', title: 'Tandoor Special', desc: 'Slow-cooked tandoor leg piece with soft rumali roti.', image: '/assets/images/tandoor_legpiece_rumali_roti.webp' },
  { id: 'mn5', category: 'Mains', title: 'Non-Veg Platter', desc: 'A multi-special platter featuring assorted grilled meats.', image: '/assets/images/multi-special-non-veg-platter.webp' },
  { id: 'mn6', category: 'Mains', title: 'Crispy Wings', desc: 'Saucy, bold wings loaded with house-special spice rub.', image: '/assets/images/chicken-wings-platter.webp' },
  { id: 'mn7', category: 'Mains', title: 'Coffee & Cutlets', desc: 'Freshly brewed coffee alongside crispy golden cutlets.', image: '/assets/images/coffee-and-fried-cutlets.webp' },
  { id: 'mn8', category: 'Mains', title: 'Assorted Platters', desc: 'A curated selection of our finest appetizers and mains.', image: '/assets/images/food-plattings.webp' },

  // ── Coffee & Drinks ──
  { id: 'cd1', category: 'Coffee & Drinks', title: 'Iced Matcha Latte', desc: 'Premium grade matcha whisked with milk over ice.', image: '/assets/images/iced-matcha-latte.webp' },

  // ── Cocktails & Mocktails ──
  { id: 'mc1', category: 'Cocktails & Mocktails', title: 'Blackberry Mojito', desc: 'Fresh blackberries, mint, and lime — bold and refreshing.', image: '/assets/images/blackberry-mojito-glass-table.webp' },
  { id: 'mc2', category: 'Cocktails & Mocktails', title: 'Blue Lagoon', desc: 'Electric-blue mocktail that glows as bright as our neon signs.', image: '/assets/images/blue-lagoon-mocktail-aster-cafe.webp' },
  { id: 'mc3', category: 'Cocktails & Mocktails', title: 'Chocolate & Red Splash', desc: 'A rich chocolate shake paired with a vibrant red mocktail.', image: '/assets/images/chocolate-shake-and-red-mocktail.webp' },
  { id: 'mc4', category: 'Cocktails & Mocktails', title: 'Aster Neon Splash', desc: 'A vibrant, layered signature mocktail.', image: '/assets/images/layered-orange-mocktail-glass.webp' },
  { id: 'mc5', category: 'Cocktails & Mocktails', title: 'Classic Mojito', desc: 'A refreshing blend of lime, mint, and sparkling water.', image: '/assets/images/Mojito.webp' },
  { id: 'mc6', category: 'Cocktails & Mocktails', title: 'Strawberry Mint', desc: 'Bright strawberry and fresh mint — our most refreshing sip.', image: '/assets/images/strawberry-mint-mocktail.webp' },
  { id: 'mc7', category: 'Cocktails & Mocktails', title: 'Watermelon Cooler', desc: 'Fresh watermelon blended into a chilled summer delight.', image: '/assets/images/watermelon-mocktail-heart-straw.webp' },

  // ── Desserts ──
  { id: 'ds1', category: 'Desserts', title: 'Chocolate Drizzled Waffle', desc: 'Freshly baked golden waffles topped with rich chocolate drizzle.', image: '/assets/images/chocolate-drizzled-waffle-dessert.webp' },
];

export const CATEGORIES = [
  'Pizza',
  'Burgers & Sandwiches',
  'Breakfast',
  'Mains',
  'Coffee & Drinks',
  'Cocktails & Mocktails',
  'Desserts'
];

export const HOME_TEASER_IDS = ['pz1', 'bg1', 'br1', 'mn1', 'cd1', 'mc4'];
