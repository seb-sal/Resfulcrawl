console.log('create JS loaded!');

// event listener for clicking on add button
var $parent;
var locations = [];



$(document).ready(function (){

  $("input.AddVenue").on('click', function(event) {
    console.log(event.target);
    $parent = $(event.target.parentNode);

    //finding restaurant image_url, name, address, phone, url for ajax post call
    var restImg = $parent.find('img').attr('src');
    var restName = $parent.find('a').html();
    var restAddress = $parent.find('p').eq(1).html();
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

var showListTemplate = _.template($('#listTemplate').html());
console.log(showListTemplate);
var $listHTML = $(showListTemplate({list: locations}));
console.log($listHTML);



    //append to #sidebar from template crawlShow.html
  });
})



// $(document).ready(function () {
//   $mainContent = $('#main-content');
//   var $crawlDetail = $('.crawl-detail');

//   // compile all templates

//   var crawlDetailTemplate = _.template($('#crawlDetailTemplate').html());

//   // render a crawl by templating it and adding a click event
//   var renderCrawl = function(crawl) {
//     var $crawlHTML = $(crawlDetailTemplate({crawl: crawl}));
//     $crawlHTML.on('click', showCrawl);
//     return $crawlHTML;
//   };

//   // get all crawls and render on index
//   $.get('/crawls', function(crawls) {
//     console.log(crawls);

//     crawls.forEach(function(crawl) {
//       var crawlHTML = renderCrawl(crawl);
//       $crawlDetail.append(crawlHTML);
//     });
//   });
// });

// var listCrawl = function(e) {
//   // get the clicked crawl's id
//   var crawlId = $(e.target).data('id');
//   var $showbody = $('#showbody');
//   // get the crawl's JSON
//   $.get("/crawls/" + crawlId)
//     .success(function(data) {
//       console.log(data);
//       // template the crawl show page
//       var showCrawlTemplate = _.template($('#showTemplate').html());
//       var $showHTML = $(showCrawlTemplate({crawl: data}));
//       console.log($showHTML);

//       // swap out the page's content
//       $mainContent.fadeOut(1000, function() {
//         $showbody.append($showHTML);
//         $showbody.fadeIn(1000, function(){});
//       });
//     });
// };

// var $mainContent;

// var showCrawl = function(e) {
//   // get the clicked crawl's id
//   var crawlId = $(e.target).data('id');
//   var $showbody = $('#showbody');
//   // get the crawl's JSON
//   $.get("/crawls/" + crawlId)
//     .success(function(data) {
//       console.log(data);
//       // template the crawl show page
//       var showCrawlTemplate = _.template($('#showTemplate').html());
//       var $showHTML = $(showCrawlTemplate({crawl: data}));
//       console.log($showHTML);

//       // swap out the page's content
//       $mainContent.fadeOut(1000, function() {
//         $showbody.append($showHTML);
//         $showbody.fadeIn(1000, function(){});
//       });
//     });
// };

// $(document).ready(function () {
//   $mainContent = $('#main-content');
//   var $crawlDetail = $('.crawl-detail');

//   // compile all templates

//   var crawlDetailTemplate = _.template($('#crawlDetailTemplate').html());

//   // render a crawl by templating it and adding a click event
//   var renderCrawl = function(crawl) {
//     var $crawlHTML = $(crawlDetailTemplate({crawl: crawl}));
//     $crawlHTML.on('click', showCrawl);
//     return $crawlHTML;
//   };

//   // get all crawls and render on index
//   $.get('/crawls', function(crawls) {
//     console.log(crawls);

//     crawls.forEach(function(crawl) {
//       var crawlHTML = renderCrawl(crawl);
//       $crawlDetail.append(crawlHTML);
//     });
//   });
// });
