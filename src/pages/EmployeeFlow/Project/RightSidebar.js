import React from "react";

const RightSidebar = ({ activeProject = {} }) => {
    const {
        title = "No Project Selected",
        members = [],
        tasks = "0 / 0",
    } = activeProject;

    const [completedTasks, totalTasks] = tasks.split(" / ").map(Number);

    return (
        <div className="w-80 p-4 bg-white border-l shadow-lg space-y-6">
            {/* Project Title */}
            <h2 className="text-xl font-bold">{title}</h2>

            {/* Members Section */}
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Team Members</h3>
                <div className="flex items-center -space-x-4">
                    {members.slice(0, 4).map((member, index) => (
                        <img
                            key={index}
                            src={member}
                            alt={`Member ${index + 1}`}
                            className="w-10 h-10 rounded-full border-2 border-white"
                        />
                    ))}
                    {members.length > 4 && (
                        <div className="w-10 h-10 bg-gray-300 text-gray-700 flex items-center justify-center text-sm font-semibold rounded-full border-2 border-white">
                            +{members.length - 4}
                        </div>
                    )}
                </div>
                <div className="text-sm text-gray-500">
                    <div>Total Members: {members.length}</div>
                    <div>Available Today: 8</div> {/* Replace 8 with dynamic data if needed */}
                </div>
            </div>

            {/* Task Summary */}
            <div>
                <h3 className="text-lg font-semibold">Task Summary</h3>
                <div className="mt-2 space-y-2">
                    <div className="flex justify-between text-sm text-gray-500">
                        <span>In Progress</span>
                        <span>{totalTasks - completedTasks}</span>
                    </div>
                    <div className="relative w-full h-2 bg-gray-200 rounded-full">
                        <div
                            className="absolute top-0 left-0 h-2 bg-purple-500 rounded-full"
                            style={{
                                width: `${((totalTasks - completedTasks) / totalTasks) * 100 || 0}%`,
                            }}
                        ></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>Completed</span>
                        <span>{completedTasks}</span>
                    </div>
                    <div className="relative w-full h-2 bg-gray-200 rounded-full">
                        <div
                            className="absolute top-0 left-0 h-2 bg-green-500 rounded-full"
                            style={{
                                width: `${(completedTasks / totalTasks) * 100 || 0}%`,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
