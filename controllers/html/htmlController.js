const connection = require("../../config/connection.js");
const users = require("../../models/users/userModels.js");
const players = require("../../models/players/playerModels.js");
var Tabulator = require('tabulator-tables');

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
    },
    userDashboard: (req, res) => {
        console.log("hello")
        console.log(req.body)
        let {table} = req.body;
        // let table = new Tabulator({
        //     height: 800,
        //     virtualDom: true,
        //     data: req.body.userTableData,
        //     layout: "fitColumns", 
        //     columns: req.body.userColumnConfig,
        //     index: "Player ID"
        //     // rowClick:function(e, row){ //trigger an alert message when the row is clicked
        //     //     alert("Row " + row.getData().id + " Clicked!!!!");
        //     // },
        //   });
        res.status(302).render("dashboard", {
            title: "Dashboard",
            table: table
        })
    }
};
