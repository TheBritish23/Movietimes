//business logic for Audience
function Audience() {
  this.Tickets = [],
  this.currentId = 0
}

//Audience.prototype.addTickets = function(Tickets) {
  //tickets.id = this.assignId();
  //this.tickets.push(tickets);
//}

Audience.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Audience.prototype.findTickets = function(id) {
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
function Tickets(peoplE, moviE, timE) {
  this.peoplE = peoplE;
  this.moviE = moviE;
  this.timE = timE;
}

Tickets.prototype.fullName = function() {
  return this.peoplE + " " + this.timE;
}

Tickets.prototype.pricetag = function() {
  console.log(this.peoplE);
  return parseInt(this.peoplE) * 13.35;
}

// User Interface Logic
var audience = new Audience();

function displayTicketsDetails(audienceToDisplay) {
  var ticketsList = $("ul#tickets");
  var htmlForticketsInfo = "";
  addressBookToDisplay.tickets.forEach(function(contact) {
    htmlForTicketsInfo += "<li id=" + tickets.id + ">" + tickets.peoplE + " " + tickets.filM + " " + tickets.timE + "</li>";
  });
  ticketsList.html(htmlForTicketsInfo);
};

function showAudience(audienceId) {
  var movie = auDience.findContact(audienceId);
  $("#show-contact").show();
  $(".number-people").html(movie.peoplE);
  $(".film").html(movie.moviE);
  $(".time").html(movie.timE);
  var buttons = $("#buttons");
}

$(document).ready(function() {
  $("form#showtime").submit(function(event) {
    event.preventDefault()
    var inputtedNumberPeople = $("input#peoplE").val();
    var inputtedfilm = $("input#filM").val();
    var inputtedtime = $("input#timE").val();
    $("input#peoplE").val("");
    $("input#filM").val("");
    $("input#timE").val("");
    var newTickets = new Tickets(inputtedNumberPeople, inputtedfilM, inputtedtimE);
    var ticketPrice = newTickets.pricetag()
    console.log(ticketPrice);
    //audience.addTickets(newTickets);
    //displayTicketDetails(audience);
  })
 })
