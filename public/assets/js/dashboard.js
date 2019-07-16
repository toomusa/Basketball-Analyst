

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
        console.log(userColumnCheck)
    
        let userTableData;
        let userColumnConfig;
        userTableData = JSON.parse(userDataCheck);
        userColumnConfig = JSON.parse(userColumnCheck);
        
        var table = new Tabulator(`#user-tables${counter}`, {
            data: userTableData,
            layout: "fitColumns", 
            columns: userColumnConfig,
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
        counter++;
        // console.log(counter);
    })

});

