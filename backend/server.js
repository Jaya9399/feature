const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth"); // ✅ Import auth routes

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use authentication routes
app.use("/auth", authRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
