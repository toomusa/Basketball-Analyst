const express = require("express");
const router = express.Router();

const htmlController = require("../../controllers/html/htmlController.js");

router.route("/")
    .get(htmlController.findAll);

router.route("/search")
    .get(htmlController.findAll);

router.route("/dashboard")
    .get(htmlController.findAll);

router.route("/contact")
    .get(htmlController.findAll);

module.exports = router;