import React, { useState } from "react";

const AiAssistant = () => {
  const [selectedRole, setSelectedRole] = useState("Meeting Assistant");
  const timezone = "Pacific Time (PT)";

  const roles = ["Meeting Assistant", "Task Manager", "Communication Manager"];

  return (
    <section className="bg-white rounded-lg p-6 shadow-md w-full max-w-sm">
      {/* AI Assistant Role */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          AI Assistant Role
        </h3>
        <div className="space-y-2">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`w-full text-left px-4 py-2 rounded-md border ${
                selectedRole === role
                  ? "bg-purple-50 border-purple-500 text-purple-600 font-semibold"
                  : "bg-white border-gray-300 text-gray-700"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* Timezone Settings */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          Timezone Settings
        </h3>
        <div className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2">
          <p className="text-sm text-gray-700 mb-2">Current: {timezone}</p>
          <a
            href="#"
            className="text-sm text-purple-600 hover:underline font-medium"
          >
            Change timezone
          </a>
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;
