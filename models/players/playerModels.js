const connection = require("../../config/connection.js");
var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("2.0", true, null);
msf.authenticate("1895dd8d-e910-476e-a495-9f7980", "MYSPORTSFEEDS");
var $ = require('jquery');
const cTable = require("console-table");
// const fs = require('fs');


//mySQL
var mysql = require('mysql');

// CRUD FUNCTIONS

let playerListFrontEndTest = [];
let playersArrayFormatted = '';
//function for once a day grabbing all players from API

let playersArray = [];


const playerGrabber = (data) => {
  data.players.forEach(item => {
    const player = {
      playerId: item.player.id ? item.player.id : "5",
      firstName: item.player.firstName ? item.player.firstName : "5",
      lastName: item.player.lastName ? item.player.lastName : "5",
      teamAbbr: (item.player.currentTeam && item.player.currentTeam.abbreviation) ? item.player.currentTeam.abbreviation : "5",
      teamId: (item.player.currentTeam && item.player.currentTeam.id) ? item.player.currentTeam.id : "5",
      // plyrOfficialImageSrc: item.player.officialImageSrc ? item.player.officialImageSrc : undefined,
      // plyrTeamAsOfDateId: (item.teamAsOfDate && item.teamAsOfDate.id) ? item.teamAsOfDate.id : undefined,
      // plyrTeamAsOfDateAbbreviation: (item.teamAsOfDate && item.teamAsOfDate.abbreviatio) ? item.teamAsOfDate.abbreviatio : undefined
    }
    playersArray.push(player);
    // console.log(player);
  })
}

// const playersArrayFormatter = (playersArray) => {
//   // console.log(playersArray);
//   playersArrayFormatted = [];
//   playersArrayForNow = "";
//   let objFinalString = "";
//   playersArray.forEach(item => {
//     let objArray = Object.values(item);
//     // console.log("LEVEL1: " + objArray)
//     let objString = "";
//     objArray.forEach(value => {
//       // let valueString = `"${value}",`;
//       objString += "'" + value + "', ";
//     })
//     // console.log("LEVEL2: " + objString)
//     objFinalString += "(" + objString.slice(0,-2) + ") ";
//   })
//   // console.log("LEVEL3: " + objFinalString)
//   playersArrayForNow += objFinalString;
//   playersArrayFormatted.push(playersArrayForNow.slice(0,-1));
//   console.log(playersArrayFormatted);
// }


const playerChecker = async function() {
  var data = await msf.getData('nba', 'current', 'players', 'json', {force: true});
  playerGrabber(data);
  playersArrayFormatter(playersArray);
  // console.log(playersArrayFormatted);
  // let query = `"INSERT INTO players (playerId, firstName, lastName, teamAbbr, teamId) VALUES ?"` + connection.escape(playersArrayFormatted);
  // console.log("QUERY: " + query);
  connection.query("INSERT INTO players (playerId, firstName, lastName, teamAbbr, teamId) VALUES ?", [playersArrayFormatted], function(err, res){ //dont forget teamName
    if (err) throw err;
    console.log(res);
  })
}

let questionMark = "?";
    for (let i = 0; i < playersArray.length - 1; i++) {questionMark += ", ?"}


// playerChecker();  //run on server start once

const dayInMilliseconds = 1000 * 60 * 60 * 24;
// setInterval(playerChecker(),dayInMilliseconds ); //run every 12 hours 

// connection.query(`SELECT * FROM players`, function(err, res) {
//   if (err) throw err;
//   console.table(res);
//   console.log("i'm hitted");
// })