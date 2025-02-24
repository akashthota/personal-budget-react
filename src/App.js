import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.scss";

// Import Chart and D3 components
import BudgetChart from "./BudgetChart";
import D3Chart from "./D3Chart";

// Create Menu component for navigation
const Menu = () => (
  <nav className="navbar">
    <h2>Personal Budget</h2>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </nav>
);

// Home component with Budget and Charts
const Home = () => {
  const [budgetData, setBudgetData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/budget")
      .then(response => {
        console.log("API Response:", response.data);
        setBudgetData(response.data);
      })
      .catch(error => {
        console.error("Error fetching budget data:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Personal Budget App</h1>
      <div className="card">
        <h2>Budget Overview (Chart.js)</h2>
        <BudgetChart data={budgetData} />
      </div>
      <div className="card">
        <h2>Budget Visualization (D3.js)</h2>
        <D3Chart data={budgetData} />
      </div>
    </div>
  );
};

// Other components for routing
const About = () => <h2 className="page">About Page</h2>;
const Login = () => <h2 className="page">Login Page</h2>;

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
