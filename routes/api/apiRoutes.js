const express = require("express");
const router = express.Router();

const apiController = require("../../controllers/api/apiController.js");

router.route("/api")
    .get(apiController.findAll);

router.route("/api/save")
    .get(apiController.findAll);

router.route("/api/read")
    .get(apiController.findAll);

router.route("/api/delete")
    .get(apiController.findAll);

module.exports = router;