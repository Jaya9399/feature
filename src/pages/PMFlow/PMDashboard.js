import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PMDashboard = () => {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const [projects, setProjects] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [newTask, setNewTask] = useState({ title: "", description: "", project_id: "", user_email: "" });

    useEffect(() => {
        fetchTasks();
        fetchProjects();
        fetchEmployees();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get("http://localhost:5000/tasks");
            console.log("Tasks data:", response.data); // Debugging
            setTasks(response.data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const fetchProjects = async () => {
        try {
            const response = await axios.get("http://localhost:5000/projects");
            console.log("Projects data:", response.data); // Debugging
            setProjects(response.data);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    const fetchEmployees = async () => {
        try {
            const response = await axios.get("http://localhost:5000/employees");
            console.log("Employees data:", response.data); // Debugging
            setEmployees(response.data);
        } catch (error) {
            console.error("Error fetching employees:", error);
        }
    };

    const createTask = async () => {
        try {
            await axios.post("http://localhost:5000/tasks", newTask);
            fetchTasks();
            setNewTask({ title: "", description: "", project_id: "", user_email: "" });
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white p-5">
                <h2 className="text-xl font-bold">PM Dashboard</h2>
                <button
                    className="w-full bg-purple-500 hover:bg-purple-600 mt-4 p-2 rounded"
                    onClick={() => navigate("/projects")}
                >
                    Create Project
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">
                <h1 className="text-2xl font-bold mb-6">Assign Task</h1>

                {/* Task Form */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-lg font-semibold mb-4">New Task</h2>
                    <input
                        type="text"
                        placeholder="Task Title"
                        className="border p-2 w-full mb-2 rounded"
                        value={newTask.title}
                        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    />
                    <textarea
                        placeholder="Task Description"
                        className="border p-2 w-full mb-2 rounded"
                        value={newTask.description}
                        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    />
                    <select
                        className="border p-2 w-full mb-2 rounded"
                        value={newTask.project_id}
                        onChange={(e) => setNewTask({ ...newTask, project_id: e.target.value })}
                    >
                        <option value="">Select Project</option>
                        {projects.length > 0 ? (
                            projects.map((project) => (
                                <option key={project.id} value={project.id}>
                                    {project.name}
                                </option>
                            ))
                        ) : (
                            <option disabled>No projects found</option>
                        )}
                    </select>
                    <select
                        className="border p-2 w-full mb-2 rounded"
                        value={newTask.user_email}
                        onChange={(e) => setNewTask({ ...newTask, user_email: e.target.value })}
                    >
                        <option value="">Select Employee</option>
                        {employees.length > 0 ? (
                            employees.map((emp) => (
                                <option key={emp.email} value={emp.email}>
                                    {emp.name}
                                </option>
                            ))
                        ) : (
                            <option disabled>No employees found</option>
                        )}
                    </select>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white p-2 w-full rounded"
                        onClick={createTask}
                    >
                        Assign Task
                    </button>
                </div>

                {/* Task List */}
                <h2 className="text-xl font-bold mt-6 mb-4">Assigned Tasks</h2>
                {tasks.length === 0 ? (
                    <p className="text-gray-500">No tasks assigned yet.</p>
                ) : (
                    <div className="grid grid-cols-3 gap-4">
                        {tasks.map((task) => (
                            <div key={task.id} className="p-4 bg-white rounded-lg shadow-md">
                                <h3 className="font-bold text-lg">{task.title}</h3>
                                <p className="text-gray-600">{task.description}</p>
                                <p className="text-sm text-gray-500 mt-2">Assigned to: {task.user_email}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PMDashboard;
