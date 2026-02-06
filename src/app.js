const pool = require("./db");
app.get("/db-test", async (req, res) => {
    try {
      const result = await pool.query("SELECT NOW()");
      res.json({ time: result.rows[0] });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "DB connection failed" });
    }
  });
  

const express = require("express");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.json({ message: "Backend is running" });
});

const PORT = process.env.PORT || 3000;

// IMPORTANT: listen on 0.0.0.0 (Docker-compatible)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
