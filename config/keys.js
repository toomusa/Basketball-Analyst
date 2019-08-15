require("dotenv").config();
const firebase = require('firebase/app');
                require('firebase/auth');
                
const app = firebase.initializeApp({
    apiKey: process.env.APIKEY,
    authDomain: "basketball-analyst-ad924.firebaseapp.com",
    databaseURL: "https://basketball-analyst-ad924.firebaseio.com",
    projectId: "basketball-analyst-ad924",
    storageBucket: "",
    messagingSenderId: process.env.SENDERID,
    appId: process.env.APPID
});

const auth = firebase.auth();

module.exports = {
    firebase,
    app,
    auth
};