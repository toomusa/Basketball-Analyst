const express = require("express");
const router = express.Router();

const apiRoutes = require("./api/apiRoutes.js");
const htmlRoutes = require("./html/htmlRoutes.js");

router.use("/api", apiRoutes);
router.use("/html", htmlRoutes);

module.exports = router;

 