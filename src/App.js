import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';
import './App.css';

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/Homepage';
import Footer from './Footer/Footer';
import AboutPage from "./AboutPage/AboutPage";
import LoginPage from "./LoginPage/LoginPage"; // Ensure this file exists

function App() {
  return (
    <Router>
      <Menu />
      <Hero />
      
      <div className="mainContainer">
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      
      <HomePage />
      <Footer />
    </Router>
  );
}

export default App;
