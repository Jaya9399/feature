import React, { useState } from "react";
import Header from "../../../components/Header";
import Sidebar from "../../../components/sidebar";
import RightSidebar from "./RightSidebar";
import RecentActivity from "./RecentActivity";
import { Clock, MoreHorizontal, Grid, List, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const Project = () => {
    const projects = [
        {
            title: "Website Re-Design",
            progress: 75,
            status: "On Track",
            dateRange: "Oct 1, 2023 - Dec 15, 2023",
            priority: "High",
            tasks: "15 / 20",
            members: [
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/women/43.jpg",
                "https://randomuser.me/api/portraits/men/45.jpg",
                "https://randomuser.me/api/portraits/women/46.jpg",
            ],
        },
        {
            title: "Mobile App Development",
            progress: 45,
            status: "Delayed",
            dateRange: "Sep 15, 2023 - Nov 30, 2023",
            priority: "Medium",
            tasks: "8 / 15",
            members: [
                "https://randomuser.me/api/portraits/men/77.jpg",
                "https://randomuser.me/api/portraits/women/88.jpg",
            ],
        },
        {
            title: "Marketing Campaign",
            progress: 100,
            status: "Completed",
            dateRange: "Aug 1, 2023 - Oct 31, 2023",
            priority: "Low",
            tasks: "12 / 12",
            members: [
                "https://randomuser.me/api/portraits/women/11.jpg",
                "https://randomuser.me/api/portraits/men/21.jpg",
                "https://randomuser.me/api/portraits/men/31.jpg",
                "https://randomuser.me/api/portraits/women/41.jpg",
            ],
        },
    ];

    const [activeProject, setActiveProject] = useState(projects[0]);

    return (
        <div>
            <Header />
            <div className="flex">
                <Sidebar />
                <div className="p-6 bg-gray-50 min-h-screen flex-grow">
                    <div className="flex space-x-4 justify-between">
                        <h1 className="text-2xl font-bold mb-6">Projects</h1>
                        <div className="flex space-x-4">
                            {/* Grid View Icon */}
                            <button
                                className="hover:bg-gray-100 flex items-center"
                                aria-label="Grid View"
                            >
                                <Grid className="w-5 h-5" />
                            </button>
                            {/* List View Icon */}
                            <button
                                className="hover:bg-gray-100 flex items-center"
                                aria-label="Grid View"
                            >
                                <List className="w-5 h-5" />
                            </button>
                            {/* Filter Icon */}
                            <button
                                className="p-2 hover:bg-gray-100 flex items-center"
                                aria-label="Filter"
                            >
                                <Filter className="w-5 h-5" />
                                <span className="ml-2 text-sm">Filter</span>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                                onClick={() => setActiveProject(project)}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col">
                    <RightSidebar activeProject={activeProject} />
                    <RecentActivity />
                </div>
            </div>
        </div>
    );
};

const ProjectCard = ({ project, onClick }) => {
    const { title, progress, status, tasks, members, dateRange } = project;
    const statusStyles = {
        "On Track": "bg-green-100 text-green-600",
        Delayed: "bg-red-100 text-red-600",
        Completed: "bg-purple-100 text-purple-600",
    };

    return (
        <div
            className="border rounded-lg shadow-sm p-4 space-y-4 cursor-pointer hover:shadow-md transition"
            onClick={onClick}
        >
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg h-12 flex items-center">{title}</h3>
                <span className={`text-sm px-2 py-1 rounded-full ${statusStyles[status]}`}>
                    {status}
                </span>
            </div>
            <div>
                <div className=" flex items-center justify-between text-sm text-gray-500">
                    Progress
                    <span className="text-sm text-gray-500 mt-2 block ml-2">{progress}%</span>
                </div>
                <div className="relative w-full h-2 bg-gray-200 rounded-full">
                    <div
                        className="h-2 rounded-full bg-purple-500"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
            <div className="flex items-center justify-start">
                <Clock className="w-3 h-3 text-gray-500" />
                <span className="text-gray-500 text-sm ml-2">{dateRange}</span>
            </div>
            <div className="flex text-sm text-gray-500 justify-between">
                <div className="flex -space-x-2">
                    {members.slice(0, 3).map((member, index) => (
                        <img
                            key={index}
                            src={member}
                            alt="Member"
                            className="w-8 h-8 rounded-full border-2 border-white"
                        />
                    ))}
                    {members.length > 3 && (
                        <div className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-600 text-xs font-medium rounded-full border-2 border-white">
                            +{members.length - 3}
                        </div>
                    )}
                </div>
                <span className="block">{tasks} tasks</span>
            </div>
            <div className="flex justify-between items-center">
                <div
                    className={`text-sm font-semibold ${
                        project.priority === "High"
                            ? "text-red-600"
                            : project.priority === "Medium"
                            ? "text-yellow-600"
                            : "text-green-600"
                    }`}
                >
                    {project.priority} Priority
                </div>
                <Link to="/project-landing">
                    <MoreHorizontal className="w-5 h-4" />
                </Link>
            </div>
        </div>
    );
};

export default Project;
