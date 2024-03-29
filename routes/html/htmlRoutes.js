const express = require("express");
const router = express.Router();

const htmlController = require("../../controllers/html/htmlController.js");

router.route("/").get(htmlController.goHome);
    
router.route("/dashboard").get(htmlController.goDashboard);

router.route("/dashboard/:usertoken").get(htmlController.userDashboard);

router.route("/save").post(htmlController.saveDashboard);

router.route("/search").get(htmlController.goSearch);

router.route("/contact").get(htmlController.goContact);

// router.route("/*").get(htmlController.goError);

module.exports = router;