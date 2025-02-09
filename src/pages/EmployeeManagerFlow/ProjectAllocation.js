import React from "react";
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const projects = [
  {
    name: "E-commerce Redesign",
    members: 3,
    status: "On Track",
    progress: 75,
    statusIcon: <CheckCircle className="text-green-500 w-5 h-5" />,
  },
  {
    name: "Mobile App",
    members: 2,
    status: "At Risk",
    progress: 45,
    statusIcon: <AlertTriangle className="text-yellow-500 w-5 h-5" />,
  },
  {
    name: "Dashboard Project",
    members: 2,
    status: "On Track",
    progress: 90,
    statusIcon: <CheckCircle className="text-green-500 w-5 h-5" />,
  },
  {
    name: "Website Redesign",
    members: 3,
    status: "Delayed",
    progress: 60,
    statusIcon: <XCircle className="text-red-500 w-5 h-5" />,
  },
];

const ProjectAllocation = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Project Allocation</h2>
        <a
          href="#"
          className="text-purple-500 text-sm font-medium hover:underline"
        >
          View All
        </a>
      </div>
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li
            key={index}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Project Header */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-900">{project.name}</h3>
              <div className="flex items-center space-x-2">
                {project.statusIcon}
                <span className="text-sm text-gray-500">{project.status}</span>
              </div>
            </div>
            {/* Project Details */}
            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium"></span>
                </div>
                <span>{project.members} Members</span>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="flex items-center space-x-2">
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-purple-500 h-full rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500">
                {project.progress}%
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectAllocation;
