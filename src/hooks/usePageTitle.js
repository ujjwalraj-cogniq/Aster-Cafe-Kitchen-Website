import { useEffect } from 'react';

const usePageTitle = (subtitle) => {
  useEffect(() => {
    document.title = subtitle
      ? `Aster Cafe & Kitchen | ${subtitle}`
      : 'Aster Cafe & Kitchen | Where Flavor Meets Comfort';
  }, [subtitle]);
};

export default usePageTitle;
