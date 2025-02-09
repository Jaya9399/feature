import React from "react";

const activities = [
    {
        initials: "JD",
        name: "John Doe",
        action: "commented on",
        target: "User Authentication",
        comment: '"We should consider implementing 2FA for enhanced security."',
        time: "2 hours ago",
        bgColor: "bg-purple-500",
    },
    {
        initials: "AS",
        name: "Alice Smith",
        action: "completed",
        target: "User Settings",
        comment: "",
        time: "4 hours ago",
        bgColor: "bg-green-500",
    },
    {
        initials: "RJ",
        name: "Robert Johnson",
        action: "started working on",
        target: "API Integration",
        comment: "",
        time: "6 hours ago",
        bgColor: "bg-red-500",
    },
];

const RecentActivity = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6 mb-4">
            {/* Recent Activity */}
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h2>
            <div className="space-y-4">
                {activities.map((activity, index) => (
                    <div key={index} className="flex items-start">
                        {/* User Initials */}
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-white ${activity.bgColor}`}
                        >
                            {activity.initials}
                        </div>

                        {/* Activity Details */}
                        <div className="ml-4">
                            <p className="text-gray-800">
                                <span className="font-semibold">{activity.name}{" "}{activity.action}{" "}</span>
                                <span className="font-semibold text-gray-800">
                                    {activity.target}
                                </span>
                            </p>
                            {activity.comment && (
                                <p className="text-sm text-gray-600 mt-1">
                                    {activity.comment}
                                </p>
                            )}
                            <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentActivity;
