const connection = require("../../config/connection.js");
const users = require("../../models/users/userModels.js");
const players = require("../../models/players/playerModels.js");
const authModel = require("../../models/auth/authModels.js");

const firebase = require('../../config/keys').firebase;
const app = require('../../config/keys').app;
const auth = require('../../config/keys').auth;

module.exports = {
    userLogin: async (req, res) => {
        console.log("authController.userLogin");
        let userDashboard = [];
        let {userToken, userEmail, userName} = req.body;
        console.log(userToken)
        console.log(userEmail)
        console.log(userName)

        connection.query("SELECT * FROM users WHERE user_token = ? AND user_email = ?", [userToken, userEmail], (err, data) => {
            if (err) {
                console.log("********User NOT Found********");
            } else if (data) {
                console.log("USER TOKEN FOUND: " + userToken)
                res.send(userToken);
            }
        })

                // connection.query("SELECT * FROM configs WHERE user_token = ?", [userToken], (err, data) => {
                //     if (err) throw err;
                //     console.log("***********CONFIG DATA***************")
                //     // data.forEach(item => {
                //     for (let i = 0; i < data.length; i++) {
                //         // console.log(item)
                //         userDashboard.push([data[i].id, data[i].table_data, data[i].column_data])
                //     }
                //     // });
                //     // console.log(userDashboard)
            
                //     res.render("dashboard", {
                //         title: "Dashboard", 
                //         userDashboard
                //     });
                    
                // })
            


        console.log("userLogin works!");
    },
    redirectHome: (req, res) => {
        console.log("REDIRECT HOME")
        firebase.auth().signOut()
            .then(() => {
                console.log("Signed out")
                res.render("index", {title: "Home"});
            })
            .catch(console.log("Couldn't sign out"));
        // let promise = auth.signOut();
        // promise.catch(e => console.log(e));
    }
};
