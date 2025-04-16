import React, { useState, useEffect } from 'react';
import { IoMdArrowUp } from 'react-icons/io';
import "../pagestyle/Scroll.scss"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) { 
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <IoMdArrowUp size={30} />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;