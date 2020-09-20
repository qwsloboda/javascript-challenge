// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#button");
var form = d3.select("#form");
button.on("click", runEnter);
form.on("submit",runEnter);

console.log(data);

data.forEach(function(ufoReport) {
    console.log(ufoReport)
});

data.forEach(function(ufoReport) {
       console.log(ufoReport);
       var row = tbody.append("tr");
     });
    
data.forEach(function(ufoReport) {
   console.log(ufoReport);
   var row = tbody.append("tr");

   Object.entries(ufoReport).forEach(function([key, value]) {
     console.log(key, value);
   });
});

data.forEach(function(ufoReport) {
   console.log(ufoReport);
   var row = tbody.append("tr");

   Object.entries(ufoReport).forEach(function([key, value]) {
     console.log(key, value);

     var cell = row.append("td");
   });
});

data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
