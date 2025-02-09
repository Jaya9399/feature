const express = require("express");
const router = express.Router();
const ProjectController = require("../controllers/projectcontroller");

router.get("/", ProjectController.getAllProjects);
router.post("/create", ProjectController.createProject);

module.exports = router;
