import React from "react";
import { Bot, Clock } from "lucide-react";

const RightSidebar = ({
    teamMembers = [
        { initials: "JD", name: "John Doe", role: "Product Manager", status: "active", color: "#6b21a8" },
        { initials: "AS", name: "Alice Smith", role: "Developer", status: "active", color: "#15803d" },
        { initials: "RJ", name: "Robert Johnson", role: "Designer", status: "inactive", color: "#dc2626" },
    ],

    deadlines = [
        { due: "Tomorrow", task: "User Authentication MVP", description: "Complete Initial Implementation", color: "red-500" },
        { due: "In 3 days", task: "Dashboard UI Review", description: "Complete Initial Implementation", color: "yellow-500" },
    ],

    recommendations = [
        { title: "Resource Allocation", description: "Consider redistributing tasks to optimize workload." },
        { title: "AI Optimization", description: "Leverage automated testing to improve efficiency." },
    ],

    projects = [
        { name: "Website Redesign", progress: 75 },
        { name: "Mobile App", progress: 45 },
        { name: "API Integration", progress: 90 },
    ],

}) => {
    return (
        <div className="mt-4 bg-white">
            {/* Team Members */}
            <div className="bg-white p-6">
                <h2 className="text-lg font-semibold text-black mb-4">Team Members</h2>
                <ul className="space-y-4">
                    {teamMembers.map((member, index) => (
                        <li key={index} className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white`}
                                    style={{ backgroundColor: member.color }}
                                >
                                    {member.initials}
                                </div>
                                <div className="ml-3">
                                    <h3 className="font-medium text-gray-800">{member.name}</h3>
                                    <p className="text-sm text-gray-600">{member.role}</p>
                                </div>
                            </div>
                            <span
                                className={`w-2 h-2 rounded-full mr-2`}
                                style={{
                                    backgroundColor: member.status === "active" ? "#16a34a" : "#d1d5db",
                                }}
                            ></span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Upcoming Deadlines */}
            <div className="bg-white p-6">
                <h2 className="text-lg font-semibold text-black mb-4">Upcoming Deadlines</h2>
                <div className="space-y-4">
                    {deadlines.map((deadline, index) => (
                        <div key={index} className="p-4 bg-gray-100">
                            <div className={`flex items-center justify-start text-${deadline.color}`}>
                                <Clock className="w-3 h-3" />
                                <p className="text-sm ml-2">{deadline.due}</p>
                            </div>
                            <h3 className="font-semibold text-gray-800">{deadline.task}</h3>
                            <h4 className="text-sm text-gray-600">{deadline.description}</h4>
                        </div>
                    ))}
                </div>
            </div>

            {/* AI Recommendations */}
            <div className="bg-white p-6">
                <h2 className="text-lg font-semibold text-black mb-4">AI Recommendations</h2>
                <ul className="space-y-4">
                    {recommendations.map((rec, index) => (
                        <li
                            key={index}
                            className="p-4 bg-purple-50 border border-purple-400 rounded-md"
                        >
                            <div className="flex items-center">
                                <Bot className="text-purple-800 w-5 h-5" />
                                <p className="text-2rem font-semibold ml-2">{rec.title}</p>
                            </div>
                            <p className="text-sm font-medium text-gray-600 mt-1">{rec.description}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Active Projects */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-black">Active Projects</h2>
                    <button className="text-purple-500 text-xl font-bold hover:opacity-80">+</button>
                </div>
                <div className="space-y-4">
                    {projects.map((project, index) => (
                        <div key={index} className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-800">{project.name}</span>
                                <span className="text-gray-600">{project.progress} %</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-purple-600 h-2.5 rounded-full"
                                    style={{ width: `${project.progress}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;