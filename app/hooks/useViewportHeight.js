// useViewportHeight.js
import { useEffect } from 'react';

const useViewportHeight = () => {
  useEffect(() => {
    // Function to update the --vh custom property
    const setVhProperty = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Set the --vh custom property initially
    setVhProperty();

    // Update the --vh custom property on resize
    window.addEventListener('resize', setVhProperty);

    // Clean up the event listener
    return () => window.removeEventListener('resize', setVhProperty);
  }, []);
};

export default useViewportHeight;