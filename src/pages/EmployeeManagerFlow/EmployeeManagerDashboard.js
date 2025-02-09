import React from "react";
import Header from "../../components/Header";
import TeamMembers from "./TeamMembers";
import ProjectAllocation from "./ProjectAllocation";
import DashboardCards from "./DashboardCards";
import PerformanceTrends from "./PerformanceTrends";
import { Search, Filter } from "lucide-react";

const EmployeeManagerDashboard = () => {
    return (
        <div>
            <Header />
            <div className="bg-gray-100 min-h-screen p-6">
                {/* Header */}
                <header className="flex items-center justify-between pb-6">
                    <h1 className="text-2xl font-semibold">Team Overview & Allocation</h1>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search employees, projects..."
                            className="border rounded-lg px-4 py-2 w-96 focus:ring-2 focus:ring-purple-500"
                        />
                        <Search className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center space-x-2">
                            <Filter className="w-5 h-5" />
                            <span>Filters</span>
                        </button>
                    </div>
                </header>

                {/* Main Content */}
                <main className="grid grid-cols-12 gap-6">
                    {/* Left Column */}
                    <div className="col-span-3">
                        <TeamMembers />
                    </div>

                    {/* Center Column */}
                    <div className="col-span-6 space-y-6">
                        <DashboardCards />
                        <PerformanceTrends />
                    </div>

                    {/* Right Column */}
                    <div className="col-span-3">
                        <ProjectAllocation />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default EmployeeManagerDashboard;
