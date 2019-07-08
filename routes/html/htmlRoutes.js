const express = require("express");
const router = express.Router();

const authController = require("../../controllers/auth/authController.js");

router.route("/")
    .get(authController.findAll);

router.route("/search")
    .get(authController.findAll);

router.route("/dashboard")
    .get(authController.findAll);

router.route("/contact")
    .get(authController.findAll);

module.exports = router;