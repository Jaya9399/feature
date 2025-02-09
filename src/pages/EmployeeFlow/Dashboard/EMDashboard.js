import React from "react";
import Header from "../../../components/Header";
import Sidebar from "../../../components/sidebar";
import RightSidebar from "./Right_sidebar";
import DashboardStats from "./DashboardStats";
import AiInsights from "./AiInsights";
import FeatureBoard from "./FeatureBoard";
import RecentActivity from "./RecentActivity";
import ProjectTimeline from "./ProjectTimeline";

const EMDashboard = () => {
    return (
        <div>
            <Header />
            {/* Main Layout */}
            <div className="flex">
                <Sidebar />
                <div className="p-6 bg-gray-50 min-h-screen flex-grow">
                    <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
                    <DashboardStats />
                    <AiInsights />
                    <FeatureBoard />
                    <RecentActivity />
                    <ProjectTimeline />
                </div>
                {/* Right Sidebar */}
                <RightSidebar />
            </div>
        </div>
    );
};

export default EMDashboard;
