const connection = require("../../config/connection.js");
const users = require("../../models/users/userModels.js");
const players = require("../../models/players/playerModels.js");

module.exports = {
    goHome: (req, res) => {
        res.render("index", {title: "Home"});
    },
    goDashboard: (req, res) => {
        res.render("dashboard", {title: "Dashboard"});
    },
    goSearch: (req, res) => {
        res.render("search", {title: "Search"});
    },
    goContact: (req, res) => {
        res.render("contact", {title: "Contact"});
    },
    goError: (req, res) => {
        res.render("error" , {title: "Error"});
    }
};
