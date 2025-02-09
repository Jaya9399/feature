import React from "react";

const recentActivity = [
    {
        name: "Sarah Miller",
        action: "Completed a task in Website Redesign",
        time: "2 hours ago",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "John Cooper",
        action: "Added a comment in Mobile App",
        time: "4 hours ago",
        image: "https://randomuser.me/api/portraits/men/77.jpg",
    },
];

const RecentActivity = () => {
    return (
        <div className="p-4 bg-white border-t shadow-lg space-y-6">
            <h3 className="text-lg font-semibold">Recent Activity</h3>
            {recentActivity.length > 0 ? (
                <div className="space-y-4 mt-4">
                    {recentActivity.map((entry, index) => (
                        <div key={index} className="flex items-start space-x-3">
                            <img
                                src={entry.image}
                                alt={entry.name}
                                className="w-8 h-8 rounded-full"
                            />
                            <div className="text-sm">
                                <p className="font-semibold">{entry.name}</p>
                                <p>{entry.action}</p>
                                <p className="text-gray-400">{entry.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-sm text-gray-500 mt-2">No recent activity.</p>
            )}
        </div>
    );
};

export default RecentActivity;
