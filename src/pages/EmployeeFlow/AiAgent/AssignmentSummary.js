import React from "react";

const assignments = [
    {
        task: "Market Analysis Report Generation",
        agent: "Pending Assignment",
        status: "Pending",
        priority: "High",
    },
    {
        task: "Customer Feedback Analysis",
        agent: "Pending Assignment",
        status: "In-progress",
        priority: "Medium",
    },
    {
        task: "Sales Forecast Modeling",
        agent: "Pending Assignment",
        status: "Pending",
        priority: "High",
    },
];

const AssignmentSummary = () => {
    return (
        <div className="bg-white p-6 shadow-lg rounded-lg mt-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Assignment Summary</h2>
                <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg">
                    Confirm Assignments
                </button>
            </div>
            <table className="w-full table-auto text-left text-sm">
                <thead>
                    <tr className="text-gray-600 border-b">
                        <th className="py-2">Task</th>
                        <th className="py-2">Assigned AI Agent</th>
                        <th className="py-2">Status</th>
                        <th className="py-2">Priority</th>
                    </tr>
                </thead>
                <tbody>
                    {assignments.map((assignment, index) => (
                        <tr key={index} className="border-b">
                            <td className="py-3 text-gray-800">{assignment.task}</td>
                            <td className="py-3 text-gray-500">{assignment.agent}</td>
                            <td className="py-3 text-gray-500">{assignment.status}</td>
                            <td
                                className={`py-3 ${
                                    assignment.priority === "High"
                                        ? "text-red-500"
                                        : "text-yellow-500"
                                }`}
                            >
                                {assignment.priority}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AssignmentSummary;
