// const connection = require("../../config/connection.js");
// var MySportsFeeds = require("mysportsfeeds-node");
// var msf = new MySportsFeeds("2.0", true, null);
// msf.authenticate("1895dd8d-e910-476e-a495-9f7980", "MYSPORTSFEEDS");

// //mySQL
// var mysql = require('mysql');

// // var connection = mysql.createConnection({
// //   host: "localhost",
// //   port: 3306,
// //   user: "root",
// //   password: "",
// //   database: "bball_db"
// // });

// // connection.connect(function(err) {
// //   if (err) {
// //     console.error("error connecting: " + err.stack);
// //     return;
// //   }
// //   console.log("connected as id " + connection.threadId);
// // });

// // connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
// //   if (error) throw error;
// //   console.log('The solution is: ', results[0].solution);
// // });
 
// // connection.end();
// // CRUD FUNCTIONS

// //function for once a day grabbing all players from API

// const playerChecker = async function() {
//   var data = await msf.getData('nba', 'current', 'players', 'json', {force: true});
//   // console.log(JSON.stringify(data,null,2));
//   playerGrabber(data);
// }


// let playerList = [];

// const playerGrabber = (data) => {
//   playerList.length = 0;
//   data.players.forEach(item => {
//     let playerObj = {};
//     (item.player.id)? playerObj.playerId = item.player.id : playerObj.playerId = undefined;
//     (item.player.firstName)? playerObj.firstName = item.player.firstName: playerObj.firstName = undefined;
//     (item.player.lastName)? playerObj.lastName = item.player.lastName: playerObj.lastName = undefined;
//     (item.player.currentTeam.abbreviation)? playerObj.teamAbbr = item.player.currentTeam.abbreviation: playerObj.teamAbbr = undefined;
//     (item.player.currentTeam.id)? playerObj.teamId = item.player.currentTeam.id: playerObj.teamId = undefined;
//     playerList.push(playerObj);
//   })
//   console.log(playerList);
// }

// playerChecker();  //run on server start once

// const dayInMilliseconds = 1000 * 60 * 60 * 24;
// // setInterval(playerChecker(),dayInMilliseconds ); //run every 12 hours 
