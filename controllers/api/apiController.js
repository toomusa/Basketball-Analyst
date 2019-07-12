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
        let {checkBox} = req.body;
        console.log(checkBox)

        // splice out first 4 characters, determine which endpoint to query, and set endpoint
        let objKeys = Object.keys(checkBox);        
        let prefixes = objKeys.map(item => {
            let elem = item.slice(0,4);
            return elem;
        })
        let prefix = [...new Set(prefixes)].toString();

        let endpoint;
        if (prefix === "plyr") {
            endpoint = "players";
        } else if (prefix === "plij") {
            endpoint = "playerInjuries";
        } else if (prefix === "dpgl") {
            endpoint = "dailyPlayerGameLogs";
        } else if (prefix === "dtgl") {
            endpoint = "dailyTeamGameLogs";
        } else if (prefix === "spls") {
            endpoint = "seasonalPlayerStats";
        } else if (prefix === "stms") {
            endpoint = "seasonalTeamStats";
        } else {
            console.log("Something went wrong with prefix");
        }

        let season = "2016-2017-regular";
        // let endpoint = "players";
        let playerString = "stephen-curry";
        let teamString = "gsw";
        let roster = "assigned-to-roster";
        let position = "pg";
        var data = await msf.getData('nba', season, endpoint, 'json', {player: playerString, team: teamString, 
                                        rosterstatus: roster, position: position, force: true});
        let playersData = await apiModel.players(data);
        console.log(playersData);

        const userTableQuery = () => {
            let userTable = {};
            return new Promise ((resolve, reject) => {
                for(let key in playersData) {
                    for (let item in checkBox) {
                        if (key === item) {
                            userTable[checkBox[item]] = playersData[key];
                        }
                    }
                }
                console.log(userTable)
                resolve();
            })
        }
        userTableQuery();
    }
};