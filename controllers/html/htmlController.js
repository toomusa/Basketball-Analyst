const connection = require("../../config/connection.js");
const users = require("../../models/users/userModels.js");
const players = require("../../models/players/playerModels.js");
var Tabulator = require('tabulator-tables');
const firebase = require('../../config/keys').firebase;
let currentUser;
let userToken = "ewN2eCX32CbqSAqiUdLbU5OhvR73";
const auth = firebase.auth();


auth.onAuthStateChanged(user => {
    if (user) {
        console.log("############### USER FOUND ##################")
        console.log(user)
        currentUser = user;
    } else {
        console.log(user)
      // No user is signed in.
    }
  });

// firebase.initializeApp({
//     apiKey: "AIzaSyAO6lUZstiSf_siMPd91vbUopvzadeRrLw",
//     authDomain: "basketball-analyst-ad924.firebaseapp.com",
//     databaseURL: "https://basketball-analyst-ad924.firebaseio.com",
//     projectId: "basketball-analyst-ad924",
//     storageBucket: "",
//     messagingSenderId: "302991295174",
//     appId: "1:302991295174:web:f551b5124a916f43"
// });


auth.onAuthStateChanged(user => {
    if (user) {
        console.log("############### USER FOUND ##################")
        currentUser = user;
    } else {
      // No user is signed in.
    }
  });

module.exports = {
    goHome: (req, res) => {
        res.render("index", {title: "Home"});
    },
    goDashboard: async (req, res) => {
        // if (req) 
        let userTableData;
        let userColumnConfig;
        let userDashboard = [];

        const searchDb = async () => {
            return new Promise((resolve, reject) => {
                connection.query("SELECT * FROM configs WHERE user_token = ?;", [userToken], (err, data) => {
                    if (err) throw err;
                    console.log("SQL ROUTE SUCCESS!!")

                    for (let i = 0; i < data.length; i++) {
                        // console.log(item)
                        userDashboard.push({id: data[i].id, tableData: data[i].table_data, columnData: data[i].column_data})
                        console.log(typeof data[i].table_data)
                        console.log(typeof data[i].column_data)
                    }
                    console.log(userDashboard)

                    // userTableData = data[0].table_data;
                    // userColumnConfig = data[0].column_data;
                    // console.log(userTableData)
                    // console.log(userColumnConfig)
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
        console.log(userToken)
        // let userTableData;
        // let userColumnConfig;
        let userDashboard = [];
        const searchDb = async () => {
            return new Promise((resolve, reject) => {
                connection.query("SELECT * FROM configs WHERE user_token = ?", [userToken], (err, data) => {
                    if (err) throw err;
                    console.log("***********CONFIG DATA***************")
                    // data.forEach(item => {
                    for (let i = 0; i < data.length; i++) {
                        // console.log(item)
                        userDashboard.push({id: data[i].id, tableData: data[i].table_data, columnData: data[i].column_data})
                    }
                    // });
                    // console.log(userDashboard)
                    resolve();
                })
                // connection.query("SELECT * FROM configs WHERE user_token = ?;", [userToken], (err, data) => {
                //     if (err) throw err;
                //     console.log("SQL ROUTE SUCCESS!!")
                //     // console.log(data)
                //     userTableData = data[0].table_data;
                //     userColumnConfig = data[0].column_data;
                //     // console.log(userTableData)
                //     // console.log(userColumnConfig)
                //     resolve();
                // })
            }).catch(err => console.log(err));
        }
        await searchDb();
        
        res.render("dashboard", {
            title: "Dashboard", 
            userDashboard
        });
        // res.render("dashboard", {
        //     title: "Dashboard", 
        //     userData: userTableData, 
        //     userColumns: userColumnConfig
        // });
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
        

        // let user = auth.currentUser;
        // console.log(auth.currentUser)
        // console.log(user)

        connection.query("INSERT INTO configs (user_token, table_data, column_data) VALUES (?, ?, ?)", [userToken, userTableData, userColumnConfig], (err, data) => {
            if (err) throw err;
        });

        res.status(200).end();
    }
};
