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

let playersArrayFormatted = [];
//function for once a day grabbing all players from API

let playersArray = [];
const playersTrie = [];
const teamsTrie = [];
let trieObj = {};

const playerGrabber = (data) => {
  // console.log(data);
  data.players.forEach(item => {
    const player = {
      playerId: item.player.id ? item.player.id : undefined,
      firstName: item.player.firstName ? item.player.firstName : undefined,
      lastName: item.player.lastName ? item.player.lastName : undefined,
      playerImg: item.player.officialImageSrc ? item.player.officialImageSrc : undefined,
      teamAbbr: (item.player.currentTeam && item.player.currentTeam.abbreviation) ? item.player.currentTeam.abbreviation : undefined,
      teamId: (item.player.currentTeam && item.player.currentTeam.id) ? item.player.currentTeam.id : undefined,
      
      // plyrTeamAsOfDateId: (item.teamAsOfDate && item.teamAsOfDate.id) ? item.teamAsOfDate.id : undefined,
      // plyrTeamAsOfDateAbbreviation: (item.teamAsOfDate && item.teamAsOfDate.abbreviatio) ? item.teamAsOfDate.abbreviatio : undefined
    }
    playersArray.push(player);
    playersTrie.push(`${player.firstName} ${player.lastName}`);
    teamsTrie.push(`${player.teamAbbr}`);
    // console.log(player);
  })
  trieObj = {playersTrie, teamsTrie};
}

const playersArrayFormatter = (playersArray) => {
  playersArray.forEach(item => {
    let objArray = Object.values(item);
    playersArrayFormatted.push(objArray);
  })
}

// the apostrophes in these names are causing the write failure
  // "DeAndre'' Bembry"
  // "Mike D'Antoni"
  // "De'Aaron Fox"
  // "Devonte'' Graham"
  // "Le'Bryan Nash"
  // "Royce O'Neale"
  // "Kyle O'Quinn"
  // "D'Angelo Russell"
  // "Amar'e Stoudemire"
  // "De'Anthony Melton"
  // "E'Twaun Moore"
  // "J.J. O'Brien"
  // "Johnny O'Bryant"


const playerChecker = async function() {
  console.log("playerModels.js playerChecker");
  var data = await msf.getData('nba', 'current', 'players', 'json', {force: true});
  playerGrabber(data);
  // console.log(playersTrie);
  // console.log(teamsTrie);
  // console.log([playersArray]);
  playersArrayFormatter(playersArray);
  
  connection.query(`DROP TABLE IF EXISTS players;`, function(err, res){
    if (err) throw err;
    connection.query(`CREATE TABLE players (
      id INTEGER NOT NULL AUTO_INCREMENT,
      playerId INTEGER (100) NOT NULL,
      firstName VARCHAR(100) NOT NULL,
      lastName VARCHAR(100) NOT NULL,
      playerImg VARCHAR (255),
      teamAbbr VARCHAR (100),
      teamId VARCHAR (100),
      PRIMARY KEY (id));`, function(err, res){
      if (err) throw err;
        const query = connection.query("INSERT INTO players (playerId, firstName, lastName, playerImg, teamAbbr, teamId) VALUES ?", [playersArrayFormatted], function(err, res){ //dont forget teamName
          // console.log(query.sql)
          if (err) throw err;
          // console.log(res);
          console.log(trieObj)
          return trieObj;
        })
    })
  });
};

playerChecker();  //run on server start once

// const dayInMilliseconds = 1000 * 60 * 60 * 24;
// setInterval(function(){playerChecker()},dayInMilliseconds ); //run every 24 hours 


module.exports = {playerChecker};