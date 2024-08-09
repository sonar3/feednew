// src/SlideNavigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import { slides } from './slides';

function SlideNavigation() {
  return (
    <nav>
      {slides.map(slide => (
        <Link key={slide.id} to={`/${slide.id}`} style={{ margin: '0 10px' }}>
          {/* {slide.id} */}
        </Link>
      ))}
    </nav>
  );
}

export default SlideNavigation;
