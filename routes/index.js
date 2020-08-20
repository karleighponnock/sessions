const router = require("express").Router();
const authRoutes = require("./auth");
const path = require("path");
const apiRoutes = require("./api");
const newArtist = require("./api/newArtist");

// Routes for authentication
router.use("/auth", authRoutes);
router.use("/api", apiRoutes);
router.use("/api", newArtist);

// If no API routes are hit, send the React app
router.use("*", (req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

module.exports = router;