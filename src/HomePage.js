import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.js';
import './App.css';

const HomePage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default HomePage;
