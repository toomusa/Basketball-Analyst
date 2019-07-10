const express = require("express");
const router = express.Router();

const authController = require("../../controllers/auth/authController.js");

// router.route("/auth").get(authController.userLogin);

router.route("/login").post(authController.userLogin);

// router.route("/auth/signup").get(authController.findAll);

// router.route("/auth/logout").get(authController.findAll);

module.exports = router;