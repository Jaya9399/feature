import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faBell, faCalendar, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import logo from "../images/FeatureFlow_Logo.png";

const Header = () => {
    const navigate = useNavigate(); // Initialize navigate function

    return (
        <header className="bg-[#4B0082] text-white flex items-center justify-between px-4 py-3 shadow-lg">
            {/* Logo and Navigation Controls */}
            <div className="flex items-center space-x-4">
                <div className="bg-white rounded p-1 opacity-75"> {/* Logo faded */}
                    <Link to="/">
                        <img src={logo} alt="FeatureFlow Logo" className="h-8 w-16" />
                    </Link>
                </div>
                {/* Navigate Back Button */}
                <button 
                    className="text-white hover:bg-purple-800 p-2 rounded"
                    onClick={() => navigate(-1)} // Go Back
                >
                    <FontAwesomeIcon icon={faChevronLeft} className="h-5 w-5" />
                </button>
                {/* Navigate Forward Button */}
                <button 
                    className="text-white hover:bg-purple-800 p-2 rounded"
                    onClick={() => navigate(1)} // Go Forward
                >
                    <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5" />
                </button>
            </div>

            {/* Search Bar */}
            <div className="relative ml-24">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-[576px] h-10 pl-4 pr-10 bg-[rgba(255,255,255,0.2)] text-white rounded-md focus:outline-none focus:ring focus:ring-purple-300"
                />
                <FontAwesomeIcon
                    icon={faSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-300"
                />
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-4">
                <button className="hover:bg-purple-800 p-2 rounded">
                    <FontAwesomeIcon icon={faBell} className="h-6 w-6" />
                </button>
                <Link to="/meetings">
                    <button className="hover:bg-purple-800 p-2 rounded">
                        <FontAwesomeIcon icon={faCalendar} className="h-6 w-6" />
                    </button>
                </Link>
                <button className="hover:bg-purple-800 p-2 rounded">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"/>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                    </svg>
                </button>
                <button className="bg-[rgba(255,255,255,0.2)] hover:bg-purple-800 p-2 rounded">
                    <span className="h-6 w-6 ">New</span>
                </button>
                <button className="hover:bg-purple-800 p-2 rounded">
                    <FontAwesomeIcon icon={faUserCircle} className="h-6 w-6" />
                </button>
            </div>
        </header>
    );
};

export default Header;
