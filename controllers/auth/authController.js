const connection = require("../../config/connection.js");
const users = require("../../models/users/userModels.js");
const players = require("../../models/players/playerModels.js");
const authModel = require("../../models/auth/authModels.js");

const firebase = require('../../config/keys').firebase;
const app = require('../../config/keys').app;
const auth = require('../../config/keys').auth;

module.exports = {
    userLogin: async (req, res) => {
        let {userId} = req.body[0];
        let {userEmail} = req.body[1];

        connection.query("SELECT * FROM users WHERE id = ? AND ")
        // query mysql users table
        // if user.uid exists in mysql
        //     query mysql for exisiting queries 
        //     render api queries to dashboard
        // render dashboard
        // else
        // render search

        console.log("userLogin works!");
        res.json({email, password, user});
    }
};
