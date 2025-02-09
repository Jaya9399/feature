import React from "react";
import { CheckCircle, Clock4, Flame, TriangleAlert } from "lucide-react";

const LeftSidebar = () => {
    return (
        <div className="p-4 bg-gray-50 h-screen w-64 border-r border-gray-200">
            {/* Projects Filter */}
            <div className="mb-6">
                <h2 className="text-sm font-bold mb-2">Projects</h2>
                <select
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-500"
                >
                    <option>All Projects</option>
                    <option>Project 1</option>
                    <option>Project 2</option>
                </select>
            </div>

            {/* Priority Filter */}
            <div className="mb-6">
                <h2 className="text-sm font-bold mb-2">Priority</h2>
                <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="flex items-center space-x-1">
                            <Flame className="text-red-500" />
                            <span>Critical</span>
                        </span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="flex items-center space-x-1">
                            <TriangleAlert className="text-yellow-500" />
                            <span>High</span>
                        </span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="flex items-center space-x-1">
                            <Clock4 className="text-purple-500" />
                            <span>Medium</span>
                        </span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="flex items-center space-x-1">
                            <CheckCircle className="text-green-500" />
                            <span>Low</span>
                        </span>
                    </label>
                </div>
            </div>

            {/* Status Filter */}
            <div className="mb-6">
                <h2 className="text-sm font-bold mb-2">Status</h2>
                <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-gray-500">Not Started</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-purple-500">In Progress</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-pink-500">Blocked</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-green-500">Completed</span>
                    </label>
                </div>
            </div>

            {/* Timeline Filter */}
            <div>
                <h2 className="text-sm font-bold mb-2">Timeline</h2>
                <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="timeline" className="rounded border-gray-300" />
                        <span>Today</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="timeline" className="rounded border-gray-300" />
                        <span>This Week</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="timeline" className="rounded border-gray-300" />
                        <span>This Month</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="timeline" className="rounded border-gray-300" />
                        <span>Custom</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;
