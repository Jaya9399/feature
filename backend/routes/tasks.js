const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskcontroller");

// Create a new task & assign it to an employee
router.post("/create", taskController.createTask);

// Get tasks assigned to a specific employee
router.get("/:user_id", taskController.getEmployeeTasks);

module.exports = router;
