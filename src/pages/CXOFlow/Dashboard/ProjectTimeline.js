import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
    labels: ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024"],
    datasets: [
        {
            label: "Project Progress",
            data: [70, 80, 60, 90],
            backgroundColor: ["#6B46C1", "#805AD5", "#9F7AEA", "#B794F4"], // Purple Shades
            borderRadius: 5,
            barPercentage: 0.7,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            position: "top",
            labels: { color: "#6B46C1" }, // Purple text color
        },
    },
    scales: {
        x: {
            grid: { display: false },
            ticks: { color: "#6B46C1" }, // Purple text color
        },
        y: {
            beginAtZero: true,
            ticks: { stepSize: 20, color: "#6B46C1" }, // Purple text color
        },
    },
};

const ProjectTimeline = () => {
    return (
        <div className="bg-white p-6 border rounded-lg shadow-sm">
            <h2 className="text-lg font-bold text-black mb-4">Project Timeline</h2>
            <div className="h-64">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default ProjectTimeline;
