import React from "react";

const tasks = [
    {
        title: "Market Analysis Report Generation",
        description: "Generate comprehensive market analysis report for Q1 2024",
        category: "Automation",
        due: "Due in 3 days",
        progress: 0,
        priority: "High",
        agent: "Select Agent",
    },
    {
        title: "Customer Feedback Analysis",
        description: "Analyze customer feedback data from social media channels",
        category: "Data Analysis",
        due: "Due in 3 days",
        progress: 45,
        priority: "Medium",
        agent: "ContentGenius",
    },
    {
        title: "Sales Forecast Modeling",
        description: "Create sales forecast models for upcoming quarter",
        category: "Predictive Analysis",
        due: "Due in 3 days",
        progress: 0,
        priority: "High",
        agent: "AutoFlow",
    },
];

const availableAgents = ["ContentGenius", "AutoFlow"];

const Tasks = () => {
    return (
        <div className="bg-white px-8 py-6 shadow-lg rounded-xl max-w-screen-md mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Tasks</h2>
                <button className="text-sm font-medium text-white bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-md">
                    Auto Assign
                </button>
            </div>
            <div className="space-y-4">
                {tasks.map((task, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 p-4 rounded-lg"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-medium text-gray-800">{task.title}</h3>
                            <span
                                className={`text-xs px-2 py-1 rounded-md ${
                                    task.priority === "High"
                                        ? "bg-red-100 text-red-600"
                                        : "bg-yellow-100 text-yellow-600"
                                }`}
                            >
                                {task.priority}
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{task.description}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-2 mt-4">
                            <div className="flex justify-start items-center">
                                <span className="bg-gray-200 px-2 py-1 rounded-lg">{task.category}</span>
                                <p className="text-xs text-gray-500 ml-4">{task.due}</p>
                            </div>
                            <select
                                className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:ring-purple-500 focus:border-purple-500"
                                value={task.agent}
                                onChange={() => {}}
                            >
                                <option value="Select Agent" disabled>
                                    Select Agent
                                </option>
                                {availableAgents.map((agent) => (
                                    <option key={agent} value={agent}>
                                        {agent}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-3">
                            <div className="bg-gray-200 h-2 rounded-full w-full">
                                <div
                                    className="bg-purple-500 h-2 rounded-full"
                                    style={{ width: `${task.progress}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tasks;
