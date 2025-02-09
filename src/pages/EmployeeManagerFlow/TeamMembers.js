import React from "react";
import { User, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const members = [
  {
    name: "Sarah Anderson",
    role: "Senior UX Designer",
    project: "E-commerce Redesign",
    tasks: "5 / 7",
    efficiency: "94%",
    status: "red",
    image: "https://randomuser.me/api/portraits/women/65.jpg", // Example image
  },
  {
    name: "Michael Chen",
    role: "UX Designer",
    project: "Mobile App",
    tasks: "4 / 5",
    efficiency: "88%",
    status: "yellow",
    image: "https://randomuser.me/api/portraits/men/32.jpg", // Example image
  },
  {
    name: "Emily Rodriguez",
    role: "Junior UX Designer",
    project: "Dashboard Project",
    tasks: "3 / 5",
    efficiency: "82%",
    status: "green",
    image: "https://randomuser.me/api/portraits/women/44.jpg", // Example image
  },
  {
    name: "David Kim",
    role: "Senior UX Designer",
    project: "Website Redesign",
    tasks: "6 / 7",
    efficiency: "96%",
    status: "red",
    image: "https://randomuser.me/api/portraits/men/45.jpg", // Example image
  },
  {
    name: "Lisa Wang",
    role: "UX Designer",
    project: "Product Design",
    tasks: "4 / 5",
    efficiency: "85%",
    status: "yellow",
    image: "https://randomuser.me/api/portraits/women/39.jpg", // Example image
  },
];

const TeamMembers = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case "red":
        return <XCircle className="text-red-500 w-5 h-5" />;
      case "yellow":
        return <AlertTriangle className="text-yellow-500 w-5 h-5" />;
      case "green":
        return <CheckCircle className="text-green-500 w-5 h-5" />;
      default:
        return <User className="text-gray-400 w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Team Members</h2>
      <ul className="space-y-4">
        {members.map((member, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <img
                src={member.image}
                alt={`${member.name}'s avatar`}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full mt-1 inline-block">
                  {member.project}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-semibold">{member.tasks}</p>
                <p className="text-sm text-gray-500">{member.efficiency}</p>
              </div>
              {getStatusIcon(member.status)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMembers;
