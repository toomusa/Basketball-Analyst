// Player stats
// ------------------------------------------
const data = {
  "lastUpdatedOn": "2018-08-23T17:58:06.756Z",
  "playerStatsTotals": [{
    "player": {
      "id": 10138,
      "firstName": "Alex",
      "lastName": "Abrines",
      "primaryPosition": "SG",
      "jerseyNumber": 8,
      "currentTeam": {
        "id": 96,
        "abbreviation": "OKL"
      },
      "currentRosterStatus": "ROSTER",
      "currentInjury": null,
      "height": "6'6\"",
      "weight": 190,
      "birthDate": "1993-08-01",
      "age": 25,
      "birthCity": "Palma de Mallorca",
      "birthCountry": "Spain",
      "rookie": false,
      "highSchool": null,
      "college": null,
      "handedness": {
        "shoots": "R"
      },
      "officialImageSrc": null,
      "socialMediaAccounts": []
    },
    "team": {
      "id": 96,
      "abbreviation": "OKL"
    },
    "stats": {
      "gamesPlayed": 75,
      "fieldGoals": {
        "fg2PtAtt": 70,
        "fg2PtAttPerGame": 0.9,
        "fg2PtMade": 31,
        "fg2PtMadePerGame": 0.4,
        "fg2PtPct": 44.3,
        "fg3PtAtt": 221,
        "fg3PtAttPerGame": 2.9,
        "fg3PtMade": 84,
        "fg3PtMadePerGame": 1.1,
        "fg3PtPct": 38,
        "fgAtt": 291,
        "fgAttPerGame": 3.9,
        "fgMade": 115,
        "fgMadePerGame": 1.5,
        "fgPct": 39.5
      },
      "freeThrows": {
        "ftAtt": 46,
        "ftAttPerGame": 0.6,
        "ftMade": 39,
        "ftMadePerGame": 0.5,
        "ftPct": 84.8
      },
      "rebounds": {
        "offReb": 25,
        "offRebPerGame": 0.3,
        "defReb": 86,
        "defRebPerGame": 1.1,
        "reb": 113,
        "rebPerGame": 1.5
      },
      "offense": {
        "ast": 28,
        "astPerGame": 0.4,
        "pts": 353,
        "ptsPerGame": 4.7
      },
      "defense": {
        "tov": 25,
        "tovPerGame": 0.3,
        "stl": 38,
        "stlPerGame": 0.5,
        "blk": 8,
        "blkPerGame": 0.1,
        "blkAgainst": 9,
        "blkAgainstPerGame": 0.1
      },
      "miscellaneous": {
        "fouls": 177,
        "foulsPerGame": 2.4,
        "foulsDrawn": 0,
        "foulsDrawnPerGame": 0,
        "foulPers": 124,
        "foulPersPerGame": 1.7,
        "foulPersDrawn": 53,
        "foulPersDrawnPerGame": 0.7,
        "foulTech": 0,
        "foulTechPerGame": 0,
        "foulTechDrawn": 1,
        "foulTechDrawnPerGame": 0,
        "foulFlag1": 0,
        "foulFlag1PerGame": 0,
        "foulFlag1Drawn": 0,
        "foulFlag1DrawnPerGame": 0,
        "foulFlag2": 0,
        "foulFlag2PerGame": 0,
        "foulFlag2Drawn": 0,
        "foulFlag2DrawnPerGame": 0,
        "ejections": 0,
        "plusMinus": 41,
        "plusMinusPerGame": 0.5,
        "minSeconds": 67637,
        "minSecondsPerGame": 901.8,
        "gamesStarted": 8
      }
    }
  }]
}

const playerStats = data => {
  lastUpdatedOn = data.lastUpdatedOn;
  playerId = data.playerStatsTotals[0].player.id;
  playerFirstName = data.playerStatsTotals[0].player.firstName;
  playerLastName = data.playerStatsTotals[0].player.lastName;
  jerseyNumber = data.playerStatsTotals[0].player.jerseyNumber;
  currentTeamId = data.playerStatsTotals[0].player.currentTeam.id;
  currentTeamAbbreviation = data.playerStatsTotals[0].player.currentTeam.abbreviation;
  playerCurrentRosterStatus = data.playerStatsTotals[0].player.currentRosterStatus;
  playerCurrentInjury = data.playerStatsTotals[0].player.currentInjury;
  playerHeight = data.playerStatsTotals[0].player.height;
  playerWeigth = data.playerStatsTotals[0].player.weight;
  playerBirthDate = data.playerStatsTotals[0].player.birthDate;
  playerAge = data.playerStatsTotals[0].player.age;
  playerBirthCity = data.playerStatsTotals[0].player.birthCity;
  playerBirthCountry = data.playerStatsTotals[0].player.birthCountry;
  playerRookie = data.playerStatsTotals[0].player.rookie;
  playerHandednessShoots = data.playerStatsTotals[0].player.handedness.shoots;
  playerOfficialImageSrc = data.playerStatsTotals[0].player.officialImageSrc;
  playerSocialMediaAccounts = data.playerStatsTotals[0].player.socialMediaAccounts;
  playerTeamId = data.playerStatsTotals[0].player.team.id;
  playerTeamId = data.playerStatsTotals[0].player.team.abbreviation;
  playerStats = data.playerStatsTotals[0].player.stats.gamesPlayed;
  fieldGoals = data.playerStatsTotals[0].player.stats.fieldGoals;
  statsFg2PtAtt = data.playerStatsTotals[0].stats.fieldGoals.fg2PtAtt;
  statsFg2PtAttPerGame = data.playerStatsTotals[0].stats.fieldGoals.fg2PtAttPerGame;
  statsFg2PtMade = data.playerStatsTotals[0].stats.fieldGoals.fg2PtMade;
  statsFg2PtMadePerGame = data.playerStatsTotals[0].stats.fieldGoals.fg2PtMadePerGame;
  statsFg2PtPct = data.playerStatsTotals[0].stats.fieldGoals.fg2PtPct;
  statsFg3PtAtt = data.playerStatsTotals[0].stats.fieldGoals.fg3PtAtt;
  statsFg3PtAttPerGame = data.playerStatsTotals[0].stats.fieldGoals.fg3PtAttPerGame;
  statsFg3PtMade = data.playerStatsTotals[0].stats.fieldGoals.fg3PtMade;
  statsFg3PtMadePerGame = data.playerStatsTotals[0].stats.fieldGoals.fg3PtMadePerGame;
  statsFg3PtPct = data.playerStatsTotals[0].stats.fieldGoals.fg3PtPct;

  // Free throws
  //-------------------------------
  statsFtAtt = data.playerStatsTotals[0].stats.freeThrows.ftAtt;
  statsFtAttPerGame = data.playerStatsTotals[0].stats.freeThrows.ftAttPerGame;
  statsFtMade = data.playerStatsTotals[0].stats.freeThrows.ftMade;
  statsFtMadePerGame = data.playerStatsTotals[0].stats.freeThrows.ftMadePerGame;
  statsFtPct = data.playerStatsTotals[0].stats.freeThrows.ftPct;


  // Free rebounds
  //-------------------------------
  statsOffReb = data.playerStatsTotals[0].stats.rebounds.offReb;
  statsOffRebPerGame = data.playerStatsTotals[0].stats.rebounds.offRebPerGame;
  statsDefReb = data.playerStatsTotals[0].stats.rebounds.defReb;
  statsDefRebPerGame = data.playerStatsTotals[0].stats.rebounds.defRebPerGame;
  statsReb = data.playerStatsTotals[0].stats.rebounds.reb;
  statsRebPerGame = data.playerStatsTotals[0].stats.rebounds.rebPerGame;


  // Offense
  // ----------------------------------
  statsAst = data.playerStatsTotals[0].stats.offense.ast;
  statsAstPerGame = data.playerStatsTotals[0].stats.offense.astPerGame;
  statsPts = data.playerStatsTotals[0].stats.offense.pts;
  statsPtsPerGame = data.playerStatsTotals[0].stats.offense.ptsPerGame;


  // defense
  // -----------------------------------
  statsTov = data.playerStatsTotals[0].stats.defense.tov;
  statsTovPerGame = data.playerStatsTotals[0].stats.defense.tovPerGame;
  statsStl = data.playerStatsTotals[0].stats.defense.stl;
  statsStlPerGame = data.playerStatsTotals[0].stats.defense.stlPerGame;
  statsBlk = data.playerStatsTotals[0].stats.defense.blk;
  statsBlkPerGame = data.playerStatsTotals[0].stats.defense.blkPerGame;
  statsBlkAgainst = data.playerStatsTotals[0].stats.defense.blkAgainst;
  statsBlkAgainstPerGame = data.playerStatsTotals[0].stats.defense.blkAgainstPerGame;
  statsMiscellaneousfouls = data.playerStatsTotals[0].stats.miscellaneous.fouls;
  statsMiscfoulsPerGame = data.playerStatsTotals[0].stats.miscellaneous.foulsPerGame;
  statsMiscfoulsDrawn = data.playerStatsTotals[0].stats.miscellaneous.foulsDrawn;
  statsMiscDrawnPerGame = data.playerStatsTotals[0].stats.miscellaneous.foulsDrawnPerGame;
  statsMiscFoulsPerGame = data.playerStatsTotals[0].stats.miscellaneous.foulPers;
  statsMiscFoulsfoulPersPerGame = data.playerStatsTotals[0].stats.miscellaneous.foulPersPerGame;
  statsMiscfoulPersDrawn = data.playerStatsTotals[0].stats.miscellaneous.foulPersDrawn;
  statsMiscfoulPersDrawnPerGame = data.playerStatsTotals[0].stats.miscellaneous.foulPersDrawnPerGame;
  statsMiscfoulTech = data.playerStatsTotals[0].stats.miscellaneous.foulTech;
  statsMiscfoulTechPerGame = data.playerStatsTotals[0].stats.miscellaneous.foulTechPerGame;
  statsMiscfoulTechDrawn = data.playerStatsTotals[0].stats.miscellaneous.foulTechDrawn;
  statsMiscfoulTechDrawnPerGame = data.playerStatsTotals[0].stats.miscellaneous.foulTechDrawnPerGame;
  statsMiscfoulFlag1 = data.playerStatsTotals[0].stats.miscellaneous.foulFlag1;
  statsMiscfoulFlag1PerGame = data.playerStatsTotals[0].stats.miscellaneous.foulFlag1PerGame;
  statsMiscfoulFlag1Drawn = data.playerStatsTotals[0].stats.miscellaneous.foulFlag1Drawn;
  statsMiscfoulFlag1DrawnPerGame = data.playerStatsTotals[0].stats.miscellaneous.foulFlag1DrawnPerGame;
  statsMiscfoulFlag2 = data.playerStatsTotals[0].stats.miscellaneous.foulFlag2;
  statsMiscfoulFlag2PerGame = data.playerStatsTotals[0].stats.miscellaneous.foulFlag2PerGame;
  statsMiscfoulFlag2Drawn = data.playerStatsTotals[0].stats.miscellaneous.foulFlag2Drawn;
  statsMiscffoulFlag2DrawnPerGame = data.playerStatsTotals[0].stats.miscellaneous.foulFlag2DrawnPerGame;
  statsMiscejections = data.playerStatsTotals[0].stats.miscellaneous.ejections;
  statsMiscplusMinus = data.playerStatsTotals[0].stats.miscellaneous.plusMinus;
  statsMiscplusMinusPerGame = data.playerStatsTotals[0].stats.miscellaneous.plusMinusPerGame;
  statsMiscminSeconds = data.playerStatsTotals[0].stats.miscellaneous.minSeconds;
  statsMiscminSecondsPerGame = data.playerStatsTotals[0].stats.miscellaneous.minSecondsPerGame;
  statsMiscgamesStarted = data.playerStatsTotals[0].stats.miscellaneous.gamesStarted;

} 

console.log(data);
