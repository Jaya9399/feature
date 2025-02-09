import React from "react";

const ActiveProjects = () => {
  const projects = [
    { name: "Website Redesign", progress: 80, status: "On Track" },
    { name: "Mobile App v2.0", progress: 50, status: "Delayed" },
    { name: "API Integration", progress: 100, status: "On Track" },
  ];

  return (
    <section className="col-span-1 bg-white rounded-xl p-4 shadow">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold mb-4">Active Projects</h3>
        <a href="#" className="text-sm text-purple-600 hover:underline">
          View All
        </a>
      </div>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between">
              <p className="font-semibold">{project.name}</p>
              <p
                className={`text-sm ${
                  project.status === "Delayed" ? "text-red-500" : "text-green-500"
                }`}
              >
                {project.status}
              </p>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-purple-500 rounded-full"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActiveProjects;
