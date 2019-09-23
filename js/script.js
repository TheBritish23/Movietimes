//business logic for Audience
function Audience() {
  this.Tickets = [],
  this.currentId = 0
}

Audience.prototype.addTickets = function(contact) {
  contact.id = this.assignId();
  this.tickets.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findTickets = function(id) {
  for (var x=0; x < this.Tickets.length; x++) {
    if (this.Tickets[x]) {
      if (this.Tickets[x].id == id) {
        return this.Tickets[x];
      }
    }
  };
  return false;
}

//business logic for Tickets
function tickets(changE, moviE, timE) {
  this.peoplE = peoplE;
  this.moviE = moviE;
  this.timE = timE;
}

// User Interface Logic
var audience = new Audience();

function showAudience(contactId) {
  var movie = auDience.findContact(contactId);
  $("#show-contact").show();
  $(".number-people").html(movie.peoplE);
  $(".film").html(movie.moviE);
  $(".time").html(movie.timE);
  var buttons = $("#buttons");
}

function attachMoviesListeners() {
  $("").on



$(document).ready(function() {
  $("form#showtime").submit(function(event) {
    event.preventDefault()
