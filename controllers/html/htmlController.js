const connection = require("../../config/connection.js");
const users = require("../../models/users/userModels.js");
const players = require("../../models/players/playerModels.js");
var Tabulator = require('tabulator-tables');

module.exports = {
    goHome: (req, res) => {
        res.render("index", {title: "Home"});
    },
    goDashboard: async (req, res) => {
        let userTableData;
        let userColumnConfig;
        const searchDb = async () => {
            return new Promise((resolve, reject) => {
                connection.query("SELECT table1, table2 FROM users WHERE id = 1;", (err, data) => {
                    if (err) throw err;
                    console.log("SQL ROUTE SUCCESS!!")
                    userTableData = data[0].table1;
                    userColumnConfig = data[0].table2;
                    // console.log(userTableData)
                    // console.log(userColumnConfig)
                    resolve();
                })
            }).catch(err => console.log(err));
        }
        await searchDb();
        
        res.render("dashboard", {
            title: "Dashboard", 
            userData: userTableData, 
            userColumns: userColumnConfig
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
    userDashboard: (req, res) => {
        console.log("hello")
        // console.log(req.body)
        let userTableData = JSON.stringify(req.body.userTableData);
        let userColumnConfig = JSON.stringify(req.body.userColumnConfig);

        connection.query("UPDATE users SET table1 = ?, table2 = ? WHERE id = 1;", [userTableData, userColumnConfig], (err, data) => {
            if (err) throw err;
        });

        res.status(200).end();
    }
};
