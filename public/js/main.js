console.log('JS loaded!');

var $mainContent;

var users;


var showCrawl = function(crawlId) {
  // get the clicked crawl's id
  var $showbody = $('#showbody');

  $.get("/crawls/" + crawlId)
    .success(function(crawl) {
      console.log(crawl.creator);

    $.get("/users/" + crawl.creator)
      .success(function(user) {
      console.log(user);

      // template the crawl show page
      var showCrawlTemplate = _.template($('#showTemplate').html());
      var $showHTML = $(showCrawlTemplate({crawl: crawl, user: user}));
      console.log($showHTML);

      // swap out the page's content
      $mainContent.fadeOut(1000, function() {

        $showbody.append($showHTML);
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
      console.log(e.target);
      var crawlId = $(e.target).parent().data('id');
      console.log(crawlId);
      showCrawl(crawlId);
    });
    return $crawlHTML;
  };

  // get all crawls and render on index
  $.get('/crawls', function(crawls) {

    crawls.forEach(function(crawl) {
      var crawlHTML = renderCrawl(crawl);
      $crawlDetail.append(crawlHTML);
    });
  });
});
