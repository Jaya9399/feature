import React from "react";
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Plus,
  Calendar,
  PieChart,
  User,
} from "lucide-react";
import Header from "../components/Header";

// Sidebar Component
const Sidebar = () => (
    <div className="bg-white w-64 p-6 flex flex-col h-screen border-r shadow-md">
        <h1 className="text-xl font-bold text-gray-900 mb-8">Feature Flow</h1>
        <ul className="space-y-6">
            <li className="text-purple-600 font-semibold flex items-center space-x-3">
                <PieChart className="w-5 h-5" />
                <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700">
                <User className="w-5 h-5" />
                <span>Teams</span>
            </li>
            <li className="text-gray-700 flex items-center space-x-3">
                <Calendar className="w-5 h-5" />
                <span>Tasks</span>
            </li>
            <li className="text-gray-700 flex items-center space-x-3">
                <PieChart className="w-5 h-5" />
                <span>Reports</span>
            </li>
            <li className="text-gray-700 flex items-center space-x-3">
                <User className="w-5 h-5" />
                <span>Settings</span>
            </li>
        </ul>
        <div className="mt-12">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">TEAMS</h3>
            <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                    <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                    <span className="text-gray-700">Development</span>
                </li>
                <li className="flex items-center space-x-3">
                    <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                    <span className="text-gray-700">Design</span>
                </li>
                <li className="flex items-center space-x-3">
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="text-gray-700">Marketing</span>
                </li>
            </ul>
        </div>
    </div>
);

// Filters Component
const Filters = () => (
    <div className="flex space-x-4 px-8 py-4 bg-gray-100">
        <button className="px-5 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 font-medium">
            All Status
        </button>
        <button className="px-5 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 font-medium">
            All Priority
        </button>
        <button className="px-5 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 font-medium">
            This Week
        </button>
    </div>
);

// Right Sidebar Component
const RightSidebar = () => (
    <div className="bg-white w-80 p-6 border-l shadow-md h-screen">
        <h3 className="font-bold text-xl text-gray-800 mb-6">AI Assistant</h3>
        <ul className="space-y-4">
            <li>
                <button className="text-purple-600 text-sm font-medium">
                    Generate Progress Report
                </button>
            </li>
            <li>
                <button className="text-purple-600 text-sm font-medium">Analyze Risks</button>
            </li>
            <li>
                <button className="text-purple-600 text-sm font-medium">
                    Schedule Assistant
                </button>
            </li>
        </ul>
        <div className="mt-10">
            <h4 className="text-sm font-semibold text-gray-600 mb-4">
                Recent AI Insights
            </h4>
            <ul className="space-y-3 text-gray-600 text-sm">
                <li>⚠️ Potential delay detected in UI Development phase</li>
                <li>✅ Backend integration completed ahead of schedule</li>
                <li>📊 New team velocity metrics available</li>
            </ul>
        </div>
        <div className="mt-10">
            <h4 className="text-sm font-semibold text-gray-600 mb-4">
                Team Availability
            </h4>
            <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                    <span>Development Team</span>
                    <span>3 / 5 Available</span>
                </li>
                <li className="flex justify-between">
                    <span>Design Team</span>
                    <span>2 / 3 Available</span>
                </li>
                <li className="flex justify-between">
                    <span>QA Team</span>
                    <span>4 / 4 Available</span>
                </li>
            </ul>
        </div>
    </div>
);

// Project Card Component
const ProjectCard = ({ project }) => (
    <div className="bg-white border rounded-lg shadow-sm p-6 space-y-4">
        <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg text-gray-800">{project.name}</h3>
            <div className="text-gray-500 text-sm">...</div>
        </div>
        <p className="text-sm text-gray-500">{project.category}</p>
        <div className="flex items-center space-x-2 text-sm">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span>{project.date}</span>
        </div>
        <div className="relative w-full bg-gray-200 rounded-full h-2">
            <div
            className={`absolute h-2 rounded-full ${
                project.status === "On-Track"
                ? "bg-green-500"
                : project.status === "At-Risk"
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
            style={{ width: `${project.progress}%` }}
            ></div>
        </div>
        {/* Team Members Section */}
        <div className="flex -space-x-2 mt-4">
            {project.team.map((member, index) => (
            <img
                key={index}
                src={member.avatar}
                alt={member.name}
                className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
            />
            ))}
            {project.extraMembers && (
            <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 border-2 border-white flex items-center justify-center text-sm shadow-sm">
                +{project.extraMembers}
            </div>
            )}
        </div>
        {/* Status and AI Insights Section */}
        <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-2 text-sm">
                {project.status === "On-Track" && (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                )}
                {project.status === "At-Risk" && (
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                )}
                {project.status === "Blocked" && (
                    <XCircle className="w-4 h-4 text-red-500" />
                )}
                <span>{project.status}</span>
            </div>
            <button className="text-purple-600 text-sm font-medium">AI Insights</button>
        </div>
    </div>
);

// Main Dashboard Component
const PMCXODashboard = () => {
    const projects = [
        {
            name: "AI-Powered Search",
            category: "E-Commerce Platform",
            progress: 75,
            date: "Oct 1 - Dec 15",
            status: "On-Track",
            team: [
                { name: "Alice", avatar: "https://i.pravatar.cc/150?img=47" },
                { name: "Bob", avatar: "https://i.pravatar.cc/150?img=12" },
                { name: "Carol", avatar: "https://i.pravatar.cc/150?img=30" },
            ],
            extraMembers: 2,
        },
        {
            name: "User Authentication",
            category: "Security System",
            progress: 45,
            date: "Sep 15 - Nov 30",
            status: "At-Risk",
            team: [
                { name: "Alice", avatar: "https://i.pravatar.cc/150?img=47" },
                { name: "Bob", avatar: "https://i.pravatar.cc/150?img=12" },
                { name: "Carol", avatar: "https://i.pravatar.cc/150?img=30" },
            ],
            extraMembers: 2,
        },
        {
            name: "Payment Gateway",
            category: "Financial Module",
            progress: 90,
            date: "Aug 1 - Oct 30",
            status: "Blocked",
            team: [
                { name: "Alice", avatar: "https://i.pravatar.cc/150?img=47" },
                { name: "Bob", avatar: "https://i.pravatar.cc/150?img=12" },
                { name: "Carol", avatar: "https://i.pravatar.cc/150?img=30" },
            ],
            extraMembers: 2,
        },
        {
            name: "Analytics Dashboard",
            category: "Data Visualization",
            progress: 60,
            date: "Oct 15 - Dec 30",
            status: "On-Track",
            team: [
                { name: "Alice", avatar: "https://i.pravatar.cc/150?img=47" },
                { name: "Bob", avatar: "https://i.pravatar.cc/150?img=12" },
                { name: "Carol", avatar: "https://i.pravatar.cc/150?img=30" },
            ],
            extraMembers: 2,
        },
];

    return (
        <div>
            <Header />
            <div className="flex">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-center px-8 py-6 bg-white shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900">Project Manager Dashboard</h2>
                        <div className="flex items-center space-x-4">
                            <button className="bg-purple-600 text-white px-5 py-2 rounded-md flex items-center space-x-2">
                                <Plus className="w-5 h-5" />
                                <span>New Project</span>
                            </button>
                        </div>
                    </div>
                    <Filters />
                    <div className="p-8 grid grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>
                <RightSidebar />
            </div>
        </div>
    );
};

export default PMCXODashboard;
