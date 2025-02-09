import React from "react";
import { Slack, Trello, Calendar, CheckCircle } from "lucide-react"; // Assuming you're using Lucide icons

const DigitalTwinConfig = () => {
  const config = {
    automation: [
      { name: "Auto-summarize meetings", enabled: true },
      { name: "Schedule follow-ups", enabled: true },
      { name: "Generate reports", enabled: false },
    ],
    connectedServices: [
      { name: "Slack", connected: true },
      { name: "Jira", connected: true },
      { name: "Notion", connected: false },
      { name: "Google Calendar", connected: true },
    ],
    assistantRoles: [
      { name: "Meeting Assistant", description: "Summarize & track action items", selected: true },
      { name: "Task Manager", description: "Create & assign tasks", selected: false },
      { name: "Communication", description: "Handle emails & messages", selected: false },
    ],
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md mt-6">
      <h3 className="text-lg font-bold text-gray-800 mb-6">Digital Twin Configuration</h3>
      <div className="grid grid-cols-3 gap-8">
        {/* Automation Settings */}
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-4">Automation Settings</h4>
          <ul className="space-y-4">
            {config.automation.map((item, index) => (
              <li key={index} className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-800">{item.name}</p>
                <input
                  type="checkbox"
                  checked={item.enabled}
                  className="relative inline-flex h-5 w-10 rounded-full bg-gray-200 outline-none transition-all duration-200 cursor-pointer"
                  onChange={() => {}}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Connected Services */}
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-4">Connected Services</h4>
          <ul className="space-y-4">
            {config.connectedServices.map((service, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="p-2 rounded-lg bg-purple-100 mr-2">
                    {service.name === "Slack" && <Slack className="w-4 h-4 text-purple-600" />}
                    {service.name === "Jira" && <Trello className="w-4 h-4 text-purple-600" />}
                    {service.name === "Google Calendar" && (
                      <Calendar className="w-4 h-4 text-purple-600" />
                    )}
                  </span>
                  <p className="text-sm font-medium text-gray-800">{service.name}</p>
                </div>
                <p
                  className={`text-sm font-medium ${
                    service.connected ? "text-green-500" : "text-gray-500"
                  }`}
                >
                  {service.connected ? "Connected" : "Not Connected"}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* AI Assistant Role */}
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-4">AI Assistant Role</h4>
          <ul className="space-y-4">
            {config.assistantRoles.map((role, index) => (
              <li key={index} className="flex items-center">
                <input
                  type="radio"
                  name="ai-role"
                  checked={role.selected}
                  className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  onChange={() => {}}
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-800">{role.name}</p>
                  <p className="text-xs text-gray-500">{role.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DigitalTwinConfig;
