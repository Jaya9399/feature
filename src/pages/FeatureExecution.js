import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import ExecutionFlow from "../components/ExecutionFlow";
import ff from "../images/ff.png";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-0">
        <header className="flex justify-between items-center p-4 bg-white max-h-20 border-b border-gray-200">
            <div className="flex items-center space-x-2 gap-0.5">
                {/* Feature Flow Icon */}
                <img src={ff} alt="Flow Icon" className="h-8 w-14 text-gray-500" />
                
                {/* Home Icon */}
                <i className="fas fa-home text-gray-500"></i> {/* Font Awesome Home Icon */}
                <span className="text-gray-500">&gt;</span>

                {/* Breadcrumbs */}
                <span className="text-gray-500">AI Task Allocation</span>
                <span className="text-gray-500">&gt;</span>
                <span className="text-black">Feature Execution Plan</span>
            </div>

            <div className="flex items-center space-x-4">
                <span className="flex items-center text-black font-semibold">
                    {/* Green Dot */}
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                    On Track
                </span>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                    <span className="mr-2">+</span> New Requirement
                </button>   
                <button className="border border-gray-300 text-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2">
                    {/* Modify Icon */}
                    <i className="fas fa-edit text-gray-800"></i> {/* Font Awesome Modify Icon */}
                    <span>Modify Plan</span>
                </button>

                <button className="border border-gray-300 text-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2">
                    {/* Export Icon */}
                    <i className="fas fa-download text-gray-800"></i> {/* Font Awesome Export Icon */}
                    <span>Export Plan</span>
                </button>
            </div>
        </header>

        <div className="grid grid-cols-12 gap-3">
            <aside className="col-span-3 bg-white p-4 border-r border-gray-200">
                <h2 className="font-bold text-base mb-4 text-black">New Feature Request</h2>
                <form className="space-y-4">
                    {/* Feature Title */}
                    <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="featureTitle">
                        Feature Title
                    </label>
                    <input
                        type="text"
                        id="featureTitle"
                        placeholder="E.g., AI-Based Feature"
                        className="w-full p-1.5 border border-gray-300 rounded-md focus:ring focus:ring-purple-400 focus:outline-none text-sm"
                    />
                    </div>

                    {/* Description */}
                    <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        placeholder="Brief description of the feature..."
                        className="w-full p-1.5 border border-gray-300 rounded-md focus:ring focus:ring-purple-400 focus:outline-none text-sm"
                        rows={3}
                    ></textarea>
                    </div>

                    {/* Product */}
                    <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="product">
                        Product
                    </label>
                    <select
                        id="product"
                        className="w-full p-1.5 border border-gray-300 rounded-md focus:ring focus:ring-purple-400 focus:outline-none text-sm"
                    >
                        <option>Product One</option>
                        <option>Product Two</option>
                    </select>
                    </div>

                    {/* Request Type */}
                    <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="requestType">
                        Request Type
                    </label>
                    <select
                        id="requestType"
                        className="w-full p-1.5 border border-gray-300 rounded-md focus:ring focus:ring-purple-400 focus:outline-none text-sm"
                    >
                        <option>NPI</option>
                        <option>Enhancement</option>
                    </select>
                    </div>

                    {/* Priority Level */}
                    <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="priorityLevel">
                        Priority Level
                    </label>
                    <select
                        id="priorityLevel"
                        className="w-full p-1.5 border border-gray-300 rounded-md focus:ring focus:ring-purple-400 focus:outline-none text-sm"
                    >
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                    </div>

                    {/* Expected Timeline */}
                    <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="expectedTimeline">
                        Expected Timeline
                    </label>
                    <input
                        type="date"
                        id="expectedTimeline"
                        className="w-full p-1.5 border border-gray-300 rounded-md focus:ring focus:ring-purple-400 focus:outline-none text-sm"
                    />
                    </div>

                    {/* AI Assistance Level */}
                    <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="aiAssistanceLevel">
                        AI Assistance Level
                    </label>
                    <select
                        id="aiAssistanceLevel"
                        className="w-full p-1.5 border border-gray-300 rounded-md focus:ring focus:ring-purple-400 focus:outline-none text-sm"
                    >
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                    </div>

                    {/* Submit Button */}
                    <div>
                    <button
                        type="submit"
                        className="bg-purple-600 text-white px-3 py-2 rounded-md w-full hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-400 text-sm"
                    >
                        Submit Request
                    </button>
                    </div>
                </form>
            </aside>

            <main className="col-span-6 bg-transparent p-4">
                <ExecutionFlow />            
            </main>

            <aside className="col-span-3 bg-white p-4 border-l border-gray-200">
                <h2 className="font-bold text-lg mb-4 text-black">Team & Resources</h2>

                {/* Team Members */}
                <ul className="space-y-4">
                    <li className="p-2 border border-gray-300 rounded-lg shadow-sm flex items-center space-x-3 bg-white">
                        <img src="https://i.pravatar.cc/40?img=1" alt="Alex Chen" className="w-10 h-10 rounded-full" />
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-black">Alex Chen</span>
                                <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">Available</span>
                            </div>
                            <p className="text-xs text-gray-500">UX Designer</p>
                        </div>
                    </li>
                    <li className="p-2 border border-gray-300 rounded-lg shadow-sm flex items-center space-x-3 bg-white">
                        <img src="https://i.pravatar.cc/40?img=2" alt="Sarah Kim" className="w-10 h-10 rounded-full" />
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-black">Sarah Kim</span>
                                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">Busy</span>
                            </div>
                            <p className="text-xs text-gray-500">Frontend Dev</p>
                        </div>
                    </li>
                    <li className="p-2 border border-gray-300 rounded-lg shadow-sm flex items-center space-x-3 bg-white">
                        <img src="https://i.pravatar.cc/40?img=3" alt="Mike Ross" className="w-10 h-10 rounded-full" />
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-black">Mike Ross</span>
                                <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-xs">In Meeting</span>
                            </div>
                            <p className="text-xs text-gray-500">Backend Dev</p>
                        </div>
                    </li>
                </ul>

                {/* AI Agents */}
                <h3 className="text-base mt-6 mb-2 text-black">AI Agents</h3>
                <ul className="space-y-2 ">
                    <li className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg">
                        <span className="text-black">🤖 Code Assistant</span>
                        <span className="text-green-500 px-2 py-1 rounded text-sm">Active</span>
                    </li>
                    <li className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg">
                        <span className="text-black">🔧 Test Automation</span>
                        <span className="text-gray-500 px-2 py-1 rounded text-sm">Standby</span>
                    </li>
                    <li className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg">
                        <span className="text-black">📄 Documentation Bot</span>
                        <span className="text-green-500 px-2 py-1 rounded text-sm">Active</span>
                    </li>
                </ul>

                {/* Project Timeline */}
                <h3 className="text-base mt-6 mb-2 text-black">Project Timeline</h3>
                <ul className="space-y-2 text-sm">
                    <li className="flex justify-between items-center">
                        <span className="flex items-center ">
                            <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span> Planning
                        </span>
                        <span className="text-gray-500">Jan 15</span>
                    </li>
                    <li className="flex justify-between items-center">
                        <span className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span> Design
                        </span>
                        <span className="text-gray-500">Jan 20</span>
                    </li>
                    <li className="flex justify-between items-center">
                        <span className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span> Development
                        </span>
                        <span className="text-gray-500">Feb 1</span>
                    </li>
                    <li className="flex justify-between items-center">
                        <span className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2"></span> Testing
                        </span>
                        <span className="text-gray-500">Feb 15</span>
                    </li>
                </ul>
            </aside>
        </div>
    </div>
  );
};

export default App;
