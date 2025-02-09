import React from "react";
import { BarChart, AlertTriangle, Check, TrendingUp } from "lucide-react";

const Stats = () => {
    const stats = [
        { icon: BarChart, value: 35, label: "Active Projects", color: "text-purple-500" },
        { icon: AlertTriangle, value: 6, label: "Delayed Projects", color: "text-red-500" },
        { icon: Check, value: 12, label: "Completed", color: "text-green-500" },
        { icon: TrendingUp, value: "+2%", label: "Budget Deviation", color: "text-purple-500" },
        { icon: BarChart, value: "85%", label: "Efficiency Score", color: "text-purple-500" },
    ];

    return (
        <div className="grid grid-cols-5 gap-6 mb-8">
            {stats.map(({ icon: Icon, value, label, color }, index) => (
                <div
                    key={index}
                    className="p-6 bg-white border rounded-lg shadow-sm text-center"
                >
                    <Icon className={`w-8 h-8 mx-auto mb-4 ${color}`} />
                    <div className="text-3xl font-bold text-gray-800">{value}</div>
                    <div className="text-sm text-gray-500">{label}</div>
                </div>
            ))}
        </div>
    );
};

export default Stats;
