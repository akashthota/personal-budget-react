import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const BudgetChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["Loading..."],
    datasets: [
      {
        label: "Budget",
        data: [0],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  });

  useEffect(() => {
    axios.get("http://localhost:3000/budget")
      .then(response => {
        console.log("API Response:", response.data); // ✅ Debugging Line

        if (!response.data || response.data.length === 0) {
          console.warn("No data received, using mock data.");
          response.data = [
            { category: "Food", amount: 300 },
            { category: "Rent", amount: 1000 },
            { category: "Entertainment", amount: 150 },
          ];
        }

        const labels = response.data.map(item => item.category);
        const data = response.data.map(item => item.amount);

        setChartData({
          labels,
          datasets: [
            {
              label: "Budget",
              data,
              backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
          ],
        });
      })
      .catch(error => {
        console.error("Error fetching chart data:", error);
      });
  }, []);

  return <Bar data={chartData} />;
};

export default BudgetChart;
