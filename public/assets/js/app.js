// =================================player vs team button logic on frontend search ====================================
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


const checkboxMaker = (obj) => {
  for(let key in obj) {
    let newDiv = $(`<div class="col-sm-4">`);
    newDiv.append(`<div class="form-check">
    <input class="form-check-input" type="checkbox" id="${key}" value="${key}">
    <label class="form-check-label" for="inlineCheckbox3">${key}</label>
    </div>`);
    $('.searchChecks').prepend(newDiv);
  }
}

