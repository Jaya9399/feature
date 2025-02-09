const db = require("../db");

// Get all projects
exports.getAllProjects = (req, res) => {
    db.query("SELECT * FROM projects", (err, results) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ message: "Internal server error" });
        }
        res.json(results);
    });
};

// Create a new project
exports.createProject = (req, res) => {
    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(400).json({ message: "Name and description are required" });
    }

    db.query("INSERT INTO projects (name, description) VALUES (?, ?)", [name, description], (err, result) => {
        if (err) {
            console.error("Error creating project:", err);
            return res.status(500).json({ message: "Internal server error" });
        }
        res.status(201).json({ message: "Project created successfully", projectId: result.insertId });
    });
};
