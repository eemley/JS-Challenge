// from data.js
var tableData = data;

// YOUR CODE HERE!
function refreshPage(){
    location.reload();
}

var tbody = d3.select("tbody");  

data.forEach(function(ufoData) { 
    console.log(ufoData);

    var row = tbody.append("tr"); 

    Object.entries(ufoData).forEach(function([key, value]) { 
      console.log(key, value);

      var cell = row.append("td");

      cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function() {


    var table = document.getElementById("ufo-table");
    for(var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    var inputDate = d3.select("#datetime");

    var propDate = inputDate.property("value");

    console.log(propDate);
    console.log(tableData);

    var filterData = tableData.filter(event => event.datetime === propDate);

    console.log(filterData);
    

    filterData.forEach(function(ufoData) { 
        console.log(ufoData);
        var row = tbody.append("tr");

        Object.entries(ufoData).forEach(function([key, value]) { 
            console.log(key, value);

            var cell = row.append("td");

            cell.text(value);
        });
    });
});

