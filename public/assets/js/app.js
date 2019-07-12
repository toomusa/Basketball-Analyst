
//default
$('.playerSearchBar').show();
$('.teamSearchBar').hide();


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
});

$(document).on('click', '.teamButton', function(){
  $('.playerSearchBar').hide();
  $('.teamSearchBar').show();
  $('.listAdd').empty();
});

//function that checks which DB endpoints to use goes here
//slices off 4 letter prefixes and sees what kinds there are
  //can we run 2 endpoints?


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

  console.log(checkBox);
  // checkBox.forEach(item => {
  //if item matches key in constants.js object
  // take value of constants.key and save as key of user object
  // 
  // });
  
  // let teamString;
  // let playerString;
  // let endpoint;

  let searchObj = {
    date, season, position, roster
  }

  console.log(searchObj);

  $.post('api/search', searchObj, () =>{
    console.log("SENT BBY");
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


let apikey_token = "1895dd8d-e910-476e-a495-9f7980"

$.ajax
({
  type: "GET",
  url: "https://cors-anywhere.herokuapp.com/" + "https://api.mysportsfeeds.com/v2.1/pull/nba/players",
  dataType: 'json',
  async: false,
  headers: {
    "Authorization": `Basic btoa({1895dd8d-e910-476e-a495-9f7980}): MYSPORTSFEEDS`
  },
  data: '{ "comment" }',
  success: function (){
    alert('Thanks for your comment!'); 
  }
});

});