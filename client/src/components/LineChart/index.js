import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { FiClock } from 'react-icons/fi';
import '../../styles/LineChart.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: false,
        },
    },
};

export default function LineChart(props) {
    return (
        <div className="line-chart">
            <h2>{props.title}</h2>
            <div className="line-chart-text">
                <FiClock />
                <span>Realtime-last 10 minutes</span>
            </div>
            <Line options={options} data={props.data} />
        </div>
    );
}
