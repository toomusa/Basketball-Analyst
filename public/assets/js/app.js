
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

