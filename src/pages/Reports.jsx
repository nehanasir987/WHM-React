import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js";
import "bootstrap/dist/css/bootstrap.min.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

function Reports() {
  const [products] = useState([
    { id: 1, name: "Laptop", stock: 20, price: 1000 },
    { id: 2, name: "Keyboard", stock: 5, price: 50 },
    { id: 3, name: "Shoes", stock: 15, price: 80 },
    { id: 4, name: "Book", stock: 2, price: 10 },
  ]);

  const labels = products.map(p => p.name);
  const stockData = products.map(p => p.stock);
  const valueData = products.map(p => p.stock * p.price);


  return (
    <div className="container mt-5">
      <h2 className="mb-4">Reports Dashboard</h2>

      {/* Bar Chart for Stock */}
      <div className="mb-5">
        <h4>Stock Bar Chart</h4>
        <Bar
          data={{
            labels,
            datasets: [
              { label: "Stock", data: stockData, backgroundColor: "lightblue" },
            ],
          }}
          options={{
            plugins: {
              legend: { display: true, position: "top" },

              tooltip: { enabled: true }
            }
          }}
        />
      </div>

    
    </div>
  );
}

export default Reports;
