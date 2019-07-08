const express = require("express");
const router = express.Router();

const todosController = require("./../../../controllers/todosController.js");

router.route("/")
    .get(todosController.findAll);

router.route("/:id")
    .delete(todosController.deleteById)
    .get(todosController.findById);

module.exports = router;