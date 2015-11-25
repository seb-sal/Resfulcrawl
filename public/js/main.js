console.log('JS loaded!');

$(document).ready(function () {
  var $mainContent = $('#main-content');
  var $crawlDetail = $('.crawl-detail');

  //compile all templates
  var crawlDetailTemplate = _.template($('#crawlDetailTemplate').html());

  $.get('/crawls', function(crawls) {
    console.log(crawls);

    crawls.forEach(function(crawl) {
      var crawlHTML = crawlDetailTemplate({crawl: crawl});
      $crawlDetail.append(crawlHTML);
      $crawlDetail.append(crawlHTML);
      $crawlDetail.append(crawlHTML);
    });
  });


  // $crawlDetail.html(crawlDetailTemplate({crawl: data[0]}));
  // $crawlDetail.fadeIn();
  // // attach event listeners
  // $('.crawl').on('click', showCrawlDetails);

  // view crawl details
  // function showCrawlDetails(evt) {
    // $mainContent.fadeOut();
    // var crawlId = $(evt.target).attr('data-crawl-id');

  // }

  // $.get(rootUrl)
  // .success(function(data) {
  //   console.log(data);
  //   _.each(data, function(crawls) {
  //     console.log(crawls);
  //   });
  // });
});
