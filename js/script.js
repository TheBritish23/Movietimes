//business logic for Audience
function Audience() {
  this.Tickets = [],
  this.currentId = 0
}

Audience.prototype.addTickets = function(Tickets) {
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

function showAudience(audienceId) {
  var movie = auDience.findContact(audienceId);
  $("#show-contact").show();
  $(".number-people").html(movie.peoplE);
  $(".film").html(movie.moviE);
  $(".time").html(movie.timE);
  var buttons = $("#buttons");
}

function attachMoviesListeners() {
  $("").on



$(document).ready(function() {
  attachContactListeners();
  $("form#showtime").submit(function(event) {
    event.preventDefault()
    var inputtedNumberPeople = $("input#new-peoplE").val();
    var inputtedfilm = $("input#new-moviE").val();
    var inputtedtime = $("input#new-timE").val();
    $("input#new-peoplE").val("");
    $("input#new-moviE").val("");
    $("input#new-timE").val("")
  })
})
