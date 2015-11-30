console.log('create JS loaded!');

// event listener for clicking on add button
var $parent;
var locations = [];
var index = 0;


$(document).ready(function (){

  $("input.AddVenue").on('click', function(event) {
    $parent = $(event.target.parentNode);

    //finding restaurant image_url, name, address, phone, url for ajax post call
    var restImg = $parent.find('img').attr('src');
    var restName = $parent.find('a').html();
    var restAddress = $parent.find('p').eq(1).html();
    restAddress = restAddress.replace(/<br>\\*/g, ' ');
    var restPhone = $parent.find('p').eq(2).html();
    var restURL = $parent.find('a').attr('href');

    // store in global variable locations
    locations.push({
      name: restName,
      url: restURL,
      address: restAddress,
      phone: restPhone,
      image_url: restImg
    });

    // append to the side bar
    $('#sidebar').append("<div class='crawl-list-index'><img src=" + restImg + "><h4><a href=" + restURL + ">" + restName + "</a></h4><div><span class='input-group-addon' id='basic-addon1'>Start Time</span><input type='time' id ='"+index+"' class='form-control' placeholder='Start Time' aria-describedby='basic-addon1'></div></div>")
    index++;
  });

  //event listener for 'click' on #createCrawl
  $("#createCrawl").on('click', function (event) {
    //prevent page reload
    event.preventDefault();


    // gather user input
    $sidebar = $(event.target.parentNode);
    var date = $sidebar.find('#startDate').val();
    var title = $sidebar.find('#title').val();
    var description = $sidebar.find('#description').val();



    for (var i=0; i < locations.length; i++) {
      var time = $sidebar.find('input#' + i).val();
      locations[i].start = time;

    }
    // ajax post for /crawls/
    $.ajax({
      method: "POST",
      url: "/crawls",
      contentType: "application/json",
      data: JSON.stringify({
        title: title,
        date_of_crawl: date,
        description: description,
        locations: locations
      })
    }).success(function(data){
      showCrawl(data._id);
    });

  })

})

