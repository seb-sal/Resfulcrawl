console.log('show JS loaded!');

var deleteCrawl = function (deleteId) {
    $.ajax({
      method: "DELETE",
      url: "/crawls/" + deleteId
    }).success(function (data) {
      // window.location.href = "http://localhost:3000";
    });
};

var addRsvp = function(crawlId, userId) {
  $.ajax({
    type: 'POST',
    url: "/crawls/" + crawlId,
    data: { member: userId }
  }).success(function(data){
    console.log(data);
  });
  showCrawl(crawlId);
}
