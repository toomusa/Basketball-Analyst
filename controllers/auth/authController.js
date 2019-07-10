const connection = require("../../config/connection.js");
const users = require("../../models/users/userModels.js");
const players = require("../../models/players/playerModels.js");
const authModel = require("../../models/auth/authModels.js");

const firebase = require('../../config/keys').firebase;
const app = require('../../config/keys').app;
const auth = require('../../config/keys').auth;

module.exports = {
    userLogin: async (req, res) => {
        let {email} = req.body;
        let {password} = req.body;
        const user = await auth.signInWithEmailAndPassword(email, password);
        // const promise = auth.signInWithEmailAndPassword(email, password);
        // promise.catch(e => console.error(e.message));
        console.log("userLogin works!");
        // console.log(res);
        res.json({email, password, user});
    }
};
