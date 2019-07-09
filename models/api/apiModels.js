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