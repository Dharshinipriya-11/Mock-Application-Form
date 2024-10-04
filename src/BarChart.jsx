import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.technology),
    datasets: [
      {
        label: 'Points',
        data: data.map(item => item.points),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
    scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
            callback: function (value) {
              return value;
            },
          },
        },
      },
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Technology Points Chart',
      },
    },
  };

  return (
    <div className="chart-container">
      <div className="chart-content">
        <h2>Points Overview</h2>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
