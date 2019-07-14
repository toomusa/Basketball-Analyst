var playerButton = true;
var info = true;
var gameLogs = false;
var seasonLogs = false;
var currentShow = 'players';
//default
$('.playerSearchBar').show();
$('.teamSearchBar').hide();
// $.noConflict();

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
// ==================================Params Section Search Page===============================
// $(document).on('click', '.nbaSeason', () => {
//   let currentSeason = $(this).text();
//   let currentSeason = $('.nbaSeason option:selected').text();
//   console.log(currentSeason + "3");
//   $('#seasonInput').text(currentSeason);
// })


//player search click functions
$(document).on('click', '.playerButton', function(){
  $('.playerSearchBar').show();
  $('.teamSearchBar').hide();
  $('.listAdd').empty();
  $('.playerButton').addClass('active');
  $('.teamButton').removeClass('active');
  $('.infoButton').removeClass('disabled');
  playerButton = true;
  checkBoxFilter();
});

$(document).on('click', '.teamButton', function(){
  $('.playerSearchBar').hide();
  $('.teamSearchBar').show();
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
  $(`.${currentShow}Adv`).toggle();
  ($('.searchAdvanced').text() === 'See Advanced') ? $('.searchAdvanced').text('Hide Advanced') : $('.searchAdvanced').text('See Advanced');
});

//function that checks which DB endpoints to use goes here
//slices off 4 letter prefixes and sees what kinds there are
  //can we run 2 endpoints?

const checkBoxFilter = () => {
  $('.searchAdvanced').text('See Advanced');
  $('.allFilter').hide();
  if (playerButton === true) {
    if(info) {
      $('.players').show();
      currentshow = 'players';
    } else if (gameLogs) {
      $('.dailyPlayerGameLogs').show();
      currentshow = 'dailyPlayerGameLogs';
    } else if (seasonLogs) {
      $('.seasonalPlayerStats').show();
      currentshow = 'seasonalPlayerStats';
    }
  }
  if (playerButton === false) {
    if (gameLogs) {
      $('.dailyTeamGameLogs').show();
      currentshow = 'dailyTeamGameLogs';
    } else if (seasonLogs) {
      $('.seasonalTeamStats').show();
      currentshow = 'seasonalTeamStats';
    }
  }
}

checkBoxFilter();

$(document).on('click', '.searchSubmit', () => {
  
  event.preventDefault();
  
  let date = $('#spanDate').val();
  let season = $('#seasonInput').val();
  let position = $('#positionInput').val();
  let roster = $('#rosterStatus').val();
  let checkBox = {};
  $("input:checkbox[name=chk]:checked").each(function () {
    checkBox[$(this).attr("id")] = $(this).attr("value");
  });


  let searchObj = {
    date, season, position, roster, checkBox
  }

  console.log(searchObj);

  $.post('api/search', searchObj, (data) =>{
      console.log("SENT");
    // })
    // .then(redirect => {
      console.log("***********USERTABLEDATA*************")
      console.log(data.userTableData)
      console.log("***********USERCOLUMNCONFIG*************")
      console.log(data.userColumnConfig)
      var table = new Tabulator("#user-tables", {
        // height: 800,
        data: data.userTableData,
        layout: "fitColumns", 
        columns: data.userColumnConfig,
        index: "Player ID"
        // virtualDom: true
        // rowClick:function(e, row){ //trigger an alert message when the row is clicked
        //     alert("Row " + row.getData().id + " Clicked!!!!");
        // },
      });
      // $("#user-tables").append(table);
    // $.post('/user', table, (response) => {
    //   console.log("SENT TO DASHBOARD")
    // });
  // })
})

})

})
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
