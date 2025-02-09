import React from "react";
import Header from "../../../components/Header";
import Stats from "./Stats";
import Insights from "./Insights";
import Overview from "./Overview";
import Recommendations from "./Recommendations";
import ProjectTimeline from "./ProjectTimeline";
import ResourceAllocation from "./ResourceAllocation";
import { Link } from "react-router-dom";

const CXODashboard = () => {
    return (
        <div>
            <Header />
            <div className="bg-gray-50 min-h-screen p-6">
                {/* Header */}
                <header className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Executive Dashboard</h1>
                    <Link to="/pm-cxo-dashboard">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center space-x-2">
                            <span>CXO Dashboard</span>
                        </button>
                    </Link>
                </header>

                {/* Filters */}
                <div className="flex justify-between mb-8">
                    <div className="flex space-x-4">
                        <Dropdown title="Last 30 Days" options={["Last 7 Days", "Last 30 Days", "Last 6 Months", "This Year"]} />
                        <Dropdown title="All Department" options={["Development", "Design", "DevOps", "Marketing", "Finance"]} />
                        <Dropdown title="All Risk Levels" options={["Low Risk", "Medium Risk", "High Risk"]} />
                    </div>
                </div>

                {/* Dashboard Sections */}
                <Stats />
                <Insights />
                <div className="grid grid-cols-3 gap-6 mt-8">
                    <Overview />
                    <Recommendations />
                </div>
                <div className="grid grid-cols-2 gap-6 mt-6">
                    <ProjectTimeline />
                    <ResourceAllocation />
            </div>
            </div>
        </div>
    );
};

const Dropdown = ({ title, options }) => (
    <div className="relative group">
        <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 hover:bg-gray-100">
            {title}
        </button>
        <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg hidden group-hover:block">
            <ul className="py-2">
                {options.map((option, index) => (
                    <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 text-gray-700 cursor-pointer"
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default CXODashboard;
