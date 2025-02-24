import React, { useEffect, useState } from "react";
import axios from "axios";

const Budget = () => {
  const [budgetData, setBudgetData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/budget")
      .then(response => setBudgetData(response.data))
      .catch(error => console.error("Error fetching budget data:", error));
  }, []);

  return (
    <div>
      <h2>Budget Data</h2>
      <pre>{JSON.stringify(budgetData, null, 2)}</pre>
    </div>
  );
};

export default Budget;
