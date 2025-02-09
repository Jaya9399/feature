import React from "react";
import { Check } from "lucide-react"; // Assuming Lucide icons are used for AI icon

const AiTasks = () => {
  const tasks = [
    { name: "Review Q4 Marketing Plan", priority: "High" },
    { name: "Update Team Documentation", priority: "Medium" },
    { name: "Schedule Client Meeting", priority: "Low" },
  ];

  return (
    <section className="bg-white rounded-xl p-6 shadow-md w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">AI-Suggested Tasks</h3>
        <a href="#" className="text-sm text-purple-600 hover:underline">
          View All
        </a>
      </div>
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b pb-2 last:border-none"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-purple-600 border-gray-300 rounded mr-3"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">{task.name}</p>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <Check className="w-4 h-4 mr-1 text-gray-400" /> AI Suggested
                </div>
              </div>
            </div>
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                task.priority === "High"
                  ? "bg-red-100 text-red-500"
                  : task.priority === "Medium"
                  ? "bg-yellow-100 text-yellow-500"
                  : "bg-green-100 text-green-500"
              }`}
            >
              {task.priority}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AiTasks;
