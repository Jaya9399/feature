import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Home, Inbox, FileText, BarChart2, Clipboard, Clock, LayoutGrid, MoreHorizontal, CircleHelp } from "lucide-react";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const profile = { initials: "FC", name: "Felix Carter" };

const Sidebar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const menuItems = [
        { path: "/em-dashboard", icon: Home, label: "Home" },
        { path: "/my-tasks", icon: Inbox, label: "My Tasks" },
        { path: "/ai-agent", icon: FileText, label: "Ai Agent" },
        { path: "/ai-twin", icon: BarChart2, label: "Ai Twin" },
        { path: "/clips", icon: Clipboard, label: "Clips" },
        { path: "/timesheets", icon: Clock, label: "Timesheets" },
    ];

    const spaceItems = [
        { path: "/search-space", label: "Search Space" },
        { path: "/add-space", label: "Add Space" },
        { path: "/projects", label: "Projects" },
    ];

    return (
        <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
            {/* Profile Section */}
            <div className="p-4 flex items-center space-x-4 border-b">
                <div className="w-10 h-10 bg-[#4B0082] text-white font-bold rounded-md flex items-center justify-center">{profile.initials}</div>
                <h3 className="text-gray-900 font-medium">{profile.name}</h3>
                <button className="ml-auto text-gray-500 hover:text-gray-700"><MoreHorizontal className="w-5 h-5" /></button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-4 mt-3">
                <ul>
                    {menuItems.map(({ path, icon: Icon, label }) => (
                        <li key={path} className={`flex items-center p-2 rounded-lg ${isActive(path) ? "bg-purple-500 text-white" : "text-gray-800"}`}>
                            <Link to={path} className="flex items-center w-full">
                                <Icon className={`w-5 h-5 ${isActive(path) ? "text-white" : "text-gray-600"}`} />
                                <span className="ml-4">{label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Spaces Section */}
                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <h4 className="text-gray-600 text-sm font-semibold">Spaces</h4>
                        <div>
                            <button className="text-gray-400 p-2"><FontAwesomeIcon icon={faSearch} className="h-3 w-3" /></button>
                            <button className="text-gray-400 p-2"><FontAwesomeIcon icon={faPlus} className="h-3 w-3" /></button>
                        </div>
                    </div>
                    <ul className="mt-2 space-y-2">
                        {spaceItems.map(({ path, label }) => (
                            <li key={path} className={`flex items-center p-2 rounded-lg ${isActive(path) ? "bg-purple-500 text-white" : "text-gray-800"}`}>
                                <Link to={path} className="flex items-center w-full">
                                    <LayoutGrid className={`w-5 h-5 ${isActive(path) ? "text-white" : "text-gray-600"}`} />
                                    <span className="ml-4">{label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Help Section */}
            <div className="flex items-center justify-end border-t p-3">
                <CircleHelp className="w-5 h-5 text-gray-600" />
                <span className="ml-2 text-gray-800">Help</span>
            </div>
        </div>
    );
};

export default Sidebar;
