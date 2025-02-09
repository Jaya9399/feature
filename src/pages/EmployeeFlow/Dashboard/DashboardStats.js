import React from "react";
import { CheckSquare, Users, TrendingUp } from "lucide-react";

const stats = [
    {
        icon: CheckSquare,
        title: "Active Projects",
        value: "24",
        subIcon: TrendingUp,
        subIconColor: "text-green-600",
        subText: "12.5% from last month",
        subTextColor: "text-green-600",
    },
    {
        icon: Users,
        title: "Team Members",
        value: "12",
        subIcon: Users,
        subIconColor: "text-gray-600",
        subText: "4 teams",
        subTextColor: "text-gray-600",
    },
    {
        icon: TrendingUp,
        title: "Feature Completion",
        value: "87%",
        subIcon: TrendingUp,
        subIconColor: "text-green-600",
        subText: "5.2% from last sprint",
        subTextColor: "text-green-600",
    },
];

const DashboardStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md flex flex-col"
                >
                    {/* Icon and Title */}
                    <div className="flex items-center justify-start mb-3">
                        <stat.icon className="text-gray-600 w-4 h-4" />
                        <h2 className="text-gray-700 font-medium text-base ml-2">
                            {stat.title}
                        </h2>
                    </div>

                    {/* Main Stat */}
                    <h2 className="text-4xl font-semibold text-black">
                        {stat.value}
                    </h2>

                    {/* Subtext */}
                    <div className="flex items-center justify-start mt-4">
                        <stat.subIcon className={`w-4 h-4 ${stat.subIconColor}`} />
                        <p
                            className={`text-sm ml-2 ${
                                stat.subTextColor || "text-gray-600"
                            }`}
                        >
                            {stat.subText}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardStats;
