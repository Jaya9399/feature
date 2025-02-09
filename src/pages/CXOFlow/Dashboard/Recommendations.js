import React from "react";

const Recommendations = () => {
    const recommendations = [
        { title: "Resource Allocation", description: "Add 2 DevOps engineers to Project X", priority: "High" },
        { title: "Timeline Adjustment", description: "Extend UX phase by 2 weeks", priority: "Medium" },
    ];

    return (
        <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">AI Recommendations</h2>
            <ul className="space-y-4">
                {recommendations.map((rec, index) => (
                    <li key={index} className="p-4 border rounded-lg shadow-sm">
                        <h3 className="font-semibold text-gray-900">{rec.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{rec.description}</p>
                        <span className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full 
                            ${rec.priority === "High" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>
                            {rec.priority} Priority
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Recommendations;
