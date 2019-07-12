const connection = require("../../config/connection.js");
const users = require("../../models/users/userModels.js");
const players = require("../../models/players/playerModels.js");
const authModel = require("../../models/auth/authModels.js");

var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("2.0", true, null);
msf.authenticate("1895dd8d-e910-476e-a495-9f7980", "MYSPORTSFEEDS");


module.exports = {
    queryData: async (req, res) => {
        let {date, season, position, roster} = req.body;
        var data = await msf.getData('nba', season, 'players', 'json', {player: '', team: '', force: true});
        authModel.players(data)
        res.JSON(players);
    }
};