// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slide from './Slide';
// import SlideNavigation from './SlideNavigation';
// import { slides } from './slides';

function App() {
  return (
    <Router>
      <div>
        {/* <SlideNavigation /> */}
        <Routes>
          <Route path="/" element={<h2>index /</h2>} />
          <Route path="/:id" element={<Slide />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
