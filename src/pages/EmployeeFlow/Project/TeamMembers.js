import React from "react";

const members = [
    {
        name: "Sarah Johnson",
        role: "UI Designer",
        status: "Available",
        image: "https://i.pravatar.cc/150?img=47",
    },
    {
        name: "Michael Chen",
        role: "Frontend Developer",
        status: "In Meeting",
        image: "https://i.pravatar.cc/150?img=12",
    },
    {
        name: "Emily Davis",
        role: "Product Manager",
        status: "Available",
        image: "https://i.pravatar.cc/150?img=31",
    },
    {
        name: "David Wilson",
        role: "Backend Developer",
        status: "Away",
        image: "https://i.pravatar.cc/150?img=20",
    },
];

const getStatusStyle = (status) => {
    switch (status) {
        case "Available":
            return "text-green-600";
        case "In Meeting":
            return "text-yellow-600";
        case "Away":
            return "text-red-600";
        default:
            return "text-gray-600";
    }
};

const TeamMembers = () => {
    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Team Members</h3>
                <button className="text-purple-600 text-sm hover:underline">View All</button>
            </div>

            {/* Team Members List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {members.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white border rounded-lg shadow-sm p-4 text-center hover:shadow-md transition"
                    >
                        {/* Member Avatar */}
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-16 h-16 rounded-full object-cover mx-auto"
                        />
                        {/* Member Details */}
                        <h4 className="mt-3 text-sm font-semibold text-gray-800">{member.name}</h4>
                        <p className="text-xs text-gray-500">{member.role}</p>
                        {/* Status Badge */}
                        <span
                            className={`mt-2 inline-block text-xs font-medium px-2 py-1 rounded-lg ${getStatusStyle(
                                member.status
                            )}`}
                        >
                            {member.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamMembers;
