import React from "react";
import { ClipboardCheck, Clock, AlertTriangle, BarChart } from "lucide-react";

// Data for cards
const cards = [
  {
    title: "Total Tasks",
    value: "47",
    description: "18 Completed This Week",
    icon: <ClipboardCheck className="text-purple-500 w-6 h-6" />,
    bgColor: "bg-purple-50",
  },
  {
    title: "Avg. Delivery Time",
    value: "2.5 Days",
    description: "-0.5 Days vs Last Week",
    icon: <Clock className="text-green-500 w-6 h-6" />,
    bgColor: "bg-green-50",
  },
  {
    title: "Active Escalations",
    value: "3",
    description: "2 Critical, 1 Pending",
    icon: <AlertTriangle className="text-yellow-500 w-6 h-6" />,
    bgColor: "bg-yellow-50",
  },
  {
    title: "Team Utilization",
    value: "87%",
    description: "+5% vs Last Month",
    icon: <BarChart className="text-purple-500 w-6 h-6" />,
    bgColor: "bg-purple-50",
  },
];

// Data for active escalations
const escalations = [
  {
    title: "High Priority Escalation",
    description: "Sarah Anderson - Delayed deliverable for E-commerce Redesign",
    time: "2 hours ago",
    dotColor: "bg-red-500",
  },
  {
    title: "Resource Allocation Issue",
    description: "Mobile App team requires additional UX support",
    time: "5 hours ago",
    dotColor: "bg-yellow-500",
  },
  {
    title: "Quality Concern",
    description: "Review needed for Website Redesign deliverables",
    time: "1 day ago",
    dotColor: "bg-yellow-500",
  },
];

const DashboardCards = () => {
  return (
    <div className="space-y-8">
      {/* Cards Section */}
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-6 ${card.bgColor} rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between`}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">{card.title}</h3>
              <div className="p-2 bg-white rounded-full shadow">{card.icon}</div>
            </div>
            {/* Value */}
            <div className="mb-2">
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
            </div>
            {/* Description */}
            <p className="text-sm text-gray-500">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Active Escalations Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Active Escalations</h2>
        <ul className="space-y-4">
          {escalations.map((escalation, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-4 border-b last:border-0"
            >
              <div className="flex items-start space-x-3">
                {/* Color Dot */}
                <div
                  className={`w-2 h-2 rounded-full mt-1 ${escalation.dotColor}`}
                ></div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {escalation.title}
                  </h3>
                  <p className="text-sm text-gray-500">{escalation.description}</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">{escalation.time}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardCards;
