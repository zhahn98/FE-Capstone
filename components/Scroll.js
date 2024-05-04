/* eslint-disable import/newline-after-import */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState, useEffect } from 'react';

export default function ScrollArrow() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    // Add an event listener to listen for scroll events
    const handleScroll = () => {
      // Calculate how far the user has scrolled from the top of the page
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // How far the user can scroll before message disappears
      const scrollThreshold = 500;

      // Check if the user has scrolled past the scrollThreshold
      if (scrollY > scrollThreshold) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToBot = () => {
    // Smoothly scroll to the bottom of the page
    window.scrollTo({
      left: window.scrollX,
      top: 900,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <br />
      {showArrow && (
        <div className="scroll-arrow" onClick={scrollToBot}>
          <p className="scroll-text">&#11015; Click Me!</p>
        </div>
      )}
    </div>
  );
}
