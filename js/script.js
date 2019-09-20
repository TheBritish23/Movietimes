//business logic for Audience
function Audience() {
  this.Movies = [],
  this.currentId = 0
}

//business logic for movies
function movies(changE, moviE) {
  this.peoplE = peoplE;
  this.moviE = moviE;
}



// User Interface Logic
function showAudience(contactId) {
  var movie = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".number-people").html(movie.firstName);
  $(".cinema").html(movie.lastName);
  $(".money-change").html(movie.phoneNumber);
}




$(document).ready(function() {
  $("form#showtime").submit(function(event) {
    event.preventDefault()
