const express = require("express");
const authMiddleware = require("../middleware/auth");
const rateLimit = require("../middleware/rateLimit");

const router = express.Router();

router.get("/me", authMiddleware, rateLimit, (req, res) => {
  res.json({
    message: "You are authenticated",
    user: req.user,
  });
});

module.exports = router;
