import React from "react";
import { Clock, CheckCircle } from "lucide-react";
import Header from "../../../components/Header";
import Sidebar from "../../../components/sidebar";
import AiInsights from "./AiInsights";
import DigitalTwinConfig from "./DigitalTwinConfig";
import AiTasks from "./AiTasks";
import ActiveProjects from "./ActiveProjects";
import AiAssistant from "./AiAssistant";

const AiTwinDashboard = () => {
    const user = {
        name: "Alex",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        timeSaved: 3.5,
        pendingApprovals: 2,
    };

    return (
        <div>
            <Header />
            <div className="flex">
                <Sidebar />
                <div className="p-6 bg-gray-50 min-h-screen flex-grow">
                    {/* Header */}
                    <header className="flex items-center justify-between mb-4">
                        {/* Left Section with Gradient Background */}
                        <div className="flex items-center p-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg w-[48%] h-40 shadow-lg">
                            <div className="flex-grow">
                                <h1 className="text-2xl font-semibold">Good morning, {user.name}!</h1>
                                <p className="text-sm mt-2">
                                    Your AI has scheduled your next review meeting and summarized today's emails.
                                </p>
                                <div className="mt-4 space-x-3">
                                    <button className="px-4 py-2 bg-white text-indigo-600 hover:bg-gray-100 rounded-lg text-sm font-medium shadow-sm">
                                        View AI Summary
                                    </button>
                                    <button className="px-4 py-2 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 rounded-lg text-sm font-medium shadow-sm">
                                        Configure AI
                                    </button>
                                </div>
                            </div>
                            <img
                                className="w-14 h-14 rounded-full border-2 border-white shadow-md"
                                src={user.avatar}
                                alt={`${user.name}'s avatar`}
                            />
                        </div>

                        {/* Right Section with Metrics */}
                        <div className="flex w-[48%] h-40 gap-6">
                            {/* Time Saved Card */}
                            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-gray-800 w-1/2 flex flex-col justify-center">
                                <div className="flex items-center space-x-2">
                                    <div className="bg-purple-100 p-2 rounded-lg">
                                    <Clock className="text-purple-600 w-5 h-5" /> {/* Lucide Clock Icon */}
                                    </div>
                                    <p className="text-sm text-gray-500">Time Saved Today</p>
                                </div>
                                <h2 className="text-xl font-bold mt-3">
                                    {user.timeSaved} <span className="font-semibold">hours</span>
                                </h2>
                                <p className="text-xs text-gray-500 mt-1">+0.5h from yesterday</p>
                            </div>

                            {/* Pending Approvals Card */}
                            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-gray-800 w-1/2 flex flex-col justify-center">
                                <div className="flex items-center space-x-2">
                                    <div className="bg-purple-100 p-2 rounded-lg">
                                    <CheckCircle className="text-purple-600 w-5 h-5" /> {/* Lucide CheckCircle Icon */}
                                    </div>
                                    <p className="text-sm text-gray-500">Pending Approvals</p>
                                </div>
                                <h2 className="text-xl font-bold mt-3">
                                    {user.pendingApprovals} <span className="font-semibold">items</span>
                                </h2>
                                <p className="text-xs text-red-500 mt-1">Urgent: 1</p>
                            </div>
                        </div>
                    </header>



                    {/* Main Dashboard */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <ActiveProjects />
                        <AiTasks />
                        <AiAssistant />
                    </div>

                    {/* Configuration & Insights */}
                    <section>
                        <DigitalTwinConfig />
                        <AiInsights />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AiTwinDashboard;
