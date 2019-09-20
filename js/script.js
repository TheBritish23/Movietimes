//business logic for Audience
function Audience() {
  this.Movies = [],
  this.currentId = 0
}

Audience.prototype.addMovies = function(contact) {
  contact.id = this.assignId();
  this.movies.push(contact);
}

//business logic for Movies
function movies(changE, moviE, timE) {
  this.peoplE = peoplE;
  this.moviE = moviE;
  this.timE = timE;
}




// User Interface Logic
function showAudience(contactId) {
  var movie = auDience.findContact(contactId);
  $("#show-contact").show();
  $(".number-people").html(movie.peoplE);
  $(".cinema").html(movie.moviE);
  $(".time").html(movie.timE);
}




$(document).ready(function() {
  $("form#showtime").submit(function(event) {
    event.preventDefault()
