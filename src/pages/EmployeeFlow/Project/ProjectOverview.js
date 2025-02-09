import React from "react";
import { CheckCircle, XCircle, Clock, User } from "lucide-react";

const details = {
    title: "Mobile App Redesign",
    status: "On Track",
    description: "Redesign and modernize our mobile app interface with focus on user experience and performance improvements.",
    timeline: "8 weeks",
    team: "12 members",
    progress: 65,
    daysLeft: 35,
};

const ProjectOverview = () => {
    const isOnTrack = details.status === "On Track";

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{details.title}</h3>
                <div className="flex items-center">
                    {isOnTrack ? (
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                    ) : (
                        <XCircle className="w-4 h-4 mr-2 text-red-600" />
                    )}
                    <p
                        className={`text-sm font-medium ${
                            isOnTrack ? "text-green-500" : "text-red-500"
                        }`}
                    >
                        {details.status}
                    </p>
                </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-4">{details.description}</p>

            {/* Timeline and Team */}
            <div className="mt-6 flex justify-between">
                <div className="text-center">
                    <div className="flex items-center justify-center">
                        <Clock className="w-4 h-4 text-gray-600" />
                        <p className="text-gray-600 text-sm ml-2">Timeline</p>
                    </div>
                    <p className="text-lg font-bold">{details.timeline}</p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-600" />
                        <p className="text-gray-600 text-sm ml-2">Team</p>
                    </div>
                    <p className="text-lg font-bold">{details.team}</p>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
                <div className="text-sm text-gray-600">Progress</div>
                <div className="w-full h-2 bg-gray-200 rounded-lg overflow-hidden mt-2">
                    <div
                        className="h-full bg-purple-500"
                        style={{ width: `${details.progress}%` }}
                    ></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>{details.progress}% Complete</span>
                    <span>{details.daysLeft} days left</span>
                </div>
            </div>

            {/* Button */}
            <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-purple-700">
                + Create New Project
            </button>
        </div>
    );
};

export default ProjectOverview;
