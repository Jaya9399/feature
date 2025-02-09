import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { ArrowLeft } from "lucide-react";

const CreateTemplate = () => {
    const [templateData, setTemplateData] = useState({
        templateName: "New Product Introduction (NPI)",
        projectType: "Large-Scale Product Development",
        duration: "12-16 Weeks",
        requiredApprovals: true,
        stakeholders: [
        {
            role: "Project Manager (PM)",
            responsibilities: "Owns project timeline & execution",
            approvalRequired: true,
            assignedUsers: ["John Doe (PM Lead)"],
        },
        {
            role: "Product Management Group (PMG)",
            responsibilities: "Defines scope & business case",
            approvalRequired: true,
            assignedUsers: ["Alex Smith (PMG Head)"],
        },
        {
            role: "UX Designer",
            responsibilities: "Designs user experience & flows",
            approvalRequired: false,
            assignedUsers: ["Sarah Johnson (UX Lead)"],
        },
        {
            role: "Engineering Team",
            responsibilities: "Develops core functionalities",
            approvalRequired: false,
            assignedUsers: ["Dev Team (Group)"],
        },
        {
            role: "Quality Assurance (QA)",
            responsibilities: "Tests & validates before release",
            approvalRequired: true,
            assignedUsers: ["QA Team"],
        },
        {
            role: "Sales & Marketing",
            responsibilities: "Aligns product positioning",
            approvalRequired: false,
            assignedUsers: ["Marketing Team"],
        },
        ],
        workflowStages: [
        {
            stage: "Ideation & Discovery",
            description: "PMG & UX define initial concepts",
            duration: "Week 1-2",
            approver: "PMG",
        },
        {
            stage: "Requirement Gathering",
            description: "PMG & Eng collect stakeholder inputs",
            duration: "Week 3-4",
            approver: "PM",
        },
        {
            stage: "Design & Prototyping",
            description: "UX creates wireframes & prototypes",
            duration: "Week 5-6",
            approver: null,
        },
        {
            stage: "Development & Testing",
            description: "Engineering builds & QA tests",
            duration: "Week 7-10",
            approver: "QA",
        },
        {
            stage: "Final Review & Sign-off",
            description: "All stakeholders approve",
            duration: "Week 11-12",
            approver: "PMG",
        },
        {
            stage: "Go-To-Market",
            description: "Sales & Marketing strategy execution",
            duration: "Week 13+",
            approver: null,
        },
        ],
        automationSettings: {
        autoAssignTasks: true,
        integrations: true,
        aiSuggestions: true,
        },
    });

const handleToggle = (key) => {
    setTemplateData((prevData) => ({
    ...prevData,
    automationSettings: {
        ...prevData.automationSettings,
        [key]: !prevData.automationSettings[key],
    },
    }));
};

const getDescriptionForSetting = (key) => {
    const descriptions = {
        autoAssignTasks: "Automatically assign tasks based on workflow progress.",
        integrationWithJiraSlackEmail: "Notify stakeholders & update external tools.",
        aiSmartSuggestions: "Get recommendations based on past project data."
    };
    return descriptions[key] || "No description available.";
};

const navigate = useNavigate();

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex items-center mb-6">
                <button className="flex items-center text-gray-600 hover:text-gray-800"
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back
                </button>
            </div>

            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Create New Template
            </h1>
            <p className="text-gray-600 mb-8">
                Manage and customize workflow templates for different project types
            </p>

            {/* Basic Information */}
            <h2 className="text-xl font-bold text-gray-800 mb-4">Template Configuration</h2>
            <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                        Template Name
                        </label>
                        <input
                        type="text"
                        value={templateData.templateName}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                        Project Type
                        </label>
                        <input
                        type="text"
                        value={templateData.projectType}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                        Estimated Duration
                        </label>
                        <input
                        type="text"
                        value={templateData.duration}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        />
                    </div>
                    <div className="flex items-center space-x-3">
                        <input
                        type="checkbox"
                        checked={templateData.requiredApprovals}
                        className="h-4 w-4 text-purple-600 border-gray-300 rounded"
                        />
                        <label className="text-sm font-medium text-gray-700">
                        Required Approvals
                        </label>
                    </div>
                </div>
            </div>

            {/* Stakeholder & Actor Assignment */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                    Stakeholder & Actor Assignment
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-gray-700">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 text-left">Role</th>
                            <th className="px-4 py-2 text-left">Responsibilities</th>
                            <th className="px-4 py-2 text-left">Approval Required</th>
                            <th className="px-4 py-2 text-left">Assigned Users</th>
                        </tr>
                        </thead>
                        <tbody>
                            {templateData.stakeholders.map((stakeholder, index) => (
                                <tr key={index} className="border-b">
                                <td className="px-4 py-2">{stakeholder.role}</td>
                                <td className="px-4 py-2">{stakeholder.responsibilities}</td>
                                <td className="px-4 py-2">
                                    <input
                                    type="checkbox"
                                    checked={stakeholder.approvalRequired}
                                    className="h-4 w-4 text-purple-600 border-gray-300 rounded"
                                    />
                                </td>
                                <td className="px-4 py-2">
                                    {stakeholder.assignedUsers.join(", ")}
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Workflow Stages */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Workflow Stages</h2>
                <div className="space-y-4">
                    {templateData.workflowStages.map((stage, index) => (
                    <div
                        key={index}
                        className="border rounded-lg p-4 shadow-sm bg-gray-50 hover:shadow-md transition"
                    >
                        <h3 className="text-lg font-semibold text-gray-700 mb-1">
                            {stage.stage}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{stage.description}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>
                                <strong>Duration:</strong> {stage.duration}
                            </span>
                            <span>
                                <strong>Approval:</strong> {stage.approver || "None"}
                            </span>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            {/* Automation & Integration Settings */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                    Automation & Integration Settings
                </h2>
                <div className="space-y-4">
                    {Object.keys(templateData.automationSettings).map((key) => (
                    <div
                        key={key}
                        className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                    >
                        <div>
                            <p className="text-sm font-medium text-gray-800 capitalize">
                                {key.replace(/([A-Z])/g, " $1")}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                {getDescriptionForSetting(key)}
                            </p>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                checked={templateData.automationSettings[key]}
                                onChange={() => handleToggle(key)}
                                className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                            />
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end space-x-4">
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg">
                    Save as Draft
                </button>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
                    Save & Publish Template
                </button>
            </div>
        </div>
    );
};

export default CreateTemplate;
