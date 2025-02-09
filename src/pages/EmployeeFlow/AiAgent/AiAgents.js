import React from "react";
import { ChartNoAxesColumn, ChartNoAxesCombined, Gauge } from "lucide-react";

const agents = [
    {
        name: "InsightBot",
        type: "Predictive AI",
        status: "Available",
        trend: "Trend Analysis",
        speed: "500/min",
        accuracy: "85%",
    },
    {
        name: "ContentGenius",
        type: "Generative AI",
        status: "In-use",
        trend: "Content Creation",
        speed: "450/min",
        accuracy: "92%",
    },
    {
        name: "DataMaster",
        type: "Rule-Based AI",
        status: "Available",
        trend: "Data Processing",
        speed: "600/min",
        accuracy: "88%",
    },
    {
        name: "AutoFlow",
        type: "Automation AI",
        status: "Offline",
        trend: "Workflow Automation",
        speed: "350/min",
        accuracy: "78%",
    },
];

const AiAgents = () => {
    return (
        <div className="bg-white px-12 py-8 shadow-2xl rounded-xl max-w-screen-xl mx-auto">
            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-left">
                AI Agents
            </h2>
            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {agents.map((agent, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-gray-50"
                    >
                        <div className="flex justify-between items-center ">
                            <h3 className="text-xl font-semibold text-gray-800">
                                {agent.name}
                            </h3>
                            <span
                                className={`text-sm px-3 py-1 rounded-lg font-medium ${
                                    agent.status === "Available"
                                    ? "bg-green-100 text-green-600"
                                    : agent.status === "In-use"
                                    ? "bg-purple-100 text-purple-600"
                                    : "bg-gray-100 text-gray-600"
                                }`}
                            >
                                {agent.status}
                            </span>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">{agent.type}</p>
                        <span className="text-sm text-gray-600 bg-gray-200 p-1 w-min rounded-lg">{agent.trend}</span>
                        <div className="flex justify-between items-center text-sm text-gray-600 mt-6">
                            <div className="flex items-center gap-1">
                                <Gauge className="w-5 h-5 text-purple-600 font-bold" />
                                <span>{agent.speed}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <ChartNoAxesColumn className="w-5 h-5 text-purple-600 font-bold" />
                                <span>{agent.accuracy}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AiAgents;
