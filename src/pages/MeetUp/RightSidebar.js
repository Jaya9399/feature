import React from "react";
import { Lightbulb, AlertTriangle, Users } from "lucide-react"; // Importing relevant Lucide icons

const aiAssistant = [
    { icon: <Lightbulb className="w-4 h-4 text-purple-500" />, text: "Consider adding a technical review section" },
    { icon: <AlertTriangle className="w-4 h-4 text-red-500" />, text: "API development timeline may impact feature release" },
    { icon: <Users className="w-4 h-4 text-yellow-500" />, text: "3 team members have conflicting meetings" }
];

const actionItems = [
    { task: "Update UI Mockups", team: "Design Team", dueDate: "Today" },
    { task: "Review API documentation", team: "Dev Team", dueDate: "Tomorrow" },
    { task: "Prepare test cases", team: "QA Team", dueDate: "Next Week" }
];

const RightSidebar = () => {
    return (
        <div className="space-y-4">
            {/* AI Assistant */}
            <div className="bg-purple-50 p-4 rounded-xl shadow-sm">
                <h2 className="font-semibold text-lg text-gray-800 mb-4">
                    AI Assistant
                </h2>
                <ul className="space-y-3 text-sm">
                    {aiAssistant.map((tip, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            {tip.icon}
                            <span>{tip.text}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Action Items */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
                <h2 className="font-semibold text-lg text-gray-800 mb-4">
                    Action Items
                </h2>
                {actionItems.map((item, index) => (
                    <div key={index} className="p-2 border rounded-lg mb-2">
                        <p>{item.task}</p>
                        <p className="text-xs font-semibold text-gray-500 flex justify-between">
                            <span>{item.team}</span>
                            <span>{item.dueDate}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RightSidebar;
