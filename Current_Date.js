/* This is a simple javscript file for the purpose of displaying time on the webpage... */
var _date = new Date();

// Fetching and displaying current date...
var day = _date.getDate();
var month = _date.getMonth();
var year = _date.getFullYear();
var month_full = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEPT","OCT","NOV","DEC"];
var month_new = month_full[month];
document.getElementById('date_here').innerText = "Today's Date: " + day + " - " + month_new + " - " + year;
