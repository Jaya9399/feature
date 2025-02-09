import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { PieChart as PieIcon, TrendingUp } from "lucide-react";

const dataPie = [
    { name: "Completed", value: 70, color: "#8b5cf6" },
    { name: "Pending", value: 30, color: "#cbd5e1" },
];

const dataBar = [
    { name: "Week 1", utilization: 75 },
    { name: "Week 2", utilization: 80 },
    { name: "Week 3", utilization: 85 },
    { name: "Week 4", utilization: 90 },
];

const PerformanceTrends = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {/* Delivery Efficiency (Pie Chart) */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <PieIcon className="text-purple-500 w-12 h-12 mb-4" />
                <h3 className="font-bold text-lg">Delivery Efficiency</h3>
                <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                        <Pie
                            data={dataPie}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            innerRadius={60}
                            paddingAngle={5}
                        >
                            {dataPie.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <p className="text-sm text-gray-500">Task Completion Rate</p>
            </div>

            {/* Resource Utilization (Bar Chart) */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <TrendingUp className="text-purple-500 w-12 h-12 mb-4" />
                <h3 className="font-bold text-lg">Resource Utilization</h3>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={dataBar}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="utilization" fill="#a78bfa" radius={[5, 5, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
                <p className="text-sm text-gray-500">Weekly Utilization Trends</p>
            </div>
        </div>
    );
};

export default PerformanceTrends;
