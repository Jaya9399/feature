import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Base from "./pages/Base";
import Login from "./components/Login";
import Signup from "./components/Signup"; // ✅ Import Signup Component
import EMDashboard from './pages/EmployeeFlow/Dashboard/EMDashboard';
import Project from './pages/EmployeeFlow/Project/Project';
import ProjectLanding from './pages/EmployeeFlow/Project/Project_Landing';
import Tasks from "./pages/EmployeeFlow/MyTasks/Tasks";
import MeetHeader from "./pages/MeetUp/MeetHeader";
import AiDashboard from "./pages/EmployeeFlow/AiAgent/AiDashboard";
import AiTwinDashboard from "./pages/EmployeeFlow/AiTwin/AiTwinDashboard";
import CXODashboard from "./pages/CXOFlow/Dashboard/CXODashboard";
import EmployeeManagerDashboard from "./pages/EmployeeManagerFlow/EmployeeManagerDashboard";
import PMCXODashboard from './pages/PM-CXODashboard';
import ProjectTemplates from './pages/Admin/ProjectTemplates';
import CreateTemplate from './pages/Admin/CreateTemplate';
import PMDashboard from "./pages/PMFlow/PMDashboard"; // Ensure correct path
const App = () => {
    return (
        <Router>
            <div className="pb-8"> 
                <Routes>
                    <Route path='/' element={< Signup />} />
                    <Route path='/login' element={< Login />} />
                    <Route path='/base' element={< Base />} />  {/* ✅ Added Signup Route */}

                    {/* EmployeeFlow */}
                    <Route path="/em-dashboard" element={< EMDashboard/>} />
                    <Route path="/projects" element={< Project/>} />
                    <Route path="/project-landing" element={< ProjectLanding/>} />
                    <Route path="/my-tasks" element={< Tasks/>} />
                    <Route path="/meetings" element={< MeetHeader/>} />
                    <Route path="/ai-agent" element={< AiDashboard />} />
                    <Route path="/ai-twin" element={< AiTwinDashboard />} />

                    {/* CXOFlow */}
                    <Route path="/cxo-dashboard" element={< CXODashboard />} />
                    <Route path="/employeeManager-dashboard" element={< EmployeeManagerDashboard />} />
                    <Route path="/pm-cxo-dashboard" element={< PMCXODashboard />} />
               
                    {/* Admin */}
                    <Route path="/admin-dashboard" element={< ProjectTemplates />} />
                    <Route path='/pm-dashboard' element={<PMDashboard />}/>
                    <Route path='/admin/create-template' element={ <CreateTemplate />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
