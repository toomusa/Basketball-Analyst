const express = require("express");
const router = express.Router();

const apiRoutes = require("./api");
const htmlRoutes = 

router.use("/api", apiRoutes);

router.get("/", (req, res) => res.send("Yeeee"));

module.exports = router;

