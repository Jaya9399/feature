import React from "react";
import Header from "../../components/Header";
import { FileText, List, Settings, Lock, Edit, Trash2, Copy } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectTemplates = () => {
  // Sidebar Menu Items
  const menuItems = [
    { name: "Project Templates", icon: <FileText />, active: true },
    { name: "Active Projects", icon: <List />, active: false },
    { name: "Workflow Automation", icon: <Settings />, active: false },
    { name: "Roles & Permissions", icon: <Lock />, active: false },
  ];

  // Table Data
  const templates = [
    {
      name: "New Product Introduction (NPI)",
      type: "Large-Scale Product Launch",
      actors: ["PMG", "UX", "Eng", "QA", "Sales"],
      approval: "Required",
      lastUpdated: "Jan 15, 2025",
    },
    {
      name: "Feature Enhancement",
      type: "Small Incremental Updates",
      actors: ["PM", "Eng", "UX"],
      approval: "Not Required",
      lastUpdated: "Jan 10, 2025",
    },
    {
      name: "Sales Demo",
      type: "Demo Preparation",
      actors: ["Sales", "Pre-Sales", "UX"],
      approval: "Not Required",
      lastUpdated: "Dec 20, 2024",
    },
    {
      name: "Concept Creation",
      type: "R&D / Innovation",
      actors: ["Innovation Team", "UX", "PM"],
      approval: "Required",
      lastUpdated: "Nov 28, 2024",
    },
    {
      name: "Prototype Development",
      type: "Proof of Concept",
      actors: ["UX", "Dev", "AI Team"],
      approval: "Required",
      lastUpdated: "Nov 15, 2024",
    },
  ];

  return (
    <div>
        <Header />
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 h-full bg-white shadow-lg">
        {/* Navigation Menu */}
        <nav className="mt-8">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center p-3 text-sm font-medium rounded-lg ${
                    item.active
                      ? "bg-purple-100 text-purple-600"
                      : "text-gray-600 hover:bg-gray-100 hover:text-purple-600"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-50">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-gray-800">Project Templates</h1>
          <Link to='/admin/create-template'>          
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700">
                + Create Template
          </button>
          </Link>
        </header>

        <p className="text-gray-600 mb-6">
          Manage and customize workflow templates for different project types
        </p>

        {/* Table Section */}
        <div className="bg-white rounded-lg shadow border">
          <table className="min-w-full text-sm text-gray-700">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="px-6 py-4 text-left font-medium">Template Name</th>
                <th className="px-6 py-4 text-left font-medium">Project Type</th>
                <th className="px-6 py-4 text-left font-medium">Actors Involved</th>
                <th className="px-6 py-4 text-left font-medium">
                  Approval Required
                </th>
                <th className="px-6 py-4 text-left font-medium">Last Updated</th>
                <th className="px-6 py-4 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {templates.map((template, index) => (
                <tr
                  key={index}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {template.name}
                  </td>
                  <td className="px-6 py-4">{template.type}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {template.actors.map((actor, idx) => (
                        <span
                          key={idx}
                          className="bg-purple-100 text-purple-600 text-xs font-medium px-2 py-1 rounded"
                        >
                          {actor}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                        template.approval === "Required"
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {template.approval}
                    </span>
                  </td>
                  <td className="px-6 py-4">{template.lastUpdated}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-4">
                      <button>
                        <Edit className="w-4 h-4 text-gray-500 hover:text-purple-600" />
                      </button>
                      <button>
                        <Copy className="w-4 h-4 text-gray-500 hover:text-purple-600" />
                      </button>
                      <button>
                        <Trash2 className="w-4 h-4 text-gray-500 hover:text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProjectTemplates;
