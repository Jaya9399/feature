import React from "react";
import { AlertTriangle, TrendingUp, Info, Zap } from "lucide-react";

const Insights = () => {
    const insights = [
        { icon: AlertTriangle, title: "Critical Projects", description: "3 projects need immediate attention", color: "bg-purple-300" },
        { icon: TrendingUp, title: "Success Forecast", description: "85% projects on track for success", color: "bg-purple-300" },
        { icon: Info, title: "Bottleneck Alert", description: "Testing phase causing delays", color: "bg-purple-400" },
        { icon: Zap, title: "Budget Optimization", description: "Reallocate resources to Project X", color: "bg-purple-400" },
    ];

    return (
        <div className="bg-purple-600 text-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-lg font-bold mb-4">AI-Powered Insights</h2>
            <div className="grid grid-cols-4 gap-4">
                {insights.map(({ icon: Icon, title, description, color }, index) => (
                    <div key={index} className={`p-4 rounded-lg ${color} text-gray-800`}>
                        <Icon className="w-6 h-6 mb-2 text-gray-800" />
                        <h3 className="font-bold text-sm">{title}</h3>
                        <p className="text-sm">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Insights;
