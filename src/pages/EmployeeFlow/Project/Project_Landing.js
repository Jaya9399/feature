import React from "react";
import Header from "../../../components/Header";
import Sidebar from "../../../components/sidebar";
import ProjectOverview from "./ProjectOverview";
import ProjectTimeline from "./ProjectTimeline";
import TeamMembers from "./TeamMembers";

const ProjectLanding = () => {
    return (
        <div>
            {/* Header */}
            <Header />

            {/* Main Layout */}
            <div className="flex">
                {/* Sidebar */}
                <div className="w-64 bg-gray-800 text-white">
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className="p-6 bg-gray-50 min-h-screen flex-grow">
                    <h1 className="text-2xl font-bold mb-6">Project Overview</h1>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Project Overview */}
                        <div className="lg:col-span-1">
                            <ProjectOverview />
                        </div>

                        {/* Project Timeline and Team Members */}
                        <div className="lg:col-span-2 space-y-6">
                            <ProjectTimeline />
                            <TeamMembers />
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default ProjectLanding;
