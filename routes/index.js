const express = require("express");
const router = express.Router();

const htmlRoutes = require("./html/htmlRoutes.js");
const apiRoutes = require("./api/apiRoutes.js");
const authRoutes = require("./auth/authRoutes.js");

router.use("/", htmlRoutes);
router.use("/api", apiRoutes);
router.use("/auth", authRoutes);

module.exports = router;

 