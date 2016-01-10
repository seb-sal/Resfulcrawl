console.log('JS loaded!');

var $mainContent;
var map;
var addresses=[];
var $currentUser = $('.nav-bar-welcome').attr('data-id');
var rsvp = true;

// update individual crawl in the show page
var editTimeUpdate = function(crawlId, edits) {
  $.ajax({
      type: 'PUT',
      url: "/crawls/" + crawlId,
      data: edits
    }).success(function(data) {
      console.log(data);
    });
}

var showCrawl = function(crawlId) {

  // get the clicked crawl's id
  var $showbody = $('#showbody');

  $.get("/crawls/" + crawlId)
    .success(function(crawl) {

    $.get("/users")
      .success(function(users) {
      // template the crawl show page
        var showCrawlTemplate = _.template($('#showTemplate').html());

        var $showHTML = $(showCrawlTemplate({crawl: crawl, current: $currentUser, users: users}));

        crawl.locations.forEach(function (e) {
          if (rsvp) addresses.push(e.address);
        });

      // swap out the page's content
        $mainContent.fadeOut(1000, function() {

          $showbody.html($showHTML);

          $('#rsvp').on('click', function(){
            rsvp = false;
            addRsvp(crawlId, $currentUser);
          });

          // click event for edit button on show page to append edit fields
          $('#editCrawl').on('click', function() {
            $('#edit-fields').append("<p>Title: <input id='reEditTitle' type='text' class='form-control' placeholder='Title' aria-describedby='basic-addon1'></p>");
            $('#edit-fields').append("<p>Date: <input id='reEditDate' type='date' class='form-control' placeholder='Date' aria-describedby='basic-addon1'></p>");
            $('#edit-fields').append("<p>Description: <input id='reEditDescription' type='textarea' class='form-control' placeholder='Description' aria-describedby='basic-addon1'></p>");
            $('#edit-fields').append("<button id='reEditbutton' type='button'>Update</button>");

            // click event for update button on show page to make ajax call to update crawl
            $('#reEditbutton').on('click', function(event) {
              event.preventDefault();
              var title = $('#reEditTitle').val();
              var date = $('#reEditDate').val();
              var description = $('#reEditDescription').val();

              var editTime = {
                title: title,
                description: description,
                date_of_crawl: date
              };
              editTimeUpdate(crawlId, editTime);
              location.reload(true);
            });

          }); //editCrawl

          $('.delete-button').on('click', function(event) {
            console.log(crawlId);
            deleteCrawl(crawlId);
            $mainContent.fadeIn(1000);
            location.reload(true);
          })

          $showbody.fadeIn(1000, function(){});

        });

      });
  });

};

$(document).ready(function () {
  $mainContent = $('#main-content');
  var $crawlDetail = $('.crawl-detail');

  // compile all templates
  var crawlDetailTemplate = _.template($('#crawlDetailTemplate').html());



  // render a crawl by templating it and adding a click event
  var renderCrawl = function(crawl) {
    var $crawlHTML = $(crawlDetailTemplate({crawl: crawl}));
    $crawlHTML.on('click', function(e) {
      var crawlId = $(e.target).parent().data('id');
      showCrawl(crawlId);
    });
    return $crawlHTML;
  };

  // get all crawls and render on index
  $.get('/crawls', function(crawls) {

    crawls.forEach(function(crawl) {
      var crawlHTML = renderCrawl(crawl);
      $crawlDetail.append(crawlHTML);
      $crawlDetail.prepend(crawlHTML);

    });
  });

});  // document ready


// function makes ajax call to acquire lat, lng by addresses, then place markers for all addresses, then extend map bound to include all markers
function initMap() {
    //Marker labeling implmentation
  map = null;
  var labels = '123456789';
  var labelIndex = 0;

  var bounds = new google.maps.LatLngBounds();
  //ajax call to google api for geocoding

  for (var x = 0; x < addresses.length; x++) {
    $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
      var p = data.results[0].geometry.location;
      var latlng = new google.maps.LatLng(p.lat, p.lng);

      var myOptions = {
          zoom: 8,
          tilt: 45,
          center: data.results[0].geometry.location,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      //initialize map if map is null
      if (!map) map = new google.maps.Map(document.getElementById("map"), myOptions);
      var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        animation: google.maps.Animation.DROP,
        label: labels[labelIndex++ % labels.length]
      });
      //extend the bounds to include each marker's position
      bounds.extend(marker.position);
      //now fit the map to the newly inclusive bounds
      map.fitBounds(bounds);
    }); //getJSON
  } //for loop

}

