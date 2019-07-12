const connection = require("../../config/connection.js");
const users = require("../../models/users/userModels.js");
const players = require("../../models/players/playerModels.js");
const apiModel = require("../../models/api/apiModels.js");
// const playersData = require("../../models/api/apiModels.js").playersData;

var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("2.0", true, null);
msf.authenticate("1895dd8d-e910-476e-a495-9f7980", "MYSPORTSFEEDS");

module.exports = {
    queryData: async (req, res) => {
        // let {season, position, roster, playerString, teamString, endpoint} = req.body;
        let season = "2016-2017-regular";
        let endpoint = "players";
        let playerString = "stephen-curry";
        let teamString = "gsw";
        let roster = "assigned-to-roster";
        let position = "pg";
        // let queryUrl = `"nba", "${season}", "${endpoint}", "json", {player: "${playerString}", team: "${teamString}", 
        //                 rosterstatus: "${roster}", position: "${position}", force: true}`;
        // let queryUrl2 = `"nba", ${season}, ${endpoint}, "json", {player: ${playerString}, team: ${teamString}, 
        //                 rosterstatus: ${roster}, position: ${position}, force: true}`;
        // console.log(queryUrl);
        // console.log(queryUrl2);

        let obj = {
            "key lock": 4,
            "item 4": "people"
        }
        console.log(obj["item 4"])
        var data = await msf.getData('nba', season, endpoint, 'json', {player: playerString, team: teamString, 
                                        rosterstatus: roster, position: position, force: true});
        
        let playersData = await apiModel.players(data);
        console.log(playersData);
    }
};