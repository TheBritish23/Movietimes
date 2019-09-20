//business logic for Audience
function Audience() {
  this.Tickets = [],
  this.currentId = 0
}

Audience.prototype.addTickets = function(contact) {
  contact.id = this.assignId();
  this.tickets.push(contact);
}

//business logic for Tickets
function tickets(changE, moviE, timE) {
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

function attachMoviesListeners() {
  $("").on



$(document).ready(function() {
  $("form#showtime").submit(function(event) {
    event.preventDefault()
