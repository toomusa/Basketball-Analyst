const connection = require("../../config/connection.js");
const users = require("../../models/users/userModels.js");
const players = require("../../models/players/playerModels.js");
const API = require("../../models/api/apiModels.js").API;
const headerCheck = require("../../models/api/apiModels.js").headerCheck;
var Tabulator = require('tabulator-tables');


var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("2.0", true, null);
msf.authenticate("1895dd8d-e910-476e-a495-9f7980", "MYSPORTSFEEDS");

module.exports = {
    queryData: async (req, res) => {
        // let {season, position, roster, playerString, teamString, endpoint} = req.body;
        let {checkBox} = req.body;
        // console.log(checkBox)

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
        let playerString = "kawhi-leonard";
        // ,stephen-curry,kevin-durant,james-harden
        let teamString = "";
        let roster = "assigned-to-roster";
        let position = "";
        var data = await msf.getData('nba', season, endpoint, 'json', {player: playerString, team: teamString, 
                                        rosterstatus: roster, position: position, force: true});
        console.log(data);
        console.log("*************************************")
        let playersDataArray = await API.players(data);

        const userTableQuery = () => {
            let userTable = [];
            playersDataArray.forEach(player => {
                let tableRow = {};
                return new Promise ((resolve, reject) => {
                    for(let key in player) {
                        for (let item in checkBox) {
                            if (key === item) {
                                tableRow[checkBox[item]] = player[key];
                            }
                        }
                    }
                    userTable.push(tableRow);
                    resolve();
                })
            })
            console.log(userTable)
            console.log("*************************************")
            let columns = Object.keys(userTable[0]);
            console.log(columns)
        }
        userTableQuery();
        // await Promise.all(userTableQuery());
    // },
        const renderTable = () => {

        // let userTableData = userTable;

        // let userTableColumns;
        
        const playerKeys = ['plyrLastUpdatedOn', 'plyrId', 'plyrFirstName', 'plyrLastName', 'plyrPrimaryPosition', 'plyrAlternatePositions', 
                            'plyrJerseyNumber', 'plyrCurrentTeamId', 'plyrCurrentTeamAbbreviation', 'plyrCurrentRosterStatus', 
                            'plyrCurrentInjury', 'plyrHeight', 'plyrWeight', 'plyrBirthDate', 'plyrAge', 'plyrBirthCity', 'plyrBirthCountry', 
                            'plyrRookie', 'plyrHighSchool', 'plyrCollege', 'plyrOfficialImageSrc', 'plyrHandednessShoots', 'plyrSocialMediaType', 
                            'plyrSocialMediaValue', 'plyrContractStartYear', 'plyrContractBaseSalary', 'plyrContractMinorsSalary', 
                            'plyrContractSigningBonus', 'plyrContractOtherBonuses', 'plyrContractCapHit', 'plyrContractNoTradeClause', 
                            'plyrContractModifiedTradeClause', 'plyrContractnoMovementClause', 'plyrContractSigningTeamId', 
                            'plyrContractSigningTeamAbbreviation', 'plyrContractSignedOn', 'plyrContractTotalYears', 'plyrContractTotalSalary', 
                            'plyrContractTotalBonuses', 'plyrContractExpiryStatus', 'plyrContractAnnualSalary', 'plyrDraftedYear', 
                            'plyrDraftedTeamId', 'plyrDraftedTeamAbbreviation', 'plyrDraftedPickTeamId', 'plyrDraftedPickTeamAbbreviation', 
                            'plyrDraftedRound', 'plyrDraftedRoundPick', 'plyrOverallPick', 'plyrExternalMappingsSource', 'plyrExternalMappingsId', 
                            'plyrTeamAsOfDateId', 'plyrTeamAsOfDateAbbreviation']

        const playerHeaders = ['Last Updated On', 'First Name', 'Last Name', 'Position', 'Alternate Position', 'Jersey Number', 
                               'Team Abbreviation', 'Height', 'Weight', 'Birth Date', 'Age', 'Birth City', 'Birth Country', 
                               'Rookie Status', 'High School', 'College', 'Dominant Hand', 'Social Media Type', 'Social Media Account', 
                               'Contract Start Year', 'Base Salary', 'Minors Salary', 'Signing Bonus', 'Other Bonuses', 'Cap Hit', 
                               'No Trade Clause', 'Modified Trade Clause', 'Movement Clause', 'Signing Team ID', 
                               'Signing Team Abbreviation', 'Signed On', 'Total Years', 'Total Salary', 'Total Bonuses', 
                               'Expiry Status', 'Annual Salary', 'Draft Year', 'Draft Team Abbreviation', 'Pick Team Abbreviation', 
                               'Draft Round', 'Overall Pick Number', "Roster Status", "Current Injury", "Player ID", "Team ID", "Image", 
                               "Draft Team ID", "Pick Team ID", "Draft Round Pick Number", "External Mapping Source", "ExternalMappingsId", 
                               "As of Date Team ID", "As of Date Team Abbreviation"];
        
        console.log(playerKeys.length)
        console.log(playerHeaders.length)

        let columnData = {};
        const headerMatch = (headerCheck) => {
            for (let key in headerCheck) {
                if (columnData[headerCheck[key]]) {
                    columnData[headerCheck[key]].push(key);
                } else {
                    columnData[headerCheck[key]] = [key];
                }
            }
        }
        headerMatch(headerCheck);

        console.log(Object.keys(columnData).length)


        }
        let tableColumnOptions = [
            // plaint text fields
            {id:1, name:"First Name", field:"plyrFirstName"},
            {id:1, name:"First Name", field: object.key },


            // number fields
            {id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
            {id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
            {id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},


            // stat fields
            {id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
            {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},

            // money fields

            // abbreviations


            // date fields

            // 


        ];

        // var table = new Tabulator("#user-tables", {
        //     height: 600,
        //     data: userTableData,
        //     layout: "fitColumns", 
        //     columns: userTableColumns,
        //     rowClick:function(e, row){ //trigger an alert message when the row is clicked
        //         alert("Row " + row.getData().id + " Clicked!!!!");
        //     },

        // });
        
        
        renderTable();


















    }
};