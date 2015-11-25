console.log('JS loaded!');

var rootUrl = '/crawls/';

$(document).ready(function () {

  var $crawlDetail = $('#crawl-detail');
  var $mainContent = $('#main-content');


  //compile all templates
  var crawlDetailTemplate = _.template($('#crawlDetailTemplate').html());


  // attach event listeners
  $('.crawl').on('click', showCrawlDetails);






  // view crawl details
  function showCrawlDetails(evt) {
    $mainContent.fadeOut();
    var crawlId = $(evt.target).attr('data-crawl-id');
    $.get(rootUrl + crawlId, function(data) {
      $crawlDetail.html(crawlDetailTemplate({crawl: data[0]}));
      $crawlDetail.fadeIn();
    });
  }
















  // $.get(rootUrl)
  // .success(function(data) {
  //   console.log(data);
  //   _.each(data, function(crawls) {
  //     console.log(crawls);
  //   });
  // });
});
