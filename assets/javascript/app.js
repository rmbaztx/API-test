// Test JavaScript to retrieve information from EventBrite for Group Project 1

$(document).ready(function() {
    /*Anonymous access OAuth token*/
          var token = 'HSWK3PC2CD32NTS3PILZ';
          //org id new city
      //avail here: 
   //http://rol.roundys.com/Applications/WebsiteEventCalendars/Technical%20Documents/EventbriteAccountDetails.xlsx
          var organizer = '8552566805';
          var $events = $("#events");
          $events.html("<i>Loading events, please stand by...</i>");
      $.get('https://www.eventbriteapi.com/v3/events/search/?token='+token+'&expand=venue', function(res) {
              if(res.events.length) {
                  var s = "";
                  for(var i=0;i<res.events.length;i++) {
                      var event = res.events[i];
                      var eventTime = moment(event.start.local).format('M/D/YYYY h:mm A');
                      console.dir(event);
                      s += "<div class='eventList'>";
                      s += "<h2><a href='" + event.url + "'>" + event.name.text + "</a></h2>";
                      s += "<p><b>Location: " + event.venue.address.address_1 + "</b><br/>";
                      s += "<b>Date/Time: " + eventTime + "</b></p>";
                      
                      s += "<p>" + event.description.text + "</p>";
                      s += "</div>";
                  }
                  $events.html(s);
              } else {
                  $events.html("<p>Sorry, there are no upcoming events.</p>");
              }
          });
      });