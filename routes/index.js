const express = require("express");
const router = express.Router();

const apiRoutes = require("./api/apiRoutes.js");
const htmlRoutes = require("./html/htmlRoutes.js");
const authRoutes = require("./auth/authRoutes.js")

router.use("/api", apiRoutes);
router.use("/html", htmlRoutes);
router.use("/auth", authRoutes);

module.exports = router;

 