import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Chatbot from '../components/Chatbot';

const Layout = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation.pathname]);

  const handleAnimationEnd = () => {
    if (transitionStage === 'fadeOut') {
      setDisplayLocation(location);
      setTransitionStage('fadeIn');
      window.scrollTo(0, 0); // scroll to top on actual route change
    }
  };

  return (
    <div className="app-container">
      <Header />
      <main 
        className={`page-transition ${transitionStage}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <Outlet context={displayLocation} />
      </main>
      <Footer />
      <ScrollToTopButton />
      <Chatbot />
    </div>
  );
};

export default Layout;
