import React from "react";
import Header from "../../../components/Header";
import AiAgents from "./AiAgents";
import Tasks from "./Tasks";
import AssignmentSummary from "./AssignmentSummary";
import { Search, Filter } from "lucide-react";

const AiDashboard = () => {
    return (
        <div>
            <Header />
            <div className="min-h-screen bg-gray-50 px-8 py-6">
                {/* Dashboard Header */}
                <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between rounded-lg">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="bg-purple-600 w-8 h-8 flex items-center justify-center rounded-md">
                            <span className="font-bold text-white">AI</span>
                        </div>
                        <h1 className="text-xl font-bold text-gray-800">AITask</h1>
                    </div>

                    {/* Search Bar */}
                    <div className="flex items-center bg-gray-100 rounded-md px-4 py-2 w-1/2">
                        <Search className="w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search AI agents or tasks..."
                            className="bg-transparent text-sm text-gray-700 placeholder-gray-500 ml-2 w-full focus:outline-none"
                        />
                    </div>

                    {/* Filters */}
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">
                            <Filter className="w-4 h-4" />
                            Type
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">
                            <Filter className="w-4 h-4" />
                            Capabilities
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">
                            <Filter className="w-4 h-4" />
                            Status
                        </button>
                    </div>

                    {/* User Info */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-500 text-white rounded-full flex items-center justify-center font-medium">
                            SJ
                        </div>
                        <div>
                            <p className="text-gray-800 font-semibold text-sm">Sarah Johnson</p>
                            <p className="text-gray-500 text-xs">Project Manager</p>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                    {/* AI Agents Section */}
                    <div className="col-span-1">
                        <AiAgents />
                    </div>

                    {/* Tasks Section */}
                    <div className="lg:col-span-1">
                        <Tasks />
                    </div>
                </div>

                {/* Assignment Summary */}
                <div className="mt-10">
                    <AssignmentSummary />
                </div>
            </div>
        </div>
    );
};

export default AiDashboard;
