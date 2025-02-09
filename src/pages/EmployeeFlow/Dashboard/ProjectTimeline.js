import React from "react";

const projects = [
    {
        name: "Website Redesign",
        progress: 75,
        status: "On Track",
        statusColor: "bg-green-100 text-green-700",
        team: [
            { id: 1, avatar: "https://i.pravatar.cc/32?img=1" },
            { id: 2, avatar: "https://i.pravatar.cc/32?img=2" },
            { id: 3, avatar: "https://i.pravatar.cc/32?img=3" },
        ],
    },
    {
        name: "Mobile App Development",
        progress: 45,
        status: "At Risk",
        statusColor: "bg-red-100 text-red-700",
        team: [
            { id: 1, avatar: "https://i.pravatar.cc/32?img=4" },
            { id: 2, avatar: "https://i.pravatar.cc/32?img=5" },
        ],
    },
    {
        name: "Marketing Campaign",
        progress: 100,
        status: "Completed",
        statusColor: "bg-purple-100 text-purple-700",
        team: [
            { id: 1, avatar: "https://i.pravatar.cc/32?img=6" },
            { id: 2, avatar: "https://i.pravatar.cc/32?img=7" },
        ],
    },
];

const ProjectTimeline = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            {/* Project Timeline */}
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Project Timeline</h2>
            <div className="space-y-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                        {/* Project Title and Status */}
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-sm font-medium text-gray-800">{project.name}</h3>
                            <span
                                className={`text-xs px-2 py-1 rounded-full ${project.statusColor}`}
                            >
                                {project.status}
                            </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className="absolute top-0 left-0 h-2.5 bg-purple-600 rounded-full"
                                style={{ width: `${project.progress}%` }}
                            ></div>
                        </div>

                        {/* Team Members */}
                        <div className="flex items-center justify-end mt-2 space-x-1">
                            {project.team.map((member) => (
                                <img
                                    key={member.id}
                                    src={member.avatar}
                                    alt="Team Member"
                                    className="w-6 h-6 rounded-full border border-gray-200"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectTimeline;
