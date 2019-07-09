
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

//seasonal team stats

const seasonalTeamStats = {
  //to check object validity, use data obj from https://www.mysportsfeeds.com/data-feeds/api-docs/#
  lastUpdatedOn: data.lastUpdatedOn,

  // teamStatsTotals: data.teamStatsTotals,  //whole object

  // team: data.teamStatsTotals[0],
  teamId: data.teamStatsTotals[0].team.id,
  teamCity: data.teamStatsTotals[0].team.city, //team city
  teamName: data.teamStatsTotals[0].team.name,  //team name
  teamAbbreviation: data.teamStatsTotals[0].team.abbreviation,
  teamHomeVenueId: data.teamStatsTotals[0].team.homeVenue.id,
  teamHomeVenueName: data.teamStatsTotals[0].team.homeVenue.name, //venue name
  teamColoursHex: data.teamStatsTotals[0].team.teamColoursHex,
  socialMediaAccounts: data.teamStatsTotals[0].team.socialMediaAccounts,
  officialLogoImageSrc: data.teamStatsTotals[0].team.officialLogoImageSrc,

  // stats: data.teamStatsTotals[0],
  gamesPlayed: data.teamStatsTotals[0].stats.gamesPlayed,
  fieldGoals: data.teamStatsTotals[0].stats.fieldGoals,
  fg2PtAtt: data.teamStatsTotals[0].stats.fieldGoals.fg2PtAtt,
  fg2PtAttPerGame: data.teamStatsTotals[0].stats.fieldGoals.fg2PtAttPerGame,
  fg2PtMade: data.teamStatsTotals[0].stats.fieldGoals.fg2PtMade,
  fg2PtMadePerGame: data.teamStatsTotals[0].stats.fieldGoals.fg2PtMadePerGame,
  fg2PtPct: data.teamStatsTotals[0].stats.fieldGoals.fg2PtPct,
  fg3PtAtt: data.teamStatsTotals[0].stats.fieldGoals.fg3PtAtt,
  fg3PtAttPerGame: data.teamStatsTotals[0].stats.fieldGoals.fg3PtAttPerGame,
  fg3PtMade: data.teamStatsTotals[0].stats.fieldGoals.fg3PtMade,
  fg3PtMadePerGame: data.teamStatsTotals[0].stats.fieldGoals.fg3PtMadePerGame,
  fg3PtPct: data.teamStatsTotals[0].stats.fieldGoals.fg3PtPct,
  fgAtt: data.teamStatsTotals[0].stats.fieldGoals.fgAtt,
  fgAttPerGame: data.teamStatsTotals[0].stats.fieldGoals.fgAttPerGame,
  fgMade: data.teamStatsTotals[0].stats.fieldGoals.fgMade,
  fgMadePerGame: data.teamStatsTotals[0].stats.fieldGoals.fgMadePerGame,
  fgPct: data.teamStatsTotals[0].stats.fieldGoals.fgPct,
  
  // freeThrows: data.teamStatsTotals[0].stats.freeThrows, //free throw object
  ftAtt: data.teamStatsTotals[0].stats.freeThrows.ftAtt,
  ftAttPerGame: data.teamStatsTotals[0].stats.freeThrows.ftAttPerGame,
  ftMade: data.teamStatsTotals[0].stats.freeThrows.ftMade,
  ftMadePerGame: data.teamStatsTotals[0].stats.freeThrows.ftMadePerGame,
  ftPct: data.teamStatsTotals[0].stats.freeThrows.ftPct,

  // rebounds: data.teamStatsTotals[0].stats.rebounds,
  offReb: data.teamStatsTotals[0].stats.rebounds.offReb,
  offRebPerGame: data.teamStatsTotals[0].stats.rebounds.offRebPerGame,
  defReb: data.teamStatsTotals[0].stats.rebounds.defReb,
  defRebPerGame: data.teamStatsTotals[0].stats.rebounds.defRebPerGame,
  reb: data.teamStatsTotals[0].stats.rebounds.reb,
  rebPerGame: data.teamStatsTotals[0].stats.rebounds.rebPerGame,

  // offense: data.teamStatsTotals[0].stats.offense,
  ast: data.teamStatsTotals[0].stats.offense.ast,
  astPerGame: data.teamStatsTotals[0].stats.offense.astPerGame,
  pts: data.teamStatsTotals[0].stats.offense.pts,
  ptsPerGame: data.teamStatsTotals[0].stats.offense.ptsPerGame,

  // defense: data.teamStatsTotals[0].stats.defense,
  tov: data.teamStatsTotals[0].stats.defense.tov,
  tovPerGame: data.teamStatsTotals[0].stats.defense.tovPerGame,
  stl: data.teamStatsTotals[0].stats.defense.stl,
  stlPerGame: data.teamStatsTotals[0].stats.defense.stlPerGame,
  blk: data.teamStatsTotals[0].stats.defense.blk,
  blkPerGame: data.teamStatsTotals[0].stats.defense.blkPerGame,
  blkAgainst: data.teamStatsTotals[0].stats.defense.blkAgainst,
  blkAgainstPerGame: data.teamStatsTotals[0].stats.defense.blkAgainstPerGame,
  ptsAgainst: data.teamStatsTotals[0].stats.defense.ptsAgainst,
  ptsAgainstPerGame: data.teamStatsTotals[0].stats.defense.ptsAgainstPerGame,

  // miscellaneous: data.teamStatsTotals[0].stats.miscellaneous,
  fouls: data.teamStatsTotals[0].stats.miscellaneous.fouls,
  foulsPerGame: data.teamStatsTotals[0].stats.miscellaneous.foulsPerGame,
  foulsDrawn: data.teamStatsTotals[0].stats.miscellaneous.foulsDrawn,
  foulsDrawnPerGame: data.teamStatsTotals[0].stats.miscellaneous.foulsDrawnPerGame,
  foulPers: data.teamStatsTotals[0].stats.miscellaneous.foulPers,
  foulPersDrawn: data.teamStatsTotals[0].stats.miscellaneous.foulPersDrawn,
  foulPersDrawnPerGame: data.teamStatsTotals[0].stats.miscellaneous.foulPersDrawnPerGame,
  foulTech: data.teamStatsTotals[0].stats.miscellaneous.foulTech,
  foulTechDrawn: data.teamStatsTotals[0].stats.miscellaneous.foulTechDrawn,
  foulTechDrawnPerGame: data.teamStatsTotals[0].stats.miscellaneous.foulTechDrawnPerGame,
  foulFlag1: data.teamStatsTotals[0].stats.miscellaneous.foulFlag1,
  foulFlag1PerGame: data.teamStatsTotals[0].stats.miscellaneous.foulFlag1PerGame,
  foulFlag1Drawn: data.teamStatsTotals[0].stats.miscellaneous.foulFlag1Drawn,
  foulFlag1DrawnPerGame: data.teamStatsTotals[0].stats.miscellaneous.foulFlag1DrawnPerGame,
  foulFlag2: data.teamStatsTotals[0].stats.miscellaneous.foulFlag2,
  foulFlag2Drawn: data.teamStatsTotals[0].stats.miscellaneous.foulFlag2Drawn,
  foulFlag2DrawnPerGame: data.teamStatsTotals[0].stats.miscellaneous.foulFlag2DrawnPerGame,
  ejections: data.teamStatsTotals[0].stats.miscellaneous.ejections,
  plusMinus: data.teamStatsTotals[0].stats.miscellaneous.plusMinus,
  plusMinusPerGame : data.teamStatsTotals[0].stats.miscellaneous.plusMinusPerGame,

  // standings: data.teamStatsTotals[0].stats.standings,
  wins: data.teamStatsTotals[0].stats.standings.wins,
  losses: data.teamStatsTotals[0].stats.standings.losses,
  winPct: data.teamStatsTotals[0].stats.standings.winPct,
  gamesBack: data.teamStatsTotals[0].stats.standings.gamesBack,
}
console.log(seasonalTeamStats);

