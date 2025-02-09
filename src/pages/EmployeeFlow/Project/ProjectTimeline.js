import React from "react";

const tasks = [
    { name: "UI Design", duration: 70, color: "bg-green-500" },
    { name: "Frontend Development", duration: 60, color: "bg-yellow-500" },
    { name: "Backend Integration", duration: 40, color: "bg-red-500" },
    { name: "Testing", duration: 30, color: "bg-blue-500" },
];

const ProjectTimeline = () => {
    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Project Timeline</h3>
                <div className="flex space-x-6 text-sm font-medium">
                    <button className="text-gray-600">Filter</button>
                    <button className="text-gray-600">Sort</button>
                    <button className="text-white bg-purple-600 px-3 py-1 rounded-md">Add Task</button>
                </div>
            </div>
            <div className="mt-6">
                <div className="grid grid-cols-7 text-sm text-gray-600 ml-36">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                </div>
                {tasks.map((task, index) => (
                <div key={index} className="mt-4 flex items-center">
                    <div className="w-1/5 text-gray-600 text-sm">{task.name}</div>
                        <div className="flex-1">
                        <div
                            className={`h-2 rounded-lg ${task.color}`}
                            style={{ width: `${task.duration}%` }}
                        ></div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectTimeline;
