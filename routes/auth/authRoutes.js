const express = require("express");
const router = express.Router();

const htmlController = require("../../controllers/html/htmlController.js");

router.route("/")
    .get(htmlController.findAll);

router.route("/login")
    .get(htmlController.findAll);

router.route("/logout")
    .get(htmlController.findAll);

router.route("/register")
    .get(htmlController.findAll);

module.exports = router;