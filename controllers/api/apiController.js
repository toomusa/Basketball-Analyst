const connection = require("../../config/connection.js");
const users = require("../../models/users/userModels.js");
const players = require("../../models/players/playerModels.js");
const API = require("../../models/api/apiModels.js").API;
const headerCheck = require("../../models/api/apiModels.js").headerCheck;
const apiModels = require("../../models/api/apiModels.js");
var Tabulator = require('tabulator-tables');


var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("2.0", true, null);
msf.authenticate("1895dd8d-e910-476e-a495-9f7980", "MYSPORTSFEEDS");

module.exports = {
    queryData: async (req, res) => {
        // let {season, position, roster, playerString, teamString, endpoint, checkBox} = req.body;
        console.log("***********************************")
        // console.log(req.body.date)
        // let {date} = req.body;

        let {checkBox} = req.body;
        let season = "2016-2017-regular";
        let playerString = "kawhi-leonard,stephen-curry,kevin-durant,james-harden";
        let teamString = "";
        let roster = "assigned-to-roster";
        let position = "";
        let date = "20181024"

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
            endpoint = "player_injuries";
        } else if (prefix === "dpgl") {
            endpoint = "daily_player_gamelogs";
        } else if (prefix === "dtgl") {
            endpoint = "daily_team_gamelogs";
        } else if (prefix === "spls") {
            endpoint = "seasonal_player_stats";
        } else if (prefix === "stms") {
            endpoint = "seasonal_team_stats";
        } else {
            console.log("Something went wrong with prefix");
        }

        var data = await msf.getData('nba', season, endpoint, 'json', {player: playerString, team: teamString, 
                                        rosterstatus: roster, position: position, force: true});
        console.log("GOT DATA FROM API")
        let playersDataArray = await API.players(data);
        let userTableData = [];
        let userColumnConfig = [];

        const userTableQuery = () => {
            playersDataArray.forEach(player => {
                let tableRowData = {};
                return new Promise ((resolve, reject) => {
                    for(let key in player) {
                        for (let item in checkBox) {
                            if (key === item) {
                                tableRowData[checkBox[item]] = player[key];
                            }
                        }
                    }
                    userTableData.push(tableRowData);
                    resolve();
                })
            })
        }
        userTableQuery();

        const renderTable = () => {

            let tableColumnOptions = {
                // name fields
                nameField: (header, dataKey) => {
                    const nameColumn = {name: header, field: dataKey, layout: "fitData", resizableColumns: true, 
                        movableColumns: true, columnVertAlign: "middle", headerFilter: true, headerFilterPlaceholder: "Filter Column", 
                        movableRows: true, resizableRows: true, headerVertical: true, align: "center", rowHandle: true,
                        selectable: true, selectablePersistence: true}
                    return nameColumn;
                },
                // plaint text fields
                textField: (header, dataKey) => {
                    const textColumn = {name: header, field: dataKey, layout: "fitData", resizableColumns: true, 
                        movableColumns: true, columnVertAlign: "middle", headerFilter: true, headerFilterPlaceholder: "Filter Column", 
                        movableRows: true, resizableRows: true, headerVertical: true, align: "center", rowHandle: true}
                    return textColumn;
                },
                // number fields
                numberField: (header, dataKey) => {
                    const numberColumn = {name: header, field: dataKey, layout: "fitData", resizableColumns: true, 
                        movableColumns: true, columnVertAlign: "middle", headerFilter: true, headerFilterPlaceholder: "Filter Column", 
                        movableRows: true, resizableRows: true, headerVertical: true, align: "center", rowHandle: true}
                    return numberColumn;
                },
                // money fields
                moneyField: (header, dataKey) => {
                    const moneyColumn = {name: header, field: dataKey, layout: "fitData", resizableColumns: true, 
                        movableColumns: true, columnVertAlign: "middle", headerFilter: true, headerFilterPlaceholder: "Filter Column", 
                        movableRows: true, resizableRows: true, headerVertical: true, align: "center", rowHandle: true, formatter:"money", 
                        formatterParams:{symbol:"$"}}
                    return moneyColumn;
                },
                // percentage fields
                percentageField: (header, dataKey) => {
                    const percentageColumn = {name: header, field: dataKey, layout: "fitData", resizableColumns: true, 
                        movableColumns: true, columnVertAlign: "middle", headerFilter: true, headerFilterPlaceholder: "Filter Column", 
                        movableRows: true, resizableRows: true, headerVertical: true, align: "center", rowHandle: true}
                    return percentageColumn;
                },
                // date fields
                dateField: (header, dataKey) => {
                    const dateColumn = {name: header, field: dataKey, layout: "fitData", resizableColumns: true, 
                        movableColumns: true, columnVertAlign: "middle", headerFilter: true, headerFilterPlaceholder: "Filter Column", 
                        movableRows: true, resizableRows: true, headerVertical: true, align: "center", rowHandle: true, formatter:"datetime", 
                        formatterParams:{
                            inputFormat:"YYYY-MM-DD",
                            outputFormat:"DD/MM/YY",
                        }}
                    return dateColumn;
                },
                // abbreviations
                abbrField: (header, dataKey) => {
                    const abbrColumn = {name: header, field: dataKey, layout: "fitData", resizableColumns: true, 
                        movableColumns: true, columnVertAlign: "middle", headerFilter: true, headerFilterPlaceholder: "Filter Column", 
                        movableRows: true, resizableRows: true, headerVertical: true, align: "center", rowHandle: true}
                    return abbrColumn;
                },
                // images
                imageField: (header, dataKey) => {
                    const imageColumn = {name: header, field: dataKey, layout: "fitData", resizableColumns: true, 
                        movableColumns: true, columnVertAlign: "middle", headerFilter: true, headerFilterPlaceholder: "Filter Column", 
                        movableRows: true, resizableRows: true, headerVertical: true, align: "center", rowHandle: true, formatter:"image", 
                        formatterParams:{height:"50px", width:"50px"}}
                    return imageColumn;
                },
                // hex values
                hexField: (header, dataKey) => {
                    const hexColumn = {name: header, field: dataKey, layout: "fitData", resizableColumns: true, 
                        movableColumns: true, columnVertAlign: "middle", headerFilter: true, headerFilterPlaceholder: "Filter Column", 
                        movableRows: true, resizableRows: true, headerVertical: true, align: "center", rowHandle: true}
                    return hexColumn;
                }
            };

            const createUserColumns = (userTableData) => {
            for (let key in userTableData[0]) {                 
                let dataKey = key;
                let header = key;

                (apiModels.nameFields.includes(key)) ? userColumnConfig.push(tableColumnOptions.nameField(dataKey, header)) :
                (apiModels.textFields.includes(key)) ? userColumnConfig.push(tableColumnOptions.textField(dataKey, header)) :
                (apiModels.numberFields.includes(key)) ? userColumnConfig.push(tableColumnOptions.numberField(dataKey, header)) :
                (apiModels.moneyFields.includes(key)) ? userColumnConfig.push(tableColumnOptions.moneyField(dataKey, header)) :
                (apiModels.percentageFields.includes(key)) ? userColumnConfig.push(tableColumnOptions.percentageField(dataKey, header)) :
                (apiModels.dateFields.includes(key)) ? userColumnConfig.push(tableColumnOptions.dateField(dataKey, header)) :
                (apiModels.abbrFields.includes(key)) ? userColumnConfig.push(tableColumnOptions.abbrField(dataKey, header)) :
                (apiModels.imageFields.includes(key)) ? userColumnConfig.push(tableColumnOptions.imageField(dataKey, header)) :
                (apiModels.hexFields.includes(key)) ? userColumnConfig.push(tableColumnOptions.hexField(dataKey, header)) : 
                    console.log("Something went wrong while creating columns");
                }
            }
            createUserColumns(userTableData);
        }
        
        renderTable();

        let userResponseData = {userTableData,userColumnConfig}
        res.status(200).send(userResponseData)
    },
    queryTrie: async (req, res) => {
        await console.log("i'm hitting route");
        let trieObj = await players.playerChecker();
        res.status(200).send(trieObj)
    }
};