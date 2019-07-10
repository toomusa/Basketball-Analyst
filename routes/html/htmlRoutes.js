const express = require("express");
const router = express.Router();

const htmlController = require("../../controllers/html/htmlController.js");

router.route("/").get(htmlController.goHome);
    
router.route("/dashboard").get(htmlController.goDashboard);

router.route("/search").get(htmlController.goSearch);

router.route("/contact").get(htmlController.goContact);

module.exports = router;