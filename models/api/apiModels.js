
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
    }
}



console.log(dailyTeamGamelogs)
