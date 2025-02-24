import React from 'react';
function HomePage() {
  return (
       <main className="center" id="main">
    <h1>Manage Your Budget Effectively</h1>
    <div id="chart-container">
        <canvas id="myChart"></canvas>
        <div id="d3-chart"></div>
    </div>

</main>
  );
}

export default HomePage;
