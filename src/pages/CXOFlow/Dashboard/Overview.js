import React from "react";

const Overview = () => {
    const projects = [
        { name: "AI Platform Migration", department: "Development", progress: 80, risk: "Low", status: "On Track", timeline: "Q2 2024" },
        { name: "UX Redesign", department: "Design", progress: 60, risk: "Medium", status: "At Risk", timeline: "Q3 2024" },
        { name: "Cloud Infrastructure", department: "DevOps", progress: 90, risk: "Low", status: "On Track", timeline: "Q2 2024" },
    ];

    return (
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Project Overview</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="text-gray-700 text-sm border-b">
                        <th className="py-3 px-2 text-left">Project</th>
                        <th className="py-3 px-2">Department</th>
                        <th className="py-3 px-2">Progress</th>
                        <th className="py-3 px-2">Risk</th>
                        <th className="py-3 px-2">Status</th>
                        <th className="py-3 px-2">Timeline</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, index) => (
                        <tr key={index} className="border-b text-sm">
                            <td className="py-3 px-2">{project.name}</td>
                            <td className="py-3 px-2 text-center">{project.department}</td>
                            <td className="py-3 px-2 text-center">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
                                </div>
                            </td>
                            <td className={`py-3 px-2 text-center font-semibold 
                                ${project.risk === "Low" ? "text-green-500" : "text-yellow-500"}`}>
                                {project.risk}
                            </td>
                            <td className={`py-3 px-2 text-center font-semibold 
                                ${project.status === "On Track" ? "text-green-600" : "text-red-500"}`}>
                                {project.status}
                            </td>
                            <td className="py-3 px-2 text-center">{project.timeline}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Overview;
