import React from "react";
import Header from "../../components/Header";
import Meeting from "../MeetUp/Meeting";
import LeftSidebar from "../MeetUp/LeftSidebar";
import RightSidebar from "../MeetUp/RightSidebar";

const MeetHeader = () => {
    return (
        <div>
            <Header />
            <div className="min-h-screen bg-gray-50 p-6">
                {/* Header */}
                <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm mb-6">
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-purple-500 text-white font-semibold rounded-full">
                            M
                        </div>
                        <span className="text-xl font-semibold text-gray-800">
                            Schedule a Hybrid AI-Powered Meeting
                        </span>
                    </div>
                    <div className="flex space-x-3">
                        <button className="border border-purple-500 text-purple-500 px-4 py-2 rounded-lg hover:bg-purple-100 transition">
                            Generate AI Brief
                        </button>
                        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition">
                            Schedule Meeting
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-12 gap-6">
                    {/* Left Sidebar */}
                    <div className="col-span-3 space-y-6">
                        <LeftSidebar  />
                    </div>

                    {/* Middle Content */}
                    <div className="col-span-6 space-y-6">
                        <Meeting  />
                    </div>

                    {/* Right Sidebar */}
                    <div className="col-span-3 space-y-6">
                        <RightSidebar  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetHeader;
