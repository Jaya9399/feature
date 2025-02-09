import React from "react";

const DashboardWidget = ({ title, viewLink, children }) => (
  <div className="bg-white rounded-xl p-4 shadow-md flex-1">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      {viewLink && (
        <a href={viewLink} className="text-sm text-purple-500 hover:underline">
          View all
        </a>
      )}
    </div>
    {children}
  </div>
);

const AiInsights = () => {
  const emailSummary = [
    { sender: "Project Manager", time: "30m ago", subject: "Project Timeline Update" },
    { sender: "Client", time: "1h ago", subject: "Feedback on Latest Design" },
    { sender: "Team Lead", time: "2h ago", subject: "Weekly Goals Review" },
  ];

  const aiInsights = [
    { label: "Meeting Efficiency", value: "+5%", mainValue: "85%", positive: true },
    { label: "Task Completion Rate", value: "+3%", mainValue: "92%", positive: true },
    { label: "Email Response Time", value: "-15m", mainValue: "1.2h", positive: false },
  ];

  const upcomingMeetings = [
    { title: "Team Stand-up", duration: "30min", attendees: 8, time: "10:00 AM" },
    { title: "Product Review", duration: "1h", attendees: 5, time: "2:00 PM" },
    { title: "Sprint Planning", duration: "2h", attendees: 12, time: "4:00 PM" },
  ];

  return (
    <div className="flex gap-4 mt-6">
      {/* Email Summary */}
      <DashboardWidget title="Email Summary" viewLink="#">
        <ul className="space-y-5">
          {emailSummary.map((email, index) => (
            <li key={index} className="border border-gray-200 rounded-lg p-2"> 
              <p className="text-sm font-semibold text-gray-800">{email.sender}</p>
              <p className="text-xs text-gray-500">
                {email.subject} • {email.time}
              </p>
            </li>
          ))}
        </ul>
      </DashboardWidget>

      {/* AI Insights */}
      <DashboardWidget title="AI Insights" viewLink="#">
      <ul className="space-y-4">
        {aiInsights.map((insight, index) => (
          <li
            key={index}
            className="flex flex-col p-3 border border-gray-200 rounded-lg"
          >
            <div className="flex justify-between">
              <span className="text-sm font-semibold text-gray-500">{insight.label}</span>
              <span
                className={`text-sm font-medium ${
                  insight.positive ? "text-green-500" : "text-red-500"
                }`}
              >
                {insight.value}
              </span>
            </div>
            <span className="text-xl font-bold text-gray-800">{insight.mainValue}</span>
          </li>
        ))}
      </ul>
      </DashboardWidget>

      {/* Upcoming Meetings */}
      <DashboardWidget title="Upcoming Meetings" viewLink="#">
        <ul className="space-y-3">
          {upcomingMeetings.map((meeting, index) => (
            <li key={index} className="flex justify-between items-center border border-gray-200 rounded-lg p-2">
              <div>
                <p className="text-sm font-semibold text-gray-800">{meeting.title}</p>
                <p className="text-xs text-gray-500">
                  {meeting.duration} • {meeting.attendees} attendees
                </p>
              </div>
              <p className="text-sm text-gray-800">{meeting.time}</p>
            </li>
          ))}
        </ul>
      </DashboardWidget>
    </div>
  );
};

export default AiInsights;
