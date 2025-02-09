import React from "react";
import { MessageCircle, CheckCircle } from "lucide-react";

const columns = [
    {
        title: "Back-log",
        count: 2,
        tasks: [
            {
                title: "User Authentication",
                description: "Implement OAuth and role-based access control",
                colors: ["bg-purple-500", "bg-green-500"],
                comments: 4,
            },
            {
                title: "API Integration",
                description: "Connect with external services via REST API",
                colors: ["bg-red-500"],
                comments: 2,
            },
        ],
    },
    {
        title: "In Progress",
        count: 1,
        tasks: [
            {
                title: "Dashboard UI",
                description: "Design and implement main dashboard interface",
                colors: ["bg-purple-500", "bg-green-500", "bg-red-500"],
                comments: 6,
            },
        ],
    },
    {
        title: "Completed",
        count: 1,
        tasks: [
            {
                title: "User Settings",
                description: "Implement user preferences and settings page",
                colors: ["bg-purple-500"],
                comments: 8,
                isCompleted: true,
            },
        ],
    },
];

const FeatureBoard = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-700">Feature Board</h2>
                <div className="flex gap-2">
                    <button className="border border-gray-300 text-gray-600 px-3 py-1 rounded-md hover:bg-gray-100">
                        Filter
                    </button>
                    <button className="bg-purple-500 text-white px-4 py-1 rounded-md hover:bg-purple-600">
                        Add Feature
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {columns.map((column, index) => (
                    <div key={index}>
                        <h3 className="text-gray-700 font-medium mb-2">
                            {column.title} <span className="text-gray-500">({column.count})</span>
                        </h3>
                        <div className="space-y-4">
                            {column.tasks.map((task, taskIndex) => (
                                <div key={taskIndex} className="bg-gray-50 p-4 rounded-md shadow-sm">
                                    <h4 className="font-semibold text-gray-800">{task.title}</h4>
                                    <p className="text-sm text-gray-600">{task.description}</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <div className="flex space-x-1">
                                            {task.colors.map((color, colorIndex) => (
                                                <div
                                                    key={colorIndex}
                                                    className={`w-4 h-4 rounded-full ${color}`}
                                                ></div>
                                            ))}
                                        </div>
                                        <div className="flex items-center text-gray-500 space-x-1">
                                            {task.isCompleted ? (
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                            ) : (
                                                <MessageCircle className="w-4 h-4" />
                                            )}
                                            <span className="text-sm">{task.comments}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureBoard;
