const express = require("express");
const router = express.Router();

const authController = require("../../controllers/auth/authController.js");
// const htmlController = require("../../controllers/html/htmlController.js");

router.route("/login").post(authController.userLogin);

// router.route("/signup").get(authController.userSignUp);

router.route("/logout").get(authController.redirectHome);

module.exports = router;