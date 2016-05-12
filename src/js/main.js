var Components = require('./components/components'),
    Static = require('./static/static'),
    Pages = require('./pages/pages');

//1
//document.addEventListener("DOMContentLoaded", function(event) {
//    Main();
//});

//2
//$(document).ready(function() {
//    Main();
//});

//3
Main();

function Main() {
    Components();
    Static();
    Pages();
}