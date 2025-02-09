const User = require("../models/User");
const Task = require("../models/task"); // ✅ Import the Task model
const Project = require("../models/project"); // ✅ Import Project model

exports.createTask = async (req, res) => {
    try {
        const { title, description, project_id, user_email } = req.body;

        // Validate required fields
        if (!title || !description || !project_id || !user_email) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if the project exists
        const project = await Project.findByPk(project_id);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        // Find the user by email who is an employee
        const user = await User.findOne({
            where: { email: user_email, designation: "employee" },
        });

        if (!user) {
            return res.status(404).json({ message: "Employee not found" });
        }

        // Create the task
        const task = await Task.create({
            title,
            description,
            project_id,
            employee_id: user.id, // ✅ Ensure this column name matches your DB schema
        });

        res.status(201).json({ message: "Task created successfully", task });
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
