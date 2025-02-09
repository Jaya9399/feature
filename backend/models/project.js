const db = require("../db");

const Project = {
    getAllProjects: (callback) => {
        db.query("SELECT * FROM projects", callback);
    },

    createProject: (name, description, callback) => {
        db.query("INSERT INTO projects (name, description) VALUES (?, ?)", [name, description], callback);
    }
};

module.exports = Project;
