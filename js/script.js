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
function movies(changE, moviE) {
  this.peoplE = peoplE;
  this.moviE = moviE;
}




// User Interface Logic
function showAudience(contactId) {
  var movie = auDience.findContact(contactId);
  $("#show-contact").show();
  $(".number-people").html(movie.firstName);
  $(".cinema").html(movie.lastName);
  $(".money-change").html(movie.phoneNumber);
}




$(document).ready(function() {
  $("form#showtime").submit(function(event) {
    event.preventDefault()
