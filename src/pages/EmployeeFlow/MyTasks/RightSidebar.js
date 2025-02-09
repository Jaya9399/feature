import React from "react";
import { Bot } from "lucide-react";

const RightSidebar = ({ task }) => {
    return (
        <div className="p-4 bg-white min-h-screen border-l border-gray-200 w-80">
            <div className="space-y-4">
                <h2 className="text-lg font-bold">Task Details</h2>

                <div>
                    <h3 className="text-xl font-semibold">{task.title}</h3>
                    <p className="text-sm text-gray-500">{task.description}</p>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <span>{task.priorityIcon}</span>
                        <span className="text-sm">{task.priority}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span
                            className={`bg-${task.statusColor}-100 text-${task.statusColor}-500 text-xs px-2 py-1 rounded-full`}
                        >
                            {task.status}
                        </span>
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-bold">Project & Feature</h4>
                    <p className="text-sm text-gray-700">{task.project}</p>
                </div>

                <div>
                    <h4 className="text-sm font-bold">Timeline</h4>
                    <p className="text-sm text-gray-700">
                        <span className="font-medium">Due Date:</span> {task.dueDate}
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-bold">Collaborators</h4>
                    <div className="flex -space-x-2">
                        {task.collaborators.map((collaborator, index) => (
                            <img
                                key={index}
                                src={collaborator}
                                alt="Collaborator"
                                className="w-8 h-8 rounded-full border-2 border-white"
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-bold">AI Assistance Level</h4>
                    <p className="text-sm text-gray-700 flex items-center">
                        <Bot className="text-purple-500 mr-2" />
                        {task.aiAssistance}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                    <button className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700">
                        Update Status
                    </button>
                    <button className="w-full bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
                        Manage Dependencies
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
