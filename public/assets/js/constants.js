
const API = {
    players: {
        primary: {
            plyrLastUpdatedOn: "Last Updated On",
            plyrFirstName: "First Name",
            plyrLastName: "Last Name",
            plyrCurrentTeamAbbreviation: "Team Abbreviation",
            plyrPrimaryPosition: "Position",
        },
        advanced: {
            plyrAlternatePositions: "Alternate Position",
            plyrJerseyNumber: "Jersey Number",
            plyrHeight: "Height",
            plyrWeight: "Weight",
            plyrBirthDate: "Birth Date",
            plyrAge: "Age",
            plyrBirthCity: "Birth City",
            plyrBirthCountry: "Birth Country",
            plyrRookie: "Rookie Status",
            plyrHighSchool: "High School",
            plyrCollege: "College",
            plyrHandednessShoots: "Dominant Hand",
            plyrSocialMediaType: "Social Media Type",
            plyrSocialMediaValue: "Social Media Account",
            plyrContractStartYear: "Contract Start Year",
            plyrContractBaseSalary: "Base Salary",
            plyrContractMinorsSalary: "Minors Salary",
            plyrContractSigningBonus: "Signing Bonus",
            plyrContractOtherBonuses: "Other Bonuses",
            plyrContractCapHit: "Cap Hit",
            plyrContractNoTradeClause: "No Trade Clause",
            plyrContractModifiedTradeClause: "Modified Trade Clause",
            plyrContractnoMovementClause: "Movement Clause",
            plyrContractSigningTeamId: "Signing Team ID",
            plyrContractSigningTeamAbbreviation: "Signing Team Abbreviation",
            plyrContractSignedOn: "Signed On",
            plyrContractTotalYears: "Total Years",
            plyrContractTotalSalary: "Total Salary",
            plyrContractTotalBonuses: "Total Bonuses",
            plyrContractExpiryStatus: "Expiry Status",
            plyrContractAnnualSalary: "Annual Salary",
            plyrDraftedYear: "Draft Year",
            plyrDraftedTeamAbbreviation: "Draft Team Abbreviation",
            plyrDraftedPickTeamAbbreviation: "Pick Team Abbreviation",
            plyrDraftedRound: "Draft Round",
            plyrOverallPick: "Overall Pick Number"
        },
        // unused: {
            // plyrCurrentRosterStatus: "Roster Status",
            // plyrCurrentInjury: "Current Injury"
            // plyrId: "Player ID",
            // plyrCurrentTeamId: "Team ID",
            // plyrOfficialImageSrc: "Image",
            // plyrDraftedTeamId: "Draft Team ID",
            // plyrDraftedPickTeamId: "Pick Team ID",
            // plyrDraftedRoundPick: "Draft Round Pick Number",
            // plyrExternalMappingsSource: 
            // plyrExternalMappingsId: 
            // plyrTeamAsOfDateId: 
            // plyrTeamAsOfDateAbbreviation: 
        // }
    },
    playerInjuries: {
        primary: {
            plijCurrentRosterStatus: "Roster Status",
            plijCurrentInjuries: "Current Injury",
            plijCurrentInjuryDescription: "Injury Description",
            plijCurrentInjuryPlayingProbability: "Playing Probability",
            plijSocialMediaAccountsMediaType: "Social Media Type",
            plijSocialMediaAccountsValue: "Social Media Link"
        },
        // unused: {
            // plijLastUpdatedOn: 
            // plijFirstName: 
            // plijLastName: 
            // plijPrimaryPosition: 
            // plijJerseyNumber: 
            // plijCurrentTeamId: 
            // plijCurrentTeamAbbreviation: 
            // plijHeight: 
            // plijWeight: 
            // plijBirthDate: 
            // plijAge: 
            // plijBirthCity: 
            // plijHighSchool: 
            // plijCollege: 
            // plijHandednessShoots: 
            // plijOfficialImageSrc: 
            // plijId: 
        // }
    },
    dailyPlayerGameLogs: {
        primary: {
            dpglGameId: "Game ID",
            dpglGameStartTime: "Game Start Time",
            dpglGamesAwayTeamAbbreviation: "Away Team",
            dpglGamesHomeTeamAbbreviation: "Home Team",
            dpglEjections: "Ejections",
            dpglPlusMinus: "Plus-Minus",
            dpglPlusMInusPerGame: "Plus-Minus per Game",
            dpglMinSeconds: "Minutes",
            dpglMinSecondsPerGame: "Minutes per Game",
            dpglGamesStarted: "Games Started"
        },
        twoPtFieldGoals: {
            dpglFg2PtAtt: "2pt Attempts",
            dpglFg2PtAttPerGame: "2pt Attempts per Game",
            dpglFg2PtMade: "2pt Made",
            dpglFg2PtMadePerGame: "2pt Made per Game",
            dpglFg2PtPct: "2pt Percentage"
        },
        threePtFieldGoals: {
            dpglFg3PtAtt: "3pt Attempts",
            dpglFg3PtAttPerGame: "3pt Attempts per Game",
            dpglFg3PtMade: "3pt Made",
            dpglFg3PtMadePerGame: "3pt Made per Game",
            dpglFg3PtPct: "3pt Percentage",
        },
        fieldGoals: {
            dpglFgAtt: "Field Goal Attempts",
            dpglFgAttPerGame: "Field Goal Attempts per Game",
            dpglFgMade: "Field Goals Made",
            dpglFgMadePerGame: "Field Goals Made per Game",
            dpglFgPct: "Field Goal Percentage"
        },
        freeThrows: {
            dpglFtAtt: "Free Throw Attempts",
            dpglFtAttPerGame: "Free Throw Attempts per Game",
            dpglFtMade: "Free Throws Made",
            dpglFtMadePerGame: "Free Throws Made per Game",
            dpglFtPct: "Free Throw Percentage",
        },
        rebounds: {
            dpglOffReb: "Offensive Rebounds",
            dpglOffRebPerGame: "Offensive Rebounds per Game",
            dpglDefReb: "Defensive Rebounds",
            dpglDefRebPerGame: "Defensive Rebounds per Game",
            dpglReb: "Rebounds",
            dpglRebPerGame: "Rebounds per Game"
        },
        offense: {
            dpglAst: "Assists",
            dpglAstPerGame: "Assists per Game",
            dpglPts: "Points",
            dpglPtsPerGame: "Points per Game",
            dpglTov: "Turnovers",
            dpglTovPerGame: "Turnovers per Game"
        },
        defense: {
            dpglStl: "Steals",
            dpglStlPerGame: "Steals per Game",
            dpglBlk: "Blocks",
            dpglBlkPerGame: "Blocks per Game",
            dpglBlkAgainst: "Blocks Against",
            dpglBlkAgainstPerGame: "Blocks Against per Game",
        },
        fouls: {
            dpglFouls: "Fouls",
            dpglFoulsPerGame: "Fouls per Game",
            dpglFoulsDrawn: "Fouls Drawn",
            dpglFoulsDrawnPerGame: "Fouls Drawn per Game",
            dpglFoulPers: "Personal Fouls",
            dpglFoulPersPerGame: "Personal Fouls per Game",
            dpglFoulPersDrawn: "Personal Fouls Drawn",
            dpglFoulPersDrawnPerGame: "Personal Fouls Drawn per Game",
            dpglFoulTech: "Technical Fouls",
            dpglFoulTechPerGame: "Technical Fouls per Game",
            dpglFoulTechDrawn: "Technical Fouls Drawn",
            dpglFoulTechDrawnPerGame: "Technical Fouls Drawn per Game",
            dpglFoulFlag1: "Flagrant 1 Fouls",
            dpglFoulFlag1PerGame: "Flagrant 1 Fouls per Game",
            dpglFoulFlag1Drawn: "Flagrant 1 Fouls Drawn",
            dpglFoulFlag1DrawnPerGame: "Flagrant 1 Fouls Drawn per Game",
            dpglFoulFlag2: "Flagrant 2 Fouls",
            dpglFoulFlag2PerGame: "Flagrant 2 Fouls per Game",
            dpglFoulFlage2Drawn: "Flagrant 2 Fouls Drawn",
            dpglFoulFlag2DrawnPerGame: "Flagrant 2 Fouls Drawn per Game"
        },
        // unused: {
            // dpglLatestUpdatedOn: 
            // dpglPlayerId: 
            // dpglPlayerFirstName: 
            // dpglPlayerLastName: 
            // dpglPlayerPosition: 
            // dpglPlayerJerseyNumber: 
            // dpglTeamId: 
            // dpglTeamAbbreviation: 
        // }
    },
    dailyTeamGamelogs: {
        primary: {
            dtglLastUpdatedOn: "Last Updated On",
            dtglGameId: "Game ID",
            dtglGameStartTime: "Game Start Time",
            dtglGameAwayTeamAbbreviation: "Away Team",
            dtglGameHomeTeamAbbreviation: "Home Team",
            dtglTeamId: "Team ID",
            dtglTeamAbbreviation: "Team Abbreviation",
            dtglEjections: "Ejections",
            dtglPlusMinus: "Plus-Minus",
            dtglPlusMinusPerGame: "Plus-Minus per Game",
            dtglWins: "Wins",
            dtglLosses: "Losses",
            dtglWinPct: "Win Percentage",
            dtglGamesBack: "Games Back"
        },
        twoPtFieldGoals: {
            dtglFg2PtAtt: "2pt Attempts",
            dtglFg2PtAttPerGame: "2pt Attempts per Game",
            dtglFg2PtMade: "2pt Made",
            dtglFg2PtMadePerGame: "2pt Made per Game",
            dtglFg2PtPct: "2pt Percentage"
        },
        threePtFieldGoals: {
            dtglFg3PtAtt: "3pt Attempts",
            dtglFg3PtAttPerGame: "3pt Attempts per Game",
            dtglFg3PtMade: "3pt Made",
            dtglFg3PtMadePerGame: "3pt Made per Game",
            dtglFg3PtPct: "3pt Percentage",
        },
        fieldGoals: {
            dtglFgAtt: "Field Goal Attempts",
            dtglFgAttPerGame: "Field Goal Attempts per Game",
            dtglFgMade: "Field Goals Made",
            dtglFgMadePerGame: "Field Goals Made per Game",
            dtglFgPct: "Field Goal Percentage"
        },
        freeThrows: {
            dtglFtAtt: "Free Throw Attempts",
            dtglFtAttPerGame: "Free Throw Attempts per Game",
            dtglFtMade: "Free Throws Made",
            dtglFtMadePerGame: "Free Throws Made per Game",
            dtglFtPct: "Free Throw Percentage",
        },
        rebounds: {
            dtglOffReb: "Offensive Rebounds",
            dtglOffRebPerGame: "Offensive Rebounds per Game",
            dtglDefReb: "Defensive Rebounds",
            dtglDefRebPerGame: "Defensive Rebounds per Game",
            dtglReb: "Rebounds",
            dtglRebPerGame: "Rebounds per Game"
        },
        offense: {
            dtglAst: "Assists",
            dtglAstPerGame: "Assists per Game",
            dtglPts: "Points",
            dtglPtsPerGame: "Points per Game",
            dtglPtsAgainst: "Points Against",
            dtglPtsAgainstPerGame: "Points Against per Game",
            dtglTov: "Turnovers",
            dtglTovPerGame: "Turnovers per Game"
        },
        defense: {
            dtglStl: "Steals",
            dtglStlPerGame: "Steals per Game",
            dtglBlk: "Blocks",
            dtglBlkPerGame: "Blocks per Game",
            dtglBlkAgainst: "Blocks Against",
            dtglBlkAgainstPerGame: "Blocks Against per Game"
        },
        fouls: {
            dtglFouls: "Fouls",
            dtglFoulsPerGame: "Fouls per Game",
            dtglFoulsDrawn: "Fouls Drawn",
            dtglFoulsDrawnPerGame: "Fouls Drawn per Game",
            dtglFoulPers: "Personal Fouls",
            dtglFoulPersPerGame: "Personal Fouls per Game",
            dtglFoulPersDrawn: "Personal Fouls Drawn",
            dtglFoulPersDrawnPerGame: "Personal Fouls Drawn per Game",
            dtglFoulTech: "Technical Fouls",
            dtglFoulTechPerGame: "Technical Fouls per Game",
            dtglFoulTechDrawn: "Technical Fouls Drawn",
            dtglFoulTechDrawnPerGame: "Technical Fouls Drawn per Game",
            dtglFoulFlag1: "Flagrant 1 Fouls",
            dtglFoulFlag1PerGame: "Flagrant 1 Fouls per Game",
            dtglFoulFlag1Drawn: "Flagrant 1 Fouls Drawn",
            dtglFoulFlag1DrawnPerGame: "Flagrant 1 Fouls Drawn per Game",
            dtglFoulFlag2: "Flagrant 2 Fouls",
            dtglFoulFlag2PerGame: "Flagrant 2 Fouls per Game",
            dtglFoulFlag2Drawn: "Flagrant 2 Fouls Drawn",
            dtglFoulFlag2DrawnPerGame: "Flagrant 2 Fouls Drawn per Game"
        }
    },
    seasonalPlayerStats: {
        primary: {
            splsLastUpdatedOn: "Last updated On",
            splsPlayerId: "Player ID",
            splsPlayerFirstName: "First Name",
            splsPlayerLastName: "Last Name",
            splsJerseyNumber: "Jersey Number",
            splsCurrentTeamId: "Team ID",
            splsCurrentTeamAbbreviation: "Team Abbreviation",
            splsPlayerCurrentRosterStatus: "Roster Status",
            splsPlayerCurrentInjury: "Current Injury",
            splsPlayerHeight: "Height",
            splsPlayerWeight: "Weight",
            splsPlayerBirthDate: "Birth Date",
            splsPlayerAge: "Age",
            splsPlayerBirthCity: "Birth City",
            splsPlayerBirthCountry: "Birth Country",
            splsPlayerRookie: "Rookie Status",
            splsPlayerHandednessShoots: "Dominant Hand",
            splsPlayerOfficialImageSrc: "Image",
            splsPlayerSocialMediaAccounts: "Social Media",
            splsPlayerTeamId: "Team ID",
            splsPlayerTeamAbbreviation: "Team Abbreviation",
            splsPlayerGamesPlayed: "Games Played", 
            splsEjections: "Ejections",
            splsPlusMinus: "Plus-Minus",
            splsPlusMinusPerGame: "Plus-Minus per Game",
            splsMinSeconds: "Minutes",
            splsMinSecondsPerGame: "Minutes per Game",
            splsGamesStarted: "Games Started"
        },
        twoPtFieldGoals: {
            splsFg2PtAtt: "2pt Attempts",
            splsFg2PtAttPerGame: "2pt Attempts per Game",
            splsFg2PtMade: "2pt Made",
            splsFg2PtMadePerGame: "2pt Made per Game",
            splsFg2PtPct: "2pt Percentage"
        },
        threePtFieldGoals: {
            splsFg3PtAtt: "3pt Attempts",
            splsFg3PtAttPerGame: "3pt Attempts per Game",
            splsFg3PtMade: "3pt Made",
            splsFg3PtMadePerGame: "3pt Made per Game",
            splsFg3PtPct: "3pt Percentage"
        },
        fieldGoals: {
            splsFtAtt: "Field Goal Attempts",
            splsFtAttPerGame: "Field Goal Attempts per Game",
            splsFtMade: "Field Goals Made",
            splsFtMadePerGame: "Field Goals Made per Game",
            splsFtPct: "Field Goal Percentage"
        },
        freeThrows: {
            splsFtAtt: "Free Throw Attempts",
            splsFtAttPerGame: "Free Throw Attempts per Game",
            splsFtMade: "Free Throws Made",
            splsFtMadePerGame: "Free Throws Made per Game",
            splsFtPct: "Free Throw Percentage"
        },
        rebounds: {
            splsOffReb: "Offensive Rebounds",
            splsOffRebPerGame: "Offensive Rebounds per Game",
            splsDefReb: "Defensive Rebounds",
            splsDefRebPerGame: "Defensive Rebounds per Game",
            splsReb: "Rebounds",
            splsRebPerGame: "Rebounds per Game"
        },
        offense: {
            splsAst: "Assists",
            splsAstPerGame: "Assists per Game",
            splsPts: "Points",
            splsPtsPerGame: "Points per Game",
            splsTov: "Turnovers",
            splsTovPerGame: "Turnovers per Game"
        },
        defense: {
            splsStl: "Steals",
            splsStlPerGame: "Steals per Game",
            splsBlk: "Blocks",
            splsBlkPerGame: "Blocks per Game",
            splsBlkAgainst: "Blocks Against",
            splsBlkAgainstPerGame: "Blocks Against per Game"
        },
        fouls: {
            splsFouls: "Fouls",
            splsFoulsPerGame: "Fouls per Game",
            splsFoulsDrawn: "Fouls Drawn",
            splsFoulsDrawnPerGame: "Fouls Drawn per Game",
            splsFoulsPerGame: "Personal Fouls",
            splsFoulsfoulPersPerGame: "Personal Fouls per Game",
            splsFoulPersDrawn: "Personal Fouls Drawn",
            splsFoulPersDrawnPerGame: "Personal Fouls Drawn per Game",
            splsFoulTech: "Technical Fouls",
            splsFoulTechPerGame: "Technical Fouls per Game",
            splsFoulTechDrawn: "Technical Fouls Drawn",
            splsFoulTechDrawnPerGame: "Technical Fouls Drawn per Game",
            splsFoulFlag1: "Flagrant 1 Fouls",
            splsFoulFlag1PerGame: "Flagrant 1 Fouls per Game",
            splsFoulFlag1Drawn: "Flagrant 1 Fouls Drawn",
            splsFoulFlag1DrawnPerGame: "Flagrant 1 Fouls Drawn per Game",
            splsFoulFlag2: "Flagrant 2 Fouls",
            splsFoulFlag2PerGame: "Flagrant 2 Fouls per Game",
            splsFoulFlag2Drawn: "Flagrant 2 Fouls Drawn",
            splsFoulFlag2DrawnPerGame: "Flagrant 2 Fouls Drawn per Game"
        }
    },
    seasonalTeamStats: {
        primary: {
            stmsLastUpdatedOn: "Last Updated On",
            stmsTeamId: "Team ID",
            stmsTeamCity: "Team City",
            stmsTeamName: "Team Name",
            stmsTeamAbbreviation: "Team Abbreviation",
            stmsTeamHomeVenueId: "Home Venue ID",
            stmsTeamHomeVenueName: "Home Venue Name",
            stmsTeamColoursHex: "Team Colors",
            stmsSocialMediaAccounts: "Social Media",
            stmsOfficialLogoImageSrc: "Logo Image",
            stmsGamesPlayed: "Games Played",
            stmsEjections: "Ejections",
            stmsPlusMinus: "Plus-Minus",
            stmsPlusMinusPerGame : "Plus-Minus per Game",            
            stmsWins: "Wins",
            stmsLosses: "Losses",
            stmsWinPct: "Win Percentage",
            stmsGamesBack: "Games Back"
        },
        twoPtFieldGoals: {
            stmsFg2PtAtt: "2pt Attempts",
            stmsFg2PtAttPerGame: "2pt Attempts per Game",
            stmsFg2PtMade: "2pt Made",
            stmsFg2PtMadePerGame: "2pt Made per Game",
            stmsFg2PtPct: "2pt Percentage"
        },
        threePtFieldGoals: {
            stmsFg3PtAtt: "3pt Attempts",
            stmsFg3PtAttPerGame: "3pt Attempts per Game",
            stmsFg3PtMade: "3pt Made",
            stmsFg3PtMadePerGame: "3pt Made per Game",
            stmsFg3PtPct: "3pt Percentage",
        },
        fieldGoals: {
            stmsFgAtt: "Field Goal Attempts",
            stmsFgAttPerGame: "Field Goal Attempts per Game",
            stmsFgMade: "Field Goals Made",
            stmsFgMadePerGame: "Field Goals Made per Game",
            stmsFgPct: "Field Goal Percentage"
        },
        freeThrows: {
            stmsFtAtt: "Free Throw Attempts",
            stmsFtAttPerGame: "Free Throw Attempts per Game",
            stmsFtMade: "Free Throws Made",
            stmsFtMadePerGame: "Free Throws Made per Game",
            stmsFtPct: "Free Throw Percentage",
        },
        rebounds: {
            stmsOffReb: "Offensive Rebounds",
            stmsOffRebPerGame: "Offensive Rebounds per Game",
            stmsDefReb: "Defensive Rebounds",
            stmsDefRebPerGame: "Defensive Rebounds per Game",
            stmsReb: "Rebounds",
            stmsRebPerGame: "Rebounds per Game"
        },
        offense: {
            stmsAst: "Assists",
            stmsAstPerGame: "Assists per Game",
            stmsPts: "Points",
            stmsPtsPerGame: "Points per Game",
            stmsPtsAgainst: "Points Against",
            stmsPtsAgainstPerGame: "Points Against per Game",
            stmsTov: "Turnovers",
            stmsTovPerGame: "Turnovers per Game"
        },
        defense: {
            stmsStl: "Steals",
            stmsStlPerGame: "Steals per Game",
            stmsBlk: "Blocks",
            stmsBlkPerGame: "Blocks per Game",
            stmsBlkAgainst: "Blocks Against",
            stmsBlkAgainstPerGame: "Blocks Against per Game"
        },
        fouls: {
            stmsFouls: "Fouls",
            stmsFoulsPerGame: "Fouls per Game",
            stmsFoulsDrawn: "Fouls Drawn",
            stmsFoulsDrawnPerGame: "Fouls Drawn per Game",
            stmsFoulPers: "Personal Fouls",
            stmsFoulPersPerGame: "Personal Fouls per Game",            
            stmsFoulPersDrawn: "Personal Fouls Drawn",
            stmsFoulPersDrawnPerGame: "Personal Fouls Drawn per Game",
            stmsFoulTech: "Technical Fouls",
            stmsFoulTechPerGame: "Technical Fouls per Game",            
            stmsFoulTechDrawn: "Technical Fouls Drawn",
            stmsFoulTechDrawnPerGame: "Technical Fouls Drawn per Game",
            stmsFoulFlag1: "Flagrant 1 Fouls",
            stmsFoulFlag1PerGame: "Flagrant 1 Fouls per Game",
            stmsFoulFlag1Drawn: "Flagrant 1 Fouls Drawn",
            stmsFoulFlag1DrawnPerGame: "Flagrant 1 Fouls Drawn per Game",
            stmsFoulFlag2: "Flagrant 2 Fouls",
            stmsFoulFlag2PerGame: "Flagrant 2 Fouls per Game",            
            stmsFoulFlag2Drawn: "Flagrant 2 Fouls Drawn",
            stmsFoulFlag2DrawnPerGame: "Flagrant 2 Fouls Drawn per Game"
        } 
    } 
} 

const checkboxMaker = (obj) => {
    for(let key in obj) {
        // let rowDiv = $(`<div class="${key}">`);
        for(let keyy in obj[key]){
            let bigDiv;
            if (keyy === 'primary') {
                let keyName;
                bigDiv = $(`<div class="row mb-4 primary">`);

                if (key === 'players') {
                    keyName = 'Players';
                    bigDiv.addClass('playerFilter players allFilter');
                } else if (key === 'playerInjuries') {
                    keyName = 'Player Injuries';
                    bigDiv.addClass('playerFilter playerInjuries allFilter');
                } else if (key === 'dailyPlayerGameLogs') {
                    keyName = 'Daily Player Game Logs';
                    bigDiv.addClass('playerFilter dailyPlayerGameLogs allFilter');
                } else if (key === 'dailyTeamGamelogs') { 
                    keyName = 'Daily Team Game Logs';
                    bigDiv.addClass('teamFilter dailyTeamGameLogs allFilter');
                } else if (key === 'seasonalPlayerStats') {
                    keyName = 'Seasonal Player Stats';
                    bigDiv.addClass('playerFilter seasonalPlayerStats allFilter');
                } else if (key === 'seasonalTeamStats','seasonalTeamStats') {
                    keyName = 'Seasonal Team Stats';
                    bigDiv.addClass('teamFilter seasonalTeamStats allFilter');
                }

                bigDiv.append(`<h5 class="col-sm-12 mt-3">${keyName}</h5>`);
                
            } else {
                bigDiv = $(`<div class="row advanced"></div>`);
                // bigDiv.append(`<h5 class="col-sm-12 mt-3">${key} ${keyy}</h5>`);

                if (key === 'players') {
                    bigDiv.addClass('allFilter playersAdv');
                } else if (key === 'playerInjuries') {
                    bigDiv.addClass('allFilter playerInjuriesAdv');
                } else if (key === 'dailyPlayerGameLogs') {
                    bigDiv.addClass('allFilter dailyPlayerGameLogsAdv');
                } else if (key === 'dailyTeamGamelogs') { 
                    bigDiv.addClass('allFilter dailyTeamGameLogsAdv');
                } else if (key === 'seasonalPlayerStats') {
                    bigDiv.addClass('allFilter seasonalPlayerStatsAdv');
                } else if (key === 'seasonalTeamStats','seasonalTeamStats') {
                    bigDiv.addClass('allFilter seasonalTeamStatsAdv');
                }
            }
            for(let keyyy in obj[key][keyy]) {
                let newDiv = $(`<div class="col-sm-4">`);
                newDiv.append(`<div class="form-check">
                <input class="form-check-input" type="checkbox" id="${keyyy}" name="chk" value="${obj[key][keyy][keyyy]}">
                <label class="form-check-label" for="inlineCheckbox3">${obj[key][keyy][keyyy]}</label>
                </div>`);

                bigDiv.append(newDiv);
                }
                if (keyy === 'primary') {
                    $('.searchChecks').append(bigDiv);
                } else {
                    $('.searchChecksAdv').append(bigDiv);
                }
            } 
        }
        // $('.searchButtonL').append(`<button class="searchAdvanced btn btn-warning float-left">See Advanced</button>`);
        // $('.searchButtonL').append(`<button type="submit" class="searchSubmit btn btn-primary float-right">Submit</button>`);
        $('.searchChecksAdv').append(`<div class="col-sm align-self-end mt-4"><button class="searchAdvanced btn btn-warning float-left">See Advanced</button>`);
        $('.searchChecksAdv').append(`<div class="col-sm align-self-end"><button type="submit" class="searchSubmit btn btn-primary float-right">Submit</button>`);
    }

  checkboxMaker(API);

