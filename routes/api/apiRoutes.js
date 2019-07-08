const express = require("express");
const router = express.Router();

const todoRoutes = require("./todos");

router.use("/todos", todoRoutes);

router.get("/", (req, res) => res.send("I am inside /api"));

module.exports = router;
