
const API = {
    players = (data) => {
        lastUpdatedOn = data.lastUpdatedOn;
        playerId = data.players[0].player.id;
        playerFirstName = data.players[0].player.firstName;
        playerLastName = data.players[0].player.lastName;
        playerPrimaryPosition = data.players[0].player.primaryPosition;
        playerAlternatePositions = data.players[0].player.alternatePositions;
        playerJerseyNumber = data.players[0].player.jerseyNumber;
        currentTeamId = data.players[0].player.currentTeam.id;
        currentTeamAbbreviation = data.players[0].player.currentTeam.abbreviation;
        playerCurrentRosterStatus = data.players[0].player.currentRosterStatus;
        playerCurrentInjury = data.players[0].player.currentInjury;
        playerHeight = data.players[0].player.height;
        playerWeigth = data.players[0].player.weight;
        playerBirthDate = data.players[0].player.birthDate;
        playerAge = data.players[0].player.age;
        playerBirthCity = data.players[0].player.birthCity;
        playerBirthCountry = data.players[0].player.birthCountry;
        playerRookie = data.players[0].player.rookie;
        playerHighSchool = data.players[0].player.highSchool;
        playerCollege = data.players[0].player.college;
        playerHandednessShoots = data.players[0].player.handedness.shoots;
        playerOfficialImageSrc = data.players[0].player.officialImageSrc;
        playerSocialMediaAccounts = data.players[0].player.socialMediaAccounts;
        playerCurrentContractYear = data.players[0].player.currentContractYear;
        playerDraftedYear = data.players[0].player.drafted.year;
        playerDraftedTeamId = data.players[0].player.drafted.team.id;
        playerDraftedTeamAbbreviation = data.players[0].player.drafted.team.abbreviation;
        playerDraftedPickTeamId = data.players[0].player.drafted.pickTeam.id;
        playerDraftedPickTeamAbbreviation = data.players[0].player.drafted.pickTeam.abbreviation;
        playerDraftedRound = data.players[0].player.drafted.round;
        playerDraftedRoundPick = data.players[0].player.drafted.roundPick;
        playerOverallPick = data.players[0].player.drafted.overallPick;
        playerExternalMappingsSource = data.players[0].player.externalMappings[0].source;
        playerExternalMappingsId = data.players[0].player.externalMappings[0].id;
        playerTeamAsOfDateId = data.players[0].teamAsOfDate.id;
        playerTeamAsOfDateAbbreviation = data.players[0].teamAsOfDate.abbreviation;
    },
    playerInjuries = (data) => {
        lastUpdatedOn = data.lastUpdatedOn;
        playerId = data.players[0].id;
        playerFirstName = data.players[0].firstName;
        playerLastName = data.players[0].lastName;
        playerPrimaryPosition = data.players[0].primaryPosition;
        playerJerseyNumber = data.players[0].jerseyNumber;
        currentTeamId = data.players[0].currentTeam.id;
        currentTeamAbbreviation = data.players[0].currentTeam.abbreviation;
        currentRosterStatus = data.players[0].currentRosterStatus;
        currentInjuries = data.players[0].currentInjuries;
        currentInjuryDescription = data.players[0].currentInjury.description;
        currentInjuryPlayingProbability = data.players[0].currentInjury.playingProbability;
        playerHeight = data.players[0].height;
        playerWeight = data.players[0].weight;
        playerBirthDate = data.players[0].birthDate;
        playerAge = data.players[0].age;
        playerBirthCity = data.players[0].birthCity;
        playerHighSchool = data.players[0].highSchool;
        playerCollege = data.players[0].college;
        handednessShoots = data.players[0].shoots;
        playerOfficialImageSrc = data.players[0].officialImageSrc;
        playerSocialMediaAccountsMediaType = data.players[0].mediaTypes;
        playerSocialMediaAccountsValue = data.players[0].value;
    },
    dailyPlayerGameLogs = (data) => {
        latestUpdatedOn = data.lastUpdatedOn;
        gameId = data.gamelogs[0].game.id;
        gameStartTime = data.gamelogs[0].game.startTime;
        gamesAwayTeamAbbreviation = data.gamelogs[0].game.awayTeamAbbreviation;
        gamesHomeTeamAbbreviation = data.gamelogs[0].game.homeTeamAbbreviation;
        playerId = data.gamelogs[0].player.id;
        playerFirstName = data.gamelogs[0].player.firstName;
        playerLastName = data.gamelogs[0].player.lastName;
        playerPosition = data.gamelogs[0].player.position;
        playerJerseyNumber = data.gamelogs[0].player.jerseyNumber;
        teamId = data.gamelogs[0].team.id;
        teamAbbreviation = data.gamelogs[0].team.abbreviation;
        statsFieldGoalsFg2PtAtt = data.gamelogs[0].stats.fieldGoals.fg2PtAtt;
        statsFieldGoalsFg2PtAttPerGame = data.gamelogs[0].stats.fieldGoals.fg2PtAttPerGame;
        statsFieldGoalsFg2PtMade = data.gamelogs[0].stats.fieldGoals.fg2PtMade,  ;
        statsFieldGoalsFg2PtMadePerGame = data.gamelogs[0].stats.fieldGoals.fg2PtMadePerGame;
        statsFieldGoalsFg2PtPct = data.gamelogs[0].stats.fieldGoals.fg2PtPct;
        statsFieldGoalsFg3PtAtt = data.gamelogs[0].stats.fieldGoals.fg3PtAtt;
        statsFieldGoalsFg3PtAttPerGame = data.gamelogs[0].stats.fieldGoals.fg3PtAttPerGame;
        statsFieldGoalsFg3PtMade = data.gamelogs[0].stats.fieldGoals.fg3PtMade;
        statsFieldGoalsFg3PtMadePerGame = data.gamelogs[0].stats.fieldGoals.fg3PtMadePerGame;
        statsFieldGoalsFg3PtPct = data.gamelogs[0].stats.fieldGoals.fg3PtPct;
        statsFieldGoalsfgAtt = data.gamelogs[0].stats.fieldGoals.fgAtt;
        statsFieldGoalsfgAttPerGame = data.gamelogs[0].stats.fieldGoals.fgAttPerGame;
        statsFieldGoalsfgMade = data.gamelogs[0].stats.fieldGoals.fgMade;
        statsFieldGoalsfgMadePerGame = data.gamelogs[0].stats.fieldGoals.fgMadePerGame;
        statsFieldGoalsfgPct = data.gamelogs[0].stats.fieldGoals.fgPct;
        statsFreeThrowsFtAtt = data.gamelogs[0].stats.freeThrows.ftAtt;
        statsFreeThrowsFtAttPerGame = data.gamelogs[0].stats.freeThrows.ftAttPerGame;
        statsFreeThrowsFtMade = data.gamelogs[0].stats.freeThrows.ftMade;
        statsFreeThrowsFtMadePerGame = data.gamelogs[0].stats.freeThrows.ftMadePerGame;
        statsFreeThrowsFtPct = data.gamelogs[0].stats.freeThrows.ftPct;
        statsReboundsOffReb = data.gamelogs[0].stats.rebounds.offReb;
        statsReboundsOffRebPerGame = data.gamelogs[0].stats.rebounds.offRebPerGame;
        statsReboundsDefReb = data.gamelogs[0].stats.rebounds.defReb;
        statsReboundsDefRebPerGame = data.gamelogs[0].stats.rebounds.defRebPerGame;
        statsReboundsReb = data.gamelogs[0].stats.rebounds.reb;
        statsReboundsRebPerGame = data.gamelogs[0].stats.rebounds.rebPerGame;
        statsOffenseAst = data.gamelogs[0].stats.offense.ast;
        statsOffenseAstPerGame = data.gamelogs[0].stats.offense.astPerGame;
        statsOffensePts = data.gamelogs[0].stats.offense.pts;
        statsOffensePtsPerGame = data.gamelogs[0].stats.offense.ptsPerGame;
        statsDefenseTov = data.gamelogs[0].stats.defense.tov;
        statsDefenseTovPerGame = data.gamelogs[0].stats.defense.tovPerGame;
        statsDefenseStl = data.gamelogs[0].stats.defense.stl;
        statsDefenseStlPerGame = data.gamelogs[0].stats.defense.stlPerGame;
        statsDefenseBlk = data.gamelogs[0].stats.defense.blk;
        statsDefenseBlkPerGame = data.gamelogs[0].stats.defense.blkPerGame;
        statsDefenseBlkAgainst = data.gamelogs[0].stats.defense.blkAgainst;
        statsDefenseBlkAgainstPerGame = data.gamelogs[0].stats.defense.blkAgainstPerGame;
        
        statsMiscellaneousFouls = data.gamelogs[0].stats.miscellaneous.fouls;
        statsMiscellaneousFoulsPerGame = data.gamelogs[0].stats.miscellaneous.foulsPerGame;
        statsMiscellaneousFoulsDrawn = data.gamelogs[0].stats.miscellaneous.foulsDrawn;
        statsMiscellaneousFoulsDrawnPerGame = data.gamelogs[0].stats.miscellaneous.foulsDrawnPerGame;
        statsMiscellaneousFoulPers = data.gamelogs[0].stats.miscellaneous.foulPers;
        statsMiscellaneousFoulPersPerGame = data.gamelogs[0].stats.miscellaneous.foulPersPerGame;
        statsMiscellaneousFoulPersDrawn = data.gamelogs[0].stats.miscellaneous.foulPersDrawn;
        statsMiscellaneousFoulPersDrawnPerGame = data.gamelogs[0].stats.miscellaneous.foulPersDrawnPerGame;
       
        statsMiscellaneousFoulTech = data.gamelogs[0].stats.miscellaneous.foulTech;
        statsMiscellaneousFoulTechPerGame = data.gamelogs[0].stats.miscellaneous.foulTechPerGame;
        statsMiscellaneousFoulTechDrawn = data.gamelogs[0].stats.miscellaneous.foulTechDrawn;
        statsMiscellaneousFoulTechDrawnPerGame = data.gamelogs[0].stats.miscellaneous.foulTechDrawnPerGame;
        statsMiscellaneousFoulFlag1 = data.gamelogs[0].stats.miscellaneous.foulFlag1;
        statsMiscellaneousFoulFlag1PerGame = data.gamelogs[0].stats.miscellaneous.foulFlag1PerGame;
        statsMiscellaneousFoulFlag1Drawn = data.gamelogs[0].stats.miscellaneous.foulFlag1Drawn;
        statsMiscellaneousFoulFlag1DrawnPerGame = data.gamelogs[0].stats.miscellaneous.foulFlag1DrawnPerGame;
        statsMiscellaneousFoulFlag2 = data.gamelogs[0].stats.miscellaneous.foulFlag2;
        statsMiscellaneousFoulFlag2PerGame = data.gamelogs[0].stats.miscellaneous.foulFlag2PerGame;
        statsMiscellaneousFoulFlage2Drawn = data.gamelogs[0].stats.miscellaneous.foulFlag2Drawn;
        statsMiscellaneousFoulFlag2DrawnPerGame = data.gamelogs[0].stats.miscellaneous.foulFlag2DrawnPerGame;
     
        statsMiscellaneousEjections = data.gamelogs[0].stats.miscellaneous.ejections;
        statsMiscellaneousPlusMinus = data.gamelogs[0].stats.miscellaneous.plusMinus;
        statsMiscellaneousPlusMInusPerGame = data.gamelogs[0].stats.miscellaneous.plusMinusPerGame;
        statsMiscellaneousMinSeconds = data.gamelogs[0].stats.miscellaneous.minSeconds;
        statsMiscellaneousMinSecondsPerGame = data.gamelogs[0].stats.miscellaneous.minSecondsPerGame;
        statsMiscellaneousGameStarted = data.gamelogs[0].stats.miscellaneous.gamesStarte;
    },
    dailyTeamGamelogs = (data) => {
        lastUpdatedOn = data.lastUpdatedOn;
        gameId = data.gamelogs[0].game.id;
        gameStartTime = data.gamelogs[0].game.startTime;
        gameAwayTeamAbbreviation = data.gamelogs[0].game.awayTeamAbbreviation;
        gameHomeTeamAbbreviation = data.gamelogs[0].game.homeTeamAbbreviation;
        teamId = data.gamelogs[0].team.id;
        teamAbbreviation = data.gamelogs[0].team.abbreviation;
        // 2pt field goals
        statsFg2PtAtt = data.gamelogs[0].stats.fieldGoals.fg2PtAtt;
        statsFg2PtAttPerGame = data.gamelogs[0].stats.fieldGoals.fg2PtAttPerGame;
        statsFg2PtMade = data.gamelogs[0].stats.fieldGoals.fg2PtMade;
        statsFg2PtMadePerGame = data.gamelogs[0].stats.fieldGoals.fg2PtMadePerGame;
        statsFg2PtPct = data.gamelogs[0].stats.fieldGoals.fg2PtPct;
        // 3pt field goals
        statsFg3PtAtt = data.gamelogs[0].stats.fieldGoals.fg3PtAtt;
        statsFg3PtAttPerGame = data.gamelogs[0].stats.fieldGoals.fg3PtAttPerGame;
        statsFg3PtMade = data.gamelogs[0].stats.fieldGoals.fg3PtMade;
        statsFg3PtMadePerGame = data.gamelogs[0].stats.fieldGoals.fg3PtMadePerGame;
        statsFg3PtPct = data.gamelogs[0].stats.fieldGoals.fg3PtPct;
        // total field goals
        statsFgAtt = data.gamelogs[0].stats.fieldGoals.fgAtt;
        statsFgAttPerGame = data.gamelogs[0].stats.fieldGoals.fgAttPerGame;
        statsFgMade = data.gamelogs[0].stats.fieldGoals.fgMade;
        statsFgMadePerGame = data.gamelogs[0].stats.fieldGoals.fgMadePerGame;
        statsFgPct = data.gamelogs[0].stats.fieldGoals.fgPct;
        // free throws
        statsFtAtt = data.gamelogs[0].stats.freeThrows.ftAtt;
        statsFtAttPerGame = data.gamelogs[0].stats.freeThrows.ftAttPerGame;
        statsFtMade = data.gamelogs[0].stats.freeThrows.ftMade;
        statsFtMadePerGame = data.gamelogs[0].stats.freeThrows.ftMadePerGame;
        statsFtPct = data.gamelogs[0].stats.freeThrows.ftPct;
        // rebounds
        statsOffReb = data.gamelogs[0].stats.rebounds.offReb;
        statsOffRebPerGame = data.gamelogs[0].stats.rebounds.offRebPerGame;
        statsDefReb = data.gamelogs[0].stats.rebounds.defReb;
        statsDefRebPerGame = data.gamelogs[0].stats.rebounds.defRebPerGame;
        statsReb = data.gamelogs[0].stats.rebounds.reb;
        statsRebPerGame = data.gamelogs[0].stats.rebounds.rebPerGame;
        // offense
        statsAst = data.gamelogs[0].stats.offense.ast;
        statsAstPerGame = data.gamelogs[0].stats.offense.astPerGame;
        statsPts = data.gamelogs[0].stats.offense.pts;
        statsPtsPerGame = data.gamelogs[0].stats.offense.ptsPerGame;
        // defense
        statsTov = data.gamelogs[0].stats.defense.tov;
        statsTovPerGame = data.gamelogs[0].stats.defense.tovPerGame;
        statsStl = data.gamelogs[0].stats.defense.stl;
        statsStlPerGame = data.gamelogs[0].stats.defense.stlPerGame;
        statsBlk = data.gamelogs[0].stats.defense.blk;
        statsBlkPerGame = data.gamelogs[0].stats.defense.blkPerGame;
        statsBlkAgainst = data.gamelogs[0].stats.defense.blkAgainst;
        statsBlkAgainstPerGame = data.gamelogs[0].stats.defense.blkAgainstPerGame;
        statsPtsAgainst = data.gamelogs[0].stats.defense.ptsAgainst;
        statsPtsAgainstPerGame = data.gamelogs[0].stats.defense.ptsAgainstPerGame;
        // miscellaneous
        statsFouls = data.gamelogs[0].stats.miscellaneous.fouls;
        statsFoulsPerGame = data.gamelogs[0].stats.miscellaneous.foulsPerGame;
        statsFoulsDrawn = data.gamelogs[0].stats.miscellaneous.foulsDrawn;
        statsFoulsDrawnPerGame = data.gamelogs[0].stats.miscellaneous.foulsDrawnPerGame;
        statsFoulPers = data.gamelogs[0].stats.miscellaneous.foulPers;
        statsFoulPersPerGame = data.gamelogs[0].stats.miscellaneous.foulPersPerGame;
        statsFoulPersDrawnPerGame = data.gamelogs[0].stats.miscellaneous.foulPersDrawnPerGame;
        statsFoulTech = data.gamelogs[0].stats.miscellaneous.foulTech;
        statsFoulTechPerGame = data.gamelogs[0].stats.miscellaneous.foulTechPerGame;
        statsFoulTechDrawn = data.gamelogs[0].stats.miscellaneous.foulTechDrawn;
        statsFoulTechDrawnPerGame = data.gamelogs[0].stats.miscellaneous.foulTechDrawnPerGame;
        statsFoulFlag1 = data.gamelogs[0].stats.miscellaneous.foulFlag1;
        statsFoulFlag1PerGame = data.gamelogs[0].stats.miscellaneous.foulFlag1PerGame;
        statsFoulFlag1Drawn = data.gamelogs[0].stats.miscellaneous.foulFlag1Drawn;
        statsFoulFlag1DrawnPerGame = data.gamelogs[0].stats.miscellaneous.foulFlag1DrawnPerGame;
        statsFoulFlag2 = data.gamelogs[0].stats.miscellaneous.foulFlag2;
        statsFoulFlag2PerGame = data.gamelogs[0].stats.miscellaneous.foulFlag2PerGame;
        statsFoulFlag2Drawn = data.gamelogs[0].stats.miscellaneous.foulFlag2Drawn;
        statsFoulFlag2DrawnPerGame = data.gamelogs[0].stats.miscellaneous.foulFlag2DrawnPerGame;
        statsEjections = data.gamelogs[0].stats.miscellaneous.ejections;
        statsPlusMinus = data.gamelogs[0].stats.miscellaneous.plusMinus;
        statsPlusMinusPerGame = data.gamelogs[0].stats.miscellaneous.plusMinusPerGame;
        // standings
        statsWins = data.gamelogs[0].stats.standings.wins;
        statsLosses = data.gamelogs[0].stats.standings.losses;
        statsWinPct = data.gamelogs[0].stats.standings.winPct;
        statsGamesBack = data.gamelogs[0].stats.standings.gamesBack;
    },
    seasonalPlayerStats = (data) => {
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

    },
    seasonalTeamStats = (data) => {
        //to check object validity, use data obj from https://www.mysportsfeeds.com/data-feeds/api-docs/#
        lastUpdatedOn = data.lastUpdatedOn;
      
        // teamStatsTotals = data.teamStatsTotals,  //whole objec;
      
        // team = data.teamStatsTotals[0];
        teamId = data.teamStatsTotals[0].team.id;
        teamCity = data.teamStatsTotals[0].team.city, //team cit;
        teamName = data.teamStatsTotals[0].team.name,  //team nam;
        teamAbbreviation = data.teamStatsTotals[0].team.abbreviation;
        teamHomeVenueId = data.teamStatsTotals[0].team.homeVenue.id;
        teamHomeVenueName = data.teamStatsTotals[0].team.homeVenue.name, //venue nam;
        teamColoursHex = data.teamStatsTotals[0].team.teamColoursHex;
        socialMediaAccounts = data.teamStatsTotals[0].team.socialMediaAccounts;
        officialLogoImageSrc = data.teamStatsTotals[0].team.officialLogoImageSrc;
      
        // stats = data.teamStatsTotals[0];
        gamesPlayed = data.teamStatsTotals[0].stats.gamesPlayed;
        fieldGoals = data.teamStatsTotals[0].stats.fieldGoals;
        fg2PtAtt = data.teamStatsTotals[0].stats.fieldGoals.fg2PtAtt;
        fg2PtAttPerGame = data.teamStatsTotals[0].stats.fieldGoals.fg2PtAttPerGame;
        fg2PtMade = data.teamStatsTotals[0].stats.fieldGoals.fg2PtMade;
        fg2PtMadePerGame = data.teamStatsTotals[0].stats.fieldGoals.fg2PtMadePerGame;
        fg2PtPct = data.teamStatsTotals[0].stats.fieldGoals.fg2PtPct;
        fg3PtAtt = data.teamStatsTotals[0].stats.fieldGoals.fg3PtAtt;
        fg3PtAttPerGame = data.teamStatsTotals[0].stats.fieldGoals.fg3PtAttPerGame;
        fg3PtMade = data.teamStatsTotals[0].stats.fieldGoals.fg3PtMade;
        fg3PtMadePerGame = data.teamStatsTotals[0].stats.fieldGoals.fg3PtMadePerGame;
        fg3PtPct = data.teamStatsTotals[0].stats.fieldGoals.fg3PtPct;
        fgAtt = data.teamStatsTotals[0].stats.fieldGoals.fgAtt;
        fgAttPerGame = data.teamStatsTotals[0].stats.fieldGoals.fgAttPerGame;
        fgMade = data.teamStatsTotals[0].stats.fieldGoals.fgMade;
        fgMadePerGame = data.teamStatsTotals[0].stats.fieldGoals.fgMadePerGame;
        fgPct = data.teamStatsTotals[0].stats.fieldGoals.fgPct;
        
        // freeThrows = data.teamStatsTotals[0].stats.freeThrows, //free throw objec;
        ftAtt = data.teamStatsTotals[0].stats.freeThrows.ftAtt;
        ftAttPerGame = data.teamStatsTotals[0].stats.freeThrows.ftAttPerGame;
        ftMade = data.teamStatsTotals[0].stats.freeThrows.ftMade;
        ftMadePerGame = data.teamStatsTotals[0].stats.freeThrows.ftMadePerGame;
        ftPct = data.teamStatsTotals[0].stats.freeThrows.ftPct;
      
        // rebounds = data.teamStatsTotals[0].stats.rebounds;
        offReb = data.teamStatsTotals[0].stats.rebounds.offReb;
        offRebPerGame = data.teamStatsTotals[0].stats.rebounds.offRebPerGame;
        defReb = data.teamStatsTotals[0].stats.rebounds.defReb;
        defRebPerGame = data.teamStatsTotals[0].stats.rebounds.defRebPerGame;
        reb = data.teamStatsTotals[0].stats.rebounds.reb;
        rebPerGame = data.teamStatsTotals[0].stats.rebounds.rebPerGame;
      
        // offense = data.teamStatsTotals[0].stats.offense;
        ast = data.teamStatsTotals[0].stats.offense.ast;
        astPerGame = data.teamStatsTotals[0].stats.offense.astPerGame;
        pts = data.teamStatsTotals[0].stats.offense.pts;
        ptsPerGame = data.teamStatsTotals[0].stats.offense.ptsPerGame;
      
        // defense = data.teamStatsTotals[0].stats.defense;
        tov = data.teamStatsTotals[0].stats.defense.tov;
        tovPerGame = data.teamStatsTotals[0].stats.defense.tovPerGame;
        stl = data.teamStatsTotals[0].stats.defense.stl;
        stlPerGame = data.teamStatsTotals[0].stats.defense.stlPerGame;
        blk = data.teamStatsTotals[0].stats.defense.blk;
        blkPerGame = data.teamStatsTotals[0].stats.defense.blkPerGame;
        blkAgainst = data.teamStatsTotals[0].stats.defense.blkAgainst;
        blkAgainstPerGame = data.teamStatsTotals[0].stats.defense.blkAgainstPerGame;
        ptsAgainst = data.teamStatsTotals[0].stats.defense.ptsAgainst;
        ptsAgainstPerGame = data.teamStatsTotals[0].stats.defense.ptsAgainstPerGame;
      
        // miscellaneous = data.teamStatsTotals[0].stats.miscellaneous;
        fouls = data.teamStatsTotals[0].stats.miscellaneous.fouls;
        foulsPerGame = data.teamStatsTotals[0].stats.miscellaneous.foulsPerGame;
        foulsDrawn = data.teamStatsTotals[0].stats.miscellaneous.foulsDrawn;
        foulsDrawnPerGame = data.teamStatsTotals[0].stats.miscellaneous.foulsDrawnPerGame;
        foulPers = data.teamStatsTotals[0].stats.miscellaneous.foulPers;
        foulPersDrawn = data.teamStatsTotals[0].stats.miscellaneous.foulPersDrawn;
        foulPersDrawnPerGame = data.teamStatsTotals[0].stats.miscellaneous.foulPersDrawnPerGame;
        foulTech = data.teamStatsTotals[0].stats.miscellaneous.foulTech;
        foulTechDrawn = data.teamStatsTotals[0].stats.miscellaneous.foulTechDrawn;
        foulTechDrawnPerGame = data.teamStatsTotals[0].stats.miscellaneous.foulTechDrawnPerGame;
        foulFlag1 = data.teamStatsTotals[0].stats.miscellaneous.foulFlag1;
        foulFlag1PerGame = data.teamStatsTotals[0].stats.miscellaneous.foulFlag1PerGame;
        foulFlag1Drawn = data.teamStatsTotals[0].stats.miscellaneous.foulFlag1Drawn;
        foulFlag1DrawnPerGame = data.teamStatsTotals[0].stats.miscellaneous.foulFlag1DrawnPerGame;
        foulFlag2 = data.teamStatsTotals[0].stats.miscellaneous.foulFlag2;
        foulFlag2Drawn = data.teamStatsTotals[0].stats.miscellaneous.foulFlag2Drawn;
        foulFlag2DrawnPerGame = data.teamStatsTotals[0].stats.miscellaneous.foulFlag2DrawnPerGame;
        ejections = data.teamStatsTotals[0].stats.miscellaneous.ejections;
        plusMinus = data.teamStatsTotals[0].stats.miscellaneous.plusMinus;
        plusMinusPerGame  = data.teamStatsTotals[0].stats.miscellaneous.plusMinusPerGame;
      
        // standings = data.teamStatsTotals[0].stats.standings;
        wins = data.teamStatsTotals[0].stats.standings.wins;
        losses = data.teamStatsTotals[0].stats.standings.losses;
        winPct = data.teamStatsTotals[0].stats.standings.winPct;
        gamesBack = data.teamStatsTotals[0].stats.standings.gamesBack;
    }
}
