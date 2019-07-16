var playerButton = true;
var info = true;
var gameLogs = false;
var seasonLogs = false;
var currentshow = 'playersAdv';

let userTableData;
let userColumnConfig;
// let userToken;

// let loggedIn = true;
let username = '';

$(document).ready(function() {
// =================================calendar function====================================
$(function() {
    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);
    cb(start, end);

});
// ==================================Dashboard Section=======================================
// const logoutButton = () => {
//   (loggedIn) ? $(".navbar-nav2").append(`<li class="nav-item ml-4"><a class="nav-link font-weight-light logout" href="/">Logout</a></li>`) : $(".logout").parent().remove();
// }

// logoutButton();

$(document).on("click", ".editBtn", ()=> {
  if ($(".editBtn").text() === "Edit") {
      $(".editBtn").text("Save Edits");
      $(".editBar").removeClass("d-none");
  } else if ($(".editBtn").text() === "Save Edits") {
      $(".editBtn").text("Edit");
      $(".editBar").addClass("d-none");
  }
});

// $(document).on("click", ".addToMyTeam", ()=>{
//   let dash = $(".dashAdd").text();
//   if (dash) {
//     dash.split(", ");
//     dash.forEach(player => {

//     })
//   }
// })

// ==================================Params Section Search Page===============================
// $(document).on('click', '.nbaSeason', () => {
//   let currentSeason = $(this).text();
//   let currentSeason = $('.nbaSeason option:selected').text();
//   console.log(currentSeason + "3");
//   $('#seasonInput').text(currentSeason);
// })

//player search click functions
$(document).on('click', '.playerButton', function(){
  $('.playerSearchBar').removeClass('d-none');
  $('.teamSearchBar').addClass('d-none');
  $('.listAdd').empty();
  $('.playerButton').addClass('active');
  $('.teamButton').removeClass('active');
  $('.infoButton').removeClass('disabled');
  playerButton = true;
  checkBoxFilter();
});

$(document).on('click', '.teamButton', function(){
  $('.playerSearchBar').addClass('d-none');
  $('.teamSearchBar').removeClass('d-none');
  $('.listAdd').empty();
  $('.playerButton').removeClass('active');
  $('.teamButton').addClass('active');
  $('.infoButton').addClass('disabled');
  playerButton = false;
  checkBoxFilter();
});

$(document).on('click', '.infoButton', function(){
  if(!playerButton) {return};
  info = true;
  gameLogs = false;
  seasonLogs = false;
  $('.infoButton').addClass('active');
  $('.gameLogButton').removeClass('active');
  $('.seasonButton').removeClass('active');
  checkBoxFilter();
});

$(document).on('click', '.gameLogButton', function(){
  info = false;
  gameLogs = true;
  seasonLogs = false;
  $('.infoButton').removeClass('active');
  $('.gameLogButton').addClass('active');
  $('.seasonButton').removeClass('active');
  checkBoxFilter();
});

$(document).on('click', '.seasonButton', function(){
  info = false;
  gameLogs = false;
  seasonLogs = true;
  $('.infoButton').removeClass('active');
  $('.gameLogButton').removeClass('active');
  $('.seasonButton').addClass('active');
  checkBoxFilter();
});

$(document).on('click', '.searchAdvanced', function(){
  ($('.searchAdvanced').text() === 'See Advanced')? $(`.${currentshow}`).removeClass('d-none'): $(`.${currentshow}`).addClass('d-none');
  ($('.searchAdvanced').text() === 'See Advanced') ? $('.searchAdvanced').text('Hide Advanced') : $('.searchAdvanced').text('See Advanced');
});

$(document).on('click','.checkAll',function(){
  $('input:checkbox:visible').not(this).not('.customFunction').prop('checked', this.checked);
});

$(document).on('click', '.removeBtn', function(){
  $(this).parent().remove();
});

const checkBoxFilter = () => {
  $('.searchAdvanced').text('See Advanced');
  $('.allFilter').addClass('d-none');
  if (playerButton === true) {
    if(info) {
      $('.players').removeClass('d-none');
      currentshow = 'playersAdv';
    } else if (gameLogs) {
      $('.dailyPlayerGameLogs').removeClass('d-none');
      currentshow = 'dailyPlayerGameLogsAdv';
    } else if (seasonLogs) {
      $('.seasonalPlayerStats').removeClass('d-none');
      currentshow = 'seasonalPlayerStatsAdv';
    }
  }
  if (playerButton === false) {
    if (info) {
      currentshow = '';
    } else if (gameLogs) {
      $('.dailyTeamGameLogs').removeClass('d-none');
      currentshow = 'dailyTeamGameLogsAdv';
    } else if (seasonLogs) {
      $('.seasonalTeamStats').removeClass('d-none');
      currentshow = 'seasonalTeamStatsAdv';
    }
  }
};

checkBoxFilter();

//Submit Button
$(document).on('click', '.searchSubmit', () => {
  
  event.preventDefault();
  
  let date = $('#spanDate').val();
  let season = $('#seasonInput').val();
  let position = $('#positionInput').val();
  let roster = $('#rosterStatus').val();
  let checkBox = {};
  let nameList = [];
  let teamList = [];
  let playerString ="";
  let teamString = "";
  $("input:checkbox[name=chk]:checked").each(function () {
    checkBox[$(this).attr("id")] = $(this).attr("value");
  });

  $("ul .addedName").each(function() { nameList.push(($(this).text()).slice(1))});
  $("ul .addedNameTeam").each(function() { teamList.push(($(this).text()).slice(1))});
  
  const playerStringMaker = () => {
    nameList.forEach(item => {
      playerString += `,${item.toLowerCase().replace(/\s+/g, "-")}`;
    })
    playerString = playerString.slice(1);
    // console.log(playerString); //not exported yet but working as intended!
  }
  const teamStringMaker = () => {
    teamList.forEach(item => {
      teamString += `,${teamObjRef[item]}`
    })
    teamString = teamString.slice(1);
  }

  playerStringMaker();
  teamStringMaker();
  // console.log(playerString);
  // console.log(teamString);

  let searchObj = {
    date, season, position, roster, checkBox, playerString, teamString
  }

  console.log(searchObj);

  $.post('api/search', searchObj, (data) =>{

    userTableData = data.userTableData;
    userColumnConfig = data.userColumnConfig;

      console.log("***********USERTABLEDATA*************")
      console.log(data.userTableData)
      console.log("***********USERCOLUMNCONFIG*************")
      console.log(data.userColumnConfig)

      var table = new Tabulator("#user-tables", {
        data: data.userTableData,
        layout: "fitColumns", 
        columns: data.userColumnConfig,
        index: "Player ID",
        placeholder: "<div class='text-center'><div class='spinner-grow text-success' style='width: 4rem; height: 4rem;' role='status'><span class='sr-only'>Loading...</span></div></div>",
        initialSort:[
            {column:"Team Abbr", dir:"asc"},
            {column:"Last Name", dir:"asc"}, 
            ],
        autoColumns:true
        // height: 800,
        // virtualDom: true
        // rowClick:function(e, row){ //trigger an alert message when the row is clicked
        //     alert("Row " + row.getData().id + " Clicked!!!!");
        // },
      });

      $("#save-table").removeClass("d-none");
    })
  })


  $(document).on("click", "#save-table", function(){
    let userSaveTable = {userTableData, userColumnConfig}
    $.post('/save', userSaveTable, (response) => {
      console.log("SENT TO SQL SAVE")
      window.location.href = "/dashboard";
    });
  })


}) // this is where document.ready ends


// =================================player vs team button logic on frontend search ====================================
// var MySportsFeeds = require("mysportsfeeds-node");
// var msf = new MySportsFeeds("2.0", true);
// var MySportsFeeds = require("mysportsfeeds-node");
// msf.authenticate("1895dd8d-e910-476e-a495-9f7980", "MYSPORTSFEEDS");

// var msf = new MySportsFeeds("1.2", true);
// msf.authenticate("1895dd8d-e910-476e-a495-9f7980", "bootcamp");

// var data = msf.getData('nba', '2018-2019-regular');
// console.log(data);



// checkboxMaker(API.players);


// let apikey_token = "1895dd8d-e910-476e-a495-9f7980"

// $.ajax
// ({
//   type: "GET",
//   url: "https://cors-anywhere.herokuapp.com/" + "https://api.mysportsfeeds.com/v2.1/pull/nba/players",
//   dataType: 'json',
//   async: false,
//   headers: {
//     "Authorization": `Basic btoa({1895dd8d-e910-476e-a495-9f7980}): MYSPORTSFEEDS`
//   },
//   data: '{ "comment" }',
//   success: function (){
//     alert('Thanks for your comment!'); 
//   }
// });

// })
