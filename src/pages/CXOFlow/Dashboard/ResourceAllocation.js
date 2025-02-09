import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ["Development", "Design", "DevOps", "Marketing", "Finance"],
    datasets: [
        {
            data: [30, 20, 25, 15, 10],
            backgroundColor: ["#6B46C1", "#805AD5", "#9F7AEA", "#B794F4", "#D6BCFA"], // Purple shades
            hoverBackgroundColor: ["#553C9A", "#6B46C1", "#805AD5", "#9F7AEA", "#C084FC"],
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            position: "right",
            labels: { color: "#6B46C1" }, // Purple text color
        },
    },
};

const ResourceAllocation = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-bold text-blacl mb-4">Resource Allocation</h2>
            <div className="h-64">
                <Pie data={data} options={options} />
            </div>
        </div>
    );
};

export default ResourceAllocation;
