const connection = require("../../config/connection.js");
const users = require("../../models/users/userModels.js");
const players = require("../../models/players/playerModels.js");
var Tabulator = require('tabulator-tables');
const firebase = require('../../config/keys').firebase;
let currentUser;
let userToken = "ewN2eCX32CbqSAqiUdLbU5OhvR73";

module.exports = {
    goHome: (req, res) => {
        res.render("index", {title: "Home"});
    },
    goDashboard: async (req, res) => {
        let userDashboard = [];

        const searchDb = async () => {
            return new Promise((resolve, reject) => {
                connection.query("SELECT * FROM configs WHERE user_token = ?;", [userToken], (err, data) => {
                    if (err) throw err;
                    for (let i = 0; i < data.length; i++) {
                        userDashboard.push({id: data[i].id, tableData: data[i].table_data, columnData: data[i].column_data})
                    }
                    resolve();
                })
            }).catch(err => console.log(err));
        }
        await searchDb();

        res.render("dashboard", {
            title: "Dashboard", 
            userDashboard
        });
    },
    userDashboard: async (req, res) => {
        // let userToken = (req.params.usertoken).replace(":", "");
        // console.log(userToken)
        let userDashboard = [];

        const searchDb = async () => {
            return new Promise((resolve, reject) => {
                connection.query("SELECT * FROM configs WHERE user_token = ?", [userToken], (err, data) => {
                    if (err) throw err;
                    for (let i = 0; i < data.length; i++) {
                        userDashboard.push({id: data[i].id, tableData: data[i].table_data, columnData: data[i].column_data})
                    }
                    resolve();
                })
            }).catch(err => console.log(err));
        }
        await searchDb();
        
        res.render("dashboard", {
            title: "Dashboard", 
            userDashboard
        });
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
    saveDashboard: (req, res) => {
        console.log("SAVING TO USER DASHBOARD")
        let userTableData = JSON.stringify(req.body.userTableData);
        let userColumnConfig = JSON.stringify(req.body.userColumnConfig);

        connection.query("INSERT INTO configs (user_token, table_data, column_data) VALUES (?, ?, ?)", [userToken, userTableData, userColumnConfig], (err, data) => {
            if (err) throw err;
        });

        res.status(200).end();
    }
};
