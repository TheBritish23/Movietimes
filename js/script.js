//business logic for Audience
function Audience() {
  this.Movies = [],
  this.currentId = 0
}


//business logic for Movies

// User Interface Logic
$(document).ready(function() {
  $("form#showtime").submit(function(event) {
    event.preventDefault()
