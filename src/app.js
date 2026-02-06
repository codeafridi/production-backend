const express = require("express");
const dotenv = require("dotenv");
const meRoutes = require("./routes/me");

const pool = require("./db");
const authRoutes = require("./routes/auth");


// Load environment variables
dotenv.config();

const app = express();
app.use("/", meRoutes);

// Middleware
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Backend is running" });
});

// 🔴 THIS LINE MUST EXIST
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
