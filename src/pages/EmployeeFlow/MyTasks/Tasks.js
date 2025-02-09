import React, { useState } from "react";
import Header from "../../../components/Header";
import LeftSidebar from "../MyTasks/LeftSidebar";
import RightSidebar from "../MyTasks/RightSidebar";
import { CalendarDays, CheckCircle, Clock4, Flame, Grid, List, RefreshCcw, TriangleAlert } from "lucide-react";

const Tasks = () => {
    const [tasks] = useState([
        {
            id: 1,
            title: "Implement UI Components for AI Search",
            project: "AI-Powered Search | E-Commerce",
            progress: 65,
            status: "In Progress",
            statusColor: "purple",
            priority: "Critical",
            priorityIcon: <Flame className="text-red-500" />,
            dependencies: true,
            dueDate: "2024-02-20",
            description:
                "Create and implement reusable UI components for AI-powered search feature in the e-commerce platform.",
            collaborators: [
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/men/54.jpg",
            ],
            aiAssistance: "High - AI actively assists with code suggestions.",
        },
        {
            id: 2,
            title: "Optimize Search Algorithm Performance",
            project: "AI-Powered Search | Backend",
            progress: 0,
            status: "Not Started",
            statusColor: "gray",
            priority: "High",
            priorityIcon: <TriangleAlert className="text-yellow-500" />,
            dependencies: false,
            dueDate: "2024-02-25",
            description:
                "Enhance the search algorithm to improve performance and accuracy for backend systems.",
            collaborators: [
                "https://randomuser.me/api/portraits/women/55.jpg",
                "https://randomuser.me/api/portraits/men/66.jpg",
            ],
            aiAssistance: "Medium - AI assists with performance optimization suggestions.",
        },
        {
            id: 3,
            title: "Design System Documentation",
            project: "Design System | Global",
            progress: 30,
            status: "Blocked",
            statusColor: "red",
            priority: "Medium",
            priorityIcon: <Clock4 className="text-purple-500" />,
            dependencies: true,
            dueDate: "2024-02-18",
            description: "Document and define global standards for the design system.",
            collaborators: ["https://randomuser.me/api/portraits/men/77.jpg"],
            aiAssistance: "Low - Manual input required.",
        },
        {
            id: 4,
            title: "User Testing Coordination",
            project: "Mobile App | Testing",
            progress: 100,
            status: "Completed",
            statusColor: "green",
            priority: "Low",
            priorityIcon: <CheckCircle className="text-green-500" />,
            dependencies: false,
            dueDate: "2024-02-15",
            description:
                "Coordinate and manage user testing sessions for the mobile app.",
            collaborators: [
                "https://randomuser.me/api/portraits/women/88.jpg",
                "https://randomuser.me/api/portraits/men/99.jpg",
            ],
            aiAssistance: "None - Human-driven process.",
        },
    ]);

    const [selectedTask, setSelectedTask] = useState(tasks[0]); 
    const [isGridView, setIsGridView] = useState(true); 

    return (
        <div>
            <Header />
            {/* Main Layout */}
            <div className="flex">
                <LeftSidebar />
                <div className="p-6 bg-gray-50 min-h-screen flex-grow">
                    {/* Header Section */}
                    <div className="flex space-x-4 justify-between items-center">
                        <h1 className="text-2xl font-bold mb-6">My Tasks</h1>
                        <div className="flex space-x-4">
                            <button
                                className={`hover:bg-gray-100 flex items-center ${
                                    isGridView ? "text-purple-600" : "text-gray-500"
                                }`}
                                aria-label="Grid View"
                                onClick={() => setIsGridView(true)}
                            >
                                <Grid className="w-5 h-5" />
                            </button>
                            <button
                                className={`hover:bg-gray-100 flex items-center ${
                                    !isGridView ? "text-purple-600" : "text-gray-500"
                                }`}
                                aria-label="List View"
                                onClick={() => setIsGridView(false)}
                            >
                                <List className="w-5 h-5" />
                            </button>
                            <button className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700">
                                <div className="flex items-center">
                                    <RefreshCcw className="w-4 h-4 mr-2" />
                                    Sync Tasks
                                </div>
                            </button>
                            <button className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700">
                                + New Task
                            </button>
                        </div>
                    </div>

                    {/* Task Cards */}
                    <div
                        className={`${
                            isGridView
                                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
                                : "space-y-4"
                        }`}
                    >
                        {tasks.map((task) => (
                            <div
                                key={task.id}
                                className={`bg-white shadow-sm rounded-lg p-4 border border-gray-200 cursor-pointer ${
                                    task.id === selectedTask.id
                                        ? "ring-2 ring-purple-500"
                                        : ""
                                }`}
                                onClick={() => setSelectedTask(task)}
                            >
                                {/* Task Title */}
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-semibold">{task.title}</h3>
                                    <span>{task.priorityIcon}</span>
                                </div>
                                <p className="text-sm text-gray-500">{task.project}</p>

                                {/* Progress Bar */}
                                <div className="mt-4">
                                    <div className="flex justify-between items-center text-sm mb-2">
                                        <span>Progress</span>
                                        <span>{task.progress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div
                                            className={`h-2.5 rounded-full ${
                                                task.statusColor === "blue"
                                                    ? "bg-blue-500"
                                                    : task.statusColor === "red"
                                                    ? "bg-red-500"
                                                    : task.statusColor === "green"
                                                    ? "bg-green-500"
                                                    : "bg-gray-500"
                                            }`}
                                            style={{ width: `${task.progress}%` }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Task Status */}
                                <div className="flex items-center justify-between space-x-2 mt-4">
                                    <div className="flex">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                task.statusColor === "blue"
                                                    ? "bg-blue-100 text-blue-500"
                                                    : task.statusColor === "red"
                                                    ? "bg-red-100 text-red-500"
                                                    : task.statusColor === "green"
                                                    ? "bg-green-100 text-green-500"
                                                    : "bg-gray-100 text-gray-500"
                                            }`}
                                        >
                                            {task.status}
                                        </span>
                                        {task.dependencies && (
                                            <span className="px-2 py-1 bg-yellow-100 text-yellow-500 text-xs font-medium rounded-full">
                                                Has Dependencies
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-sm text-gray-500 flex items-center">
                                        <CalendarDays /> {task.dueDate}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <RightSidebar task={selectedTask} />
            </div>
        </div>
    );
};

export default Tasks;
