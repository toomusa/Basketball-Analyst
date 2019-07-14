const connection = require("../../config/connection.js");
var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("2.0", true, null);
msf.authenticate("1895dd8d-e910-476e-a495-9f7980", "MYSPORTSFEEDS");

// CRUD FUNCTIONS

//function for once a day grabbing all players from API
// var data = await msf.getData('nba', 'current', 'players', 'json', {player: playerString, team: teamString, 
//   rosterstatus: roster, position: position, force: true});