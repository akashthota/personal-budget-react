import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2'; // Import the Bar chart from Chart.js
import * as d3 from 'd3'; // Import D3.js
import axios from 'axios'; // For data fetching

function HomePage() {
  // State for budget data
  const [budgetData, setBudgetData] = React.useState([]);

  // Fetching budget data for both charts (assuming data is available)
  useEffect(() => {
    axios.get("http://localhost:3000/budget-data")
      .then(response => {
        setBudgetData(response.data);
      })
      .catch(error => {
        console.error("Error fetching budget data:", error);
      });
  }, []);

  // Chart.js Data Setup
  const chartData = {
    labels: budgetData.map(item => item.category),
    datasets: [
      {
        label: 'Budget',
        data: budgetData.map(item => item.amount),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  // D3.js Chart Logic
  useEffect(() => {
    const svg = d3.select("#d3-chart")
      .attr("width", 400)
      .attr("height", 300);

    svg.selectAll("rect")
      .data(budgetData)
      .enter()
      .append("rect")
      .attr("x", (_, i) => i * 50)
      .attr("y", d => 300 - d.amount)
      .attr("width", 40)
      .attr("height", d => d.amount)
      .attr("fill", "blue");
  }, [budgetData]);

  return (
    <main className="center" id="main">
      <h1>Manage Your Budget Effectively</h1>
      <div id="chart-container">
        <div className="card">
          <h2>Budget Overview (Chart.js)</h2>
          <Bar data={chartData} />
        </div>
        <div className="card">
          <h2>Budget Visualization (D3.js)</h2>
          <svg id="d3-chart"></svg>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
