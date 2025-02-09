const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Change if needed
    password: "root", // Change if needed
    database: "feature_flow",
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to MySQL database");
});

module.exports = db;
