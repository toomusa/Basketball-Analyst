
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