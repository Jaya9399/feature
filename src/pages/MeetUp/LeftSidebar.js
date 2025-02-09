import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const meetingDetails = {
    title: "AI-Powered Meeting",
    dateTime: "2024-03-15T10:00",
    duration: "45 minutes (AI Suggested)",
    location: "Hybrid",
    project: "AI Feature Implementation",
};

const participants = [
    { name: "Sarah Johnson", role: "Project Manager", status: "offline" },
    { name: "Mike Chen", role: "UX Designer", status: "online" },
];

const LeftSidebar = () => {
    const [activeTab, setActiveTab] = useState("Humans");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            {/* Meeting Details */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
                <h2 className="font-semibold text-lg text-gray-800 mb-4">
                    Meeting Details
                </h2>
                <div className="space-y-4">
                    {/* Meeting Title */}
                    <div>
                        <label className="block text-sm text-gray-600">
                            Meeting Title
                        </label>
                        <input
                            type="text"
                            placeholder="Enter meeting title"
                            className="w-full p-2 border rounded-lg"
                            defaultValue={meetingDetails.title}
                        />
                    </div>

                    {/* Date & Time */}
                    <div>
                        <label className="block text-sm text-gray-600">
                            Date & Time
                        </label>
                        <input
                            type="datetime-local"
                            className="w-full p-2 border rounded-lg"
                            defaultValue={meetingDetails.dateTime}
                        />
                        <p className="flex items-center text-xs text-purple-500 mt-1">
                            <CheckCircle2 className="w-4 h-4 mr-2" /> 
                            AI Recommended Time
                        </p>
                    </div>

                    {/* Duration */}
                    <div>
                        <label className="block text-sm text-gray-600">
                            Duration
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-lg bg-gray-100"
                            value={meetingDetails.duration}
                            readOnly
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-sm text-gray-600">
                            Location
                        </label>
                        <div className="flex-col ">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="location"
                                    value="Virtual Meeting"
                                    defaultChecked={
                                        meetingDetails.location ===
                                        "Virtual Meeting"
                                    }
                                />
                                <span>Virtual Meeting</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="location"
                                    value="In-Person"
                                    defaultChecked={
                                        meetingDetails.location === "In-Person"
                                    }
                                />
                                <span>In-Person</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="location"
                                    value="Hybrid"
                                    defaultChecked={
                                        meetingDetails.location === "Hybrid"
                                    }
                                />
                                <span>Hybrid</span>
                            </label>
                        </div>
                    </div>

                    {/* Project */}
                    <div>
                        <label className="block text-sm text-gray-600">
                            Project
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-lg bg-gray-100"
                            value={meetingDetails.project}
                            readOnly
                        />
                    </div>
                </div>
            </div>

            {/* Participants */}
            <div className="bg-white p-4 rounded-xl shadow-sm mt-6">
                <h2 className="font-semibold text-lg text-gray-800 mb-4">
                    Participants
                </h2>
                {/* Tabs */}
                <div className="flex space-x-2 mb-4">
                    <button
                        className={`px-4 py-2 rounded-lg ${
                            activeTab === "Humans"
                                ? "bg-purple-500 text-white"
                                : "bg-gray-100 text-gray-800"
                        }`}
                        onClick={() => handleTabChange("Humans")}
                    >
                        Humans
                    </button>
                    <button
                        className={`px-4 py-2 rounded-lg ${
                            activeTab === "AI Agents"
                                ? "bg-purple-500 text-white"
                                : "bg-gray-100 text-gray-800"
                        }`}
                        onClick={() => handleTabChange("AI Agents")}
                    >
                        AI Agents
                    </button>
                </div>

                {/* Participants List */}
                {activeTab === "Humans" && (
                    <div>
                        {participants.map((participant, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between py-2"
                            >
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                        <span className="text-gray-600">
                                            {participant.name[0]}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">
                                            {participant.name}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {participant.role}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <span
                                        className={`w-3 h-3 rounded-full inline-block ${
                                            participant.status === "online"
                                                ? "bg-green-500"
                                                : "bg-red-500"
                                        }`}
                                    ></span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "AI Agents" && (
                    <div className="text-sm text-gray-500 italic">
                        No AI Agents assigned yet.
                    </div>
                )}

                <button className="mt-4 px-4 py-2 bg-purple-100 text-purple-500 rounded-lg w-full">
                    Add Participant
                </button>
            </div>
        </>
    );
};

export default LeftSidebar;
