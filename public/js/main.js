console.log('JS loaded!');

var rootUrl = '/crawls';

$(document).ready(function () {
  $.get(rootUrl)
  .success(function(data) {
    _.each(data, function(crawls) {
      console.log(crawls);
    });
  });
});
