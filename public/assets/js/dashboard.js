

// $(document).ready(function() {

document.addEventListener("DOMContentLoaded", function(){
        // Handler when all assets (including images) are loaded
    console.log("I'm alive!")
    let counter = 1;
    $("#user-dashboard span").each(() => {
        // let userDataCheck = '';
        // let userColumnCheck = '';
        
        let userDataCheck = $(`#data${counter}`).text();
        let userColumnCheck = $(`#column${counter}`).text();

        console.log(userDataCheck)
        // console.log(typeof userColumnCheck)
    
        let userTableData;
        let userColumnConfig;
        userTableData = JSON.parse(userDataCheck);
        userColumnConfig = JSON.parse(userColumnCheck);
        
        var table = new Tabulator(`#user-tables${counter}`, {
            data: userTableData,
            layout: "fitColumns", 
            columns: userColumnConfig,
            index: "Player ID"
            // height: 800,
            // virtualDom: true
            // rowClick:function(e, row){ //trigger an alert message when the row is clicked
            //     alert("Row " + row.getData().id + " Clicked!!!!");
            // },
        });
        counter++;
        // console.log(counter);
    })

});

